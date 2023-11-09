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
        <Link to="/Order">Order Review</Link>
        <Link to="/Inventory">Manage Inventory</Link>
        <Link to="/About">About us</Link>
        <Link to="/Login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
