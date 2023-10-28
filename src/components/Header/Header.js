import './Header.css';
import React from 'react';
import logo from '../../images/Logo.svg'


const Header = () => {
    return (
        <nav className='header'>
            <img className='logo-png' src={logo} alt="" />
            <div>
                <a href="/Home">Home</a>
                <a href="/Order">Order Review</a>
                <a href="/Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;