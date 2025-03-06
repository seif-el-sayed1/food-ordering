import React, {useContext} from 'react'
import Logo from "../assets/logo.png"
import Search_icon from "../assets/search_icon.png"
import Basket_icon from "../assets/basket_icon.png"
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../context/userContext";
import {toast} from "react-toastify"
import axios  from 'axios'
import { StoreContext } from '../context/StoreContext'


export const Navbar = () => {
    const navigate = useNavigate()
    const{setIsLoggedin, userData, setUserData, backendUrl} = useContext(UserContext)
        const logout = async () => {
            try {
                axios.defaults.withCredentials = true
                const {data} = await axios.post(backendUrl + "user/logout")
                if(data.Success) {
                    toast.success(data.message,{position: "top-center"})
                    setUserData(false)
                    setIsLoggedin(false)
                    navigate("/getStarted")
                }
            } catch (error) {
                toast.error(error.message,{position: "top-center"})
            }
        }
    return (
        <div className='flex justify-between mx-20 '>
            <img className='w-20' src={Logo} alt="LOGO" />
            <ul className='flex items-center justify-between gap-10 
                            text-lg text-blue-950'>
                <li className='cursor-pointer border-b-2 '>Home</li>
                <li className='cursor-pointer'>Menu</li>
                <li className='cursor-pointer'>Contact Us</li>
            </ul>
            <div className='flex items-center justify-between gap-10'>
                <img className='w-6 cursor-pointer' src={Search_icon} alt="Search" />
                <img onClick={() => {navigate("/cart")}} className='w-6 cursor-pointer' src={Basket_icon} alt="Basket" />
                    {userData ? 
                            <div className='cursor-pointer group'>
                                <div className='bg-blue-950 rounded-4xl p-1 w-10 text-white text-center'>{userData.name[0].toUpperCase()}</div>
                                <ul className='hidden group-hover:block'>
                                    <li onClick={logout} className='absolute right-25 top-14 p-2 bg-blue-950 text-white z-10 '>Log Out</li>
                                </ul>
                            </div>
                        :    
                            <button onClick={() => navigate('/getStarted')} className='border border-blue-950 hover:bg-blue-950 hover:text-white cursor-pointer 
                            transition rounded-2xl px-5 text-sm py-1'>
                                Sign Up
                            </button>
                    }
                
            </div>
        </div>
    )
}
