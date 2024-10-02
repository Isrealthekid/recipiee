const express=require("express")
const { getRecipe} = require("..//controller/recipe")
const router=express.Router()

router.get("/",getRecipe)

module.exports=router