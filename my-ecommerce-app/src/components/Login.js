// LoginPage.js
import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [showSignup, setShowSignup] = useState(false);

  const switchForm = () => {
    setShowSignup(!showSignup);
  }

  return (
    <div>
      <Header />
      {showSignup ? <SignupForm switchToLogin={switchForm} /> : <LoginForm switchToSignup={switchForm} />}
      <Footer />
    </div>
  );
}

export default LoginPage;
