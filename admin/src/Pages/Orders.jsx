import React, { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminContext } from "../context/AdminContext"
import noOrder from "../assets/noOrder.png"
import { Loading } from '../Components/Loading'

export const Orders = () => {
    const { clientOrder, getOrders, loading, updateStatus } = useContext(AdminContext)
    const navigate = useNavigate()

    useEffect(() => {
        getOrders()

    }, [])
    useEffect(() => {
        getOrders()
    }, [clientOrder])
    
    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <div className='py-10'>
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
                                            flex gap-15 items-center rounded-lg'>
                            <div className='w-50'>
                                {ele.order.map((item) => (
                                    <p key={item._id} className='font-bold text-blue-950 my-1'>
                                        {item.title + " x " + item.count}
                                    </p>
                                ))}
                                <div className='mt-3'>
                                    <p className='text-gray-500 my-1'>client name:  {ele.clientName}</p>
                                    <p className='text-gray-500 my-1'>address: {ele.address}</p>
                                    <p className='text-gray-500 my-1'>number: {ele.number}</p>
                                </div>
                            </div>
                            <div className='flex gap-10 w-70'>
                                <p className='text-gray-500'>
                                    Total: {ele.order.reduce((acc, curr) => acc + curr.price * curr.count, 0)} $
                                </p>
                                <span className='text-sm text-gray-500'>{ele.date}</span>
                            </div>
                            <div>
                                <select
                                    value={ele.status} 
                                    onChange={(e) => updateStatus(ele._id, ele.userId, e.target.value)}
                                    className={`p-1 border font-bold  outline-none cursor-pointer 
                                        ${ele.status === "Preparing the order" ? "text-orange-400" :
                                        ele.status === "in Delivery" ? "text-blue-600" :
                                        ele.status === "Delivered" ? "text-green-600" :
                                        "text-red-600"}`}
                                >
                                    <option className="text-black" value="Preparing the order">
                                        Preparing the order
                                    </option>
                                    <option className="text-black" value="in Delivery">
                                        in Delivery
                                    </option>
                                    <option className="text-black" value="Delivered">
                                        Delivered
                                    </option>
                                    <option className="text-black" value="Out of Delivery">
                                        Out of Delivery
                                    </option>
                                </select>

                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
