import React from 'react'
import add from "../assets/add_icon.png"
import list from "../assets/order_icon.png"

export const Sidebar = () => {
    return (
        <div className='w-40 border-r-1 border-gray-500 h-dvh ml-10 pt-10'>
            <div className='flex gap-5 my-3 p-2 w-full border-1 border-gray-500 cursor-pointer'>
                <img className='w-5' src={add} alt="ADD" />
                <p>Add Items</p>
            </div>
            <div className='flex gap-5 my-3 p-2 w-full border-1 border-gray-500 cursor-pointer'>
                <img className='w-5' src={list} alt="LIST" />
                <p>List Items</p>
            </div>
            <div className='flex gap-5 my-3 p-2 w-full border-1 border-gray-500 cursor-pointer'>
                <img className='w-5' src={list} alt="LIST" />
                <p>Orders</p>
            </div>
        </div>  
    )
}
