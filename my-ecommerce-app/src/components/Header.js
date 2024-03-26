import React from 'react';
import '../App.css';
const imagePath = '/images/logo.png';

function Header() {
    return (
        <div className="App-header">
            <div className="header-content">
                <img src={imagePath} className="App-logo" alt="logo" />
                <div className="company-name">
                    <h3 className="header-txt">
                        Company Name
                    </h3>
                </div>
            </div>

            <section className="navigation">
                <a href='/'> Home </a>
                <a href='/Products'> Products </a>
                <a href='/Login'> Login </a>
            </section>
        </div>
    );
}

export default Header;

