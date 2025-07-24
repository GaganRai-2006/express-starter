const express=require('express');
const login = require('../controlller/authController');

const authroute=express.Router();

authroute.post('/login',login);
module.exports=authroute;