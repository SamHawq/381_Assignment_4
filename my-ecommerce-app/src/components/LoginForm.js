import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ switchToSignup, Authentication }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.username || !formData.password) {
      setFormError('Please fill in all fields');
      Authentication(false)
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/Login', formData);
      console.log(response.data); 
      localStorage.setItem('authenticated', true); 
      navigate('../components/ProductPage')
    } catch (error) {
      console.error('Login error:', error.response.data); // Log error response
      setFormError('Incorrect username or password'); // Set form error message
      Authentication(false)
    }
  }  
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      <div>
        <label htmlFor="login-username">Username</label>
        <input type="text" id="login-username" name="username" value={formData.username} onChange={handleChange}  placeholder="Username"  />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input type="password" id="login-password" name="password" value={formData.password} onChange={handleChange}  placeholder="Password"  />
      </div>
      
      <button type="submit">Login</button>
      
      <button type="button" onClick={switchToSignup}>Switch to Signup</button>
    </form>
  );
}

export default LoginForm;
