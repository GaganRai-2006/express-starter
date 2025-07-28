const {getcart, addTocartOrRemove, ClearCart} = require("../services/cartService");


async function fetchcart(req,res){
    try{
        const cartId=req.user.id;
        const response=await getcart(cartId);
        return res.status(200).json({
            success:true,
            message:"successfully getting the cart",
            data:response,
            error:{}
        })
    }catch(err){
        console.log(err);
        return res.status(err.statuscode).json({
            success:false,
            message:err.reason,
            data:{},
            error:err
        })
    }
}
async function addProductToCart(req,res){
    try{
        const userId=req.user.id;
        const response=await addTocartOrRemove(userId,req.params.productId,req.params.operation);
        return res.status(200).json({
            success:true,
            message:"successfully add the  product to cart",
            data:response,
            error:{}
        })
    }catch(err){
        console.log(err);
        return res.status(err.statuscode).json({
            success:false,
            message:err.reason,
            data:{},
            error:err
        })
    }
}
async function clearCart(req,res){
    try{
        const userId=req.user.id;
        const response=await ClearCart(userId);
        return res.status(200).json({
            success:true,
            message:"successfully clear the cart",
            data:response,
            error:{}
        })
    }catch(err){
        console.log(err);
        return res.status(err.statuscode).json({
            success:false,
            message:err.reason,
            data:{},
            error:err
        })
    }
}

module.exports={
    fetchcart,
    addProductToCart,
    clearCart,
}