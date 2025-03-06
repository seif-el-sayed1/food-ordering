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
    const [ele, setEle] = useState({});
    const [count, setCount] = useState(0)

    const addToCart = async (productId) => {
        axios.defaults.withCredentials = true
        const {data} =  await axios.post(backendUrl + "food/add-to-cart", {productId})
        console.log(data)
        if (!data.success) {
            navigate("/getStarted")
        }
    }
    const handleIncrease = (product) => {
        dish.map((ele) => {
            ele._id == product._id && setCount(ele.count++) 
        })
    };
    const handleDecrees = (product) => {
        if (ele.count <= 0) {
            dish.map((ele) => {
                ele._id == product._id && setCount(ele.count--) 
            })
        }
    };


    const value = {
        fetchData,
        byCategory,
        dish,
        setDish,
        addToCart,
        ele,
        setEle,
        count,
        handleIncrease,
        handleDecrees
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