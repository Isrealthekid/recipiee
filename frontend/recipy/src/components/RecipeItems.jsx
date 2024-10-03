import React from 'react'
import { useLoaderData } from 'react-router-dom'

const RecipeItems = () => {
  const allRecipes=useLoaderData()
  console.log(allRecipes)
  return (
    <div>RecipeItems</div>
  )
}

export default RecipeItems