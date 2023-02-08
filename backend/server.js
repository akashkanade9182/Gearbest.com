const express=require("express")
const cors = require("cors")


const connection=require("./config/db")
const TodoRouter=require("./routes/Todo.Route")
const NoteRouter=require("./routes/Notes.Route");
const geekRouter=require("./routes/geekbuying.route")
const  userRouter=require("./routes/user.route")

const app=express()
app.use(express.json());
app.use(cors({
    origin : "*"
}))


app.use("/netmed",TodoRouter);
app.use("/notes",NoteRouter);
app.use("/geekbuying",geekRouter);
app.use("/user",userRouter);





app.listen(7000,async()=>{
    try{
        await connection
        console.log("server is connected")
        console.log("server is running on port 7000");
    }
    catch(err){
        console.log(" error in server connect")
    }
})



