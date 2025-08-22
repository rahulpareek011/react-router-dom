import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './notfound'
import Home from './Home'
import Fetch from './Fetch'
import Nav from './Nav'
import Login from './Login'
import Signup from './Signup'
import ProductDetail from './ProductDetail'
import Counter from './Counter'
import Protectroute from './Protectroute'

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          //public route
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          //protected route
          <Route path='/fetch' element={<Protectroute><Fetch /></Protectroute>} />
          <Route path='/counter' element={<Protectroute><Counter /></Protectroute>} />

          <Route path='/product/:id' element={<ProductDetail/>} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter></>
  )
}

export default App
