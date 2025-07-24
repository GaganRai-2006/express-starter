const UserRepository = require("../repository/userRepository");
const UserService = require("../services/userService");

async function createUser(req,res){
    
    console.log(req.body);
    const userService=new UserService(new UserRepository());
    
    try{
        const createdUser=await userService.registerUser(req.body);
        return res.json({
            message:"user created",
            success:true,
            data:createdUser,
            error:{}
        })
        
    }catch(err){
        return res.status(err.statuscode).json({
            message:err.reason,
            success:false,
            data:{},
            error:err
        })
    }
}

module.exports=  createUser;

   