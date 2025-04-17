import React from 'react';
import '../Acc.css';
import images from "../imageAssets";
import ImageSlideshow from '../ImageSlideshow';
import ComponentAnalysis from '../ComponentAnalysis';
import PDFViewer from '../PDFViewer';
import ComponentSection from '../toggle';
import before from '../assets/images/before.png';
import after from '../assets/images/after.png'

import '../ComponentAnalysis.css';


// interface TableData {
//   category: string;
//   mlWebsite: string[];
//   stephenKing: string[];
//   doggieLawn: string[];
// }

const Acc: React.FC = () => {
  return (
    <div className="blogContainer">
      <div className="content">
        <header className="header">
          <h1 className="title">🪗 Accessible Accordion Components 🪗</h1>
          <b><p className="subtitle"><i>A Case Study in Web Component Accessibility</i></p></b>
        </header>

        <section className="section">
          <h2 className="sectionTitle">Introduction</h2>
          <p>
            Accordion components are fundamental building blocks in modern web design, 
            particularly for organizing FAQs and content breakdowns. In this blog 
            I will explore how to make these components more accessible while balancing 
            user experience considerations!
          </p>
          {/* <ComponentSection /> */}
          <h2 className="sectionTitle">What is a Component?</h2>
          <p>
            <ul>
          <li>Components are reusable elements that we as designers use to create and manage consistent designs.</li>
          <li>Common examples include buttons, checkboxes, and dropdowns.</li>
          <li>Most interfaces are built from a predefined set of components, and they must be accessible! </li>
          <li>To do that, we must understand how components are made accessible.</li>
          </ul>
          </p>
          <b>💻 Keyboard Usage: 💻</b>
          <p>
          <a href="https://dequeuniversity.com/checklists/web/reading-focus-order">Focus Order:</a> Navigating to different (parts of) components in a reasonable order with Tab / Shift-Tab
          <br></br><b>Actions:</b> Using keyboard shortcuts (e.g., spacebar, return key, esc)
          <br></br><b>Solving Lack of Precision:</b> The ability to press the left, right, up, and/or down keys to get to the correct position (e.g., editing a word, menu dropdowns)
          </p>
          <b>🐀 Mouse Usage: 🐀</b>
          <p>
          <br></br><b>Double Clicks:</b> Double-clicking can simplify usage and lower the number of steps needed to continue the user journey (i.e: opening a file in Google Drive)
          <br></br><b>Right Clicks:</b> Allows users to be aware of what options are available to continue on their user journey
          <br></br><b>Path Gesturing:</b> Holding down the mouse button to navigate through a bunch of submenus for speed or convenience
          And more! See <a href="https://designsystem.digital.gov/documentation/accessibility/">this page</a> from the US Web Design System (USWBS) about how components & usability interact with accessibility."
          <h4><i>Source: CS1300 Accesible Design @ Brown University </i></h4>
          </p>
          
        </section>

        <section className="section">
          <h2 className="sectionTitle">Component Analysis</h2>
          <p><b>Analyzing three real-life examples of accordions</b></p>
          <p>Please click any of the links or the slideshow below to see the examples!</p>
        <div className="accordion-links">
          <a href="https://stephenbach.github.io/cs142-s25-www/#resources" className="link-item">ML Website</a>
          <a href="https://stephenking.com/faq/" className="link-item">Stephen King</a>
          <a href="https://doggielawn.com/pages/faq" className="link-item">DoggieLawn</a>
        </div>
          
          <div className="images">
          <ImageSlideshow images={images} />
          <ComponentAnalysis />

          </div>
    
        </section>

        
        <section className="section">
          <h2 className="sectionTitle"> State Models & Component Redesign</h2>
          <p><i>In this section, I will show two state models diagrams to visualize how a user may interact with the component as it currently is and how it may with some improvements and trade-off considerations.</i></p>
          <h5>Design of current accordio in <i>DoggieLawn</i> website:</h5>
          <img src={before} alt="state diagram of before changes"></img>
          <h5>Model state after <i>DoggieLawn</i> accordion components improvements:</h5>
          <img src={after} alt="state diagram of before changes"></img>
          <PDFViewer />
        </section>
        <section>
        <div className="container">
          <h3 className="subsection-header">⟡ Trade-Offs Analysis ⟡</h3>
          <ul className="reflection-list">
            <li>
            <strong>Expand Only One Section at a Time (Prevent Multiple Expansions)</strong>
            </li>
            <li>
              <i>Change:</i>  Clicking a new FAQ item automatically collapses any previously open one.
            </li>
            <li>
              <i>Benefit:</i> Reduces clutter for screen reader users, making navigation clearer.
            </li>
            <li>
              <i>Drawback:</i> Mouse users lose flexibility if they want to keep multiple sections open.
            </li>
            <li>Implement ARIA roles (aria-expanded, aria-controls, aria-hidden) so screen readers can announce the accordion state clearly.</li>
            <li><strong>Ensuring that keyboard navigation follows a logical structure:</strong></li>
            <li>Tab moves between FAQ items.</li>
            <li>Enter or Space expands/collapses an item.</li>
            <li>Pressing Esc collapses all open items for quicker navigation.</li>
            <li>Announce changes dynamically (e.g., "FAQ expanded/collapsed" via live regions).</li>
          </ul>
        </div>
        </section>
        <section className="section">
          <h2 className="sectionTitle">Design Iterations (Interactive Figma Prototype)</h2>
          <p><strong>Please hover over and click anywhere in the first question box to see a sample improvement from the DoggyLawn website accordion component.</strong></p>
          <p>If I were to code and include all improvements and tradeoffs I will add clear aria labels for screen reader accesibility and a clear hierarchy for Tab usage</p>
          <div className="figmaEmbed">
          <iframe 
            style={{ border: "rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            flex-direction="column"
            align-items="center"
            src="https://embed.figma.com/proto/WT1zuiMR3pV8mAHg9xws20/Accesibility---UI%2FUX?page-id=0%3A1&node-id=5-70&starting-point-node-id=5%3A70&scaling=contain&content-scaling=fixed&embed-host=share"
            allowFullScreen
            title="Accessibility UI/UX Design Iterations"
          />
          </div>
          
        </section>
        <section className="section">
          <h2 className="sectionTitle">Reflections</h2>
          <div className="reflection">
            <div className="reflectionPoint">
              <h3>Existing Component Analysis</h3>
              <ul>
                <li>DoggieLawn's accordion provided the best accessibility with clear visual hierarchy and touch targets</li>
                <li>Stephen King's site had basic functionality but lacked proper keyboard support</li>
                <li>ML course website showed minimal accessibility features</li>
              </ul>
            </div>

            <div className="reflectionPoint">
              <h3>Accessibility Improvements</h3>
              <ul>
                <li>Implemented single-expansion policy to reduce cognitive load</li>
                <li>Added comprehensive ARIA roles for screen reader clarity</li>
                <li>Enhanced keyboard navigation with consistent focus management</li>
                <li>Introduced Esc key for quick navigation reset</li>
              </ul>
            </div>

            <div className="reflectionPoint">
              <h3>Impact Analysis</h3>
              <ul>
                <li>Single-expansion policy helps users with attention difficulties</li>
                <li>Enhanced keyboard support benefits users who can't use a mouse</li>
                <li>Clear ARIA announcements improve screen reader navigation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Acc;