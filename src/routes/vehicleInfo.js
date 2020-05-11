const helper=require('../database/db')
const config=require('../config/dbconfig')
const auth=require('../middleware/auth')
const express=require('express')
const route=new express.Router()
const {vehicleRegMail}=require('../emails/account')
const {vehicleDelMail}=require('../emails/account')
const multer=require('multer')
const sharp=require('sharp')
var path=require('path')

var storage=multer.diskStorage({
    destination:"./public/img/",
    filename:function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
      }
})
var upload=multer({
    limits:{
        fileSize: 3000000
     },
     storage:storage,
     fileFilter(req,file,cb){
         if(!file.originalname.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/))
         {
             return cb(new Error('Please upload file in jpeg,jpg or png format'))
         }
         cb(undefined,true)
     },
})


route.post('/vehicle/info/register',upload.single('inpFile'),auth,async(req,res)=>{
    const vehicle=req.body
    data={
        VIN:vehicle.vin,
        Manufacturer:vehicle.manu,
        Colour:vehicle.color,
        Car_Reg_No:vehicle.reg,
        Model:vehicle.model,
        Customer_ID:req.user[0].Customer_ID,
        Name:vehicle.name
    }
    if(req.file)
    {
        data.Image="/img/"+req.file.filename
    }
    const db=helper.database(config)
    try{

        await helper.withTransaction(db,async()=>{
            const veh=await db.query('select * from Vehicle_Info where VIN="'+vehicle.vin+'"')
            if(veh.length==0)
            {
                const regres=await db.query('select * from Vehicle_Info where Car_Reg_No="'+vehicle.reg+'"')
                if(regres.length==0)
                {
            await db.query('insert into Vehicle_Info set ?',data)
            const result1=await db.query('select * from Customer natural join Vehicle_Info where VIN="'+vehicle.vin+'"')
            vehicleRegMail(result1[0].Name,result1[0].Email_ID,result1[0].First_Name,result1[0].VIN,result1[0].Manufacturer,result1[0].Colour,result1[0].Car_Reg_No)
            res.status(201).json({message:"Vehicle Succesfully Added"})
                }
                else
                {
                    return res.json({message:"Vehicle with Registration Number "+vehicle.reg+" is registered with us"})
                }
            }
            else
            {
                res.status(400).json({message:"Vehicle with the VIN "+vehicle.vin+" is already added"})
            }
        })
    }
    catch(e)
    {
        console.log(e)
    }
})

route.delete('/vehicle/info/del/:VIN',auth,async(req,res)=>{
    const vehicle=req.body
    const vin=req.params.VIN
    const db=helper.database(config)
    try
    {
        await helper.withTransaction(db,async()=>{
            const result=await db.query('select * from Vehicle_Info natural join Customer where VIN='+vin)
            await db.query('delete from Vehicle_Info where VIN='+vin)
            vehicleDelMail(result[0].Name,result[0].Email_ID,result[0].First_Name,result[0].VIN,result[0].Manufacturer,result[0].Colour,result[0].Car_Reg_No)
            res.json({message:"Vehicle Info Successfully deleted"})
        })
    }
    catch(e)
    {
      res.json({error:e})
    }
})

route.post('/vehicle/info/dis',auth,async(req,res)=>{
    const db=helper.database(config)
    try
    {
        await helper.withTransaction(db,async()=>{
            const result=await db.query('select * from Vehicle_Info where Customer_ID='+req.user[0].Customer_ID)
            res.json({result:result})
        })
    }
    catch(e)
    {
      res.json({message:e})
    }
})
route.post('/totalvehicle',auth,async(req,res)=>{
    const db=helper.database(config)
    try
    {
        await helper.withTransaction(db,async()=>{
            const result=await db.query('select count(*) as Total from Vehicle_Info where Customer_ID='+req.user[0].Customer_ID)
            if(result[0].Total==0)
            {
                res.json({length:"0"})
            }
            else
            res.json({length:result[0].Total})
        })
    }
    catch(e)
    {
        console.log(e)
    }
})
module.exports=route
