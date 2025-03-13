import React, { useState } from 'react'
import upload from "../assets/upload_area.png"

export const AddItems = () => {
    const [image, setImage] = useState(false)
    return (
        <div>
            <form>
                <div>
                    <p className='text-gray-500 my-3 font-bold'>Upload Image</p>
                    <label htmlFor="image">
                        <img className='cursor-pointer w-30' 
                            src={image ? URL.createObjectURL(image) : upload} alt="UPLOAD" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                </div>
                <div>
                    <p className='text-gray-500 my-3 font-bold'>Product Name</p>
                    <input className='border-1 border-gray-500 pl-2 py-1 w-100 outline-none' 
                        type="text" name='name' required placeholder='Type Here'/>
                </div>
                <div>
                    <p className='text-gray-500 my-3 font-bold'>Product Description</p>
                    <textarea className='border-1 border-gray-500 pl-2 py-1 w-100 outline-none' 
                        name="description" rows="6" placeholder='Write the Description'></textarea>
                </div>
                <div className='flex gap-10 items-center'>
                    <div>
                        <p className='text-gray-500 my-3 font-bold'>Product Category</p>
                        <select name="category" className='p-1 w-30 border-1 border-gray-500 outline-none '>
                            <option value="Burger">Burger</option>
                            <option value="Pizza">Pizza</option>
                            <option value="">Fried Chicken</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Salad">Salad</option>
                            <option value="Drinks">Drinks</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <p className='text-gray-500 my-3 font-bold'>Product Price</p>
                            <input className='p-2 w-30 border-1 border-gray-500 outline-none ' 
                                type="text" name='price' placeholder='$'/>
                        </div>
                    </div>
                </div>
                <button className='text-white bg-blue-950 mt-3 py-1 w-50 cursor-pointer hover:bg-blue-900 transition' 
                            type='submit'>ADD</button>
            </form>
        </div>
    )
}
