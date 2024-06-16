const mongoose=require("mongoose");
const bcrypt=require('bcrypt');
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    aadhar:{
        type:String,
        required:true,
        unique:true
    },
    has_voted:{
        type:Boolean,
        default:false
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum: ["voter","admin"],
        default:"voter"
    }
},{timestamps:true});


UserSchema.pre("save", async function(next){    // this function will be called whenever save function is called in mongoose
    const person =this; 
    //Hash the password only if it is modified
    if(!person.isModified("password")) return next();
    try {
        //generate random salt
        const salt=await bcrypt.genSalt(10);
        //generate hashed password with salt
        const hashedPassword= await bcrypt.hash(person.password,salt);
        //overwrite the password with hashed one    
        person.password=hashedPassword;

        next();
    } catch (err) {
        return next(err);
    }
});

UserSchema.methods.comparePassword = async function(candidatePassword){
    try {
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    } catch (error) {
        throw error
    }
}

const User=mongoose.model("User",UserSchema);
module.exports=User;