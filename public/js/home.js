const signup=document.querySelector('#signup')
const signin=document.querySelector('#signin')

signup.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href="http://localhost:3000/register"
})

signin.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href="http://localhost:3000/login"
})