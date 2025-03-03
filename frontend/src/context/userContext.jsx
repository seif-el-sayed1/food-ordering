import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    axios.defaults.withCredentials = true

    const backendUrl = import.meta.env.VITE_BACKEND_URL; 
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);


    const authState = async () => {
        try {
            const {data} = await axios.get(backendUrl + "user/is-auth")
            if(data.Success) {
                setIsLoggedin(true)
                getUserData()
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    
    const getUserData = async () => {
        const {data} = await axios.get(backendUrl + "user")
        if(data.Success) {
            setUserData(data.userData)
        } else {
            toast.error(data.message) 
        }
    }
    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        getUserData
    };

    useEffect(() => {
        authState()
    },[])

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};