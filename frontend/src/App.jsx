import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const[showSignup,setShowSignup] = useState(false);
  return (
  <>
    {showSignup?<LoginPopUp setShowSignup={setShowSignup}/>:<></>}
    <div className='app'>
      <NavBar showSignup={showSignup} setShowSignup={setShowSignup}/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeOrder' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
      
    </div>
    <Footer/>
  
  </>
  )
}

export default App
