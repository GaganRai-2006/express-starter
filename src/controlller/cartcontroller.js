const {getcart} = require("../services/cartService");


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
module.exports={
    fetchcart,
}