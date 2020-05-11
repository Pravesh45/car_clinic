const button0=document.getElementById('button0')
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
const foot=document.querySelector('#foot')
const checkout=document.querySelector('#checkout')

refresh=()=>{
    window.location.reload(true)
}
foot.addEventListener('click',(e)=>{
    e.preventDefault()
    setTimeout(refresh,1000)
})
document.addEventListener('click',(e)=>{
    if(e.target && e.target.id=="checkout")
    {
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
        fetch('http://localhost:3000/totalvehicle',options).then(res=>res.json()).then(data=>{
            if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
            if(data.length==0)
            {
                alert("You don't have any vehicle registered with us.Please register to proceed")
            }
            else
            {
                window.location.href="http://localhost:3000/paymode"
            }
        })
}
    if(e.target && e.target.id=="button0")
    {var button=localStorage.getItem('button0')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button1")
    {var button=localStorage.getItem('button1')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button2")
    {var button=localStorage.getItem('button2')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button3")
    {var button=localStorage.getItem('button3')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button4")
    {var button=localStorage.getItem('button4')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button5")
    {var button=localStorage.getItem('button5')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button6")
    {var button=localStorage.getItem('button6')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button7")
    {var button=localStorage.getItem('button7')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button8")
    {var button=localStorage.getItem('button8')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button9")
    {var button=localStorage.getItem('button9')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button10")
    {var button=localStorage.getItem('button10')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button11")
    {var button=localStorage.getItem('button11')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button12")
    {var button=localStorage.getItem('button12')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button13")
    {var button=localStorage.getItem('button13')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
    if(e.target && e.target.id=="button14")
    {var button=localStorage.getItem('button14')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'cache-control':'no-cache'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/cart/item/del/'+button,options)
   }
})