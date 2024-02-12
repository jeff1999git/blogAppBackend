const express=require("express")
const router = express.Router()

router.get("/view",(req,res)=>{
    res.send("Get View")
})

router.post("/add",(req,res)=>{
    res.send("Post Add")
})

module.exports=router