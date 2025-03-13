import React from 'react'
import logo from "../assets/logo.png"
import admin from "../assets/admin.jpg"

export const Navbar = () => {
    return (
        <div className='px-20 flex justify-between items-center border-b-1 border-gray-500'>
            <img className='w-20' src={logo} alt="LOGO" />
            <p className=' text-xl font-bold text-blue-950'>Admin Panel</p>
            <img className='w-12 cursor-pointer' src={admin} alt="ADMIN" />
        </div>
    )
}
