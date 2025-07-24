const User=require('../schema/userSchema');

class UserRepository{
    
    async findUser(parameters){
        try{
            const response=await User.findOne({...parameters});
            return response;
        }catch(err){
            throw{reason:"error while fetching the user",statuscode:500};
        }
    }
    async createUser(userDetails){
        try{
            const user= await User.create({
                firstName:userDetails.firstName,
                lastName:userDetails.lastName,
                email:userDetails.email,
                mobileNumber:userDetails.mobileNumber,
                password:userDetails.password            
            });
            return user;
        }catch(err){
            console.log(err);
            throw{reason:"error while creating the user",statuscode:500};
            
        }
    }

    

    
    
    
    
}
module.exports=UserRepository;