import React from "react";
import "../../styles/ProjectDetails.css";
// Import for images:
import HomePage from "../../assets/images/Home Page.png";
import CoursePage from "../../assets/images/Lesson - Page.png";
import LoginPage from "../../assets/images/Login to Proceed Page.png";
import CreateAccountPage from "../../assets/images/Create Account Page.png";
import UploadVideoPage from "../../assets/images/Upload Video Page (alternative version).png";
import GeneratingPage from "../../assets/images/Generating Video (alternative version).png";
import ProfilePage from "../../assets/images/Profile Page.png";
import NotesPage from "../../assets/images/My Notes.png";
import FindCoursePage from "../../assets/images/Find Courses.png";
import StyleGuide from "../../assets/images/Brand Guide.png";
import ImageSlider from "../../components/ImageSlider";
import { Upload } from "lucide-react";

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
        <h2>Collaborators 👩🏻‍💻</h2>
        <div className="project-tags">
          <span className="tag1">Fatima Yousaf</span>
          <span className="tag2">Shuyi Qi</span>
          <span className="tag3">Sophia Sokolowsky</span>
          <span className="tag4">Florencia Doval</span>
        </div>
      </section>
      <section className="project-overview">
        <h2>Overview 🖇️</h2>
        <p>
          For this project, we explored the{" "}
          <a href="https://www.ycombinator.com/companies?industry=Education">
            YCombinator
          </a>{" "}
          website and searched for startups in the Education sector. Were we
          found <a href="https://miyagilabs.ai/">Miyagi Labs:</a>
          <div className="quote-container">
            <blockquote className="stylish-quote">
              <span className="quote-marks">"</span>an AI-powered platform that
              transforms videos from content creators and professors into
              complete, interactive courses.
              <span className="quote-marks">"</span>
            </blockquote>
          </div>
          <p>
            Scroll down to see our Style Guide, Wireframing and Hi-Fi prototype!
            This time, our challenge was to{" "}
            <b>
              create an interactive Figma Prototype based solely on the
              description of the startup without any reference to the current
              website.
            </b>
          </p>
        </p>
      </section>
      {/* <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/SYQeb09cQUl9h4kRmRFoNh/Miyagi-Labs---HiFi?node-id=10-3&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A3&embed-host=share" allowfullscreen></iframe> */}
      <iframe
        style={{ border: "rgba(0, 0, 0, 0)", background: "rgba(0, 0, 0, 0)" }}
        width="900"
        height="650"
        flex-direction="column"
        align-items="center"
        src="https://embed.figma.com/proto/SYQeb09cQUl9h4kRmRFoNh/Miyagi-Labs---HiFi?node-id=32-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A3&embed-host=share"
        allowFullScreen
        title="Accessibility UI/UX Design Iterations"
      />
      <section className="project-details">
        <h2>Sketching and Wireframing ᝰ✍🏻</h2>
        <p>
          Our design process began with low-fidelity sketches and wireframes to
          define core functionality and user flow. These early iterations helped
          us focus on structure over styling, identifying the primary components
          needed on each screen—such as navigation, project cards, and content
          sections. We were guided by user-centered design principles,
          prioritizing clarity, hierarchy, and ease of navigation. For instance,
          the layout features clear divisions, mimicking common patterns users
          are already familiar with, which improves usability and intuitiveness.
          We drew inspiration from modern, minimalistic portfolio layouts and
          peer feedback with content-focused designs. Some objective decisions
          we made overall included: - A Consistent Color Palette orange + beige
          tones: Promotes visual identity and emotional warmth. - Clear
          Typography Hierarchy: Primary bold headers and secondary fonts are
          used consistently for readability and emphasis. - Component
          Reusability: Buttons, cards, and headers follow a style guide,
          enabling scalable design across the app. Decisions within the pages
          included: - Clear Generate Course instructions, positioned at the
          center with strong contrast, guiding users to the app’s main action. -
          A Popular Courses Carousel: Gives users a quick preview of content;
          encourages exploration and boosts engagement. - Minimal Top Nav:
          Focuses attention on central interaction instead of distracting
          options. - Structured Content Hierarchy. E.g. in the course page:
          Overview → Lessons → Knowledge Check flow makes it cognitively easy to
          process. - Progress Tracking with Visual Feedback and a roadmap/
          tracker map (not in figma file but in wireframes), lets users
          understand where they are in the course and what is next. - Use of
          Color for Feedback: Orange = interactive/important actions, Green =
          success or helpful info, keeping visual language consistent. -
          Category Segmentation for courses (e.g. K-12, College, Other), helps
          users locate what they need faster. - The visual folder system in the
          my notes page mimics a real world filing system, making it intutive
          for users.
        </p>
        <ImageSlider />
      </section>

      <section className="interview-section">
        <h2>Critique 🔎</h2>
        <p>intro</p>
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
          We developed high fidelity prototypes for the webpages based on the
          wireframes. For the Hi-Fi prototypes, we eliminated the About Us page,
          the checkout page, the progress tracker page and the creators page
          because we thought these were not part of the main interaction of our
          website. In addition to the pages represented in the wireframes, we
          also added a Course page for when the users are studying a course.
        </p>
        <p>Our design style guide is as follows:</p>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <img
            style={{ width: "50%", marginBottom: "20px" }}
            src={StyleGuide}
            alt="design style guide"
          />
          <div>
            In the design style guide, we included the logo, text font, UI
            elements and color palette with a varied hue of orange.
          </div>
        </div>
        <p>The Hi-Fi prototype pages are as follows:</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img
              src={HomePage}
              alt="Home Page Hi-Fi"
              style={{ width: "50%" }}
            />
            <div>
              <ul>
                <li>
                  The home page contains links to the Generate Course page, the
                  Find Courses page, the Sign In page and the Course page.
                </li>
                <li>It also links to popular courses on the website.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img
              src={CoursePage}
              alt="Course Page Hi-Fi"
              style={{ width: "50%" }}
            />
            <div>
              <ul>
                <li>
                  The Course page lists the course sections and the user's notes
                  in the left bar.
                </li>
                <li>
                  It displays the course information, the course video, notes
                  and knowledge checks in the body.
                </li>
                <li>
                  In the top menu bar, this page includes links to the My Notes
                  page, the to-be-completed My Courses page and Roadmap
                  (progress tracker) page.
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img
              src={LoginPage}
              alt="Login Page Hi-Fi"
              style={{ width: "50%" }}
            />
            <div>
              <ul>
                <li>
                  The log in page provides entrance for both first time users
                  and returning users.
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img
              src={CreateAccountPage}
              alt="Create Account Page Hi-Fi"
              style={{ width: "50%" }}
            />
            <div>
              <ul>
                <li>
                  This page takes the user's name, email address, password,
                  institution and role to create a user account.
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img
              src={ProfilePage}
              alt="Profile Account Page Hi-Fi"
              style={{ width: "50%" }}
            />
            <div>
              <ul>
                <li>
                  This page lists the information associated with a user's
                  account and provides links to edit them.
                </li>
                <li>
                  The top menu bar links to the Generate Course page and the
                  to-be-completed My Courses page and Creators page.
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img
              src={UploadVideoPage}
              alt="Generate Course Page Hi-Fi"
              style={{ width: "50%" }}
            />
            <div>
              <ul>
                <li>
                  This page allows the users to upload a video file or enter the
                  URL to a video, such as a Youtube video.
                </li>
                <li>
                  Clicking on the "Generate Course" button transforms the video
                  into a course.
                </li>
                <li>The top menu bar links to various other pages.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img
              src={GeneratingPage}
              alt="Generating Course Page Hi-Fi"
              style={{ width: "50%" }}
            />
            <div>
              <ul>
                <li>
                  This page is displayed after the "Generate Course" button is
                  clicked on the Upload Video page.
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img
              src={NotesPage}
              alt="My Notes Page Hi-Fi"
              style={{ width: "50%" }}
            />
            <div>
              <ul>
                <li>
                  This page lists all the notes associated with a user's
                  account, either in course folders or as individual files.
                </li>
                <li>
                  Users can print or export all notes in their notes directory.
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img
              src={FindCoursePage}
              alt="Find a Course Page Hi-Fi"
              style={{ width: "50%" }}
            />
            <div>
              <ul>
                <li>
                  This page allows the users to search a course by institution
                  or by subject.
                </li>
                <li>
                  The courses are separated into three categories: K-12, college
                  and other.
                </li>
                <li>The bottom button links to the Upload Video page.</li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          We have also created an interactive prototypes based on the Hi-Fi
          webpages we have designed. Please see the link{" "}
          <a href="https://www.figma.com/proto/SYQeb09cQUl9h4kRmRFoNh/Miyagi-Labs---HiFi?node-id=0-1&t=ta27Vm5v5v7HX1DF-1">
            here
          </a>
          .
        </p>
      </section>

      <section className="storyboard-section">
        <h2>User Testing 🎬</h2>
        <p>
          Key Questions that guided us Key Findings Next Steps (any changes we
          might want to consider, needs from the user, etc…)
        </p>
      </section>

      <section className="reflection-section">
        <h2>Reflection & Insights 💭</h2>
        <p>blabla</p>
      </section>
    </div>
  );
};

export default Iterative;
