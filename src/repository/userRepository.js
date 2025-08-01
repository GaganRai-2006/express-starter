const User=require('../schema/userSchema');


    
    async function findUser(parameters){
        
        try{
            const response=await User.findOne({...parameters});
            console.log(response);
            return response;
        }catch(err){
            throw{reason:"error while fetching the user",statuscode:500};
        }
    }
    async function createUser(userDetails){
        try{
            const user= await User.create({...userDetails});
            return user;
        }catch(err){
            console.log(err);
            throw{reason:"error while creating the user",statuscode:500};
            
        }
    }

module.exports={
    findUser,
    createUser
}