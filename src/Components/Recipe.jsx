import React from 'react'
import { Link } from 'react-router-dom'
import RecipeDetail from './RecipeDetail'

function Recipe({ recipes }) {
    function handleDeleteButton(e) {
        //console.log(e);
    }

    return (
        <>
            <div className='bg-gray-100 flex m-2.5 '>
                <img src={recipes.image} className='h-64 w-60 rounded-2xl mr-2' />

                <div className='items-center'>
                    <h2 className='pb-2 font-bold text-2xl'>{recipes.title}</h2>
                    <p>{recipes.description}</p>
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

                <div className='self-end ml-auto mb-2'>
                    <Link to={`/recipedetails/${recipes.id}/${recipes.title}`
                    } state={{ recipes }}>
                        <button className=' border border-solid bg-orange-400 border-black px-2 h-8 mr-2 ' >How to Make</button>
                    </Link>

                    <button className=' border border-solid bg-orange-400 border-black px-2 h-8' onClick={handleDeleteButton}>Delete</button>
                </div>



            </div >

        </>
    )
}

export default Recipe
