const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    name : {type:String,require:true},
    address : {type:String,require:true},
   email: {type:String,require:true},
   password: {type:String,require:true},
   mobile: {type:Number,require:true},
    
})

const Usermodel=mongoose.model("users",userSchema);

module.exports=Usermodel;


