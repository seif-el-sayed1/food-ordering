import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../context/AdminContext'
import crossIcon from "../assets/cross_icon.png"

export const List = () => {
    const {dish, fetchData, deleteFood} = useContext(AdminContext)

    useEffect(() => {
        fetchData()
    },[])
    
    
    return (
        <div className='pr-20 mt-10 w-full'>
            <table className='w-full border-1 border-gray-500'>
                <thead className='bg-gray-50 border-b-1 border-gray-500'>
                    <tr>
                        <td className='pl-5 py-3 text-gray-500 font-bold'>Image</td>
                        <td className='pl-5 py-3 text-gray-500 font-bold'>Name</td>
                        <td className='pl-5 py-3 text-gray-500 font-bold'>Category</td>
                        <td className='pl-5 py-3 text-gray-500 font-bold'>Price</td>
                        <td className='pl-5 py-3 text-gray-500 font-bold'></td>
                    </tr>
                </thead>
                <tbody>
                    {dish.map((ele) => {
                        return (
                            <tr key={ele._id} className='border-b-1 border-gray-500'>
                                <td className='pl-5 py-2 text-gray-500'>
                                    <img className='w-13' src={ele.image} alt="IMAGE" />
                                </td>
                                <td className='pl-5 py-2 text-gray-500'>{ele.title}</td>
                                <td className='pl-5 py-2 text-gray-500'>{ele.category}</td>
                                <td className='pl-5 py-2 text-gray-500'>{ele.price} $</td>
                                <td className='pl-5 py-2 text-gray-500'>
                                    <img onClick={() => deleteFood(ele._id)}
                                        className='w-3 cursor-pointer' src={crossIcon} alt="REMOVE" />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
