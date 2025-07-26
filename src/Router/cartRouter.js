const express=require('express');
const cart = require('../controlller/cartcontroller');

const cartrouter=express.Router();

cartrouter.post('/cart',cart);

module.exports=cartrouter;