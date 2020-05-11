const foot=document.querySelector('#foot')

refresh=()=>{
    window.location.href="http://localhost:3000/vehicledisplay"
    window.location.reload(true)
}
foot.addEventListener('click',(e)=>{
    e.preventDefault()
    setTimeout(refresh,1000)
})

$(document).on('click','#register',(e)=>{
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
        fetch('http://localhost:3000/totalvehicle',options).then(res=>res.json()).then(data=>{
            if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
            if(data.length>=3)
            {
                alert('You already have 3 vehicles registered with us')
            }
            else
            {
                window.location.href="http://localhost:3000/vehicle"
            }
        })
})
$(document).on('click','#b0',(e)=>{
     var button=localStorage.getItem('b0')
     var data={
        token:sessionStorage.getItem('token')
    }
    var options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('http://localhost:3000/vehicle/info/del/'+button,options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
    })
}
)
$(document).on('click','b1',(e)=>{
    var button=localStorage.getItem('b1')
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
    fetch('http://localhost:3000/vehicle/info/del/'+button,options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
    })
})
$(document).on('click','#b2',(e)=>{
    var button=localStorage.getItem('b2')
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
    fetch('http://localhost:3000/vehicle/info/del/'+button,options).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
    })
})