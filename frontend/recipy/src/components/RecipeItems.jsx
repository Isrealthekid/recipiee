import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.png'
import { BiSolidStopwatch } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";

const RecipeItems = () => {
  const allRecipes=useLoaderData()
  console.log(allRecipes)
  return (
    <>
    <div className='card-container'>
      { allRecipes?.map((item, index) => {
        return(
          <div className='card' key={index}>
            <img src={`http://localhost:5000/images/${item.coverImage}`} width="120px" height="100px"></img>

            <div className='card-body'>
                <div className="title">{item.title}</div>
              <div className="icons">
                  <div className='time'><BiSolidStopwatch />{item.time}min</div>
                  <BiSolidHeart />
              </div>
            </div>
          </div>
        )
      })}
    </div>
    
    </>
  )
}

export default RecipeItems