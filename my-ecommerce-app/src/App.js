import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import Home from './components/Homepage';
import Login from './components/Login'
import ProductPage from './components/ProductPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/ProductPage" element={<ProductPage />} />
        <Route path="/Login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

