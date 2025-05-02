import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/ProjectCard.css';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  path: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = project.thumbnail || 'https://via.placeholder.com/500x300';
  
  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={project.path} className="project-link">
        {/* Image that shows by default and hides on hover */}
        <div className={`project-image-container ${isHovered ? 'hidden' : ''}`}>
          <img 
            src={imageSrc} 
            alt={project.title} 
            className="project-image" 
          />
          <h2 className="image-title">{project.title}</h2>
        </div>
        
        {/* Content that shows on hover */}
        <div className={`project-content ${isHovered ? 'visible' : ''}`}>
          <h2 className="project-title">{project.title}</h2>
          
          <p className="project-description">{project.description}</p>
          
          {project.tags.length > 0 && (
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}
          
          <div className="project-view-details">
            <span>View details</span>
            <ArrowRight size={16} className="arrow-icon" />
          </div>
        </div>
        
        {/* Purple bottom border */}
        <div className="project-border"></div>
      </Link>
    </div>
  );
};

export default ProjectCard;