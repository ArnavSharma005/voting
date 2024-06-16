const mongoose=require("mongoose");
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

const User=mongoose.model("User",UserSchema);
module.exports=User;