import { useEffect, useState } from 'react';
import Header from './Header'
import Recipe from './Recipe'
import Form from './Form'
//import { Link } from 'react-router-dom'

function HomePage() {
    const [isFormOpen, setForm] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [search, setSearch] = useState("");

    function handlePlusBtn() {
        setForm(true);
    }
    // console.log(recipeList);

    function handleDeleteButton(obj) {
        //console.log(e);
        const newRecipelist = recipeList.filter((rcp) => {
            return obj.id !== rcp.id;
        })

        localStorage.setItem("recipeList", JSON.stringify(newRecipelist));
        setRecipeList(newRecipelist);
    }


    useEffect(() => {
        //get recipelist from local storage & set list
        const newRecipelist = JSON.parse(localStorage.getItem('recipeList'));
        if (newRecipelist) {
            setRecipeList(newRecipelist);
        }
    }, [])

    useEffect(() => {
        //update the storage
        localStorage.setItem('recipeList', JSON.stringify(recipeList));
    }, [recipeList])



    return (
        <>
            <Header setSearch={setSearch} search={search} />
            <div className='text-center pt-2 font-bold text-2xl italic text-violet-700'>
                <h1>🌟Let's create some Delicious Recipes🌟</h1>
            </div>


            {/* recipes page */}
            {recipeList.filter((obj) => {
                return obj.title.toLowerCase().includes(search.toLocaleLowerCase());
            }).map((recipe) => {
                return <Recipe recipes={recipe} handleDeleteButton={handleDeleteButton} />
            })}

            {/* plus btn to add recipes from user */}
            <div className="fixed bottom-0 right-0 m-4">
                <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl cursor-pointer" onClick={handlePlusBtn}>
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>

            {isFormOpen && (<Form setForm={setForm} setRecipeList={setRecipeList} recipeList={recipeList} />)}

        </>
    )
}

export default HomePage
