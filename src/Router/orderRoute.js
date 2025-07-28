const express=require('express');
const { Order, getAllOrders, getOrderdetails, cancelOrder, updateOrder } = require('../controlller/orderController');
const { isLoggedIn, isAdmin } = require('../validation/authValidation');

const orderrouter=express.Router();

orderrouter.post('/order',isLoggedIn,Order);
orderrouter.get('/All/orders',isLoggedIn,getAllOrders);
orderrouter.get('/order/:orderId',isLoggedIn,getOrderdetails);
orderrouter.put('/order/cancel/:orderId',isLoggedIn,cancelOrder);
orderrouter.put('/order/status/:orderId',isLoggedIn,isAdmin,updateOrder);

module.exports={
    orderrouter,
}