// my App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/ProductPage';
import Loginpage from './components/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={isAuthenticated ? <Productpage /> : <Navigate to="/login" replace />} />
          <Route path="/login" element={<Loginpage setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
