const express=require("express");
const db=require('./db');
app=express();
app.listen(3000,()=>{
    console.log("server is listening at localhost 3000");
})
