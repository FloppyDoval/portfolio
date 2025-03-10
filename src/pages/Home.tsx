import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 'personas',
    title: '✎ Personas & Storyboard ᝰ',
    subtitle: 'React, Chakra UI, TypeScript, Java',
    description: 'A code racer web app to practice coding faster and learn the syntax of new languages.',
    tags: ['UX Research'],
    thumbnail: process.env.PUBLIC_URL + '/images/personas-thumbnail.png',
    path: '/projects/Personas'
  },
  {
    id: 'responsive-redesign',
    title: 'Responsive Redesign',
    subtitle: '',
    description: 'In this project, I found a website to be improved, identified the key usability and accessibility issues, created lo-fi and hi-fi prototypes, and developed a responsive version of the website.',
    tags: [],
    thumbnail: process.env.PUBLIC_URL + '/images/responsive-thumbnail.png',
    path: '/projects/responsive-redesign'
  }
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