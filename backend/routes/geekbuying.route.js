const express=require("express");




const Geekmodel=require("../models/geekbuying.model")





const geekRouter=express.Router();


geekRouter.get("/",async(req,res)=>{
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
        todos=await Geekmodel.find(filter).sort({price:sortorder});
    }else{
        todos=await Geekmodel.find(filter);
    }
    res.send(todos)

})
// geekRouter.get("/admin",async(req,res)=>{
//     try { let todos
//         let query=req.query;
//         let filter={};
//         query.category && (filter.category=query.category);
//         query.brand && (filter.brand={ $in: query.brand});
//         query.price_lte && (filter.price={ $gt: 0, $lt: query.price_lte })
//         let startindex=(query.page-1)*query.limit;
//         todos=await Geekmodel.find(filter).skip(startindex).limit(query.limit);
//     res.status(200).send(todos)}
//     catch(e){
//         res.status(400).send("error to get item")
//     }

// })
geekRouter.get("/homepage",async(req,res)=>{
      try { let todos
        let query=req.query;
        let filter={};
        query.category && (filter.category=query.category);
        query.brand && (filter.brand={ $in: query.brand});
        query.price_lte && (filter.price={ $gt: 0, $lt: query.price_lte })
        let startindex=(query.page-1)*query.limit;
        todos=await Geekmodel.find(filter).sort({_id: -1}).skip(startindex).limit(query.limit);
    res.status(200).send(todos)}
    catch(e){
        res.status(400).send("error to get item")
    }

    
})

geekRouter.get("/title",async(req,res)=>{
    let query=req.query;
    
   try{
 let result=await Geekmodel.find({title:{$regex:query.title,$options:'i'}})
 res.send(result)
   }
   catch(e){
    res.status(400).json({ message: 'Invalid data provided' })
   }
   



})


geekRouter.post("/",async(req,res)=>{
 try{
    let data=req.body;
    let todos=new Geekmodel(data);
    await todos.save();
    res.status(200).send("product added successfully")
 }
 catch(e){
    res.status(400).send("error in product add")
 }
})

geekRouter.get("/:id",async(req,res)=>{
    const id=req.params.id;
    let todos=await Geekmodel.findById({_id:id});
    console.log(id)
    res.send(todos)

})



geekRouter.patch("/:id",async(req,res)=>{
    const id=req.params.id;
    let payload=req.body;
  
    await Geekmodel.findOneAndUpdate({_id:id},payload)
    const note = await Geekmodel.find()
    res.send(note)
})

geekRouter.delete("/:id",async(req,res)=>{
    const id=req.params.id;
  try{
    await Geekmodel.findByIdAndDelete({_id:id})
    const note = await Geekmodel.findOne({_id:id})
    res.status(200).send("products is deleted")
  }
  catch(e){
    res.status(400).send("error in delete product")
  }
  
 
})




module.exports=geekRouter