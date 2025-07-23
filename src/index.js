const express=require('express');
const serverConfig=require('./config/serverconfig');
const app=express();



app.listen(serverConfig.PORT,()=>{
    console.log(`server is running at port ${serverConfig.PORT}`);
})