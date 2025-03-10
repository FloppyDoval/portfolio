import React from 'react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      
      <div className="experience-content">
        <p className="coming-soon">
          My experience section is currently under construction. 
          Check back soon to learn more about my work experience and projects!
        </p>
        
        {/* You can uncomment and modify this section when you have experiences to add */}
        {/*
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">20XX - Present</div>
            <div className="timeline-content">
              <h3>Position Title</h3>
              <h4>Company Name</h4>
              <p>
                Description of your responsibilities and achievements in this role.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">20XX - 20XX</div>
            <div className="timeline-content">
              <h3>Previous Position</h3>
              <h4>Company Name</h4>
              <p>
                Description of your responsibilities and achievements in this role.
              </p>
            </div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default Experience;