import { createContext, useState } from "react"
import axios from "axios"

export const AdminContext = createContext();

export const AdminContextProvider = (props) => {
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
    
    const value = {
        backendUrl,
        fetchData,
        dish,
    }
    


    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}