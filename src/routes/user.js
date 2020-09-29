const express = require('express')
const config = require('../config/dbconfig')
const helper = require('../database/db')
const validator = require('email-validator')
const bcrypt = require('bcrypt')
const AuthToken = require('../Authentication/auth')
const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')
const { welcomeMail } = require('../emails/account')
const { generateOTP } = require('../OTP/otp')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const passwordValidator = require('password-validator')

const router = new express.Router()
const schema = new passwordValidator();
schema.has().uppercase().has().digits().has().symbols()
const upload = multer({
    limits: {
        fileSize: 3000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
            return cb(new Error('Please upload file in jpeg,jpg or png format'))
        }
        cb(undefined, true)
    },
})

router.post('/user/register', [check('password').isLength({ min: 8 })], (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(442).json({ message: "Password should be atleast 8 characters in length" })
    }
    const user = req.body
    async function main() {
        if (user.password != user.confirm)
            res.json({ message: "Passwords don't match" })
        else {
            if (schema.validate(user.password)) {
                const db = helper.database(config)
                try {
                    const password = await bcrypt.hash(user.password, 8)
                    var values = [[user.first_name, user.last_name, user.address, user.Mob_No, user.email, password]]
                    await helper.withTransaction(db, async () => {
                        const result1 = await db.query("select * from Customer where Mob_No=?", user.Mob_No)
                        if (result1.length == 0) {
                            const result2 = await db.query("insert into Customer(First_Name,Last_Name,Address,Mob_No,Email_ID,Password)      values ?", [values])
                            const result3 = await db.query("select * from Customer where Mob_No=?", user.Mob_No)
                            const token = jwt.sign({ _id: result3[0].Customer_ID.toString() }, 'rock', { expiresIn: "1d" })
                            welcomeMail(result3[0].Email_ID, result3[0].First_Name, token)
                            delete result3[0].Password
                            res.status(201).json({ message: "You have successfully registered" })
                        }
                        else {
                            res.json({ message: "User with Mob_No" + user.Mob_No + "already exists" })
                        }
                    })
                }
                catch (err) {
                    console.log(err)
                }
            }
            else {
                return res.json({ message: "Password should contain Uppercase characters,digits and special characters" })
            }
        }
    }
    if (validator.validate(user.email))
        main()
    else {
        res.status(400)
        res.send({ "message": "Invalid Email Address" })
    }
})

router.get('/user/verify/:token', async (req, res) => {
    try {
        const decode = jwt.verify(req.params.token, 'rock')
        const db = helper.database(config)
        await helper.withTransaction(db, async () => {
            data = {
                verified: true,
                token: req.params.token
            }
            await db.query('update Customer set ? where Customer_ID=' + decode._id, data)
            res.redirect('http://localhost:3000/login')
        })
    } catch (e) {
        res.send({ "message": e })
    }

})

router.post('/user/login', (req, res) => {
    const db = helper.database(config)
    const user = req.body
    main = async () => {
        try {
            await helper.withTransaction(db, async () => {
                var res1 = await db.query('select * from Customer where Email_ID=?', user.email)
                if (res1.length == 0) {
                    res.status(400).send({ "message": "Account not register" })
                }
                else
                    if (!res1[0].verified) {
                        res.status(400).send({ "message": "Account not verified.Please check your mail and verify" })
                    }
                    else {
                        const check = await bcrypt.compare(user.password, res1[0].Password)
                        if (check) {
                            const token = AuthToken(res1[0].Customer_ID)
                            await db.query('update Customer set token="' + token + '" where Customer_ID=' + res1[0].Customer_ID)
                            res1 = await db.query('select * from customer_login where Customer_ID=?', res1[0].Customer_ID)
                            res.send(res1[0])
                        }
                        else
                            res.status(401).send({ "message": "Email or Password is Incorrect.Please try again..." })
                    }
            })
        } catch (err) {
            // res.status(500).send({"message":err})
            console.log(err)
        }
    }
    main()
})

router.post('/user/logout', auth, async (req, res) => {
    const db = helper.database(config)
    try {
        await helper.withTransaction(db, async () => {
            await db.query('update Customer set token=NULL where Customer_ID=' + req.user[0].Customer_ID)
        })
        res.send({ "message": "You have been logged out" })
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post("/user/me", auth, (req, res) => {
    delete req.user[0].Password
    const db = helper.database(config)
    try {
        helper.withTransaction(db, async () => {
            const result = await db.query('select * from User_Image where Customer_ID=' + req.user[0].Customer_ID)
            res.json({ result1: result, result2: req.user[0] })
        })
    }
    catch (e) {
        res.json({ message: e })
    }
})

router.patch('/user/me/update', auth, async (req, res) => {
    var user1 = req.body
    const db = helper.database(config)
    try {
        await helper.withTransaction(db, async () => {
            if (user1.first_name)
                await db.query('update Customer set First_Name="' + user1.first_name + '" where Customer_ID=' + req.user[0].Customer_ID)
            if (user1.last_name)
                await db.query('update Customer set Last_Name="' + user1.last_name + '" where Customer_ID=' + req.user[0].Customer_ID)
            if (user1.mob) {
                const res1 = await db.query('select * from Customer where Mob_No=' + user1.mob)
                if (res1.length != 0) {
                    return res.json({ message: "Mobile Number" + user1.mob + " is already registered" })
                }
                else
                    await db.query('update Customer set Mob_No=' + user1.mob + ' where Customer_ID=' + req.user[0].Customer_ID)
            }
            if (user1.address)
                await db.query('update Customer set Address="' + user1.address + '" where Customer_ID=' + req.user[0].Customer_ID)
            if (user1.password) {
                if (user1.password != user1.confirm) {
                    return res.json({ message: "Passwords don't match" })
                }
                else {
                    if (schema.validate(user1.password)) {
                        const password = await bcrypt.hash(user1.password, 8)
                        await db.query('update Customer set Password="' + password + '" where Customer_ID=' + req.user[0].Customer_ID)
                    }
                    else {
                        return res.json({ message: "Password should contain Uppercase characters,digits and special characters" })
                    }
                }
            }
            res.json({ message: "User Profile Updated Successfully" })
        })
    }
    catch (err) {
        console.log(err)
        res.status(404).send()
    }
})
router.patch('/user/password/update', [check('password').isLength({ min: 8 })], async (req, res) => {
    var user1 = req.body
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(442).json({ message: "Password should be atleast 8 characters in length" })
    }
    const db = helper.database(config)
    try {
        await helper.withTransaction(db, async () => {
            if (user1.password != user1.confirm) {
                return res.json({ message: "Passwords don't match" })
            }
            else {
                if (schema.validate(user1.password)) {
                    const password = await bcrypt.hash(user1.password, 8)
                    await db.query('update Customer set Password="' + password + '" where Mob_No=' + user1.mob)
                }
                else {
                    return res.json({ message: "Password should contain Uppercase characters,digits and special characters" })
                }
            }
            res.json({ message: "User Password Updated Successfully" })
        })
    }
    catch (err) {
        console.log(err)
        res.status(404).send()
    }
})

router.delete('/user/me/del', auth, (req, res) => {
    const db = helper.database(config)
    main = async () => {
        try {
            await helper.withTransaction(db, async () => {
                if (req.user.length != 0) {
                    await db.query('delete from User_Image where Customer_ID=' + req.user[0].Customer_ID)
                    await db.query('delete from User_Mail where Customer_ID=' + req.user[0].Customer_ID)
                    await db.query('delete from Vehicle_Info where Customer_ID=' + req.user[0].Customer_ID)
                    await db.query('delete from Order_Info where Customer_ID=' + req.user[0].Customer_ID)
                    await db.query('delete from Cart where Customer_ID=' + req.user[0].Customer_ID)
                    await db.query('delete from Customer where Customer_ID=' + req.user[0].Customer_ID)
                    res.send({ "message": "Account Deleted" })
                }
                else {
                    throw new Error
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    main()
})

router.post('/user/me/avatar/upload', upload.single('avatar'), auth, async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ height: 330, width: 250 }).png().toBuffer()
    img_file = {
        Customer_ID: req.user[0].Customer_ID,
        Name: buffer,
        Type: req.file.mimetype,
        Size: req.file.size
    }
    if (!req.file) {
        return res.json({ message: "No file is uploaded" })
    }
    else {
        try {
            const db = helper.database(config)
            await helper.withTransaction(db, async () => {
                const res1 = await db.query('select * from User_Image where Customer_ID=' + req.user[0].Customer_ID)
                if (res1.length == 0) {
                    if (req.user.length != 0) {
                        await db.query('insert into User_Image set ?', img_file)
                        return res.json({ message: "Image uploaded" })
                    }
                    else
                        throw new Error
                }
                else {
                    if (req.user.length != 0) {
                        await db.query('update User_Image set ?', img_file)
                        return res.json({ message: "Image Updated Successfully" })
                    }
                    else
                        throw new Error
                }
            })
        } catch (err) {
            res.status(404).send()
        }
    }
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.delete('/user/me/avatar/del', auth, async (req, res) => {
    try {
        const db = helper.database(config)
        await helper.withTransaction(db, async () => {
            const res1 = await db.query('select * from User_Image where Customer_ID=' + req.user[0].Customer_ID)
            if (res1.length != 0) {
                await db.query('delete from User_Image where Customer_ID=' + req.user[0].Customer_ID)
                res.json({ message: "Profile picture Successfully deleted" })
            }
            else
                return res.json({ message: "No Image uploaded to delete" })
        })
    } catch (err) {
        res.status(500).send({ "error": err })
    }
})

router.get('/user/me/avatar/:id', async (req, res) => {
    const id = req.params.id
    try {
        const db = helper.database(config)
        await helper.withTransaction(db, async () => {
            const res1 = await db.query('select * from User_Image where Customer_ID=' + id)
            if (res1[0].Name == null) {
                res.status(400).json({ message: "User has no image uploaded" })
            }
            else {
                res.set('Content-Type', 'image/png')
                res.send(res1[0].Name)
            }
        })
    } catch (err) {
        console.log(err)
    }

})
router.post('/reset/password', async (req, res) => {
    const user = req.body
    const db = helper.database(config)
    try {
        await helper.withTransaction(db, async () => {
            const result = await db.query('select * from Customer where Mob_No=' + user.mob)
            if (result.length == 0) {
                return res.json({ message: "Mobile number " + user.mob + " not registered with us.Please try another number" })
            }
            await db.query('update Customer set OTP=' + user.OTP + ' where Mob_No=' + user.mob)
            await generateOTP(user.mob, user.OTP)
            res.json({ message: "OTP sent successfully" })
        })
    }
    catch (e) {
        console.log(e)
    }
})
router.post('/otp/verify', async (req, res) => {
    const user = req.body
    const db = helper.database(config)
    try {
        await helper.withTransaction(db, async () => {
            const result = await db.query('select * from Customer where Mob_No=' + user.mob)
            if (user.otp == result[0].OTP) {
                return res.json({ message: "OTP verified" })
            }
            else {
                return res.json({ message: "OTP is incorrect" })
            }
        })
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router

