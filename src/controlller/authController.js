const loginUser = require("../services/authService");

async function login(req,res){
    const payload=req.body;

    //service
    try{
        const response=await loginUser(payload);
        res.cookie('authToken',response,{
            httpOnly:true,
            secure:false,
            maxAge:24*60*60*1000 //24 hours
        });

        return res.status(200).json({
            success:true,
            message:"loggin successfully",
            data:{},
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
async function logout(req,res){
    res.cookie("authToken","",{
            httpOnly:true,
            secure:false,
            maxAge:24*60*60*1000 //24 hours
        });
    return res.status(200).json({
        sucess:true,
        message:"logout successfully",
        data:{},
        err:{}
    })
}


module.exports={
    login,
    logout,
}