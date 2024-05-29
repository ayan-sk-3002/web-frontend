import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Footer from './Components/Footer/Footer'
import Cart from './Pages/Cart/Cart'
import { CartContextProvider } from './Context/CartContext'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Products from './Components/Products/Products'
import Product from './Pages/Product/Product'
import Auth from './Pages/Auth/Auth'
import Admin from './Pages/Admin/Admin'
import AddProduct from './Pages/AddProduct/AddProduct'
import Checkout from './Pages/Checkout/Checkout'

const App = () => {
  return (
    <>
      <CartContextProvider>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

      </CartContextProvider>
    </>
  )
}

export default App