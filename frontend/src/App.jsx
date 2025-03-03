import { Menu } from "./pages/Menu"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route element = {
          <>
          <Header />
          <Menu />
          </>
        } path="/" />
      </Routes>
    </>
  )
  
}

export default App
