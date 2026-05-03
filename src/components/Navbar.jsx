import React, { useState } from 'react';
import { Link } from 'react-router';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/Logo.png" alt="Bluroc Media" />
        </Link>

        <ul className="navbar-links">
          <li><Link to="/about">about us</Link></li>
          <li><a href="/#works">works</a></li>
          <li><Link to="/services">marketing services</Link></li>
          <li><a href="/#contact">contact us</a></li>
        </ul>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/about" onClick={closeMenu}>about us</Link>
        <a href="/#works" onClick={closeMenu}>works</a>
        <Link to="/services" onClick={closeMenu}>marketing services</Link>
        <a href="/#contact" onClick={closeMenu}>contact us</a>
      </div>
    </>
  );
}

export default Navbar;
