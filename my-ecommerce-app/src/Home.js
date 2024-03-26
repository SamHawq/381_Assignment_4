import React from 'react';
import './App.css';
const imagePath = '/images/logo.png';

function Home() {
    return (
        <div className="my_ecommerce_app">
        <header className="App-header">
            <img src={imagePath} className="App-logo" alt="logo" />
            <h3 className="header-txt">
            Company Name
            </h3>
        </header>

        <section className="navigation">
            <a href='/'> Home </a>
            <a href='components/ProductPage'> Products </a>
            <a href='/Login'> Login </a>
        </section>

        <section className='About-us'>
            <h2>About Us</h2>
            <p>Welcome to out online store! We are passionate about provided high-quality products 
                and exceptional customer service. Learn more about our story and commitment to your 
                satisfaction</p>
        </section>
        </div>
    );
}

export default Home;

