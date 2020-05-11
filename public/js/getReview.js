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
fetch('http://localhost:3000/review/get',options).then(res=>res.json()).then(data=>{
    if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
    if(data.result.length==0)
{
    var empty=document.createElement("DIV")
    document.createAttribute("id")
    empty.setAttribute("id","empty")
    empty.innerHTML="No Reviews"
    document.getElementById('bla').appendChild(empty)
}
else
if(data.result)
{
    for(i=0;i<data.result.length;i++)
    {   var br=document.createElement("br")
        var br1=document.createElement("br")
        var div0=document.createElement("DIV")
        document.createAttribute("class")
        div0.setAttribute("class","rev")
        var div1=document.createElement("DIV")
        document.createAttribute("class")
        div1.setAttribute("class","row")
        var div2=document.createElement("DIV")
        document.createAttribute("class")
        div2.setAttribute("class","col-sm-6 col-md-6 col-lg-6")
        var reviewer=document.createElement("DIV")
        document.createAttribute("class")
        reviewer.setAttribute("class","Reviewer")
        reviewer.innerHTML=data.result[i].Reviewer
        var div3=document.createElement("DIV")
        document.createAttribute("class")
        div3.setAttribute("class","col-sm-6 col-md-6 col-lg-6")
        var sout=document.createElement("DIV")
        document.createAttribute("class")
        sout.setAttribute("class","stars-outer")
        var sin=document.createElement("DIV")
        document.createAttribute("class")
        sin.setAttribute("class","stars-inner")
        var st=getRatings(data,i)
        sin.style.width=st
        var nrate=document.createElement("span")
        document.createAttribute("class")
        nrate.setAttribute("class","number-rating")
        nrate.innerHTML=data.result[i].Rating
        var div4=document.createElement("DIV")
        document.createAttribute("class")
        div4.setAttribute("class","row")
        var div5=document.createElement("DIV")
        document.createAttribute("class")
        div5.setAttribute("class","col-sm-12 col-md-12 col-lg-12")
        var div6=document.createElement("DIV")
        document.createAttribute("class")
        div6.setAttribute("class","review")
        div6.innerHTML=data.result[i].Review
        var div7=document.createElement("DIV")
        document.createAttribute("class")
        div7.setAttribute("class","row")
        var div8=document.createElement("DIV")
        document.createAttribute("class")
        div8.setAttribute("class","col-sm-12 col-md-12 col-lg-12")
        var div9=document.createElement("DIV")
        document.createAttribute("class")
        div9.setAttribute("class","date")
        div9.innerHTML=data.result[i].Day+" "+data.result[i].Month+" "+data.result[i].Year
        div0.appendChild(div1)
        div1.appendChild(div2)
        div1.appendChild(div3)
        div0.appendChild(div4)
        div0.appendChild(div7)
        div2.appendChild(reviewer)
        sout.appendChild(sin)
        div3.appendChild(sout)
        div3.appendChild(nrate)
        div4.appendChild(div5)
        div5.appendChild(div6)
        div7.appendChild(div8)
        div8.appendChild(div9)
        document.getElementById("bla").appendChild(div0)
        document.getElementById("bla").appendChild(br) 
        document.getElementById("bla").appendChild(br1)
    }
}
var br2=document.createElement("br")
var add_review=document.createElement("a")
add_review.setAttribute("id","ar")
add_review.setAttribute("href","http://localhost:3000/review/add")
add_review.setAttribute("class","btn btn-sm btn-primary float-right")
document.getElementById('bla').appendChild(add_review)
document.getElementById('bla').appendChild(br2)
add_review.innerText="Give a Review"
})
function getRatings(data,i) {
    const starPercentage = (data.result[i].Rating/5) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    
    return starPercentageRounded
  }