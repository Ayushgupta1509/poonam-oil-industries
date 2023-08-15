import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Logo /> */}
          Health care Mustard Oil
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          0
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact US</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;


