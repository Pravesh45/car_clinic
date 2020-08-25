const helper = require('../database/db')
const config = require('../config/dbconfig')
const auth = require('../middleware/auth')
const express = require('express')
const route = new express.Router()

route.get('/service', async (req, res) => {
    const db = helper.database(config)
    try {
        await helper.withTransaction(db, async () => {
            const result = await db.query('select * from Service_Replacement')
            res.send(result)
        })
    }
    catch (e) {
        res.json({ message: e })
    }
})

route.post('/cart/totalitems', auth, async (req, res) => {
    var general = false
    var wash = false
    var paint = false
    const db = helper.database(config)
    try {
        await helper.withTransaction(db, async () => {
            const result1 = await db.query('select * from Cart where Customer_ID=' + req.user[0].Customer_ID)
            if (result1.length != 0) {
                for (i = 0; i < result1.length; i++) {
                    if (result1[i].Service_ID == 11)
                        general = true
                    if (result1[i].Service_ID == 25)
                        wash = true
                    if (result1[i].Service_ID == 24)
                        paint = true
                }
            }
            res.send({ "length": result1.length, "general": general, "wash": wash, "paint": paint })
        })
    }
    catch (e) {
        console.log(e)
    }
})

route.post('/AddToCart/:ServiceID', auth, async (req, res) => {
    var general = false
    var wash = false
    var paint = false
    const id = req.params.ServiceID
    const db = helper.database(config)
    try {
        await helper.withTransaction(db, async () => {
            const result1 = await db.query('select * from Service_Replacement where Service_ID=' + id)
            const result2 = await db.query('select * from Cart where Service_ID=' + id)
            if (result2.length == 0) {
                var data = {
                    Customer_ID: req.user[0].Customer_ID,
                    Service_ID: id,
                    Total_Price: result1[0].Cost
                }
                await db.query('insert into Cart set ?', data)
                const result3 = await db.query('select * from Cart where Customer_ID=' + req.user[0].Customer_ID)
                for (i = 0; i < result3.length; i++) {
                    if (result3[i].Service_ID == 11) {
                        general = true
                    }
                    if (result3[i].Service_ID == 24) {
                        paint = true
                    }
                    if (result3[i].Service_ID == 25) {
                        wash = true
                    }
                }
                res.status(201).send({ "message": "Item inserted into cart", "length": result3.length, "general": general, "paint": paint, "wash": wash })
            }
            else {
                const Qty = result2[0].Qty + 1
                await db.query('update Cart set Qty=' + Qty + ' where Service_ID=' + id)
                const result3 = await db.query('select * from Cart where Service_ID=' + id)
                await db.query('update Cart set Total_Price=' + result1[0].Cost * result3[0].Qty + ' where Service_ID=' + id)
                res.send({ "message": "Item is updated" })
            }
        })
    }
    catch (e) {
        res.json({ message: e })
    }
})


route.post('/cart/items', auth, async (req, res) => {
    const db = helper.database(config)
    try {
        await helper.withTransaction(db, async () => {
            const result1 = await db.query('select Name,Total_Price,Qty,Image,Service_ID from Cart natural join Service_Replacement where Customer_ID=' + req.user[0].Customer_ID)
            const result2 = await db.query('select sum(Total_Price) as Cart_Total from (select Name,Total_Price,Qty,Image from Cart natural join Service_Replacement where Customer_ID=' + req.user[0].Customer_ID + ') as a')
            res.send({ "result": result1, "Cart_Total": result2[0].Cart_Total })
        })
    }
    catch (e) {
        console.log(e)
    }
})

route.delete('/cart/item/del/:Service_ID', auth, async (req, res) => {
    var id = req.params.Service_ID
    var db = helper.database(config)
    try {
        await helper.withTransaction(db, async () => {
            await db.query('delete from Cart where Service_ID=' + id)
            res.send({ "message": "Item successfully deleted from cart" })
        })
    }
    catch (e) {
        res.status(500).send({ "message": e })
    }
})

route.post('/cart/checkout', auth, async (req, res) => {

})

module.exports = route