const otp=document.querySelector('#otp')
const submit=document.querySelector('#sub')

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    data={
        otp:otp.value,
        mob:sessionStorage.getItem('MOB')
    }
    options={
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/otp/verify',options).then(res=>res.json()).then(data=>{
        alert(data.message)
        if(data.message=="OTP verified")
        {
            window.location.replace('http://localhost:3000/change/password')
        }
    })
})