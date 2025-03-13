// import { Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import { Navbar } from "./Components/Navbar"
import { Sidebar } from "./Components/Sidebar"
function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div>
        <Sidebar /> 
      </div>
      {/* <Routes>
        <Route element={} path="" /> 
      </Routes> */}
    </>


  )
}

export default App
