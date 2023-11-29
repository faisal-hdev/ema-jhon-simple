import "./Header.css";
import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="header">
      <img className="logo-png" src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/order">Order Review</Link>
        <Link to="/shipping">Shipping Inventory</Link>
        <Link to="/about">About us</Link>
        {user?.uid ? (
          <button className="btn-logOut" onClick={logOut}>
            Log Out
          </button>
        ) : (
          <>
            <Link to="/Login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        <span>{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;
