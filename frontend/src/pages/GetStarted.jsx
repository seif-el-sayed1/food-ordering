import { useContext, useState } from "react"
import axios from 'axios';
import { UserContext } from "../context/userContext";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
import background from "../assets/bg_img.png"
export const GetStarted = () => {
    const navigate = useNavigate()

    const [state, setState] = useState('signUp')
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {backendUrl, setIsLoggedin, getUserData} = useContext(UserContext)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            axios.defaults.withCredentials = true
            if (state === "signUp") {
                const {data} = await axios.post(backendUrl + "user/register", 
                    {name, email, password} 
                )
                if(data.Success) {
                    setIsLoggedin(true)
                    getUserData()
                    navigate("/")
                    toast.success(data.message, {position: "top-center"})
                } else {
                    toast.error(data.message, {position: "top-center"})
                }
            } else {
                const {data} = await axios.post(backendUrl + "user/login", 
                    {email, password}
                )
                if(data.Success) {
                    setIsLoggedin(true)
                    getUserData()
                    navigate("/")
                    toast.success(data.message, {position: "top-center"})
                } else {
                    toast.error(data.message, {position: "top-center"})
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div style={{backgroundImage: `url(${background})`}} className="flex flex-col items-center justify-center h-screen dark">
            <div className="w-80 max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-200 mb-4">
                    {state == "signUp" ? "Sign Up" : "Login"}
                </h2>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    {state == "signUp"&&
                        <input onChange={(e) => setName(e.target.value)} placeholder="Name" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                    }
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
                    <div className="flex items-center justify-between flex-wrap">
                        <label className="text-sm text-gray-200 cursor-pointer" htmlFor="remember-me">
                        <input className="mr-2" id="remember-me" type="checkbox" />
                            Remember me
                        </label>
                        <a className="text-sm text-blue-500 hover:underline mb-0.5" href="#">Forgot password?</a>
                        <div className="text-white mt-4"> 
                            {state == "signUp" ? (<p>Already Have an Account ? <span className="cursor-pointer text-sm text-blue-500 hover:underline mb-0.5" onClick={() => setState("login")}>Sign In</span></p>)
                                : (<p>Create an Account ? <span className="cursor-pointer text-sm text-blue-500 hover:underline mb-0.5" onClick={() => setState("signUp")}>Sign Up</span></p>)
                            }
                            </div>
                    </div>
                    <button className="cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">
                        {state == "signUp" ? "Sign Up" : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}