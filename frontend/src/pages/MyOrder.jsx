import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { StoreContext } from '../context/StoreContext'
import { Footer } from "../components/Footer"
import { Loading } from '../components/Loading'
import noOrder from "../assets/noOrder.png"

export const MyOrder = () => {
    const { clientOrder, getOrder, loading } = useContext(StoreContext)
    const navigate = useNavigate()

    useEffect(() => {
        getOrder()
    }, [])
    useEffect(() => {
        getOrder()
    }, [clientOrder])
    
    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <Navbar />
            <div className='px-20 py-10'>
                {clientOrder.length === 0 ? (
                    <div className='text-center my-7'>
                        <h1 className='mb-5 font-bold text-2xl text-blue-950'>NO Orders</h1>
                        <div className='flex justify-center'>
                            <img className='w-70' src={noOrder} alt="NO ORDERS" />
                        </div>
                        <button 
                            onClick={() => navigate("/")} 
                            className='cursor-pointer bg-orange-600 w-50 rounded-md text-white hover:rounded-none duration-300 hover:py-1'
                        >
                            Shop Now
                        </button>
                    </div>
                ) : (
                    clientOrder.map((ele) => (
                        <div key={ele._id} className='border-2 border-gray-500 p-5 my-3 
                                            flex justify-between items-center rounded-lg'>
                            <div className='w-50'>
                                {ele.order.map((item) => (
                                    <p key={item._id} className='font-bold text-blue-950'>
                                        {item.title + " x " + item.count}
                                    </p>
                                ))}
                            </div>
                            <p className='text-gray-500'>
                                Total: {ele.order.reduce((acc, curr) => acc + curr.price * curr.count, 0)} $
                            </p>
                            <p className={` font-bold text-lg
                                        ${ele.status === "Preparing the order" ? "text-orange-400" :
                                        ele.status === "in Delivery" ? "text-blue-600" :
                                        ele.status === "Delivered" ? "text-green-600" :
                                        "text-red-600"}`}>
                                {ele.status}
                            </p>
                            <span className='text-sm text-gray-500'>{ele.date}</span>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </div>
    )
}
