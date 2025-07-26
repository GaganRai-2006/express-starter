const Cart = require("../schema/cartSchema");


async function createCart(cartDetails){
    const id=cartDetails.userId;
    
    const user=await Cart.findOne({userId:id})
    if(user){
        throw{reason:"cart already exists for this user",statuscode:400};
    }
    

    try{
        const response=await Cart.create({...cartDetails});
        if(!response){
            throw{reason:"cart is not created",statuscode:500};
        }
        return response;
    }catch(err){
        console.log(err);
        throw{reason:"error while creaing the cart",statuscode:500};
    }
}
module.exports=createCart;