import React from "react";
import "../../styles/ProjectDetails.css";
import DemoVideo from "../../assets/images/berlin_demo.gif";
import MapScreen from "../../assets/images/berlin_map_screen.png";
// import LandmarkInfo from "../../assets/images/landmark_info_screen.png";
// import PracticeScreen from "../../assets/images/practice_screen.png";

const BerlinEntdecken: React.FC = () => {
  return (
    <div className="project-details-container">
      <header className="project-header">
        <h1>Berlin Entdecken App</h1>
      </header>  
      <section className="project-overview">
        <h2>Overview 🗺️</h2>
        <p>
          <b>Berlin Entdecken</b> is a mobile app that merges <b>Travel</b> and <b>Education</b>, helping tourists learn practical German phrases and grammar linked to Berlin landmarks. Users explore sights while learning about the <i>Nominativ</i>, <i>Akkusativ</i>, and <i>Dativ</i> cases through interactive, location-based exercises.
        </p>
      </section>

      <section className="project-details">
        <h2>App Highlights 📱</h2>
        <ul>
          <li>📍 Map view of Berlin with landmark pins</li>
          <li>📖 Landmark info in German and English</li>
          <li>🧠 Grammar exercises tied to physical locations</li>
          <li>🔔 Daily challenges and Word of the Day</li>
          <li>💾 Save favorite words, track progress (optional)</li>
        </ul>
      </section>

      <section className="project-details">
        <h2>User Stories 🧵</h2>
        <ul>
          <li>User can view a map of Berlin highlighting major landmarks</li>
          <li>User can select a landmark to learn about it</li>
          <li>User can complete grammar exercises related to that landmark</li>
          <li>User can practice with a daily word challenge</li>
          <li>User can track progress and saved vocabulary</li>
        </ul>
      </section>

      <section className="project-details">
        <h2>Navigation Flow 🧭</h2>
        <p>Tab Navigation: Map | Practice | Daily | Profile</p>
        <ul>
          <li>Map Screen → Landmark Info → Grammar Practice</li>
          <li>Daily Challenge → Word of the Day → Grammar Tip</li>
          <li>Profile → Saved Words → Quiz Mode</li>
        </ul>
      </section>

      <section className="project-details">
        <h2>Sprints & Development 🏁</h2>
        <p><b>Sprint 1:</b> Interactive Figma, Map view, Grammar logic, MVP complete</p>
        <p><b>Sprint 2:</b> Daily Challenge, API for Word of the Day, Library, Profile page</p>
      </section>

      <section className="project-details">
        <h2>Demo Video 🎥</h2>
        <img src={DemoVideo} alt="Demo animation" />
      </section>

      <section className="project-details">
        <h2>Wireframes & Screenshots 🖼️</h2>
        <div className="project-gallery">
          <img src={MapScreen} alt="Map Screen" />
          {/* <img src={LandmarkInfo} alt="Landmark Info" />
          <img src={PracticeScreen} alt="Practice Screen" /> */}
        </div>
      </section>

      <section className="project-details">
        <h2>Figma Prototype 🔗</h2>
        <iframe
          style={{ border: "none" }}
          width="800"
          height="600"
          src="https://embed.figma.com/proto/z7uRpMMaKIRRTgl9Joaj4w/Berlin-Entdecken-App-?node-id=1-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=share"
          allowFullScreen
          title="Berlin Entdecken Figma"
        />
      </section>
    </div>
  );
};

export default BerlinEntdecken;
