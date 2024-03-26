import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import React from 'react';
<<<<<<< HEAD
import Home from './component/Homepage';
import Products from './Products'
=======
import Home from './Home';
>>>>>>> f9f6331960f4ab913099c0cff3c3137f90a73150
import Login from './Login'
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

