const Createcart = require("../services/cartService");

async function cart(req,res){
    try{
        const cartDetails=req.body;
        const response=await Createcart(cartDetails);
        return res.status(201).json({
            success:true,
            message:"successfulle creating the cart",
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
module.exports=cart;