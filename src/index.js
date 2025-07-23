const express=require('express');
const serverConfig=require('./config/serverconfig');
const connectDB = require('./config/dbconfig');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.text());

app.post('/ping',(req,res)=>{
    console.log(req.body);
    return res.json({message:"pong"});
})

app.listen(serverConfig.PORT,async()=>{
     await connectDB()
    console.log(`server is running at port ${serverConfig.PORT}`);
})