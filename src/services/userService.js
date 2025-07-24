class UserService{
    constructor(UserRepository){
        this.UserRepository=UserRepository;
    }
    

   async registerUser(userDetails){
        const user=await this.UserRepository.findUser({
            email:userDetails.email,
            mobileNumber:userDetails.mobileNumber
        });

        if(user){
            throw{reason:"user with this email or mobile number already exists",statuscode:400};
        }
        
        const newUser=await this.UserRepository.createUser(userDetails);
        
           

        if(!newUser){
            throw{reason:"user creation failed",statuscode:500};
        }
        return newUser;

    }
}

module.exports=UserService;