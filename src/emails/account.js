const nodemailer=require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: process.env.user,
           pass: process.env.pass
       }
   });

welcomeMail=(email,name,token)=>{
    const mailOptions = {
        to:email,
        from:'carclinic45@gmail.com',
        subject:'Welcome to CAR CLINIC',
        html:`Hiii there ${name}<br>Thank you for chosing car clinic<br><br>Please verify your account by click on the link below <br><a href="http://localhost:3000/user/verify/${token}">http://localhost:3000/user/verify/${token}</a>`
      }
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     })
}

vehicleRegMail=(car_name,email,name,VIN,Man,Colour,Reg)=>{
    const mailOptions = {
            to:email,
            from:'carclinic45@gmail.com',
            subject:'New Vehicle Added',
            html:`<b>Dear ${name}</b>,<br><br><br>A New Vehicle has been added to your Car Clinic Accout with the following details:<br><br>VIN:${VIN}<br>Name:${car_name}<br>Manufacturer:${Man}<br>Colour:${Colour}<br>Registration No:${Reg}<br><br><br>Please review the details.If there are any disprepancies then contact us at carclinic45@gmail.com`
      }
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     })
}

vehicleDelMail=(car_name,email,name,VIN,Man,Colour,Reg)=>{
  const mailOptions = {
          to:email,
          from:'carclinic45@gmail.com',
          subject:'Vehicle Deleted From Account',
          html:`<b>Dear ${name}</b>,<br><br><br>Your Vehicle with the following details has been deleted from your Car Clinic Accout:<br><br>VIN:${VIN}<br>Name:${car_name}<br>Manufacturer:${Man}<br>Colour:${Colour}<br>Registration No:${Reg}`
    }
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
   })
}

orderMail=(email,name,id,empname,empnum)=>{
  const mailOptions={
    to:email,
    from:'carclinic45@gmail.com',
    subject:'Order Placed Successfully',
    html:`<b>Dear ${name}</b>,<br><br><br>Your Order with Order ID:${id} has been successfully placed.It will be serviced by ${empname}<br><br>Please contact him on ${empnum} for any clarification`
  }
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 })
}

module.exports={welcomeMail,vehicleRegMail,vehicleDelMail,orderMail}
   
  
  
            
    