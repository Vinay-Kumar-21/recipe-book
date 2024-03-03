import React, { useState } from 'react'

function Form({ setForm, setRecipeList, recipeList }) {
    const { v4: uuidv4 } = require('uuid');

    const [formData, setFormData] = useState({});
    function handleSubmit(e) {
        e.preventDefault();

        setRecipeList((prev) => {
            return [...prev, formData];
        })
        setForm(false);
    }

    function handleInputChange(e) {
        setFormData({
            ...formData,
            id: uuidv4(),
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className='flex flex-col justify-center h-3/6 w-3/6 bg-gray-500 ml-80'>
                <h1 className='font-extrabold text-center'> Add a New Recipe</h1>
                <form className='flex flex-col items-center m-4 '>
                    <label className='font-bold text-xl'>Title</label>
                    <input type='text' placeholder='Title of recipe' className='w-3/5 ' onChange={handleInputChange} name="title" />

                    <label className='font-bold text-xl'>Rating</label>
                    <input type='number' className='w-3/5' onChange={handleInputChange} name="rating" />

                    <label className='font-bold text-xl'>Making</label>
                    <textarea placeholder='Enter the Making process' className='w-3/5' onChange={handleInputChange} name="making"></textarea>

                    <label className='font-bold text-xl'>Ingredients</label>
                    <textarea placeholder='Enter required ingredients' className='w-3/5' onChange={handleInputChange} name="ingredients"></textarea>

                    <label className='font-bold text-xl'>Description</label>
                    <textarea placeholder='Enter a brief decsription' className='w-3/5' onChange={handleInputChange} name="description"></textarea>

                    <label className='font-bold'>Image URL:</label>
                    <textarea placeholder='Enter a img url' className='w-3/5' onChange={handleInputChange} name="image"></textarea>

                    <button onClick={handleSubmit} className='border border-solid bg-orange-400 border-black w-6/12 h-8 mt-2.5'>Submit</button>
                </form>
            </div>
        </>

    )
}

export default Form
