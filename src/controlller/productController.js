const productservice = require("../services/productService");


async function product(req,res){

    //service
    try{
        const response=await productservice(req.body,req.file);
        console.log(response);
        return res.json({
            success:true,
            message:"product created successfully",
            data:response,
            error:{}
        });
        
    }catch(err){
        console.log(err);
        return res.status(err.statuscode || 500).json({
            success:false,
            message:"not able to create product",
            data:{},
            error:err
        })
    }
}
module.exports=product;