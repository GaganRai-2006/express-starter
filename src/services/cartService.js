const {findCart} = require("../repository/cartRepository");

async function getcart(cartDetails){
    try{
        const response=await findCart(cartDetails);
       
        if(!response){
            throw{reason:"Not getting the Cart",statuscode:500};
        }
        return response;
    }catch(err){
        console.log(err);
        throw{reason:"error while fetching the cart",statuscode:500};
    }

}
module.exports={
    getcart,
}