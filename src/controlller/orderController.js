const { getOrderByUserId } = require("../repository/orderRepository");
const { Createorder, updateOrderstatus } = require("../services/orderService");

async function Order(req,res){
    try{
        const response=await Createorder(req.user.id,req.body.paymentMethod);
        if(!response){
            throw{reason:"Order is not placed",statuscode:500};
        }
        return res.status(201).json({
        success:true,
        message:"Successfully placed the order",
        data:response,
        err:{}
        })
    }catch(err){
        console.log(err);
        return res.status(err.statuscode).json({
            success:false,
            message:"Error while placing the order",
            data:{},
            error:err.reason
        })
    }
}
async function getAllOrders(req,res){
    try{
        const response=await getOrderByUserId(req.user.id);
        if(!response){
            throw{reason:"Orders not able get it",statuscode:500};
        }
        return res.status(200).json({
        success:true,
        message:"Successfully get all the orders",
        data:response,
        err:{}
        })
    }catch(err){
        console.log(err);
        return res.status(err.statuscode).json({
            success:false,
            message:"Error while getting the orders",
            data:{},
            error:err.reason
        })
    }
}
async function getOrderdetails(req,res){
    try{
        const response=await getOrderByUserId(req.params.orderId);
        console.log(response);
        if(!response){
            throw{reason:"Order not able get it",statuscode:500};
        }
        return res.status(200).json({
        success:true,
        message:"Successfully get  the order",
        data:response,
        err:{}
        })
    }catch(err){
        console.log(err);
        return res.status(err.statuscode).json({
            success:false,
            message:"Error while getting the order",
            data:{},
            error:err.reason
        })
    }
}
async function cancelOrder(req,res){
    try{
        const response=await updateOrderstatus(req.params.orderId,"CANCEL");
        if(!response){
            throw{reason:"Order not able get it",statuscode:500};
        }
        return res.status(200).json({
        success:true,
        message:"Successfully update the order status",
        data:response,
        err:{}
        })
    }catch(err){
        console.log(err);
        return res.status(err.statuscode).json({
            success:false,
            message:"Error while cancelling the order",
            data:{},
            error:err.reason
        })
    }
}
async function updateOrder(req,res){
    try{
        const response=await updateOrderstatus(req.params.orderId,req.body.status);
        if(!response){
            throw{reason:"Order not able get it",statuscode:500};
        }
        return res.status(200).json({
        success:true,
        message:"Successfully update the order status",
        data:response,
        err:{}
        })
    }catch(err){
        console.log(err);
        return res.status(err.statuscode).json({
            success:false,
            message:"Error while update the order status",
            data:{},
            error:err.reason
        })
    }
}
module.exports={
    Order,
    getAllOrders,
    getOrderdetails,
    cancelOrder,
    updateOrder,
}