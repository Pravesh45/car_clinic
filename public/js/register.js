const signupForm=document.querySelector('form')

signupForm.addEventListener(('submit'),(e)=>{ 
    e.preventDefault()
    const first=document.querySelector('#first')
    const last=document.querySelector('#last')
    const add=document.querySelector('#add')
    const em=document.querySelector('#em')
    const pass=document.querySelector('#pass')
    const cpass=document.querySelector('#cpass')
    const no=document.querySelector('#no')
    const first_name=first.value
    const last_name=last.value
    const address=add.value
    const password=pass.value
    const Mob_No=no.value
    const email=em.value
    const confirm=cpass.value
    const data={first_name,last_name,address,Mob_No,email,password,confirm}
    const option={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('http://localhost:3000/user/register',option).then(res=>res.json()).then(data=>{
        alert(data.message)
    if(data.message=="You have successfully registered")
    {
    window.location.replace('http://localhost:3000/login')
    }
    })
}
)
