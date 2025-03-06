import { Menu } from "./pages/Menu"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import { GetStarted } from "./pages/GetStarted";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
      <ToastContainer />
    
      <Routes>
        <Route element = {
          <>
          <Navbar />
          <Header />
          <Menu />
          </>
        } path="/" />
        <Route path="/getStarted" element={<GetStarted />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </>
  )
  
}

export default App
