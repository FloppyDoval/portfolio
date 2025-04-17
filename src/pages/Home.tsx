import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import ProjectCard from '../components/ProjectCard';
// import coffee from "../images/coffee_icon.png";

const projects = [
  {
    id: 'personas',
    title: '✎ Personas & Storyboard ᝰ',
    subtitle: 'React, Chakra UI, TypeScript, Java',
    description: "User research, Personas, and Storyboarding of a user's journey using a hot beverages vending machine",
    tags: ["UX Research", "Frontend WebDev"],
    thumbnail: "../images/coffee_icon.png",
    path: '/projects/Personas'
  },
  {
    id: 'responsive-redesign',
    title: 'Responsive Redesign',
    subtitle: '',
    description: 'In this project, I found a website to be improved, identified the key usability and accessibility issues, created a Visual Design Style Guide and developed a responsive version of the website!',
    tags: ["CSS", "HTML" ,"UI Design", "Style MockUps", "Frontend WebDev"],
    thumbnail: process.env.PUBLIC_URL + '/images/responsive-thumbnail.png',
    path: '/projects/Responsive'
  },
  {
    id: 'iterative-design',
    title: 'Iterative Design',
    subtitle: '',
    description: 'In this project, I found a website to be improved, identified the key usability and accessibility issues, created a Visual Design Style Guide and developed a responsive version of the website!',
    tags: ["UI Design", "Style MockUps", "User Research"],
    thumbnail: process.env.PUBLIC_URL + '/images/iterative-design-thumbnail.png',
    path: '/projects/Iterative'
  },
  // {
  //   id: 'acc',
  //   title: 'Accesible Design',
  //   subtitle: '',
  //   description: 'In this project, I found a website to be improved, identified the key usability and accessibility issues, created a Visual Design Style Guide and developed a responsive version of the website!',
  //   tags: ["UI Design", "Style MockUps", "User Research"],
  //   thumbnail: process.env.PUBLIC_URL + '/images/iterative-design-thumbnail.png',
  //   path: '/projects/acc'
  // }
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Projects</h1>
      </header>
      
      <section className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Home;