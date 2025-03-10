import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      
      <div className="about-content">
        <p>
          Hi there! I'm a developer with a passion for creating accessible and aesthetic websites.
          I'm currently learning Swift while having experience with Python, React, and web development.
        </p>
        
        <p>
          My goal is to build intuitive and beautiful interfaces that provide exceptional user experiences.
          I believe in the power of good design and accessible technology to make a positive impact.
        </p>
        
        <div className="skills-section">
          <h2>Skills</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>Python</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML/CSS</li>
                <li>Swift (Learning)</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <ul>
                <li>React</li>
                <li>Chakra UI</li>
                <li>React Router</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools</h3>
              <ul>
                <li>Git/GitHub</li>
                <li>VS Code</li>
                <li>npm/yarn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;