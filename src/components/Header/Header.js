import "./Header.css";
import React from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img className="logo-png" src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/order">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/about">About us</Link>
        <Link to="/Login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Header;
