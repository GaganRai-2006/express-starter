const express=require('express');
const cookieParser=require('cookie-parser');
const serverConfig=require('./config/serverconfig');
const connectDB = require('./config/dbconfig');
const User=require('./schema/userSchema');
const userrouter = require('./Router/userRouter');
const cartrouter = require('./Router/cartRouter');
const authroute = require('./Router/authRoute');
const isLoggedIn = require('./validation/authValidation');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.text());
app.use(cookieParser());
app.use('/users',userrouter);
app.use('/cart',cartrouter);
app.use('/auth',authroute);

app.get('/ping',isLoggedIn,(req,res)=>{
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message:"pong"});
})

app.listen(serverConfig.PORT,async()=>{
     await connectDB()
    console.log(`server is running at port ${serverConfig.PORT}`);

 
})