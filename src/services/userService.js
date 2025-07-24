
const { findUser,createUser } = require("../repository/userRepository");
    
async function registerUser(userDetails){
    try{
        const user=await findUser({
        email:userDetails.email,
        mobileNumber:userDetails.mobileNumber
    });

        if(user){
            throw{reason:"user with this email or mobile number already exists",statuscode:400};
        }
        
        const newUser=await createUser(
            {
                firstName:userDetails.firstName,
                lastName:userDetails.lastName,
                email:userDetails.email,
                mobileNumber:userDetails.mobileNumber,
                password:userDetails.password            
            }
        );
        
           

        if(!newUser){
            throw{reason:"user creation failed",statuscode:500};
        }
        return newUser;

    }
    catch(err){
        console.log(err);
        throw({reason:"error while registering the user",statuscode:500});
    }
            }
        
module.exports=registerUser;