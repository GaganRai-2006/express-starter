const createCart = require("../repository/cartRepository");

async function Createcart(cartDetails){
    try{
        const response=await createCart(cartDetails);
       
        if(!response){
            throw{reason:"cart is not creatde",statuscode:500};
        }
        return response;
    }catch(err){
        console.log(err);
        throw{reason:"error while creating the cart",statuscode:500};
    }

}
module.exports=Createcart;