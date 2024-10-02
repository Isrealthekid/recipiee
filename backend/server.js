const express=require("express")
const app=express()
const dotenv=require("dotenv").config()

const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.json({message: "Welcome to our recipie application"})
})
app.listen(PORT,(err)=>{
    console.log(`Server is running on port ${PORT}`)
})