const first=document.querySelector('#first')
const last=document.querySelector('#last')
const con=document.querySelector('#con')
const add=document.querySelector('#add')
const sub=document.querySelector('#submit')
const pass=document.querySelector('#pass')
const confirm=document.querySelector('#confirm')

sub.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('hey')
    data={
        token:sessionStorage.getItem('token'),
        first_name:first.value,
        last_name:last.value,
        address:add.value,
        mob:con.value,
        password:pass.value,
        confirm:confirm.value
    }
    options={
        method:"PATCH",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/user/me/update',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        alert(data.message)
        if(data.message=="User Profile Updated Successfully")
        {
            window.location.replace('http://localhost:3000/account')
        }
    })
})