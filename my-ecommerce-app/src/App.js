import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Homepage';
import Login from './components/Login'
import ProductPage from './components/ProductPage';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated) {
      setAuthenticated(true);
    }else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/ProductPage" element={authenticated ? <ProductPage /> : <Navigate to="/Login" replace />} />
        <Route path="/Login" element={<Login setAuthenticated={setAuthenticated}/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

