const express=require('express');
const createUser = require('../controlller/userController');

const userrouter=express.Router();

userrouter.post('/create',createUser);

module.exports=userrouter;