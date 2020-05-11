const dc=document.querySelector('#dcyes')
const cod=document.querySelector('#CODyes')

dc.addEventListener('click',(e)=>{
    e.preventDefault()
    var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch("http://localhost:3000/order",options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        if(data.message="Order Info Updated")
        {
            window.location.href="http://localhost:4000/paywithpaytm?amount="+localStorage.getItem('total')

        }
    })
})
cod.addEventListener('click',(e)=>{
    e.preventDefault()
    var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch("http://localhost:3000/order",options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        alert(data.message)
        if(data.message="Order Info Updated")
        {
            window.location.replace('http://localhost:3000/COD')
        }
    })
})
