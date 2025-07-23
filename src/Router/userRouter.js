const express=require('express');
const createUser = require('../controlller/userController');

const userrouter=express.Router();

userrouter.post('/',createUser);

module.exports=userrouter;