import React from 'react'
import Header from './Header'
import Recipe from './Recipe'
import Form from './Form'
import { Link } from 'react-router-dom'

function HomePage() {
    const recipes = {
        title: "Chicken Biryani",
        rating: 5,
        ingredients: [],
        image: 'https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    }

    function handlePlusBtn() {
        return (<Form></Form>)
    }

    return (
        <>
            <Header />
            <div className='text-center pt-2 font-bold text-2xl italic text-violet-700'>
                <h1>🌟Let's create some Delicious Recipes🌟</h1>
            </div>

            <div>
                {/* recipes */}
                <Recipe recipes={recipes} />
                <Recipe recipes={recipes} />
                <Recipe recipes={recipes} />
                <Recipe recipes={recipes} />
            </div>

            {/* plus btn to add recipes from user */}
            <Link to='/form'>
                <div className="fixed bottom-0 right-0 m-4">
                    <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl cursor-pointer" >
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default HomePage
