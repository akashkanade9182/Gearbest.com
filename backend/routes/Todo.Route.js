const express=require("express");




const Todomodel=require("../models/Todo.model")





const TodoRouter=express.Router();


TodoRouter.get("/",async(req,res)=>{
    let query=req.query;
    let sortorder;
    if(req.query._order){
        if(req.query._order==="asc"){
            sortorder=1
        }else{
            sortorder=-1
        }
    }else{
        sortorder
    }
    let filter={};
    query.category && (filter.category=query.category);
    query.brand && (filter.brand={ $in: query.brand});
    query.price_lte && (filter.price={ $gt: 0, $lt: query.price_lte })

    let todos
    if(query._sort){
        todos=await Todomodel.find(filter).sort({price:sortorder});
    }else{
        todos=await Todomodel.find(filter);
    }
    if(todos){
        res.status(200).send(todos) 
    }else{
        res.status(4000).send("somthing is error")

    }

})

TodoRouter.get("/title",async(req,res)=>{
    let query=req.query;
    
   try{
 let result=await Todomodel.find({title:{$regex:query.title,$options:'i'}})
 res.send(result)
   }
   catch(e){
    res.status(400).json({ message: 'Invalid data provided' })
   }
   



})

TodoRouter.post("/",async(req,res)=>{
    let data=req.body;
    let todos=new Todomodel(data);
    await todos.save();
    res("product added successfully")
})

TodoRouter.get("/:id",async(req,res)=>{
    const id=req.params.id;
    let todos=await Todomodel.findById({_id:id});
    console.log(id)
    res.send(todos)

})



TodoRouter.patch("/:id",async(req,res)=>{
    const id=req.params.id;
    let payload=req.body;
  
    await Todomodel.findOneAndUpdate({_id:id},payload)
    const note = await Todomodel.findOne({_id:id})
    res.send(note)
})

















module.exports=TodoRouter