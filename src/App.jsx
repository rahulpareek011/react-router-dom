import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Contact from './contact'
import NotFound from './notfound'
import Home from './Home'
import Fetch from './Fetch'
import Nav from './Nav'
import Login from './Login'
import Signup from './Signup'
import productId from './productId'

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/header' element={<Header />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/fetch' element={<Fetch />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/product/:id' element={<productId/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter></>
  )
}

export default App
