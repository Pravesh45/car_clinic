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
fetch('http://localhost:3000/cart/items',options).then(res=>res.json()).then(data=>{
    if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
    if(data.result.length==0)
    {
        var empty=document.createElement("DIV")
        document.createAttribute("id")
        empty.setAttribute("id","empty")
        empty.innerHTML="Cart is Empty"
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
            if(data.result[i].Name=="Paint")
            {
                var span1=document.createElement("DIV")
                span1.setAttribute("id","paint")
                var sel=document.createElement("select")
                sel.setAttribute("class","form-control")
                sel.setAttribute("id","sel1")
                var option1=document.createElement("option")
                option1.innerHTML="RED"
                var option2=document.createElement("option")
                option2.innerHTML="BLUE"
                var option3=document.createElement("option")
                option3.innerHTML="BLACK"
                var option4=document.createElement("option")
                option4.innerHTML="WHITE"
                var option5=document.createElement("option")
                option5.innerHTML="GREY"
                var option6=document.createElement("option")
                option6.innerHTML="YELLOW"
                sel.appendChild(option1)
                sel.appendChild(option2)
                sel.appendChild(option3)
                sel.appendChild(option4)
                sel.appendChild(option5)
                sel.appendChild(option6)
                span1.appendChild(sel)
            }
            if(data.result[i].Name=="Wiper Arm")
            {
                var span1=document.createElement("DIV")
                span1.setAttribute("id","wipe")
                var sel=document.createElement("select")
                sel.setAttribute("class","form-control")
                sel.setAttribute("id","sel1")
                var option1=document.createElement("option")
                option1.innerHTML="LEFT"
                var option2=document.createElement("option")
                option2.innerHTML="RIGHT"
                var option3=document.createElement("option")
                option3.innerHTML="BOTH"
                sel.appendChild(option1)
                sel.appendChild(option2)
                sel.appendChild(option3)
                span1.appendChild(sel)
            }
            if(data.result[i].Name=="Head Lamp")
            {
                var span1=document.createElement("DIV")
                span1.setAttribute("id","hl")
                var sel=document.createElement("select")
                sel.setAttribute("class","form-control")
                sel.setAttribute("id","sel1")
                var option1=document.createElement("option")
                option1.innerHTML="LEFT"
                var option2=document.createElement("option")
                option2.innerHTML="RIGHT"
                var option3=document.createElement("option")
                option3.innerHTML="BOTH"
                sel.appendChild(option1)
                sel.appendChild(option2)
                sel.appendChild(option3)
                span1.appendChild(sel)
            }
            if(data.result[i].Name=="Tail Lamp")
            {
                var span1=document.createElement("DIV")
                span1.setAttribute("id","tl")
                var sel=document.createElement("select")
                sel.setAttribute("class","form-control")
                sel.setAttribute("id","sel1")
                var option1=document.createElement("option")
                option1.innerHTML="LEFT"
                var option2=document.createElement("option")
                option2.innerHTML="RIGHT"
                var option3=document.createElement("option")
                option3.innerHTML="BOTH"
                sel.appendChild(option1)
                sel.appendChild(option2)
                sel.appendChild(option3)
                span1.appendChild(sel)
            }
            if(data.result[i].Name=="Suspension")
            {
                var span1=document.createElement("DIV")
                span1.setAttribute("id","sus")
                var sel=document.createElement("select")
                sel.setAttribute("class","form-control")
                sel.setAttribute("id","sel1")
                var option1=document.createElement("option")
                option1.innerHTML="FRONT"
                var option2=document.createElement("option")
                option2.innerHTML="REAR"
                var option3=document.createElement("option")
                option3.innerHTML="BOTH"
                sel.appendChild(option1)
                sel.appendChild(option2)
                sel.appendChild(option3)
                span1.appendChild(sel)
            }
            if(data.result[i].Name=="Tyre")
            {
                var span1=document.createElement("DIV")
                span1.setAttribute("id","tyre")
                var sel1=document.createElement("label")
                sel1.setAttribute("class","checkbox-inline")
                sel1.innerHTML='<input type="checkbox" value="">FRONT-LEFT'
                var sel2=document.createElement("label")
                sel2.setAttribute("class","checkbox-inline")
                sel2.innerHTML='<input type="checkbox" value="">FRONT-RIGHT'
                var sel3=document.createElement("label")
                sel3.setAttribute("class","checkbox-inline")
                sel3.innerHTML='<input type="checkbox" value="">REAR-LEFT'
                var sel4=document.createElement("label")
                sel4.setAttribute("class","checkbox-inline")
                sel4.innerHTML='<input type="checkbox" value="">REAR-RIGHT'
                span1.appendChild(sel1)
                span1.appendChild(sel2)
                span1.appendChild(sel3)
                span1.appendChild(sel4)
            }
            if(data.result[i].Name=="Windshield")
            {
                var span1=document.createElement("DIV")
                span1.setAttribute("id","wind")
                var sel=document.createElement("select")
                sel.setAttribute("class","form-control")
                sel.setAttribute("id","sel1")
                var option1=document.createElement("option")
                option1.innerHTML="FRONT"
                var option2=document.createElement("option")
                option2.innerHTML="REAR"
                var option3=document.createElement("option")
                option3.innerHTML="BOTH"
                sel.appendChild(option1)
                sel.appendChild(option2)
                sel.appendChild(option3)
                span1.appendChild(sel)
            }
            if(data.result[i].Name=="Side View Mirror")
            {
                var span1=document.createElement("DIV")
                span1.setAttribute("id","tl")
                var sel=document.createElement("select")
                sel.setAttribute("class","form-control")
                sel.setAttribute("id","sel1")
                var option1=document.createElement("option")
                option1.innerHTML="LEFT"
                var option2=document.createElement("option")
                option2.innerHTML="RIGHT"
                var option3=document.createElement("option")
                option3.innerHTML="BOTH"
                sel.appendChild(option1)
                sel.appendChild(option2)
                sel.appendChild(option3)
                span1.appendChild(sel)
            }
            var div4=document.createElement("DIV")
            document.createAttribute("class")
            div4.setAttribute("class","col-sm-4 col-m-4 col-lg-4")
            var price=document.createElement("DIV")
            document.createAttribute("id")
            price.setAttribute("id","price")
            price.innerHTML='Price: <i class="fas fa-rupee-sign"></i> <span id="cart_subtotal">'+data.result[i].Total_Price+'</span>'
            var del=document.createElement("a")
            document.createAttribute("role")
            document.createAttribute("class")
            document.createAttribute("id")
            document.createAttribute("data-toggle")
            document.createAttribute("data-target")
            del.setAttribute("role","button")
            del.setAttribute("class","btn btn-danger btn-sm")
            del.setAttribute("id","button"+i)
            localStorage.setItem("button"+i,data.result[i].Service_ID)
            console.log(localStorage.getItem('button'+i))
            del.setAttribute("data-toggle","modal")
            del.setAttribute("data-target","#myModal")
            del.innerHTML='<i class="fas fa-trash-alt" id="icon"></i>'
            document.getElementById("bla").appendChild(div1)
            div1.appendChild(div2)
            div1.appendChild(div3)
            div1.appendChild(div4)
            div2.appendChild(image)
            div3.appendChild(heading)
            div3.appendChild(span)
            if(data.result[i].Name=="Paint")
            {
                div3.appendChild(span1)
            }
            if(data.result[i].Name=="Wiper Arm")
            {
                div3.appendChild(span1)
            }
            if(data.result[i].Name=="Head Lamp")
            {
                div3.appendChild(span1)
            }
            if(data.result[i].Name=="Tail Lamp")
            {
                div3.appendChild(span1)
            }
            if(data.result[i].Name=="Suspension")
            {
                div3.appendChild(span1)
            }
            if(data.result[i].Name=="Tyre")
            {
                div3.appendChild(span1)
            }
            if(data.result[i].Name=="Windshield")
            {
                div3.appendChild(span1)
            }
            if(data.result[i].Name=="Side View Mirror")
            {
                div3.appendChild(span1)
            }
            div4.appendChild(price)
            div4.appendChild(del)
            document.getElementById("bla").appendChild(br)
            document.getElementById("bla").appendChild(br1)
        }
        var div5=document.createElement("DIV")
        document.createAttribute("class")
        div5.setAttribute("class","row")
        div5.setAttribute('id','last')
        var div6=document.createElement("DIV")
        document.createAttribute("class")
        div6.setAttribute("class","col-sm-4 col-md-4 col-lg-2")
        var div7=document.createElement("DIV")
        document.createAttribute("class")
        div7.setAttribute("class","col-sm-4 col-md-4 col-lg-6")
        var div8=document.createElement("DIV")
        document.createAttribute("class")
        div8.setAttribute("class","col-sm-4 col-m-4 col-lg-4")
        var total=document.createElement("DIV")
        document.createAttribute("id")
        total.setAttribute("id","total")
        total.innerHTML='Cart Total:<span id=cart_total>'+data.Cart_Total+'</span>'
        window.localStorage.setItem('total',data.Cart_Total)
        var checkout=document.createElement("a")
        document.createAttribute("href")
        document.createAttribute("role")
        document.createAttribute("class")
        document.createAttribute("id")
        checkout.setAttribute("href","#")
        checkout.setAttribute("role","button")
        checkout.setAttribute("class","btn btn-success btn-sm")
        checkout.setAttribute("id","checkout")
        checkout.innerHTML='Checkout'
        document.getElementById('bla').appendChild(div5)
        div5.appendChild(div6)
        div5.appendChild(div7)
        div5.appendChild(div8)
        div8.appendChild(total)
        div8.appendChild(checkout)
    }
})


