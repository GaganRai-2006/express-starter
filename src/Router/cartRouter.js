const express=require('express');
const {fetchcart} = require('../controlller/cartcontroller');
const { isLoggedIn } = require('../validation/authValidation');

const cartrouter=express.Router();

cartrouter.get('/cart',isLoggedIn,fetchcart);

module.exports=cartrouter;