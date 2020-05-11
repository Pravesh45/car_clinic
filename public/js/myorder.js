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
fetch('http://localhost:3000/myorders',options).then(res=>res.json()).then(data=>{
    if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
    if(data.result.length==0)
    {
        var empty=document.createElement("DIV")
        document.createAttribute("id")
        empty.setAttribute("id","empty")
        empty.innerHTML="No Orders Yet"
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
            div2.setAttribute("class","col-sm-4 col-md-4 col-lg-2")
            var image=document.createElement("IMG")
            document.createAttribute("src")
            document.createAttribute("class")
            image.setAttribute("class","image")
            image.setAttribute("src",data.result[i].Image)
            var div3=document.createElement("DIV")
            document.createAttribute("class")
            div3.setAttribute("class","col-sm-4 col-md-4 col-lg-6")
            var heading=document.createElement("h4")
            document.createAttribute("id")
            heading.setAttribute("id","name")
            heading.innerHTML=data.result[i].Name
            var span=document.createElement("DIV")
            document.createAttribute("class")
            span.setAttribute("class","badge badge-secondary")
            span.setAttribute("id","c")
            span.innerHTML="Qty:"+data.result[i].Qty
            var span1=document.createElement("DIV")
            document.createAttribute("class")
            span1.setAttribute("class","service")
            span1.setAttribute("id","s")
            span1.innerHTML="<b>Serviced By:"+data.result[i].Emp_Name+"</b>"
            var div4=document.createElement("DIV")
            document.createAttribute("class")
            div4.setAttribute("class","col-sm-4 col-m-4 col-lg-4")
            var price=document.createElement("DIV")
            document.createAttribute("id")
            price.setAttribute("id","price")
            price.innerHTML='Price: <i class="fas fa-rupee-sign"></i> <span id="cart_subtotal">'+data.result[i].Cost+'</span>'
            document.getElementById("bla").appendChild(div1)
            div1.appendChild(div2)
            div1.appendChild(div3)
            div1.appendChild(div4)
            div2.appendChild(image)
            div3.appendChild(heading)
            div3.appendChild(span)
            div3.appendChild(span1)
            div4.appendChild(price)
            document.getElementById("bla").appendChild(br)
            document.getElementById("bla").appendChild(br1)
        }
    }
})


