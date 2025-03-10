import React from 'react';
import '../styles/Footer.css';
// Import react-icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>© {currentYear} | Florencia Doval</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/floppydoval"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {/* Render icon as function */}
            {FaGithub({ className: "icon", size: 40 })}
            <span className="icon-text"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/florenciadoval/"
            target="_blank"
            rel="noopener noreferrer" 
            className="social-icon"
          >
            {/* Render icon as function */}
            {FaLinkedin({ className: "icon", size: 40 })}
            <span className="icon-text"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;