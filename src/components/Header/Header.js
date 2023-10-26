import React from 'react';
import logo1 from '../../images/ema-jhon-logo.png';
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            <img className='logo-png' src={logo1} alt="" />
            <div>
                <a href="/Home">Home</a>
                <a href="/Order">Order</a>
                <a href="/Order">Order Review</a>
                <a href="/Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;