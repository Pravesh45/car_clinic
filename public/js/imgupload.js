const del = document.querySelector('#del')
const pic = document.querySelector('#propic')
const submit = document.querySelector('#submit')

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
    console.log(data.result1.Customer_ID)
    if (data.result1.length != 0) {
        image.src = "http://localhost:3000/user/me/avatar/" + data.result1.Customer_ID
    }
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
    fetch('http://localhost:3000/user/me/avatar/del', options).then(res => res.json()).then(data => {
        if (data.message == "Please Provide Authentication") {
            window.location.replace("http://localhost:3000/login")
        }
        alert(data.message)
        if (data.message == "Profile picture Successfully deleted") {
            window.location.replace('http://localhost:3000/account')
        }
    })
})

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('avatar', pic.files[0])
    formdata.append('token', sessionStorage.getItem('token'))
    options = {
        method: "POST",
        body: formdata
    }
    fetch('http://localhost:3000/user/me/avatar/upload', options).then(res => res.json()).then(data => {
        if (data.message == "Please Provide Authentication") {
            window.location.replace("http://localhost:3000/login")
        }
        alert(data.message)
        if (data.message == "Image uploaded" || data.message == "Image Updated Successfully") {
            window.location.replace('http://localhost:3000/account')
        }
    })
})