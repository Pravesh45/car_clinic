const form=document.querySelector('form')

form.addEventListener(('submit'),(e)=>{
    e.preventDefault()
    const em=document.querySelector('#em')
    const pass=document.querySelector('#pass')
    email=em.value
    password=pass.value
    data={email,password}
    const option={
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/user/login',option).then(res=>res.json()).then(data=>{
        if(data.message)
        {
            alert(data.message)
        }  
        else
        {   
            sessionStorage.setItem('token',data.token)
            sessionStorage.setItem('id',data.Customer_ID)
            alert('Login Successful')
            window.location.replace('http://localhost:3000/home')   
        }
    })
})