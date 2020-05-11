const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      navLinks.forEach((link, index) => {
        if(link.style.animation) {
          link.style.animation = '';
      }  else{
          link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}s';
      }
    });
          
      burger.classList.toggle('toggle');
      });
    }
navSlide();

const yes=document.querySelector('#yes')
const no=document.querySelector('#no')

yes.addEventListener('click',(e)=>{
  e.preventDefault()
  const data={
    token:sessionStorage.getItem('token')
  }
  const options={
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }
  fetch('http://localhost:3000/user/logout',options).then(res=>res.json()).then(data=>{
    if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
    if(data.message=="You have been logged out")
    {
      sessionStorage.setItem('token',null)
      window.location.reload(true)
    }
  })
})