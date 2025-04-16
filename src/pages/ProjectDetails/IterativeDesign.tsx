import React from 'react';
import '../../styles/ProjectDetails.css';
// Import for images:

const Iterative: React.FC = () => {
  return (
    <div className="project-details-container">
      <header className="project-header">
        <h1>Iterative Design</h1>
        <div className="project-tags">
          <span className="tag">UX Research</span>
          <span className="tag">User Interface</span>
          <span className="tag">Design</span>
          <span className="tag">Figma</span>
        </div>
      </header>
      
      <section className="project-overview">
        <h2>Overview 🖇️</h2>
        <p>
          To add 
        </p>
      </section>
      
      <section className="project-details">
        <h2>Sketching and Wireframing ᝰ✍🏻</h2>
        <p>
          blabla
          Explaining our sketching + wireframing
            What informed our design or structural choices?
            Creative inputs + Objective good design
            Adding an embed from Balsamiq(?) or a Gallery View of each page?

        </p>
      </section>
      
      <section className="interview-section">
        <h2>Critique 🔎</h2>
        <p>
          intro
        </p>
        <div className="questions-list">
          <ul>
            <li>Questions, etc</li>
          </ul>
        </div>
        
        <h2>Key Observations Across All Users 🗝</h2>
        <ul>
          <li>blabla</li>
        </ul>
      </section>
      
      <section className="personas-section">
        <h2>Hi-Fi Prototype</h2>
        <p>
          We developed High Fidelity prototypes for the webpages.
        </p>
      </section>
      
      <section className="storyboard-section">
        <h2>User Testing 🎬</h2>
        <p>
        Key Questions that guided us
        Key Findings
        Next Steps (any changes we might want to consider, needs from the user, etc…)

        </p>
      </section>
      
      <section className="reflection-section">
        <h2>Reflection & Insights 💭</h2>
        <p>
          blabla
        </p>
      </section>
    </div>
  );
};

export default Iterative;