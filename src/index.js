const express=require('express');
const serverConfig=require('./config/serverconfig');
const connectDB = require('./config/dbconfig');
const app=express();



app.listen(serverConfig.PORT,async()=>{
     await connectDB()
    console.log(`server is running at port ${serverConfig.PORT}`);
})