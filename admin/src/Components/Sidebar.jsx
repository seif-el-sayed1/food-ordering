import React, { useState } from 'react'
import add from "../assets/add_icon.png"
import list from "../assets/order_icon.png"

export const Sidebar = () => {
    const [state, setState] = useState("add")
    
    return (
        <div className='w-55 border-r-1 border-gray-500 h-dvh ml-10 pt-10'>
            <div onClick={() => setState("add")} className={state === "add" 
                ? 'flex gap-10 text-blue-950 font-bold duration-500 my-3 p-2 w-full border border-gray-500 cursor-pointer' 
                : 'flex gap-5 my-3 p-2 w-full border border-gray-500 cursor-pointer'}>
                <img className='w-5' src={add} alt="ADD" />
                <p>Add Items</p>
            </div>
            <div onClick={() => setState("list")} className={state === "list" 
                ? 'flex gap-10 text-blue-950 font-bold duration-500 my-3 p-2 w-full border border-gray-500 cursor-pointer' 
                : 'flex gap-5 my-3 p-2 w-full border border-gray-500 cursor-pointer'}>
                <img className='w-5' src={list} alt="list" />
                <p>List Items</p>
            </div>
            <div onClick={() => setState("orders")} className={state === "orders" 
                ? 'flex gap-10 text-blue-950 font-bold duration-500 my-3 p-2 w-full border border-gray-500 cursor-pointer' 
                : 'flex gap-5 my-3 p-2 w-full border border-gray-500 cursor-pointer'}>
                <img className='w-5' src={list} alt="list" />
                <p>Orders</p>
            </div>
        </div>  
    )
}
