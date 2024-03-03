import React from 'react'
import { Link } from 'react-router-dom'
import RecipeDetail from './RecipeDetail'

function Recipe({ recipes, handleDeleteButton }) {


    return (
        <>
            <ol>
                <div className='bg-gray-100 flex m-2.5 '>

                    <img src={recipes.image} className='h-64 w-60 rounded-2xl mr-2' />

                    <div className='flex flex-col w-full'>
                        <div className=' items-center'>
                            <h2 className='pb-2 font-bold text-2xl'>{recipes.title}</h2>
                            <p className='w-5/12'>{recipes.description}</p>
                            <div className='pt-2.5 flex'>
                                {
                                    Array(Number(recipes.rating))
                                        .fill()
                                        .map((_) => (
                                            <p>⭐</p>
                                        ))
                                }
                            </div>
                        </div>

                        <div className='justify-self-end ml-auto mb-2'>
                            <Link to={`/recipedetails/${recipes.id}/${recipes.title}`
                            } state={{ recipes }}>
                                <button className=' border border-solid bg-orange-400 border-black px-2 h-8 mr-2 ' >How to Make</button>
                            </Link>

                            <button className=' border border-solid bg-orange-400 border-black px-2 h-8' onClick={() => handleDeleteButton(recipes)}>Delete</button>
                        </div>
                    </div>
                </div >
            </ol>


        </>
    )
}

export default Recipe
