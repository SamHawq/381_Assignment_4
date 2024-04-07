// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  });
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    for (const key in formData) {
      if (!formData[key]) {
        setFormError('All fields required');
        return;
      }
    }
  
    if (formData.password !== formData.confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }
  
    setFormError('');
    try {
      const response = await axios.post('http://localhost:5000/SignupForm', formData);
      console.log('Response:', response); // Log the entire response object
      const responseData = response.data || {}; // Ensure responseData is an object
      console.log('Response data:', responseData); // Log the data property or an empty object
      setSuccessMessage('User signed up successfully!');
      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
      });
    } catch (error) {
      console.error('Signup error:', error.response.data); 
      setFormError('Failed to signup');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      
      <div>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <label htmlFor="signup-username">Username</label>
        <input type="text" id="signup-username" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      </div>
      <div>
        <label htmlFor="signup-password">Password</label>
        <input type="password" id="signup-password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      </div>
      <div>
        <label htmlFor="signup-confirm-password">Confirm Password</label>
        <input type="password" id="signup-confirm-password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
      </div>
      <div>
        <label htmlFor="signup-email">Email</label>
        <input type="email" id="signup-email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      </div>
      
      <button type="submit">Signup</button>
    
      <button type="button" onClick={switchToLogin}>Switch to Login</button>
    </form>
  );
}

export default SignupForm;
