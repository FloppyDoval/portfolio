import React from 'react';
import '../../styles/ProjectDetails.css';
const Personas: React.FC = () => {
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
          In this project, I conducted a contextual inquiry to understand how users interact with a hot beverage vending machine. 
          I observed and interviewed three users, created personas based on these observations, and developed a storyboard 
          illustrating one persona's journey with the interface. This process helped me identify usability patterns and pain points 
          that could inform future design improvements.
        </p>
      </section>
      
      <section className="project-details">
        <h2>The Interface</h2>
        <div className="image-gallery">
          <figure>
            <img src={process.env.PUBLIC_URL + '/images/coffee-machine-1.jpg'} alt="Coffee vending machine payment interface" />
            <figcaption>Payment interface showing "Swipe or Tap to Begin" with card reader and Flex Points indicator</figcaption>
          </figure>
          <figure>
            <img src={process.env.PUBLIC_URL + '/images/coffee-machine-2.jpg'} alt="Coffee vending machine drink selection screen" />
            <figcaption>Drink selection interface showing various coffee options on touchscreen</figcaption>
          </figure>
          <figure>
            <img src={process.env.PUBLIC_URL + '/images/coffee-machine-3.jpg'} alt="Coffee vending machine start screen" />
            <figcaption>Main welcome screen with "Touch to Start" button and attractive coffee imagery</figcaption>
          </figure>
        </div>
        
        <p>
          This hot drinks vending machine features a large touchscreen for selecting beverages, a card reader for payment, 
          and a dispensing area for cups. The interface guides users through a sequential process: starting the transaction, 
          selecting a drink, customizing options (if available), making payment, and collecting their beverage.
        </p>
      </section>
      
      <section className="interview-section">
        <h2>Interview Questions & Observations</h2>
        <p>
          I developed the following questions to gain insights about users' experiences with the vending machine interface:
        </p>
        <div className="questions-list">
          <ol>
            <li>What caught your attention first when you approached the machine?</li>
            <li>Did you already know which drink you wanted before approaching the machine?</li>
            <li>Can you walk me through the steps you took to get your drink?</li>
            <li>Was there anything confusing or unexpected about using the machine?</li>
            <li>Was there any moment when you weren't sure what to do next?</li>
            <li>How did you know which buttons to press?</li>
            <li>Did you notice any options or features on the machine that you didn't use?</li>
            <li>Have you used this machine before? If yes, has your approach to using it changed over time?</li>
          </ol>
        </div>
        
        <h3>Key Observations</h3>
        <ul>
          <li>Most users approached the machine with a specific drink already in mind</li>
          <li>New users were initially confused about the payment process - particularly when to pay and which payment methods were accepted</li>
          <li>Several users expressed uncertainty about whether the machine would dispense cups or if they needed to bring their own</li>
          <li>Frequent users developed workarounds for known issues (e.g., carrying a mug in case the machine runs out of cups)</li>
          <li>The colorful touchscreen interface attracted users' attention, but some had difficulty locating specific drinks</li>
          <li>The "Flex Points" payment option caused confusion for some users who were unsure if their IDs would work</li>
        </ul>
      </section>
      
      <section className="personas-section">
        <h2>Personas</h2>
        
        <div className="persona">
          <h3>Persona 1: Nina, The Routine Coffee Drinker</h3>
          <p className="persona-headline">A regular user who prioritizes efficiency and consistency in her coffee experience</p>
          
          <div className="empathy-map">
            <div className="empathy-quadrant">
              <h4>Thinks</h4>
              <ul>
                <li>"I hope the machine has cups today."</li>
                <li>"Will my ID work for payment this time?"</li>
                <li>"I just want my usual French Vanilla without any hassle."</li>
                <li>"I wish the payment process was more straightforward."</li>
              </ul>
            </div>
            
            <div className="empathy-quadrant">
              <h4>Feels</h4>
              <ul>
                <li>Comfortable with the routine but annoyed by occasional inconsistencies</li>
                <li>Frustrated when the machine runs out of supplies</li>
                <li>Relieved when the transaction goes smoothly</li>
                <li>Proud of her adaptability (carrying her own mug)</li>
              </ul>
            </div>
            
            <div className="empathy-quadrant">
              <h4>Says</h4>
              <ul>
                <li>"I always get French Vanilla, it's what I usually get."</li>
                <li>"I was confused about whether I can swipe with my Brown ID."</li>
                <li>"Now, I always carry a mug in case the machine runs out of cups."</li>
                <li>"I wasn't sure about when to pay exactly."</li>
              </ul>
            </div>
            
            <div className="empathy-quadrant">
              <h4>Does</h4>
              <ul>
                <li>Follows the same sequence of steps each time</li>
                <li>Checks the payment reader first before ordering</li>
                <li>Navigates quickly through the menu to find her usual drink</li>
                <li>Carries her own mug as a backup</li>
                <li>Uses her Brown ID for payment</li>
              </ul>
            </div>
          </div>
          
          <p className="persona-description">
            Nina represents users who have formed a routine with the machine but still encounter occasional issues. 
            She values consistency and efficiency, preferring to get her usual drink quickly without surprises. 
            Her experience highlights problems with the payment process clarity and cup availability that affect 
            regular users of the machine.
          </p>
        </div>
        
        <div className="persona">
          <h3>Persona 2: Alex, The First-Time Explorer</h3>
          <p className="persona-headline">A new user trying to navigate an unfamiliar interface with minimal guidance</p>
          
          <div className="empathy-map">
            <div className="empathy-quadrant">
              <h4>Thinks</h4>
              <ul>
                <li>"How does this machine work? There are so many options."</li>
                <li>"Do I need to pay first or select a drink first?"</li>
                <li>"I wonder if this accepts my student ID or just credit cards."</li>
                <li>"Do I need my own cup or does it provide one?"</li>
              </ul>
            </div>
            
            <div className="empathy-quadrant">
              <h4>Feels</h4>
              <ul>
                <li>Overwhelmed by the number of choices</li>
                <li>Anxious about potentially making a mistake</li>
                <li>Uncertain about the sequence of steps</li>
                <li>Curious about customization options</li>
              </ul>
            </div>
            
            <div className="empathy-quadrant">
              <h4>Says</h4>
              <ul>
                <li>"I'm not sure where to start."</li>
                <li>"Do I need to bring my own cup?"</li>
                <li>"I don't see where to put my money."</li>
                <li>"The screen is nice but I don't know what to press first."</li>
              </ul>
            </div>
            
            <div className="empathy-quadrant">
              <h4>Does</h4>
              <ul>
                <li>Hesitates before touching the screen</li>
                <li>Looks around the machine for instructions</li>
                <li>Checks all sides of the machine before starting</li>
                <li>Browses through multiple menu screens before deciding</li>
                <li>Tries different payment methods to see which works</li>
              </ul>
            </div>
          </div>
          
          <p className="persona-description">
            Alex represents first-time users who struggle with understanding the vending machine's workflow. 
            The interface provides insufficient guidance on the sequence of operations, payment options, and 
            cup dispensing, causing confusion and hesitation. This persona highlights the need for clearer 
            instructions and a more intuitive first-time user experience.
          </p>
        </div>
      </section>
      
      <section className="storyboard-section">
        <h2>Storyboard: Nina's Coffee Routine</h2>
        <p>This storyboard illustrates Nina's experience as she interacts with the coffee vending machine.</p>
        
        <div className="storyboard-frames">
          <figure className="storyboard-frame">
            <img src={process.env.PUBLIC_URL + '/images/storyboard-1.jpg'} alt="Nina approaching the coffee machine" />
            <figcaption>1. Nina approaches the coffee machine during her morning break, already knowing she wants her usual French Vanilla.</figcaption>
          </figure>
          
          <figure className="storyboard-frame">
            <img src={process.env.PUBLIC_URL + '/images/storyboard-2.jpg'} alt="Nina checking for cups" />
            <figcaption>2. Before starting her order, Nina checks if there are cups available in the machine. She also has her own mug in her bag just in case.</figcaption>
          </figure>
          
          <figure className="storyboard-frame">
            <img src={process.env.PUBLIC_URL + '/images/storyboard-3.jpg'} alt="Nina touches the screen to start" />
            <figcaption>3. Nina touches the "Touch to Start" button on the welcome screen to begin her order.</figcaption>
          </figure>
          
          <figure className="storyboard-frame">
            <img src={process.env.PUBLIC_URL + '/images/storyboard-4.jpg'} alt="Nina browsing the menu" />
            <figcaption>4. She quickly navigates through the menu, looking for the French Vanilla option she gets every time.</figcaption>
          </figure>
          
          <figure className="storyboard-frame">
            <img src={process.env.PUBLIC_URL + '/images/storyboard-5.jpg'} alt="Nina selecting French Vanilla" />
            <figcaption>5. Nina selects French Vanilla from the menu, her preferred daily choice.</figcaption>
          </figure>
          
          <figure className="storyboard-frame">
            <img src={process.env.PUBLIC_URL + '/images/storyboard-6.jpg'} alt="Nina pausing at payment screen" />
            <figcaption>6. When reaching the payment screen, Nina pauses momentarily, still finding the payment timing slightly confusing.</figcaption>
          </figure>
          
          <figure className="storyboard-frame">
            <img src={process.env.PUBLIC_URL + '/images/storyboard-7.jpg'} alt="Nina swiping her ID card" />
            <figcaption>7. Nina swipes her Brown ID for payment, hoping it will work with the Flex Points system.</figcaption>
          </figure>
          
          <figure className="storyboard-frame">
            <img src={process.env.PUBLIC_URL + '/images/storyboard-8.jpg'} alt="Nina waiting for her coffee" />
            <figcaption>8. She watches as the machine dispenses a cup and begins filling it with her French Vanilla coffee.</figcaption>
          </figure>
          
          <figure className="storyboard-frame">
            <img src={process.env.PUBLIC_URL + '/images/storyboard-9.jpg'} alt="Nina taking her coffee" />
            <figcaption>9. Nina takes her completed drink, relieved that today's transaction went smoothly without any issues.</figcaption>
          </figure>
        </div>
      </section>
      
      <section className="reflection-section">
        <h2>Reflection & Insights</h2>
        <p>
          This contextual inquiry revealed several important insights about the coffee vending machine interface:
        </p>
        <ul>
          <li>
            <strong>Payment Clarity:</strong> The most consistent pain point was understanding when and how to pay. 
            A clearer indication of accepted payment methods and the timing of payment in the process would improve the experience.
          </li>
          <li>
            <strong>First-Time vs. Regular Users:</strong> There's a significant gap between the experiences of first-time 
            and regular users. While regular users develop workarounds for known issues, new users struggle with basic workflow sequences.
          </li>
          <li>
            <strong>Resource Availability:</strong> Users are concerned about whether the machine has necessary resources (cups) 
            available, indicating a need for better status indicators.
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