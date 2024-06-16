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
        required:true
    },
    has_voted:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const User=mongoose.model("User",UserSchema);
module.exports=User;