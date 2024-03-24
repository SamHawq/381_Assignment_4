import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import Home from './Home';
import Products from './Products'
import Login from './Login'


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
