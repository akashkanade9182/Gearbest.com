const mongoose=require("mongoose")


const geekSchema=mongoose.Schema({
   
    title: {type:String,require:true},
    image: {type:String,require:true},
    images: {type:String,require:true},
    category:{type:String,require:true},
 
    brand: {type:String,require:true},
    price:{type:Number,require:true},
    quantity: {type:Number,require:true},
    favorite: {type:Boolean,require:true},
    rating:{type:Number,require:true},
   
   
 
})

const Geekmodel=mongoose.model("geekbuying",geekSchema);

module.exports=Geekmodel;