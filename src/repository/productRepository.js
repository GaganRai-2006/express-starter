const product=require('../schema/productSchema');

async function createProduct(productDetails){
    try{
        const response=await product.create({...productDetails});
        if(!response){
            throw{reason:"product is not created ",statuscode:500};
        }
        return response;
    }catch(err){
        console.log(err);
        throw{reason:"error while creating the product",statuscode:500};
    }
}

async function getProduct(id){
    try{
        const response=await product.findOne({_id:id});
        if(!response){
            throw{reason:"unable to get product",statuscode:404};
        }
        return response;
    }catch(err){
        console.log(err);
        throw{reason:"product couldn't find",statuscode:404};
    }
}

async function deleteProduct(id){
    try{
        const response=await product.deleteOne({_id:id});
        if(!response){
            throw{reason:"product not deleted",statuscode:400};
        }
        return response;
    }catch(err){
        console.log(err);
        throw{reason:"product couldn't find",statuscode:404};
    }
}

module.exports={
    createProduct,
    getProduct,
    deleteProduct
}