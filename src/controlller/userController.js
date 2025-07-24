const registerUser = require("../services/userService");


async function createUser(req,res){
    
    console.log(req.body);
    
    
    try{
        const createdUser= await registerUser(req.body);
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

   