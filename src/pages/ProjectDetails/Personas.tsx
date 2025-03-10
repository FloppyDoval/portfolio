import React from 'react';
import '../../styles/ProjectDetails.css';
// Import the empathy map and storyboard images
import ninaEmpathyMap from '../../images/nina_empathy.png';
import gregEmpathyMap from '../../images/greg_empathy.png';
import coffee from '../../images/vending_machine.png';
import storyboard from '../../images/storyboard.png';

const Personas: React.FC = () => {
  return (
    <div className="project-details-container">
      <header className="project-header">
        <h1>Personas & Storyboarding</h1>
        <div className="project-tags">
          <span className="tag">UX Research</span>
          <span className="tag">User Interface</span>
          <span className="tag">FrontEnd</span>
        </div>
      </header>
      
      <section className="project-overview">
        <h2>Overview 🖇️</h2>
        <p>
          In this project, I conducted a contextual inquiry to understand how users interact with a hot beverage vending machine in the Wellness 1st floor kitchen at Brown University. 
          By observing and interviewing users in their natural environment, I was able to gain insights into their experiences, 
          expectations, motivations, and challenges. From these observations, I created personas and a storyboard to illustrate 
          user needs and experiences, demonstrating the complete user journey from start to finish.
        </p>
      </section>
      
      <section className="project-details">
        <h2>The Interface ☕</h2>
        <div className="image-gallery">
        <img src={coffee} alt="Hot Beverages Vending Machine" />
        </div>
        <div>
          <ul>
            <li><b>💳 Payment interface</b> showing <i>"Swipe or Tap to Begin"</i> with card reader and Flex Points indicator</li>
            <li><b>☕︎ Drink selection</b> interface showing various coffee options on touchscreen</li>
            <li>⋆.˚Main welcome screen with <b>"Touch to Start"</b> button and attractive coffee imagery</li>
          </ul>
        </div>
        
        <p>
          This hot drinks vending machine is designed to provide a self-service beverage solution for students and staff on campus.
          It features a large touchscreen for selecting beverages, a card reader for payment (accepting both credit cards and campus ID cards), 
          and a dispensing area for cups and drinks. The interface guides users through a sequential process: starting the transaction, 
          selecting a drink, customizing options (if available), making payment, and collecting their beverage.
        </p>
      </section>
      
      <section className="interview-section">
        <h2>Preparation and Observations 🔎</h2>
        <p>
          I developed the following questions based on Dillman's principles for crafting objective, non-leading questions
          to gather insights about users' experiences with the vending machine interface:
        </p>
        <div className="questions-list">
          <ul>
            <li>What caught your attention first when you approached the machine?</li>
            <li>Did you already know which drink you wanted before approaching the machine?</li>
            <li>Can you walk me through the steps you took to get your drink?</li>
            <li>Was there anything confusing or unexpected about using the machine?</li>
            <li>Was there any moment when you weren't sure what to do next?</li>
            <li>How did you know which buttons to press?</li>
            <li>Did you notice any options or features on the machine that you didn't use?</li>
            <li>Have you used this machine before? If yes, has your approach to using it changed over time?</li>
          </ul>
        </div>
        
        <h2>Key Observations Across All Users 🗝</h2>
        <ul>
          <li>Most users approached the machine with a specific drink already in mind</li>
          <li>New users were initially confused about the payment process - particularly when to pay and which payment methods were accepted</li>
          <li>All the users expressed uncertainty about whether the machine would dispense cups or if they needed to bring their own</li>
          <li>Frequent users developed workarounds for known issues (e.g., carrying a mug in case the machine runs out of cups)</li>
          <li>The colorful touchscreen interface attracted users' attention, but some had difficulty locating specific drinks</li>
          <li>The "Flex Points" payment option caused confusion for some users who were unsure if their IDs would work</li>
        </ul>
      </section>
      
      <section className="personas-section">
        <h2>Personas 𐀪</h2>
        <p>
          Based on my observations and interviews, I developed two personas that represent distinct patterns of behavior
          and challenges with the vending machine interface:
        </p>
        
        <div className="personas-grid">
          <div className="persona-column">
            <div className="persona-avatar">
              <div className="avatar-circle nina"></div>
              {/* <img src={ninaProfile} alt="Nina's Empathy Map" /> */}
            </div>
            <h3>Nina, The Routine Coffee Drinker</h3>
            <ul className="persona-traits">
              <li>Is a busy Junior, studying Math and CS living in Wellness 3rd floor</li>
              <li>Is a regular user of the coffee vending machine</li>
              <li>Always orders the same drink (French Vanilla)</li>
              <li>Is often in a hurry between classes</li>
              <li>Values efficiency and consistency in her routine</li>
              <li>Carries her own mug as a backup solution</li>
            </ul>
            
            <h4>Nina's Empathy Map</h4>
            <div className="empathy-map-image">
            <img src={ninaEmpathyMap} alt="Greg's Empathy Map" />
            </div>
          </div>
          
          <div className="persona-column">
            <div className="persona-avatar">
              <div className="avatar-circle greg"></div>
            </div>
            <h3>Greg, The First-Time Explorer</h3>
            <ul className="persona-traits">
              <li>A junior, studying Geology living in South Campus (far from Wellness) </li>
              <li>Is a first-time or occasional user of the machine</li>
              <li>Enjoys trying different beverage options</li>
              <li>Takes time to read through all available options</li>
              <li>Gets confused by unclear interface workflows</li>
              <li>Needs clearer guidance on payment methods</li>
            </ul>
            
            <h4>Greg's Empathy Map</h4>
            <div className="empathy-map-image">
              <img src={gregEmpathyMap} alt="Greg's Empathy Map" />
            </div>
          </div>
        </div>
        
        <div className="personas-description">
          <p>
            These personas highlight the key interface problems users face. Nina struggles with unclear payment timing and uncertainty about cup availability, while Greg faces challenges understanding the workflow sequence and finding the options he wants. Nina represents experienced users who develop workarounds for interface issues, while Greg represents new users who need clearer guidance throughout the process.
          </p>
        </div>
      </section>
      
      <section className="storyboard-section">
        <h2>Storyboard 🎬</h2>
        <p>
          I created the following storyboard to illustrate Nina's complete journey with the coffee vending machine, 
          from initial approach to receiving her drink. The storyboard highlights both her efficiency due to familiarity 
          and the moments of uncertainty she still experiences despite being a regular user.
        </p>
        
        {/* Full Storyboard Image */}
        <div className="storyboard-image">
          <img src={storyboard} alt="Storyboard of Nina's coffee vending machine experience" className="full-width-image" />
        </div>
        
        <p className="storyboard-description">
          This is Nina's entire user journey from start to end, reflecting her goals of getting her 
          usual French Vanilla coffee quickly and efficiently.
        </p>
      </section>
      
      <section className="reflection-section">
        <h2>Reflection & Insights 💭</h2>
        <p>
          Thanks to this user research and exploration, I was able to better understand how not every user has the same goals or behavior when using an interface.
          I was able to find the following important insights about the coffee vending machine interface:
        </p>
        <ul>
          <li>
            <strong>Payment Clarity:</strong> The most consistent pain point was understanding when and how to pay. 
            A clearer indication of accepted payment methods and the timing of payment in the process would improve the experience.
          </li>
          <li>
            <strong>First-Time vs. Regular Users:</strong> There's a significant gap between the experiences of first-time 
            and regular users. While regular users develop workarounds for known issues, new users struggle with basic workflow sequences.
            Oftentimes, feeling annoyed if their transaction is interrupted or confused about how the machine will dispense their coffee.
          </li>
          <li>
            <strong>Resource Availability:</strong> Users are concerned about whether the machine has necessary resources (cups) 
            available, indicating a need for better and more accurate status indicators.
          </li>
          <li>
            <strong>Visual Guidance:</strong> The colorful interface attracts attention but could benefit from clearer 
            visual hierarchy to guide users through the correct sequence of steps.
          </li>
        </ul>
        <p>
          These findings could inform several improvements to the interface design, such as adding clearer step indicators, 
          providing better feedback about resource availability, and clarifying payment options earlier in the process.
        </p>
      </section>
    </div>
  );
};

export default Personas;