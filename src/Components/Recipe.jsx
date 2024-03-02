import React from 'react'

function Recipe({ recipes }) {
    return (
        <>
            <div className='bg-gray-100 flex m-2.5 '>
                <img src={recipes.image} className='h-64 w-60 rounded-2xl mr-2' />

                <div className='items-center'>
                    <h2 className='pb-2 font-bold text-2xl'>{recipes.title}</h2>
                    <p>{recipes.description}</p>
                    <div className='pt-2.5 flex'>
                        {
                            Array(recipes.rating)
                                .fill()
                                .map((_) => (
                                    <p>⭐</p>
                                ))
                        }
                    </div>
                </div>



            </div>

        </>
    )
}

export default Recipe
