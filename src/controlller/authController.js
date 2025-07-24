const loginUser = require("../services/authService");

async function login(req,res){
    const payload=req.body;

    //service
    try{
        const response=await loginUser(payload);
        return res.status(200).json({
            success:true,
            message:"loggin successfully",
            data:response,
            error:{}
        })
    }catch(err){
        console.log(err);
        return res.status(err.statuscode).json({
            success:false,
            message:err.reason,
            data:{},
            error:err
        })
    }
}

module.exports=login;