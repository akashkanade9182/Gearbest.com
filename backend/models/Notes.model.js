const mongoose=require("mongoose")


const noteSchema=mongoose.Schema({
   
    title: {type:String,require:true},
    content: {type:String,require:true},
    category: {type:String,require:true},
  
})

const Notemodel=mongoose.model("Notes",noteSchema);

module.exports=Notemodel;