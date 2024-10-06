const express=require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload} = require("../controller/recipe")
const router=express.Router()
const verifyToken = require('../middleware/auth')

router.get("/",getRecipes)//get all recipes
router.get("/:id",getRecipe)//get single recipe by id
router.post("/",upload.single('file'),verifyToken,addRecipe)//add/create a new recipe
router.put("/:id",upload.single('file'),editRecipe)//edit/update a recipe
router.delete("/:id",deleteRecipe)//delete a recipe


module.exports=router