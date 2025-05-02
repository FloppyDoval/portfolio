import React from 'react';
import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';
// import Responsive from '../../public/images/responsive.png'

const projects = [
  {
    id: 'DL Transformer for German to English Translator',
    title: 'DeepL German to English Translator',
    subtitle: 'DL, Pytorch, Python',
    description: "Re-implementation of the renowned paper Attention Is All You Need with the Multi30k Dataset for German to English translation",
    tags: ["Deep Learning", "Pytorch", "Google Colab"],
    thumbnail: 'images/transformer.png',
    path: '/projects/transformer'
  },
  {
    id: 'Data Science',
    title: 'Success of a Video Game Predictor',
    subtitle: 'React, Chakra UI, TypeScript, Java',
    description: "Using Data Science techniques, my teammates and I created a model to predict the success of a video game.",
    tags: ["Data Science", "Python", "Numpy", "Pandas"],
    thumbnail: 'images/game-predictor.png',
    path: '/projects/game-predictor'
  },
  {
    id: 'Berlin Entdecken',
    title: 'Berlin Entdecken',
    subtitle: 'SWIFT, XCode, Design',
    description: "An app to learn more about the sights in Berlin and to practice German cases grammar.",
    tags: ["SWIFT", "XCode", "Design"],
    thumbnail: 'images/berlin.png',
    path: '/projects/berlin'
  },
  {
    id: 'personas',
    title: 'Personas & Storyboard',
    subtitle: 'React, Chakra UI, TypeScript, Java',
    description: "Investigating the journey of users using a coffee vending machine",
    tags: ["UX Research", "Frontend WebDev"],
    thumbnail: 'images/personas.png',
    path: '/projects/Personas'
  },
  {
    id: 'responsive-redesign',
    title: 'Responsive Redesign',
    subtitle: '',
    description: 'We chose a startup from YCombinator and redesigned their website!',
    tags: ["CSS/HTML", "UI Design", "Entrepreneurship"],
    thumbnail: 'images/responsive.png',
    path: '/projects/Responsive'
  },
  {
    id: 'iterative-design',
    subtitle: '',
    title: 'Iterative Design',
    description: 'For this project, I found a website to improve. I identified key usability and accessibility issues, created a Visual Design Style Guide and developed a responsive version of the website!',
    tags: ["UI Design", "Style MockUps", "User Research"],
    thumbnail: 'images/iterative.png',  
    path: '/projects/Iterative'
  },
];

const Projects: React.FC = () => {
  return (
    <div className="home-container">
      <header className="title">
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

export default Projects;