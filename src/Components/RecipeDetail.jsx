import React from 'react'
import { useLocation } from 'react-router'

function RecipeDetail() {
    const state = useLocation();


    return (
        <>
            <div className='flex flex-col items-center mt-4'>
                <img src={state.state.recipes.image} className='w-80 h-1/4 rounded-lg' />

                <h1 className='font-extrabold text-2xl'>{state.state.recipes.title}</h1>
                <div className='pt-2.5 flex text-2xl'>Rating:
                    {
                        Array(Number(state.state.recipes.rating))
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>

                <p className='text-xl mt-2'>Ingredients: {state.state.recipes.ingredients
                }</p>

                <p className='text-xl mt-2'>Process : {state.state.recipes.making}</p>

                <div className="fixed bottom-0 right-0 m-4">
                    <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl cursor-pointer" >
                        <i class="fa-solid fa-pencil"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeDetail
