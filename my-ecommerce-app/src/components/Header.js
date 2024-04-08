import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const imagePath = '/images/logo.png';

function Header() {
    return (
        <div className="App-header">
            <div className="header-content">
                <img src={imagePath} className="App-logo" alt="logo" />
                <div className="company-name">
                    <p className="header-txt">
                        Company Name
                    </p>
                </div>
            </div>

            <section className="navigation">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/login">Login</Link>
            </section>
        </div>
    );
}

export default Header;

