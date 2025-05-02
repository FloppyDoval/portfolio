import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import floppy from '../assets/images/floppy_icon.png';
// import resume from '../assets/images/resume.pdf';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/Home.html"><img src={floppy} alt="Floppy disk logo" className="logo-icon"></img></Link>
      </div>
      <div className="navbar-links">
        <Link 
          to="/Home.html" 
          className={location.pathname === '/portfolio' ? 'active' : ''}
        >
          Home
        </Link>
        <Link 
          to="/projects" 
          className={location.pathname === '/projects' ? 'active' : ''}
        >
          Projects
        </Link>  
        <Link 
          to="/experience" 
          className={location.pathname === '/experience' ? 'active' : ''}
        >
          Experience
        </Link>
        <a 
          href="/images/resume.pdf" 
          download 
          className={location.pathname === '/resume' ? 'active' : ''}
        >
          Resume
        </a>

        <Link 
          to="/links" 
          className={location.pathname === '/links' ? 'active' : ''}
        >
          Links
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;