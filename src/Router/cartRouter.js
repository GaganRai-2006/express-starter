const express=require('express');
const {fetchcart, addProductToCart, clearCart} = require('../controlller/cartcontroller');
const { isLoggedIn } = require('../validation/authValidation');

const cartrouter=express.Router();

cartrouter.get('/',isLoggedIn,fetchcart);
cartrouter.post('/:operation/:productId',isLoggedIn,addProductToCart)
cartrouter.delete('/clear',isLoggedIn,clearCart);

module.exports=cartrouter;