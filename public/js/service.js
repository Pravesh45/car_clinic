const img1=document.querySelector('#i1')
const head1=document.querySelector('#head1')
const price1=document.querySelector('#price1')
const img2=document.querySelector('#i2')
const head2=document.querySelector('#head2')
const price2=document.querySelector('#price2')
const img3=document.querySelector('#i3')
const head3=document.querySelector('#head3')
const price3=document.querySelector('#price3')
const img4=document.querySelector('#i4')
const head4=document.querySelector('#head4')
const price4=document.querySelector('#price4')
const img5=document.querySelector('#i5')
const head5=document.querySelector('#head5')
const price5=document.querySelector('#price5')
const img6=document.querySelector('#i6')
const head6=document.querySelector('#head6')
const price6=document.querySelector('#price6')
const img7=document.querySelector('#i7')
const head7=document.querySelector('#head7')
const price7=document.querySelector('#price7')
const img8=document.querySelector('#i8')
const head8=document.querySelector('#head8')
const price8=document.querySelector('#price8')
const img9=document.querySelector('#i9')
const head9=document.querySelector('#head9')
const price9=document.querySelector('#price9')
const img10=document.querySelector('#i10')
const head10=document.querySelector('#head10')
const price10=document.querySelector('#price10')
const img11=document.querySelector('#i11')
const head11=document.querySelector('#head11')
const price11=document.querySelector('#price11')
const img12=document.querySelector('#i12')
const head12=document.querySelector('#head12')
const price12=document.querySelector('#price12')
const img13=document.querySelector('#i13')
const head13=document.querySelector('#head13')
const price13=document.querySelector('#price13')
const img14=document.querySelector('#i14')
const head14=document.querySelector('#head14')
const price14=document.querySelector('#price14')
const img15=document.querySelector('#i15')
const head15=document.querySelector('#head15')
const price15=document.querySelector('#price15')
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
    if(data.general==true)
    {
        button1.style.visibility="hidden"
    }
    if(data.wash==true)
    {
        button15.style.visibility="hidden"
    }
    if(data.paint==true)
    {
        button2.style.visibility="hidden"
    }
        cartno.innerHTML=data.length
        console.log(data.length)
})
fetch('http://localhost:3000/service').then(res=>res.json()).then(data=>{
    if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
       img1.src=data[0].Image
       img1.height=220
       img1.width=300
       head1.innerHTML=data[0].Name
       price1.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[0].Cost+'</span>'
       img2.src=data[1].Image
       img2.height=220
       img2.width=300
       head2.innerHTML=data[1].Name
       price2.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[1].Cost+'</span>'
       img3.src=data[2].Image
       img3.height=220
       img3.width=300
       head3.innerHTML=data[2].Name
       price3.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[2].Cost+'</span>'
       img4.src=data[3].Image
       img4.height=220
       img4.width=300
       head4.innerHTML=data[3].Name
       price4.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[3].Cost+'</span>'
       img5.src=data[4].Image
       img5.height=220
       img5.width=300
       head5.innerHTML=data[4].Name
       price5.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[4].Cost+'</span>'
       img6.src=data[5].Image
       img6.height=220
       img6.width=300
       head6.innerHTML=data[5].Name
       price6.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[5].Cost+'</span>'
       img7.src=data[6].Image
       img7.height=220
       img7.width=300
       head7.innerHTML=data[6].Name
       price7.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[6].Cost+'</span>'
       img8.src=data[7].Image
       img8.height=220
       img8.width=300
       head8.innerHTML=data[7].Name
       price8.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[7].Cost+'</span>'
       img9.src=data[8].Image
       img9.height=220
       img9.width=300
       head9.innerHTML=data[8].Name
       price9.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[8].Cost+'</span>'
       img10.src=data[9].Image
       img10.height=220
       img10.width=300
       head10.innerHTML=data[9].Name
       price10.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[9].Cost+'</span>'
       img11.src=data[10].Image
       img11.height=220
       img11.width=300
       head11.innerHTML=data[10].Name
       price11.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[10].Cost+'</span>'
       img12.src=data[11].Image
       img12.height=220
       img12.width=300
       head12.innerHTML=data[11].Name
       price12.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[11].Cost+'</span>'
       img13.src=data[12].Image
       img13.height=220
       img13.width=300
       head13.innerHTML=data[12].Name
       price13.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[12].Cost+'</span>'
       img14.src=data[13].Image
       img14.height=220
       img14.width=300
       head14.innerHTML=data[13].Name
       price14.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[13].Cost+'</span>'
       img15.src=data[14].Image
       img15.height=220
       img15.width=300
       head15.innerHTML=data[14].Name
       price15.innerHTML='Price: <i class="fas fa-rupee-sign"></i><span class="price">'+data[14].Cost+'</span>'
})