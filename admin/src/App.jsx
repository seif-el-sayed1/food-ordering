import { Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import { Navbar } from "./Components/Navbar"
import { Sidebar } from "./Components/Sidebar"
import { AddItems } from "./Pages/AddItems"
import { List } from "./Pages/List";
import { Orders } from "./Pages/Orders"

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="flex gap-20">
        <Sidebar /> 
        <Routes>
          <Route element={<AddItems />} path="/" /> 
          <Route element={<List />} path="/list" /> 
          <Route element={<Orders /> } path="/orders" /> 
        </Routes>
      </div>
    </>


  )
}

export default App
