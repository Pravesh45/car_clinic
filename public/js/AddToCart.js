const button1=document.getElementById('button1')
const button2=document.getElementById('button2')
const button3=document.getElementById('button3')
const button4=document.getElementById('button4')
const button5=document.getElementById('button5')
const button6=document.getElementById('button6')
const button7=document.getElementById('button7')
const button8=document.getElementById('button8')
const button9=document.getElementById('button9')
const button10=document.getElementById('button10')
const button11=document.getElementById('button11')
const button12=document.getElementById('button12')
const button13=document.getElementById('button13')
const button14=document.getElementById('button14')
const button15=document.getElementById('button15')
const cart=document.querySelector('#cartno')

button1.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    var data={
        token:token
    }
    var options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/11',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
        if(data.general==true)
        {
            button1.style.visibility="hidden"
        }
    })
    })
button2.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    var data={
        token:token
    }
    var options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/24',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
        if(data.paint==true)
        {
            button2.style.visibility="hidden"
        }
    })
})
button3.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    var data={
        token:token
    }
    var options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/12',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button4.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/13',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button5.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/14',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button6.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/15',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button7.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/16',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button8.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/17',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button9.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/18',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button10.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/19',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button11.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/20',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button12.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/21',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button13.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/22',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button14.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/23',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
    })
})
button15.addEventListener('click',(e)=>{
    e.preventDefault()
    const token=sessionStorage.getItem('token')
    data={
        token:token
    }
    options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/AddToCart/25',options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.length)
        {
            cart.innerHTML=data.length
        }
        if(data.wash==true)
        {
            button15.style.visibility="hidden"
        }
    })
})