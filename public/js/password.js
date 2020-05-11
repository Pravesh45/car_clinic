const pass=document.querySelector('#pass')
const cpass=document.querySelector('#cpass')
const submit=document.querySelector('#sub')

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    data={
        mob:sessionStorage.getItem('MOB'),
        password:pass.value,
        confirm:cpass.value
    }
    options={
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/user/password/update',options).then(res=>res.json()).then(data=>{
        alert(data.message)
        if(data.message=="User Password Updated Successfully")
        {
            window.location.replace('http://localhost:3000/login')
        }
    })
})
