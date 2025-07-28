const { findCart } = require("../repository/cartRepository");
const { createOrder, getOrderByUserId, getOrderdetails, UpdateOrderstatus } = require("../repository/orderRepository");
const { findUser } = require("../repository/userRepository");
const { ClearCart } = require("./cartService");


async function Createorder(userId,paymentMethod){
    const cart=await findCart(userId);
    
    const user=await findUser({_id:userId});
   
    if(!cart){
        throw{reason:"Cart not found for this User",statuscode:404};
    }
    if(cart.items.lenght==0){
        throw{reason:"cart is empty.Please add some products",statuscode:400};
    }
    orderObj={};
    orderObj.userId=cart.userId;
    orderObj.items=cart.items;
    orderObj.TotalPrice=0;

    cart.items.forEach(cartItem=>{
        orderObj.TotalPrice=+cartItem.quantity*cartItem.product.price;
    });
    orderObj.address=user.address;
    orderObj.status="ORDERED";
    orderObj.paymentMethod=paymentMethod;
    const order=await createOrder(orderObj);
    if(!order){
        throw{reson:"order is not placed",statuscode:500};
    }
    //await ClearCart(userId);
    return order;


}
async function getallOrders(userid){
    const orders=await getOrderByUserId(userid);
    if(!orders){
        throw{reason:"NO oders found",statuscode:404};
    }
    return orders;
}
async function getOrderByid(orderId){
    const order=await getOrderdetails(userid);
    console.log(order);
    if(!order){
        throw{reason:"NO oders found",statuscode:404};
    }
    return order;
}
async function updateOrderstatus(orderId,status){
    const order=await UpdateOrderstatus(orderId,status);
    console.log(order);
    if(!order){
        throw{reason:"Not able to update the order status",statuscode:400};
    }
    return order;
}
module.exports={
    Createorder,
    getallOrders,
    getOrderByid,
    updateOrderstatus,
}