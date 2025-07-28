const Order = require("../schema/orderSchema");

async function createOrder(orderDetails){
    const order=await Order.create(orderDetails);
    if(!order){
        throw {reason:"Order is not placed",statuscode:400};

    }
    return order;
}
async function getOrderByUserId(Userid){
    try{
        const orders=await Order.find({userId:Userid}).populate('items.product');
        return orders;
    
    }catch(err){
        console.log(err);
        throw{reason:"not get the orders",statuscode:500};
    }
}

async function getOrderdetails(orderId){
    try{
        const order=await Order.findById(orderId).populate('items.product');
        return order;
    }catch(err){
        console.log(err);
        throw{reason:"not get the order",statuscode:500};
    }
}

async function UpdateOrderstatus(orderId,status){
    try{
        const order=await Order.findByIdAndUpdate(orderId,{status:status},{new:true}).populate('items.product');
        return order;
    }catch(err){
        console.log(err);
        throw{reason:"Unable to cancel order",statuscode:500};
    }
}



module.exports={
    createOrder,
    getOrderByUserId,
    getOrderdetails,
    UpdateOrderstatus
}