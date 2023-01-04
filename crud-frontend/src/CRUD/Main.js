import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Navbar from './Navbar'
import Home from './components/Home'

export default function Main() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/'element={<Home/>} />
            <Route path='/create'element={<Create/>} />
            <Route path='/read/'element={<Read/>} />
            <Route path='/read/:id'element={<Update/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
