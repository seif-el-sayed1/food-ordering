import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Navbar}  from "../components/Navbar"
import crossIcon from "../assets/cross_icon.png"

export const Cart = () => {
    const { cart } = useContext(StoreContext)

    const total = cart.reduce((acc, curr) => acc + curr.price * curr.count, 0);

    return (
        <div>
            <Navbar />
            <div className='py-10 px-20'>
                {cart.length > 0 ? (
                    <table className='w-full'>
                        <thead className='border-b-2 border-b-gray-300'>
                            <tr className='text-center font-bold '>
                                <td className='pb-3'>Item</td>
                                <td className='pb-3'>Title</td>
                                <td className='pb-3'>Price</td>
                                <td className='pb-3'>Quantity</td>
                                <td className='pb-3'>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((ele) => {
                                return (
                                    <tr className='text-center border-b-2 pb-5 border-b-gray-300' key={ele._id}>
                                        <td className='flex justify-center p-3'><img className='w-15 h-10' src={ele.image} alt="ITEM" /></td>
                                        <td className= 'p-3'>{ele.title}</td>
                                        <td className='p-3'>{ele.price} $</td>
                                        <td className='p-3'>{ele.count}</td>
                                        <td className='p-3'>{ele.price * ele.count} $</td>
                                        <td className='p-3'><img className='w-3 cursor-pointer' src={crossIcon} alt="DELETE"/></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    
                ) : (
                    <p>EMPTY CART</p>
                )
                }
                <div className='mt-10 w-100 shadow-2xl p-3 rounded-2xl '>
                    <h2 className='font-bold text-2xl mb-1 text-blue-950'>Order Total</h2>
                    <div className='flex justify-between border-b-2 border-b-gray-300 py-2'>
                        <p >Cart Total:</p>
                        <span className='text-blue-950 font-bold'>{total} $</span>
                    </div>
                    <div className='flex justify-between border-b-2 border-b-gray-300 py-2'>
                        <p>Delivery Fee:</p>
                        <span className='text-blue-950 font-bold'>{total * 0.02} $</span>
                    </div>
                    <div className='flex justify-between border-b-2 border-b-gray-300 py-2'>
                        <p>Total:</p>
                        <span className='text-blue-950 font-bold'>{total + total * 0.02}</span>
                    </div>
                    <button className='bg-blue-950 w-50 h-7 text-white rounded-md 
                    cursor-pointer my-3 hover:w-60 duration-300'>
                        Order Now
                    </button>
                </div>
                
            </div>
        </div>
    );
}
