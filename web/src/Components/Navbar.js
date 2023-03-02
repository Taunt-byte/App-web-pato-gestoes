import React, { useState } from 'react';
import '../App.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">Logo</div>
      <ul className={`navbar__menu ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <button className="navbar__toggle" onClick={toggleMenu}>
        <span className="navbar__icon"></span>
      </button>
    </nav>
  );
}

export default Navbar;