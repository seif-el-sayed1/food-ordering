import React, { useContext } from 'react'
import { Navbar } from '../components/Navbar'
import { StoreContext } from '../context/StoreContext';
import { Footer } from '../components/Footer';

export const Order = () => {
    const {cart} = useContext(StoreContext)
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.count, 0);

    return (
        <div>
            <Navbar />
            <div className='px-20 py-10 flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl text-blue-950 font-bold pb-5'>Delivery Information</h2>
                    <form >
                        <input className='py-1 px-2 my-1 outline-0 w-100 border-1 border-gray-400 rounded-sm ' 
                                type="text" placeholder='Address'/>
                        <input className='py-1 px-2 my-1 outline-0 w-100 border-1 border-gray-400 rounded-sm ' 
                                type="text" placeholder='Number'/>
                    </form>
                </div>
                <div>
                    <div className=' w-100 shadow-2xl p-3 rounded-2xl '>
                        <h2 className='font-bold text-2xl mb-1 text-blue-950'>Order Total</h2>
                        <div className='flex justify-between border-b-2 border-b-gray-300 py-2'>
                            <p >Cart Total:</p>
                            <span className='text-blue-950 font-bold'>{total} $</span>
                        </div>
                        <div className='flex justify-between border-b-2 border-b-gray-300 py-2'>
                            <p>Delivery Fee:</p>
                            <span className='text-blue-950 font-bold'>{Math.round(total * 0.05)} $</span>
                        </div>
                        <div className='flex justify-between border-b-2 border-b-gray-300 py-2'>
                            <p>Total:</p>
                            <span className='text-blue-950 font-bold'>{total + total * 0.02} $</span>
                        </div>
                        <button className='bg-blue-950 w-50 h-7 text-white rounded-md 
                                            cursor-pointer my-3 hover:w-60 duration-300'>
                            Payment
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
