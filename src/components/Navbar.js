import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="nav-logo">
        <span className="nav-logo-icon">🏍️</span>
        <div className="nav-brand">
          Mantu Motorcycle
          <small>& Tyre Repairing · Nepal</small>
        </div>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#owner" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      <a
        href="https://wa.me/9829442027?text=Namaste%20Mantu%20ji%2C%20bike%20service%20chahiye"
        className="nav-wa"
        target="_blank"
        rel="noreferrer"
      >
        💬 WhatsApp
      </a>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}
