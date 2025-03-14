import React, { useContext, useState } from 'react'
import axios from "axios"
import { AdminContext } from '../context/AdminContext'
import upload from "../assets/upload_area.png"
import { toast } from 'react-toastify'

export const AddItems = () => {

    const {backendUrl} = useContext(AdminContext)

    const [image, setImage] = useState(false)
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || !category || !price || !image) {
            toast.error("Please fill all fields!")
            return;
        }
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category);

        try {
            const {data} = await axios.post(backendUrl + "food/add-food", formData)
            if(data.success) {
                toast.success(data.message)
                setImage(false);
                setTitle("");
                setPrice(0);
                setDescription("");
                setCategory("");
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                    <input
                    className="border border-gray-500 pl-2 py-1 w-100 outline-none"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Type Here"
                    />
                </div>
                <div>
                    <p className='text-gray-500 my-3 font-bold'>Product Description</p>
                    <textarea
                    className="border border-gray-500 pl-2 py-1 w-100 outline-none resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="6"
                    placeholder="Write the Description"
                    ></textarea>
                </div>
                <div className='flex gap-10 items-center'>
                    <div>
                        <p className='text-gray-500 my-3 font-bold'>Product Category</p>
                        <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="p-1 w-30 border border-gray-500 outline-none"
                        >
                            <option value="" disabled>Category</option>
                            <option value="Burger">Burger</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Fried Chicken">Fried Chicken</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Salad">Salad</option>
                            <option value="Drinks">Drinks</option>
                    </select>
                    </div>
                    <div>
                        <div>
                            <p className='text-gray-500 my-3 font-bold'>Product Price</p>
                            <input
                            className="p-2 w-30 border border-gray-500 outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            placeholder="$"
                            />
                        </div>
                    </div>
                </div>
                <button className='text-white bg-blue-950 mt-3 py-1 w-50 cursor-pointer hover:bg-blue-900 transition' 
                            type='submit'>ADD</button>
            </form>
        </div>
    )
}
