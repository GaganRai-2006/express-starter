const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minlenght:[5,"firstname must be atleast 5 characters"],
        maxlenght:[20,"firstname must be atmost 20 characters"],
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minlenght:[5,"lasttname must be atleast 5 characters"],
        maxlenght:[20,"lastname must be atmost 20 characters"],
    },
    mobileNumber:{
        type:String,
        required:true,
        unique:[true,"mobile number must be unique"],
        trim:true,
    },
    email:{
        type:String,
        required:[true,"email should be provided"],
        uninue:[true,"email must be unique"],
        trim:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:[true,"password should be provided"],
        minlenght:[6,"password must be atleast 6 characters"]
    }

},{timestamps:true});

userSchema.pre('save',async function(){
    const modified_pass=await bcrypt.hash(this.password,10);
    this.password=modified_pass;
});
const User=mongoose.model('User',userSchema);
module.exports=User;