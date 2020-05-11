var r1=document.querySelector('#r1')
    var r=document.querySelector('#rating-control')
    var sub=document.querySelector('#rs')
    var close=document.querySelector('#c')

    sub.addEventListener('click',(e)=>{
        e.preventDefault()
        review=r1.value
        rating=r.value
        console.log(rating)
        var data={
            token:sessionStorage.getItem('token'),
            review:review,
            rating:rating
        }
        var options={
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }
        fetch('http://localhost:3000/review/create',options).then(res=>res.json()).then(data=>{
            if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
        })
    })

   c.addEventListener('click',(e)=>{
       e.preventDefault()
       window.location.href="http://localhost:3000/review"
   })

   r.addEventListener('blur', (e) => {
    const rating = e.target.value;

    // Make sure 5 or under
    if (rating > 5) {
      alert('Please rate 1 - 5');
      return;
    }
})

