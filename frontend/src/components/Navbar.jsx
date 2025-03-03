import React from 'react'
import Logo from "../assets/logo.png"
import Search_icon from "../assets/search_icon.png"
import Basket_icon from "../assets/basket_icon.png"

export const Navbar = () => {
    return (
        <div className='flex justify-between mx-20 '>
            <img className='w-20' src={Logo} alt="LOGO" />
            <ul className='flex items-center justify-between gap-10 
                            text-lg text-blue-950'>
                <li className='cursor-pointer border-b-2 '>Home</li>
                <li className='cursor-pointer'>Menu</li>
                <li className='cursor-pointer'>Contact Us</li>
            </ul>
            <div className='flex items-center justify-between gap-10'>
                <img className='w-6 cursor-pointer' src={Search_icon} alt="Search" />
                <img className='w-6 cursor-pointer' src={Basket_icon} alt="Basket" />
                <button className='border  border-blue-950 hover:bg-blue-950 hover:text-white cursor-pointer 
                                    transition rounded-2xl px-5 text-sm py-1'>Sign in</button>
            </div>
        </div>
    )
}
