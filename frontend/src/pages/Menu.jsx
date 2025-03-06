import React, { useEffect, useState } from 'react'
import { useContext } from "react"  
import { StoreContext } from "../context/StoreContext"
import { FoodCategory } from '../components/foodCategory'
import add from "../assets/add_icon_green.png"
import remove from "../assets/remove_icon_red.png"

export const Menu = () => {
    const {dish, addToCart, removeFromCart ,handleIncrease, handleDecrease} = useContext(StoreContext)
    
    return (
        <>
            <FoodCategory />
            <div className="m-20 grid grid-cols-4 gap-10">
                {dish.map((ele) => {
                    return (
                        <div key={ele._id}  className="shadow-2xl rounded-2xl h-full">
                            <div>
                                <img src={ele.image} alt="Dish Pic" className=' w-full h-55 rounded-t-2xl '/>
                                <div className='flex justify-between items-center m-3'>
                                    <h2 className='font-bold text-blue-950'>{ele.title}</h2>
                                    <div className='flex items-center gap-3'>
                                        <img onClick={() =>{ addToCart(ele._id), handleIncrease(ele)}} className='w-6 cursor-pointer' src={add} alt="add"/>
                                        <span>{ele.count}</span >
                                        <img onClick={() =>{ removeFromCart(ele._id), handleDecrease(ele)}} className='w-6 cursor-pointer' src={remove} alt="remove" />
                                    </div>
                                </div>
                                <p className='text-gray-500 m-3'>{ele.description}</p>
                                <p className='text-blue-950 text-2xl m-3'>{ele.price}$</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
