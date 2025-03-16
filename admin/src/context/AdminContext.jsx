import { createContext, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify";

export const AdminContext = createContext();

export const AdminContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL; 

    const [dish, setDish] = useState([])
    const [clientOrder, setClientOrder] = useState([])
    const [loading, setLoading] = useState(true)
    
    // Food Data (admin)
    const fetchData = async () => {
        try {
            const { data } = await axios.get(backendUrl + "food/get-food");
            if (data.success) {
                setDish(data.food.sort((a, b) => a.category.localeCompare(b.category)));
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    };
    
    const deleteFood = async(productId) => {
        try {
            const {data} = await axios.post(backendUrl + "food/delete-food", {productId})
            if (data.success) {
                fetchData()
                toast.success(data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const getOrders = async () => {
        try {
            const { data } = await axios.get(backendUrl + "food/get-admin-orders");
            if (data.success) {
                setClientOrder(data.clientOrder)
                console.log(Z);
                
            }
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    const value = {
        backendUrl,
        fetchData,
        dish,
        deleteFood,
        loading,
        clientOrder,
        getOrders
    }
        
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}