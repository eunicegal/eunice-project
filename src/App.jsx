import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Women from './pages/Women'
import Men  from './pages/Men'
import Kids from './pages/Kids'
import Acess from './pages/Acess'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const location = useLocation()
  const hideHeaderFooter = location.pathname === '/login'

  return (
    <div  className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      
       {!hideHeaderFooter && <Navbar />}


<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/collection' element={<Collection/>} />
    <Route  path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/product/:productId' element={<Product/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/place-order' element={<PlaceOrder/>} />
    <Route path='/orders' element={<Orders/>} />
    <Route path='/women' element={<Women/>}/>
    <Route path='/men' element={<Men/>}/>
    <Route path='/kids' element={<Kids/>}/>
    <Route path='/acess' element={<Acess/>}/>

  
</Routes>
{!hideHeaderFooter && <Footer />}
      
    </div>
  )
}

export default App
