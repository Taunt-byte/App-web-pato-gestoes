import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <header className='navbar'>
      <div className='navbar-logo'>
        <h1>Pato Gestões</h1>
      </div>
      <nav>
        <ul className='navbar-menu'>
          <li><a href="/">Início</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
