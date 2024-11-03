import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Slidebar from "./components/Slidebar/Slidebar"
import Add from "./pages/Add/Add"
import List from "./pages/List/List"
import Order from "./pages/Order/Order"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className='app'>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Slidebar />
        <Routes>
            <Route path="/add" element={<Add/>} />
            <Route path="/list" element={<List/>} />
            <Route path="/orders" element={<Order/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
