const mongoose=require("mongoose")


const todoSchema=mongoose.Schema({
   
    title: {type:String,require:true},
    image: {type:String,require:true},
    category:{type:String,require:true},
    subcategory:{type:String,require:true},
    brand: {type:String,require:true},
    price:{type:Number,require:true},
    MRP: {type:Number,require:true},
    quantity: {type:Number,require:true},
})

const Todomodel=mongoose.model("netmed",todoSchema);

module.exports=Todomodel;