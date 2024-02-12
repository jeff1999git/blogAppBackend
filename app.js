const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const postRoute=require("./contollers/postRouter")

const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/blog",postRoute)

app.listen(3001,()=>{
    console.log("Server Running");
})