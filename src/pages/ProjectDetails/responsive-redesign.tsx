import '../../styles/ProjectDetails.css';
//Can only use HTML + CSS
import MadridVideo from '../../assets/images/gifs/madrid_gif.mov';
import StyleGuide from '../../assets/images/styleGuide.png'
import iphone from '../../assets/images/mobile.png'
import laptop from '../../assets/images/ipad.png'
import ipad from '../../assets/images/website.png'
import demo from '../../assets/images/demo.gif'
import  '../../styles/Responsive.css';
const Responsive: React.FC = () => {
  return (
    <div className="project-details-container">
      <header className="project-header">
        <h1>Responsive Redesign</h1>
        <div className="project-tags">
          <span className="tag">User Interface</span>
          <span className="tag">FrontEnd</span>
          <span className="tag">Style Guide</span>

        </div>
      </header>
      
      <section className="project-overview">
        <h2>Overview ⊹ 🍰˚⊹</h2>
        <p>
          In this project, I redesigned the website of the beloved Madrid Bakery in Providence, RI.
          Many students at Brown University and RISD go to Madrid to hang out with friends or buy birthday cakes!
          One of my friends mentioned she had trouble navigating through the website and understanding the Menu when she was planning a birthday party.
          So, I decided to use this website as a case study to learn more about not just FrontEnd Development but Accesible and Responsive Design Principles. 
        </p>
      </section>

      <section>
        <h3 className="subtitles"> Madrid European Bakery Website 🥐⋆</h3>
        <a href="https://www.madrideuropeanbakery.com/"><i>Click Here</i></a> to view the original Website
        <video className="gifSize"
            src={MadridVideo} 
            title="GIF of the Madrid Website" 
            aria-label="GIF of the Madrid Website"
            autoPlay 
            loop 
            muted 
            playsInline 
            />
      </section>
      <section>
      <h3>Possible Improvements🧁</h3>
      </section>
      <section>
        
        
        <h3 className="subtitles">Accesibility</h3>
        <ul>
            <li><b>Poor Color Contrast:</b>The gold/yellow text on white background lacks sufficient contrast for users with visual impairments </li>
            <li><b>Small text size:</b>Menu descriptions are small and may be difficult to read for some users</li>
        </ul>
        
      </section>
      <section>
        <h3 className="subtitles">Better Design Practices</h3>
        <ul>
            <li><b>Visual Hierarchy:</b> Menu titles and categories aren't visually differentiated from content</li>
            <li><b>Inconsistent spacing</b> Uneven spacing between menu items creates a disorganized appearance</li>
            <li><b>Lack of visual organization: </b>Menu items presented as a simple list without categorization</li>
            <li><b>Minimal branding elements:</b> Limited use of brand identity throughout the site. For example, there is no logo of the bakery</li>
            <li><b>No clear calls-to-action:</b>Missing buttons for ordering or contacting</li>
        </ul>
      </section>
      <section>
        <h3 className="subtitles">Responsiveness</h3>
        <ul>
            <li>Although the website adapts to different devices, the extra white spaces in every page create unnecesary scrolling.</li>
        </ul>
      </section>

      <section>
        <h3 className="header2">Rebranding✨ Style Guide</h3>
        <img src={StyleGuide} alt="Style Guide for Madrid"/>
        
      </section>
      <section>
      <h3 className="header2">Prototypes</h3>
      <p>Now, it's time to create some Figma Prototypes with the <i>new branding✨</i> and responsive re-designs!</p>
      <p>What changes should we consider for an adaptable design?</p>
      <ul>
            <li><b>Header Section</b> - Logo remains centered on all devices with menu on left and cart on right.</li>
            <li><b>Product Card Container</b> - Flexbox contained with wrap enabled. Cards display as: 3-across on desktop (1024px), 2-3 across on tablet (768px-1024px), and 1-across on mobile (768px). Gap between cards reduces from 40px to 24px on mobile.</li>
            <li><b>Menu Items Section</b> - Menu uses flexbox with space-between for item name/description, price and +. The layout maintains horizontal alignment but font size reduces for better readability.</li>
        </ul>
    
        <div className="device-grid-container">
      <ul>
          <ol><b>Tablet:</b></ol>
            <li>Product cards in a 2-3 column grid with flexbox and appropriate wrapping for different screen orientations</li>
            <li>Aria-labels for navigation elements to ensure that the menu communicates its state to screen readers</li>
            <ol><b>Mobile:</b></ol>
            <li>Single-column layout with reduced spacing (24px gap) to maximize content visibility on small screens</li>
            <li>Smaller text sizes while maintaining readability (minimum 16px font size for product descriptions, with adequate color contrast)</li>
            <li>Larger 'Go to the top' circle in the bottom corner to indicate the user that they can use that option in case of scrolling back</li>
            <li>Menu Category filter is scrollable to the right for mobile users with smaller screens. I think this is okay given that there are only 5 categories. So, users will at most scroll to see one extra category. I chose this over wrapping around the container of the categories because it will create extra vertical scrolling</li>
            <ol><b>Laptop:</b></ol>
            <li>3-column specialties product cards layout has a slightly larger width and proper alignment for the larger screen. </li>
            <li>media queries with min-width: 990px to apply desktop-specific styles and optimize viewport</li>
            <li>grid-template-columns: repeat(3, 1fr) for even distribution of product cards across available space</li>

        </ul>
      <div className="device-grid">
        <div className="device-item">
          <h3 className="header2">Tablet version</h3>
          <div className="img-container">
            <img src={ipad} alt="Style Guide for Madrid" />
          </div>
        </div>
        
        <div className="device-item">
          <h3 className="header2">Mobile version</h3>
          <div className="img-container">
            <img src={iphone} alt="Style Guide for Madrid" />
          </div>
        </div>
        
        <div className="device-item">
          <h3 className="header2">Laptop version</h3>
          <div className="img-container">
            <img src={laptop} alt="Style Guide for Madrid" />
          </div>
        </div>
      </div>
      </div>
      </section>
      <section>
      <h3 className="header2">Improved Page</h3>
        <a href="/portfolio/madrid.html" target="_blank"><i>Click Here</i></a> to view the new improved Website
        <div className="gifSize">
        <img src={demo} alt="Style Guide for Madrid" />
        </div>
      </section>

      <section>
      <h3 className="header2">Reflections 💡</h3>
      <p>With this project I learned about how to create intentional and thoughtful Style Guides that consider accesibility and a brand's concept<i>(high contrast between colors)</i></p>
      <p>Moreover, I was able to refresh myself on HTML and CSS design. I did not use any React libraries or JavaScript for the page redesign, this restriction made it easier to focus on responsive layouts, flexboxes, and best practices with these tools 🛠️ </p>
      <p>Finally, I also practiced my skills in <a href="https://www.figma.com/design/vGS6NjMv1O1lkr5gV9CRIW/Responsive-Design-Style-guide?node-id=0-1&t=b1Kn46Y51MQX0v7y-1">Figma</a> with different designs until I decided on the final Style Guide</p>
      </section>

      <div className="footer-section">
      </div>
    </div>
  )}

  export default Responsive;