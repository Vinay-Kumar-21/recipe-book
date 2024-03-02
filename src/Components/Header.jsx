import React from 'react'

function Header() {
    return (
        <>
            <nav className='flex w-full bg-black items-center sticky top-0 z-100'>
                <img className="w-28 pt-4 h-20 m-4 object-contain" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrXJkQUdpbW1AS0miox-s2ugVohNFrhkv0w&usqp=CAU' />


                <div className='flex flex-1'>
                    <input className='py-1 border-none w-9/12 size-10' type='text' />
                    <div className='px-2 cursor-pointer bg-orange-400 bg-auto size-10'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header
