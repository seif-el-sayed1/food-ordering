import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL; 
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
    const value = {
        fetchData,
        byCategory,
        dish,
        setDish,
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