import React, { useState } from 'react'
import { useLocation } from 'react-router'

function RecipeDetail() {
    const state = useLocation();

    const [formData, setFormData] = useState(state.state.recipes);
    console.log(state.state.recipes.id);
    const [formOpen, setFormOpen] = useState(false);

    function handleEditBtn() {
        setFormOpen(true);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setFormOpen(false);
        updateLocalStorage();
    }


    function updateLocalStorage() {
        const arr = JSON.parse(localStorage.getItem('recipeList'));
        arr.forEach((obj) => {
            if (obj.id === formData.id) {
                obj.ingredients = formData.ingredients
                obj.making = formData.making
            }
        })
        console.log(arr);
        localStorage.setItem('recipeList', JSON.stringify(arr));
    }

    function handleInputChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

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

                <h1 className='font-bold text-2xl mt-2'>Ingredients</h1>
                <p className='text-xl mt-2'> {formData.ingredients
                }</p>

                <h1 className='font-bold text-2xl'>Process</h1>
                <p className='text-xl mt-2'> {formData.making}</p>

                <div className="fixed bottom-0 right-0 m-4">
                    <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl cursor-pointer" onClick={handleEditBtn}>
                        <i class="fa-solid fa-pencil"></i>
                    </div>
                </div>
            </div>


            {formOpen && (<div className='flex flex-col h-3/6 w-3/6 bg-gray-500 ml-8'>
                <form className='flex flex-col items-center'>
                    <label className='font-bold'>Ingredients</label>
                    <textarea name='ingredients' onChange={handleInputChange} value={formData.ingredients}>{state.state.recipes.ingredients}</textarea>

                    <label className='font-bold'>Making</label>
                    <textarea onChange={handleInputChange} name='making' value={formData.making}>{state.state.recipes.making}</textarea>

                    <button className='border border-solid bg-orange-400 border-black w-6/12 h-8 my-2.5'
                        onClick={handleSubmit}>Submit</button>
                </form>
            </div>)}
        </>
    )
}

export default RecipeDetail
