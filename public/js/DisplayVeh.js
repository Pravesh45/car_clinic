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
fetch('http://localhost:3000/vehicle/info/dis',options).then(res=>res.json()).then(data=>{
    if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
    if(data.result.length==0)
    {
        var empty=document.createElement("DIV")
        document.createAttribute("id")
        empty.setAttribute("id","empty")
        empty.innerHTML="No Vehicles Registered"
        document.getElementById('bla').appendChild(empty)
    }
    else
    if(data.result)
    {
        for(i=0;i<data.result.length;i++)
        {   var br=document.createElement("br")
            var br1=document.createElement("br")
            var div1=document.createElement("DIV")
            document.createAttribute("class")
            div1.setAttribute("class","row")
            var div2=document.createElement("DIV")
            document.createAttribute("class")
            div2.setAttribute("class","col-sm-4 col-md-4 col-lg-3")
            var image=document.createElement("IMG")
            document.createAttribute("src")
            document.createAttribute("class")
            image.setAttribute("class","image")
            image.setAttribute("src",data.result[i].Image)
            var div3=document.createElement("DIV")
            document.createAttribute("class")
            div3.setAttribute("class","col-sm-4 col-md-4 col-lg-5")
            var heading=document.createElement("h4")
            document.createAttribute("id")
            heading.setAttribute("id","name")
            heading.innerHTML=data.result[i].Name+"("+data.result[i].Colour+")"
            var span3=document.createElement("h5")
            document.createAttribute("class")
            span3.setAttribute("class","reg")
            span3.innerHTML="Registration No:"+data.result[i].Car_Reg_No
            var span1=document.createElement("DIV")
            document.createAttribute("class")
            span1.setAttribute("class","manu")
            span1.innerHTML="Make:"+data.result[i].Manufacturer
            var span2=document.createElement("DIV")
            document.createAttribute("class")
            span2.setAttribute("class","model")
            span2.innerHTML="Model:"+data.result[i].Model
            var div4=document.createElement("DIV")
            document.createAttribute("class")
            div4.setAttribute("class","col-sm-4 col-m-4 col-lg-4")
            var del=document.createElement("a")
            document.createAttribute("role")
            document.createAttribute("class")
            document.createAttribute("id")
            document.createAttribute("data-toggle")
            document.createAttribute("data-target")
            del.setAttribute("role","button")
            del.setAttribute("class","btn btn-danger btn-sm")
            del.setAttribute("id","b"+i)
            localStorage.setItem("b"+i,data.result[i].VIN)
            console.log("b"+i+":"+localStorage.getItem("b"+i))
            del.setAttribute("data-toggle","modal")
            del.setAttribute("data-target","#myModal")
            del.innerHTML='<i class="fas fa-trash-alt" id="icon"></i>'
            document.getElementById("bla").appendChild(div1)
            div1.appendChild(div2)
            div1.appendChild(div3)
            div1.appendChild(div4)
            div2.appendChild(image)
            div3.appendChild(heading)
            div3.appendChild(span3)
            div3.appendChild(span1)
            div3.appendChild(span2)
            div4.appendChild(del)
            document.getElementById("bla").appendChild(br)
            document.getElementById("bla").appendChild(br1)
        }
    }
        var div5=document.createElement("DIV")
        document.createAttribute("class")
        div5.setAttribute("class","row")
        div5.setAttribute("id","reg")
        var div6=document.createElement("DIV")
        document.createAttribute("class")
        div6.setAttribute("class","col-sm-4 col-md-4 col-lg-2")
        var div7=document.createElement("DIV")
        document.createAttribute("class")
        div7.setAttribute("class","col-sm-4 col-md-4 col-lg-6")
        var div8=document.createElement("DIV")
        document.createAttribute("class")
        div8.setAttribute("class","col-sm-4 col-m-4 col-lg-4")
        var checkout=document.createElement("a")
        document.createAttribute("href")
        document.createAttribute("role")
        document.createAttribute("class")
        document.createAttribute("id")
        checkout.setAttribute("href","#")
        checkout.setAttribute("role","button")
        checkout.setAttribute("class","btn btn-primary btn-sm")
        checkout.setAttribute("id","register")
        checkout.innerHTML='Register'
        document.getElementById('bla').appendChild(div5)
        div5.appendChild(div6)
        div5.appendChild(div7)
        div5.appendChild(div8)
        div8.appendChild(checkout)
})


