const cartno=document.querySelector('#cartno')
data={
        token:sessionStorage.getItem('token')
    }
options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
fetch('http://localhost:3000/cart/totalitems',options).then(res=>res.json()).then(data=>{
    if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        cartno.innerHTML=data.length
})