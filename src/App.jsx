import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Budgets from './pages/Budgets'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  


  return (
    <BrowserRouter>    
    <nav className='NavBarDiv'>    
      <Link to="/home">Home</Link>
      <Link to="/budgets">Budget</Link>
      <Link to="/authentication">Authentication</Link>
  
    </nav>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/budgets" element={<Budgets/>}/>
      <Route path="/authentication" element={<Auth/>}/>
    </Routes>

  </BrowserRouter>
  )
}

export default App
