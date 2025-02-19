import React from 'react';
import './Acc.css';
import images from "./imageAssets";
import ImageSlideshow from './ImageSlideshow';
import ComponentAnalysis from './ComponentAnalysis';
import PDFViewer from './PDFViewer';

interface TableData {
  category: string;
  mlWebsite: string[];
  stephenKing: string[];
  doggieLawn: string[];
}

const App: React.FC = () => {
  return (
    <div className="blogContainer">
      <div className="content">
        <header className="header">
          <h1 className="title">Accessible Accordion Components</h1>
          <b><p className="subtitle">A Case Study in Web Component Accessibility</p></b>
        </header>

        <section className="section">
          <h2 className="sectionTitle">Introduction</h2>
          <p>
            Accordion components are fundamental building blocks in modern web design, 
            particularly for organizing FAQs and content breakdowns. This case study 
            explores how to make these components more accessible while balancing 
            user experience considerations.
          </p>
          <h2 className="sectionTitle">What is a Component?</h2>
          <p>
            <ul>
          <li>Components are reusable elements that we as designers use to create and manage consistent designs.</li>
          <li>Common examples include buttons, checkboxes, and dropdowns.</li>
          <li>Most interfaces are built from a predefined set of components, and they must be accessible! </li>
          <li>To do that, we must understand how components are made accessible.</li>
          </ul>
          </p>
          <p>
          <b>Keyboard Usage:</b>
          </p>
          <p>
          <a href="https://dequeuniversity.com/checklists/web/reading-focus-order">Focus Order:</a> Navigating to different (parts of) components in a reasonable order with Tab / Shift-Tab
          <br></br><b>Actions:</b> Using keyboard shortcuts (e.g., spacebar, return key, esc)
          <br></br><b>Solving Lack of Precision:</b> The ability to press the left, right, up, and/or down keys to get to the correct position (e.g., editing a word, menu dropdowns)
          </p>
          <p>
          <b>Mouse Usage:</b>
          </p>
          <p>
          <br></br><b>Double Clicks:</b> Double-clicking can simplify usage and lower the number of steps needed to continue the user journey (i.e: opening a file in Google Drive)
          <br></br><b>Right Clicks:</b> Allows users to be aware of what options are available to continue on their user journey
          <br></br><b>Path Gesturing:</b> Holding down the mouse button to navigate through a bunch of submenus for speed or convenience
          And more! See <a href="https://designsystem.digital.gov/documentation/accessibility/">this page</a> from the US Web Design System (USWBS) about how components & usability interact with accessibility."
          <h4>-CS1300 Accesible Design @ Brown University</h4>
          </p>
          
        </section>

        <section className="section">
          <h2 className="sectionTitle">Component Analysis</h2>
          <p>Analyzing three real-life example usage of accordions</p>
          
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
          <PDFViewer />
        </section>
        <section className="section">
          <h2 className="sectionTitle">Design Iterations</h2>
          <div className="figmaEmbed">
          <iframe 
            style={{ border: "rgba(255, 255, 255, 255)" }}
            width="500"
            height="300"
            flex-direction="column"
            align-items="center"
            src="https://embed.figma.com/proto/WT1zuiMR3pV8mAHg9xws20/Accesibility---UI%2FUX?page-id=0%3A1&node-id=5-70&starting-point-node-id=5%3A70&scaling=min-zoom&content-scaling=fixed&embed-host=share"
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

export default App;