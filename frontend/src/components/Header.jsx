import React from 'react'
import header from "../assets/header.jpg"
import { useNavigate } from 'react-router-dom'


export const Header = () => {
    const navigate = useNavigate()
    return (
        <div style={{backgroundImage:`url(${header})`, backgroundSize:"cover"}} 
            className="container mx-20 pl-10 w-auto h-100 bg-orange-600 rounded-xl relative">
                <div className='absolute top-20 text-white '>
                    <h1 className='font-bold text-5xl py-3 '>Order Your <br /> Favorite Food Here</h1>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest <br />
                        ingredients and culinary expertise. our mission is to satisfy your cravings and 
                        elevate <br /> your dining experience,  one delicious meal at all time.
                    </p>
                    <button onClick={() => navigate("/getStarted")} className='rounded-full text-blue-950 text-sm
                    cursor-pointer px-4 py-3 my-3 bg-white hover:bg-blue-950 
                    hover:text-white transition'>Get Started</button>
                </div>
        </div>
    )
}
