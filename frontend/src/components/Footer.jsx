import React from 'react'
import logo from "../assets/logo.png"
import facebook from "../assets/facebook_icon.png"
import linkedin from "../assets/linkedin_icon.png"
import twitter from "../assets/twitter_icon.png"

export const Footer = () => {
    return (
        <div className='bg-blue-950 pb-5'>
            <div className='mx-20 mb-7 pb-5 flex items-center justify-between border-b-2 border-b-blue-500  '>
                <div>
                    <img className='w-25' src={logo} alt="LOGO" />
                    <p className='w-100 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, neque quae voluptatum expedita aliquid consectetur quod ducimus nostrum rem, qui, laborum cumque? Vel itaque repudiandae sunt officia dolores facere magnam?</p>
                    <div className='flex items-center gap-5 w-7 cursor-pointer mt-5'>
                        <img src={facebook} alt="facebook" />
                        <img src={linkedin} alt="linkedin" />
                        <img src={twitter} alt="twitter" />
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl mb-3 text-white font-bold'>COMPANY</h3>
                    <p className='text-gray-500 cursor-pointer mb-2'>Home</p>
                    <p className='text-gray-500 cursor-pointer mb-2'>About us</p>
                    <p className='text-gray-500 cursor-pointer mb-2'>Delivery</p>
                    <p className='text-gray-500 cursor-pointer mb-2'>Privacy policy</p>
                </div>
                <div className='mb-14'>
                    <h3 className='text-2xl mb-3 text-white font-bold'>GET IN TOUCH</h3>
                    <p className='text-gray-500 cursor-pointer mb-2'>20-123548912</p>
                    <p className='text-gray-500 cursor-pointer mb-2'>food@gmail.com</p>
                </div>
            </div>
            <p className='text-center text-gray-500 tracking-wide'>
                Copyright {new Date().getFullYear()} &copy; food.com - All Right Reserved</p>
            <p className='text-center text-white' >Made by 
                <a className='text-yellow-500 font-bold pl-1 hover:text-2xl duration-300 tracking-wide  ' 
                target='_blank' href="https://www.linkedin.com/in/seif-el-sayed-a8452a31a/">SEIF</a>
            </p>
        </div>
    )
}
