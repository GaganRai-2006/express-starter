const {productservice, getProductById, deleteProductById, getProductsdata} = require("../services/productService");


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

async function getproducts(req,res){
    
    try{
        
        const id=req.params.id;
        
        const response=await getProductById(id);
        if(!response){
            throw{reason:"Not found",statuscode:404};
        }
        return res.json({
            success:true,
            data:response,
            error:{}
        });
    }catch(err){
        console.log(err);
        return res.status(err.statuscode).json({
            success:false,
            data:{},
            error:err.reason
        })
    }

}

async function getproductsAll(req,res){
    
    try{
        
        
        
        const response=await getProductsdata();
        if(!response){
            throw{reason:"Not found",statuscode:404};
        }
        return res.json({
            success:true,
            data:response,
            error:{}
        });
    }catch(err){
        console.log(err);
        return res.status(err.statuscode).json({
            success:false,
            data:{},
            error:err.reason
        })
    }

}

async function deleteProduct(req,res){
    try{
        const id=req.params.id;
    if(!id){
        throw{reason:'id is not given',statuscode:400};
    }
    const response=await deleteProductById(id);
    if(!response){
        throw{reason:"not able to delete it",statuscode:400};
        }
    
    return res.json({
        success:true,
        message:"successfully delete the product",
        data:response,
        error:{}
    });   
    }catch(err){
       console.log(err);
       return res.status(err.statuscode).json({
        success:false,
        message:"Product is not exist",
        data:{},
        error:err.reason
       })
    }
}

module.exports={
    product,
    getproducts,
    deleteProduct,
    getproductsAll
}