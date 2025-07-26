const jwt=require('jsonwebtoken');
const {SECRET_KEY}=require('../config/serverconfig');

function isLoggedIn(req,res,next){
    const token=  req.cookies["authToken"];
    if(!token){
        return res.status(401).json({
            success:false,
            message:"No token provided",
            data:{},
            error:"not authenticated"
        })
    }

    const decoded=jwt.verify(token,SECRET_KEY);
    if(!decoded){
        return res.status(401).json({
            success:false,
            message:"Invalid token provided",
            data:{},
            error:"not authenticated"
        })

    }
    req.user={
        email:decoded.email,
        id:decoded.id,
        role:decoded.role
    };

    next();
}
function isAdmin(req,res,next){
    if(req.user.role !=="ADMIN"){
        return res.status(403).json({
            sucess:"false",
            message:"you are not authorized to perform this action",
            data:{},
            error:{
                statuscode:403,
                reason:"Unauthorized"
            }
        })
    }
    next();
}

module.exports={
    isLoggedIn,
    isAdmin,
}