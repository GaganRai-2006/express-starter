const express=require('express');
const cookieParser=require('cookie-parser');
const serverConfig=require('./config/serverconfig');
const connectDB = require('./config/dbconfig');
const User=require('./schema/userSchema');
const userrouter = require('./Router/userRouter');
const cartrouter = require('./Router/cartRouter');
const authroute = require('./Router/authRoute');
const {isLoggedIn} = require('./validation/authValidation');
const uploader = require('./middlewares/multerMiddleware');
const cloudinary=require('./config/cloudinaryConfig');
const fs=require('fs/promises');
const productroute = require('./Router/productRoute');
const { orderrouter } = require('./Router/orderRoute');
const cors=require('cors');
const app=express();

app.use(cors({
    origin:'http:localhost:5173',
    Credential:true,
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.text());
app.use(cookieParser());
app.use('/users',userrouter);

app.use('/auth',authroute);
app.use('/create',productroute);
app.use('/products',productroute);
app.use('/product/delete',productroute);
app.use('/user/cart',cartrouter);
app.use('/user',orderrouter)



app.get('/ping',(req,res)=>{
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message:"pong"});
})

app.listen(serverConfig.PORT,async()=>{
     await connectDB()
    console.log(`server is running at port ${serverConfig.PORT}`);

 
})