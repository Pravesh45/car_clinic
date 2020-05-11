const helper=require('../database/db')
const config=require('../config/dbconfig')
const auth=require('../middleware/auth')
const express=require('express')
const route=new express.Router()

route.post('/review/create',auth,async(req,res)=>{
    const data={
        Reviewer:req.user[0].First_Name+" "+req.user[0].Last_Name,
        Review:req.body.review,
        Rating:req.body.rating
    }
    const db=helper.database(config)
    try
    {
        await helper.withTransaction(db,async()=>{
            await db.query('insert into Review set ?',data)
            res.send({"message":"Review Success"})
        })
    }
    catch(e)
    {
        console.log(e)
    }
})

route.post('/review/get',auth,async(req,res)=>{
    const db=helper.database(config)
    try
    {
        await helper.withTransaction(db,async()=>{
            const result=await db.query('select *,dayname(Date) as Day,monthname(Date) as Month,year(Date) as Year from Review')
            res.json({result:result})
        })
    }
    catch(e)
    {
        console.log(e)
    }
})

module.exports=route