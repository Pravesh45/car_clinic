var client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  generateOTP=(num,body)=>{
    client.messages.create({
        from:process.env.TWILIO_PHONE_NUMBER,
        to:`+91${num}`,
        body: `OTP for you Car Clinic account is ${body}`
      }).then((message) => console.log(message.sid));
  }

  module.exports={generateOTP}