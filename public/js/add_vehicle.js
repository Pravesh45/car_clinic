const submit=document.querySelector("#submit")
const vin=document.querySelector('#vin')
const reg=document.querySelector('#reg')
const model=document.querySelector('#model')
const manu=document.querySelector('#manu')
const color=document.querySelector('#color')
const myFile=document.querySelector('#myFile')
const name=document.querySelector('#name')

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const formdata=new FormData()
    formdata.append('inpFile',myFile.files[0])
    formdata.append('token',sessionStorage.getItem('token'))
    formdata.append('vin',vin.value)
    formdata.append('reg',reg.value)
    formdata.append('model',model.value)
    formdata.append('manu',manu.value)
    formdata.append('color',color.value)
    formdata.append('name',name.value)

    const option={
        method:'POST',
        body:formdata
    }
    fetch('http://localhost:3000/vehicle/info/register',option).then(res=>res.json()).then(data=>{
        if(data.message=="Please Provide Authentication")
    {
        window.location.replace("http://localhost:3000/login")
    }
    alert(data.message)
        if(data.message=="Vehicle Succesfully Added")
        {
            window.location.replace('http://localhost:3000/vehicledisplay')
        }
    })
})