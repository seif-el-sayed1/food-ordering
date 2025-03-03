import React, { useState } from 'react'
import { useContext } from "react"  
import { FoodContext } from '../../context/foodContext'
import burgerPic from "../assets/burger.jpg"
import pizzaPic from "../assets/pizza.jpg"
import pastaPic from "../assets/pasta.jpg"
import saladPic from "../assets/salad.jpg"
import drinksPic from "../assets/drinks.jpg"
import friedChickenPic from "../assets/friedChicken.jpg"
import allFood from "../assets/allFood.jpg"
import add from "../assets/add_icon_green.png"
import remove from "../assets/remove_icon_red.png"

export const Menu = () => {
    const {fetchData, dish, byCategory} = useContext(FoodContext)
    const [cat, setCat] = useState("All")

    return (
        <>
            <div className="mx-20 border-b-2 border-blue-950 py-5">
                <h2 className='font-bold text-2xl py-5 text-blue-950'>Choose Your Favorite Menu</h2>
                <div className='flex items-center justify-center  gap-10 categories py-2'>
                    <div onClick={() =>{setCat("All"); fetchData();}} className={cat == "All" ? "category" : undefined}>
                        <img className='rounded-full w-30 h-27 cursor-pointer' src={allFood} alt="All" />
                        <p className='text-blue-950 text-center pt-3 '>All Menu</p>
                    </div>
                    <div onClick={() => {setCat("Burger");byCategory("Burger");console.log(cat)}} className={cat == "Burger" ? "category" : undefined}>
                        <img className='rounded-full w-30 h-27 cursor-pointer' src={burgerPic} alt="Burger" />
                        <p className='text-blue-950 text-center pt-3 '>Burger</p>
                    </div>
                    <div onClick={() => {setCat("Pizza");  byCategory("Pizza");console.log(cat)}} 
                        className={cat == "Pizza" ? "category" : undefined}>
                        <img className='rounded-full w-30 h-27 cursor-pointer' src={pizzaPic} alt="Pizza" />
                        <p className='text-blue-950 text-center pt-3 '>Pizza</p>
                    </div>
                    <div onClick={() => {setCat("Chicken");byCategory("Fried Chicken");console.log(cat)}} 
                        className={cat == "Chicken" ? "category" : undefined}>
                        <img className='rounded-full w-30 h-27 cursor-pointer' src={friedChickenPic} alt="FriedChicken" />
                        <p className='text-blue-950 text-center pt-3 '>Fried Chicken</p>
                    </div>
                    <div onClick={() => {setCat("Pasta");  byCategory("Pasta");console.log(cat)}} 
                        className={cat == "Pasta" ? "category" : undefined}>
                        <img className='rounded-full w-30 h-27 cursor-pointer' src={pastaPic} alt="Pasta" />
                        <p className='text-blue-950 text-center pt-3 '>Pasta</p>
                    </div>
                    <div onClick={() => {setCat("Salad");  byCategory("Salad")}} 
                        className={cat == "Salad" ? "category" : undefined}>
                        <img className='rounded-full w-30 h-27 cursor-pointer' src={saladPic} alt="Salad" />
                        <p className='text-blue-950 text-center pt-3 '>Salad</p>
                    </div>
                    <div onClick={() => {setCat("Drinks");  byCategory("Drinks")}} 
                        className={cat == "Drinks" ? "category" : undefined}>
                        <img className='rounded-full w-30 h-27 cursor-pointer' src={drinksPic} alt="Drinks" />
                        <p className='text-blue-950 text-center pt-3'>Drinks</p>
                    </div>
                </div>
            </div>
            <div className="m-20 grid grid-cols-4 gap-10">
                {dish.map((ele) => {
                    return (
                        <div key={ele._id}  className="shadow-2xl rounded-2xl h-full">
                            <div>
                                <img src={ele.image} alt="Dish Pic" className=' w-full h-55 rounded-t-2xl '/>
                                <div className='flex justify-between items-center m-3'>
                                    <h2 className='font-bold text-blue-950'>{ele.title}</h2>
                                    <div className='flex items-center gap-3'>
                                        <img className='w-6 cursor-pointer' src={add} alt="add"/>
                                        <span>5</span>
                                        <img className='w-6 cursor-pointer' src={remove} alt="remove" />
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
