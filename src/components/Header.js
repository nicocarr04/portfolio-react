import React, { useState } from 'react';
import '../css/header.css';

function Header() {
  // La variable en utilisant le useState
  const [navbarLinksVisible, setNavbarLinksVisible] = useState(false);

  // Juste un toggle off et on
  function toggleNavButton() {
    setNavbarLinksVisible((prevState) => !prevState);
  }

  // Le div de navbar-links a un check pour si navbarLinksVisible est on ou pas 
  // et si on affiche la class ou pas.
  return (
    <nav className="navbar">
      <div className="brand-title">Nicolas Games</div>
      <a className="toggle-navbutton" onClick={toggleNavButton}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`navbar-links ${navbarLinksVisible ? 'active' : ''}`}>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/projects'>Projects</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
