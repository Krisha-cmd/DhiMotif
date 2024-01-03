import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <div>
      <button className="menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
      <div className={`navbar ${mobileMenuVisible ? 'visible' : ''}`}>
        <div className={`nav-content ${mobileMenuVisible ? 'visible' : ''}`} >
          <button className="nav-button" id="Publications">
            <Link to="publications" smooth={true} duration={500}>
              PUBLICATIONS
            </Link>
          </button>
          <button className="nav-button" id="Designs">
            <Link to="designs" smooth={true} duration={500}>
              DESIGNS
            </Link>
          </button>
          <button className="nav-button" id="Achievements">
            <Link to="achievements" smooth={true} duration={500}>
              ACHIEVEMENTS
            </Link>
          </button>
          <button className="nav-button" id="Contact">
            <Link to="contact" smooth={true} duration={500}>
              CONTACT
            </Link>
          </button>
        </div>
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default Navbar;
