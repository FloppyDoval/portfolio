import React from 'react';
import '../../styles/ProjectDetails.css';
// Import for images:
import HomePage from '../../assets/images/Home Page.png';
import CoursePage from '../../assets/images/Lesson - Page.png';
import LoginPage from '../../assets/images/Login to Proceed Page.png';
import CreateAccountPage from '../../assets/images/Create Account Page.png';
import UploadVideoPage from '../../assets/images/Upload Video Page (alternative version).png';
import GeneratingPage from '../../assets/images/Generating Video (alternative version).png';
import ProfilePage from '../../assets/images/Profile Page.png';
import NotesPage from '../../assets/images/My Notes.png';
import FindCoursePage from '../../assets/images/Find Courses.png';
import StyleGuide from '../../assets/images/Brand Guide.png';
import { Upload } from 'lucide-react';

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
          We developed high fidelity prototypes for the webpages based on the wireframes.
          For the Hi-Fi prototypes, we eliminated the About Us page, the checkout page, the progress tracker page and the creators page
          because we thought these were not part of the main interaction of our website. In addition to the pages represented in the wireframes,
          we also added a Course page for when the users are studying a course.
        </p>
        <p>
          Our design style guide is as follows:
        </p>
        <div style={{ display: "flex", flexDirection: "row", gap: '20px' }}>
          <img style={{ width: "50%", marginBottom: "20px" }} src={StyleGuide} alt='design style guide'/>
          <div>In the design style guide, we included the logo, text font, UI elements and color palette with a varied hue of orange.</div>
        </div>
        <p>
          The Hi-Fi prototype pages are as follows:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}>
          <div style={{ display: "flex", flexDirection: "row", gap: '20px' }}>
            <img src={HomePage} alt="Home Page Hi-Fi" style={{ width: '50%' }} />
            <div>
              <ul>
                <li>The home page contains links to the Generate Course page, the Find Courses page, the Sign In page and the Course page.</li>
                <li>It also links to popular courses on the website.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: '20px' }}>
            <img src={CoursePage} alt="Course Page Hi-Fi" style={{ width: '50%' }} />
            <div>
              <ul>
                <li>The Course page lists the course sections and the user's notes in the left bar.</li>
                <li>It displays the course information, the course video, notes and knowledge checks in the body.</li>
                <li>In the top menu bar, this page includes links to the My Notes page, the to-be-completed My Courses page and Roadmap (progress tracker) page.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: '20px' }}>
            <img src={LoginPage} alt="Login Page Hi-Fi" style={{ width: '50%' }} />
            <div>
              <ul>
                <li>The log in page provides entrance for both first time users and returning users.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: '20px' }}>
            <img src={CreateAccountPage} alt="Create Account Page Hi-Fi" style={{ width: '50%' }} />
            <div>
              <ul>
                <li>This page takes the user's name, email address, password, institution and role to create a user account.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: '20px' }}>
            <img src={ProfilePage} alt="Profile Account Page Hi-Fi" style={{ width: '50%' }} />
            <div>
              <ul>
                <li>This page lists the information associated with a user's account and provides links to edit them.</li>
                <li>The top menu bar links to the Generate Course page and the to-be-completed My Courses page and Creators page.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: '20px' }}>
            <img src={UploadVideoPage} alt="Generate Course Page Hi-Fi" style={{ width: '50%' }} />
            <div>
              <ul>
                <li>This page allows the users to upload a video file or enter the URL to a video, such as a Youtube video.</li>
                <li>Clicking on the "Generate Course" button transforms the video into a course.</li>
                <li>The top menu bar links to various other pages.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: '20px' }}>
            <img src={GeneratingPage} alt="Generating Course Page Hi-Fi" style={{ width: '50%' }} />
            <div>
              <ul>
                <li>This page is displayed after the "Generate Course" button is clicked on the Upload Video page.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: '20px' }}>
            <img src={NotesPage} alt="My Notes Page Hi-Fi" style={{ width: '50%' }} />
            <div>
              <ul>
                <li>This page lists all the notes associated with a user's account, either in course folders or as individual files.</li>
                <li>Users can print or export all notes in their notes directory.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: '20px' }}>
            <img src={FindCoursePage} alt="Find a Course Page Hi-Fi" style={{ width: '50%' }} />
            <div>
              <ul>
                <li>This page allows the users to search a course by institution or by subject.</li>
                <li>The courses are separated into three categories: K-12, college and other.</li>
                <li>The bottom button links to the Upload Video page.</li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          We have also created an interactive prototypes based on the Hi-Fi webpages we have designed. Please see the link <a href="https://www.figma.com/proto/SYQeb09cQUl9h4kRmRFoNh/Miyagi-Labs---HiFi?node-id=0-1&t=ta27Vm5v5v7HX1DF-1">here</a>.
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