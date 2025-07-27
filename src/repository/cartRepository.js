const Cart = require("../schema/cartSchema");


async function createCart(id){
    
    
    const user=await Cart.findOne({userId:id})
    if(user){
        throw{reason:"cart already exists for this user",statuscode:400};
    }
    

    try{
        const response=await Cart.create({
            userId:id
        });
        if(!response){
            throw{reason:"cart is not created",statuscode:500};
        }
        return response;
    }catch(err){
        console.log(err);
        throw{reason:"error while creaing the cart",statuscode:500};
    }
}
async function findCart(id){
    try{
        const response=await Cart.findOne({userId:id});
        if(!response){
            newCart=await createCart(id);
            return newCart;
        }
        return response;

    }catch(err){
        console.log(err);
        throw{reason:"Unable to find the cart",statuscode:404};
    }
}

module.exports={
    createCart,
    findCart,
};