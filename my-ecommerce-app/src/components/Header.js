import React from 'react';
import '../App.css';
const imagePath = '/images/logo.png';

function Header() {
    return (
        <div className="App-header">
            <img src={imagePath} className="App-logo" alt="logo" />
            <h3 className="header-txt">
            Company Name
            </h3>
        </div>
    );
}

export default Header;

