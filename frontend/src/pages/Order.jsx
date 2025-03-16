import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { StoreContext } from '../context/StoreContext';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Order = () => {
    const {cart, backendUrl, getCartData} = useContext(StoreContext)
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.count, 0);
    const navigate = useNavigate()

    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")

    useEffect(() => {
        getCartData();
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const {data} = await axios.post(backendUrl + "food/add-order", {address, number})
            if(data.success) {
                toast.success(data.message)
                navigate("/myOrder")
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <Navbar />
            <div className='px-20 py-10 flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl text-blue-950 font-bold pb-5'>Delivery Information</h2>
                    <form onSubmit={handleSubmit}>
                        <input  onChange={(e) => setAddress(e.target.value)} required
                                className='py-1 px-2 my-1 outline-0 w-100 border-1 border-gray-400 rounded-sm ' 
                                type="text" placeholder='Address'/>
                        <input  onChange={(e) => setNumber(e.target.value)} required
                                className='py-1 px-2 my-1 outline-0 w-100 border-1 border-gray-400 rounded-sm ' 
                                type="text" placeholder='Number'/>
                        <button type='submit' className='bg-blue-950 w-100 h-7 text-white rounded-md 
                                                            cursor-pointer my-3 hover:bg-blue-900 duration-300'>
                            Order Now
                        </button>
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
