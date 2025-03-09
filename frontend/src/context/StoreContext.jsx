import { createContext, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
    const navigate = useNavigate()
    const backendUrl = import.meta.env.VITE_BACKEND_URL; 
    
    // Food Data (admin)
    const [dish, setDish] = useState([])
    const fetchData = async () => {
        try {
            const { data } = await axios.get(backendUrl + "food/get-food");
            if (data.success) {
                setDish(data.food);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    const byCategory = async (category) => {
            try {
                const { data } = await axios.get(`${backendUrl}food/get-food/${category}`);
                if (data.success) {  
                    setDish(data.category);
                }
            } catch (error) {
                console.log(error.message); 
            }
    } 
    
    // Cart Data
    const addToCart = async (productId) => {
        axios.defaults.withCredentials = true
        try {
            const {data} =  await axios.post(backendUrl + "food/add-to-cart", {productId})
            if (!data.success) {
                navigate("/getStarted")
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    const handleIncrease = (product) => {
        const updateCount = cart.map((ele) => 
            ele._id === product._id ? { ...ele, count: ele.count + 1 } : ele
        );
        setCart(updateCount); 
        };
    const removeFromCart = async (productId) => {
        try {
            axios.defaults.withCredentials = true
            const {data} =  await axios.post(backendUrl + "food/remove-from-cart", {productId})
            if (!data.success) {
                navigate("/getStarted")
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    const handleDecrease = (product) => {
        const updateCount = cart.map((ele) => 
            ele._id === product._id ? { ...ele, count: Math.max(0, ele.count - 1) } : ele
        );
        setCart(updateCount);
    };
    
    const [cart, setCart] = useState([])
    const getCartData = async () => {
        try {
            const { data } = await axios.get(backendUrl + "food/cart", { withCredentials: true });
            if (data.success) {
                setCart(data.cart); 
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    const deleteFromCart = async(productId) => {
        try {
            const {data} =  await axios.post(backendUrl + "food/delete-from-cart", {productId})
            if (data.success) {
                getCartData()
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const value = {
        backendUrl,
        fetchData,
        byCategory,
        dish,
        addToCart,
        removeFromCart,
        handleIncrease,
        handleDecrease,
        getCartData,
        cart,
        deleteFromCart
    }
    

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}