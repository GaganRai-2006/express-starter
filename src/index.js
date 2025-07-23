const express=require('express');
const serverConfig=require('./config/serverconfig');
const connectDB = require('./config/dbconfig');
const User=require('./schema/userSchema');
const userrouter = require('./Router/userRouter');
const cartrouter = require('./Router/cartRouter');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.text());
app.use('/users',userrouter);
app.use('/cart',cartrouter);

app.post('/ping',(req,res)=>{
    console.log(req.body);
    return res.json({message:"pong"});
})

app.listen(serverConfig.PORT,async()=>{
     await connectDB()
    console.log(`server is running at port ${serverConfig.PORT}`);

    // const newUser= await User.create({
    //     firstName:"gagan",
    //     lastName:"duncan",
    //     mobileNumber:"1234567890",
    //     email:"abc@gmail.com",
    //     password:"rtae453"
    // })
    // console.log("user created",newUser);
})