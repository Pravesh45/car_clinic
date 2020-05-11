const helper=require('../database/db')
const config=require('../config/dbconfig')
const auth=require('../middleware/auth')
const express=require('express')
const {orderMail}=require('../emails/account')
const paypal=require('paypal-rest-sdk')
const route=new express.Router()

route.post('/myorders',auth,async(req,res)=>{
    const db=helper.database(config)
    try
    {
        await helper.withTransaction(db,async()=>{
            const result=await db.query('select * from Order_Info natural join Service_Replacement where Customer_ID='+req.user[0].Customer_ID)
            res.json({result:result})
        })
    }
    catch(e)
    {
        res.json({message:e})
    }
})
route.post('/order',auth,async(req,res)=>{
    const db=helper.database(config)
    try
    {   var date=new Date()
        date.setDate(date.getDate()+1)
        var date1=new Date()
        date1.setDate(date1.getDate()+2)
        await helper.withTransaction(db,async()=>{
            const result=await db.query('select * from Cart where Customer_ID='+req.user[0].Customer_ID)
            for(i=0;i<result.length;i++)
            {
            const data={
                Customer_ID:req.user[0].Customer_ID,
                Pickup_date:date,
                Drop_off_date:date1,
                Service_ID:result[i].Service_ID,
                Qty:result[i].Qty
            }
            await db.query('insert into Order_Info set ?',data)
            const result2=await db.query('select * from Employee where Order_ID is NULL')
            const result3=await db.query('select * from Order_Info')
            await db.query('update Employee set Order_ID='+result3[result3.length-1].Order_ID+' where Emp_ID='+result2[0].Emp_ID)
            await db.query('create event emp'+result2[0].Emp_ID+' on schedule at current_timestamp + interval 48 hour do update Employee set Order_ID=NULL where Emp_ID='+result2[0].Emp_ID)
            orderMail(req.user[0].Email_ID,req.user[0].First_Name,result3[result3.length-1].Order_ID,result2[0].Name,result2[0].Mob_No)
            const result4=await db.query('select * from Order_Info natural join Employee where Emp_ID='+result2[0].Emp_ID)
            await db.query('update Order_Info set Emp_Name="'+result4[0].Name+'" where Order_ID='+result3[result3.length-1].Order_ID)
        }
        res.json({message:"Order Info Updated"})
        })
    }
    catch(e)
    {
        console.log(e)
    }
})
module.exports=route