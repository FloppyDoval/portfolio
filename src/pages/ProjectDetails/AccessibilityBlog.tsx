import React from 'react';
import '../../styles/ProjectDetails.css';
const AccessibilityBlog: React.FC = () => {
  return (
    <div className="project-details-container">
      <header className="project-header">
        <h1>Personas & Storyboard</h1>
        <div className="project-tags">
          <span className="tag">UX Research</span>
        </div>
      </header>
      
      <section className="project-overview">
        <h2>Overview</h2>
        <p>
         
        </p>
      </section>
      
      <section className="project-details">
        <h2>Features</h2>
        <ul>
          <li>Interactive coding challenges with syntax highlighting</li>
          <li>Support for multiple programming languages</li>
          <li>Real-time feedback on typing speed and accuracy</li>
          <li>Responsive design that works on both desktop and mobile</li>
          <li>User authentication and progress tracking</li>
        </ul>
      </section>
      
      <section className="project-tech">
        <h2>Technologies Used</h2>
        <ul>
          <li><strong>Frontend:</strong> React, TypeScript, Chakra UI</li>
          <li><strong>Backend:</strong> Node.js, Express</li>
          <li><strong>Additional Libraries:</strong> React Router</li>
        </ul>
      </section>
      
      <section className="project-challenges">
        <h2>Challenges & Solutions</h2>
        <p>
          One of the main challenges in this project was implementing accurate syntax highlighting for
          multiple programming languages. I solved this by integrating a robust syntax highlighting library
          and customizing it to match the application's design system.
        </p>
        <p>
          Another challenge was creating a responsive design that would work well on both desktop and mobile
          devices while maintaining the functionality of the code editor. This was addressed by using Chakra UI's
          responsive components and implementing a mobile-specific view for the coding interface.
        </p>
      </section>
      
      <section className="project-links">
        <h2>Links</h2>
        <div className="links-container">
          <a href="https://floppydoval.github.io/accesibility-blog" target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo
          </a>
          <a href="https://github.com/floppydoval/accesibility-blog" target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub Repository
          </a>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityBlog;