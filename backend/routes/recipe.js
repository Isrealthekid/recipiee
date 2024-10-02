const express=require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe} = require("../controller/recipe")
const router=express.Router()

router.get("/",getRecipes)//get all recipes
router.get("/:id",getRecipe)//get single recipe by id
router.post("/",addRecipe)//add/create a new recipe
router.put("/:id",editRecipe)//edit/update a recipe
router.delete("/:id",deleteRecipe)//delete a recipe


module.exports=router