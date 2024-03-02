import React from 'react'

function Header() {
    return (
        <>
            <nav className='flex w-full bg-black items-center sticky top-0 z-100'>
                <img className="w-28 pt-4 mx-4 object-contain" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />


                <div className='flex flex-1'>
                    <input className='py-1 border-none w-9/12' type='text' />
                    <div className='px-2 cursor-pointer bg-orange-400 bg-auto'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header
