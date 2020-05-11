const express=require('express')
const userRoute=require('./routes/user')
const vehicleRoute=require('./routes/vehicleInfo')
const serviceRoute=require('./routes/service')
const reviewRoute=require('./routes/review')
const orderRoute=require('./routes/order')
const cors=require('cors')
const path=require('path')
const exphbs=require('express-handlebars')
const auth=require('./middleware/auth')

const publicDirectoryPath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates')
const hbs=exphbs.create({
    extname:'.html',
    layoutsDir:viewPath
})
const app=express()
port=process.env.PORT
app.use(express.json())
app.use(express.static(publicDirectoryPath))
app.engine('html',hbs.engine)
app.set('view engine','html')
app.set('views',viewPath)
app.use(cors())

app.get('/login',(req,res)=>{
    res.render('login',{layout:false})
})

app.get('/register',(req,res)=>{
    res.render('register',{layout:false})
})

app.get('/',(req,res)=>{
    res.render('home',{layout:false})
})

app.get('/cart',(req,res)=>{
    res.render('cart',{layout:false})
})
app.get('/reset',(req,res)=>{
    res.render('reset',{layout:false})
})
app.get('/paymode',(req,res)=>{
    res.render('payment_mode',{layout:false})
})
app.get('/otp',(req,res)=>{
    res.render('otp',{layout:false})
})
app.get('/change/password',(req,res)=>{
    res.render('resetPassword',{layout:false})
})

app.get('/myorder',(req,res)=>{
    res.render('myorder',{layout:false})
})
app.get('/home',(req,res)=>{
    res.render('index',{layout:false})
})

app.get('/review/add',(req,res)=>{
    res.render('add_review',{layout:false})
})

app.get('/review',(req,res)=>{
    res.render('review',{layout:false})
})

app.get('/about',(req,res)=>{
    res.render('about',{layout:false})
})

app.get('/about1',(req,res)=>{
    res.render('about1',{layout:false})
})
app.get('/vehicle',(req,res)=>{
    res.render('add_vehicle',{layout:false})
})
app.get('/vehicledisplay',(req,res)=>{
    res.render('display_veh',{layout:false})
})

app.get('/account',(req,res)=>{
    res.render('account',{layout:false})
})

app.get('/COD',(req,res)=>{
    res.render('COD',{layout:false})
})

app.get('/edit/profile',(req,res)=>{
    res.render('editprofile',{layout:false})
})

app.get('/img',(req,res)=>{
    res.render('imgupload',{layout:false})
})

app.get('/contact/us',(req,res)=>{
    res.render('contact',{layout:false})
})
app.use(userRoute)
app.use(vehicleRoute)
app.use(serviceRoute)
app.use(reviewRoute)
app.use(orderRoute)

app.listen(port,()=>{
    console.log('Server is running at port '+port)
})
