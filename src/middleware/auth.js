const jwt=require('jsonwebtoken')
const helper=require('../database/db')
const config=require('../config/dbconfig')

auth=async(req,res,next)=>{
    try
    {
     const token=req.body.token || req.header('Authorization').replace('Bearer ','')
     const decode=jwt.verify(token,'Rocky@4527')
     const db=helper.database(config)
     await helper.withTransaction(db,async()=>{
        const user=await db.query('select * from Customer where Customer_ID='+decode._id+' and token="'+token+'"')
        if(user.length==0)
        {
            throw 'Please Provide Authentication'
        }
        req.user=user
        next()
     })
    }
    catch(e)
    {
        res.status(401).send({"message":e})
    }
}

module.exports=auth
