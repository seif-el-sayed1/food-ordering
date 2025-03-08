import { createContext, useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
    const navigate = useNavigate()
    const backendUrl = import.meta.env.VITE_BACKEND_URL; 
    
    // Food Data

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
        try {
            const {data} =  await axios.post(backendUrl + "food/add-to-cart", {productId})
            if (!data.success) {
                navigate("/getStarted")
            }
        } catch (error) {
            console.log(error.message);
        }
        axios.defaults.withCredentials = true
    }
    const handleIncrease = (product) => {
        const updatedDish = dish.map((ele) => 
            ele._id === product._id ? { ...ele, count: ele.count + 1 } : ele
        );
        setDish(updatedDish); 
        };
    const removeFromCart = async (productId) => {
        try {
            axios.defaults.withCredentials = true
            const {data} =  await axios.post(backendUrl + "food/remove-from-cart", {productId})
            
        } catch (error) {
            console.log(error.message);
        }
    }
    const handleDecrease = (product) => {
        const updatedDish = dish.map((ele) => 
            ele._id === product._id ? { ...ele, count: Math.max(0, ele.count - 1) } : ele
        );
        setDish(updatedDish);
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
        setDish,
        addToCart,
        removeFromCart,
        handleIncrease,
        handleDecrease,
        getCartData,
        cart,
        deleteFromCart
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}