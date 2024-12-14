// import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
