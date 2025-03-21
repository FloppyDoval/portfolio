import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import floppy from '../assets/images/floppy_icon.png'
const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={floppy} alt="FLoppy disk logo" className="logo-icon"></img></Link>
      </div>
      <div className="navbar-links">
        <Link 
          to="/experience" 
          className={location.pathname === '/experience' ? 'active' : ''}
        >
          Experience
        </Link>
        <Link 
          to="/about" 
          className={location.pathname === '/about' ? 'active' : ''}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;