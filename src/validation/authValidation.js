const jwt=require('jsonwebtoken');
const {SECRET_KEY}=require('../config/serverconfig');

async function isLoggedIn(req,res,next){
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
        id:decoded.id
    };

    next();
}

module.exports=isLoggedIn;