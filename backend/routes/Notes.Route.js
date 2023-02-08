const express=require("express");




const Notemodel=require("../models/Notes.model")





const NoteRouter=express.Router();


NoteRouter.get("/",async(req,res)=>{
    let query=req.query;
    let todos=await Todomodel.find(query);
    res.send(todos)

})

NoteRouter.get("/:id",async(req,res)=>{
    const id=req.params.id;
    let todos=await Todomodel.findOne({_id:id});
    res.send(todos)

})
NoteRouter.post("/",async(req,res)=>{
    const data=req.body;
    let todos=new Notemodel(data);
    todos.save();
    res.send("note added successfully")

})



NoteRouter.patch("/:id",async(req,res)=>{
    const id=req.params.id;
    let payload=req.body;
  
    await Todomodel.findOneAndUpdate({id},payload)
    const note = await Todomodel.findOne({id:id})
    res.send(note)
})
exports.module=NoteRouter
















module.exports=NoteRouter