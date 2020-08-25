const image = document.querySelector('#image')
const name = document.querySelector('#name')
const add = document.querySelector('#address')
const email = document.querySelector('#email')
const num = document.querySelector('#mob')
const del = document.querySelector('#delyes')
var data = {
    token: sessionStorage.getItem('token')
}
var options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}
fetch('http://localhost:3000/user/me', options).then(res => res.json()).then(data => {
    if (data.message == "Please Provide Authentication") {
        window.location.replace("http://localhost:3000/login")
    }
    if (data.result1.length != 0) {
        image.src = "http://localhost:3000/user/me/avatar/" + data.result2.Customer_ID
    }
    name.innerHTML = data.result2.First_Name + " " + data.result2.Last_Name
    email.innerHTML = "Email-ID:" + data.result2.Email_ID
    add.innerHTML = "Address:" + data.result2.Address
    num.innerHTML = "Mobile No:" + data.result2.Mob_No
})

del.addEventListener('click', (e) => {
    e.preventDefault()
    data = {
        token: sessionStorage.getItem('token')
    }
    options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('http://localhost:3000/user/me/del', options).then(res => res.json()).then(data => {
        if (data.message == "Account Deleted") {
            window.location.replace('http://localhost:3000')
        }
    })
})