const num=document.querySelector('#otpNo')
const submit=document.querySelector('#sub')


function generateOTP() { 
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
    return OTP; 
} 

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const OTP=generateOTP()
    const data={
        mob:num.value,
        OTP:OTP
    }
    const options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/reset/password',options).then(res=>res.json()).then(data=>{
        alert(data.message)
        if(data.message=="OTP sent successfully")
        {   
            sessionStorage.setItem('MOB',num.value)
            window.location.replace('http://localhost:3000/otp')
        }
    })
})