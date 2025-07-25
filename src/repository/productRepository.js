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

module.exports={
    createProduct
}