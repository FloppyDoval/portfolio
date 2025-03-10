import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // You'll need to install lucide-react
import '../styles/ProjectCard.css';

interface ProjectProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  thumbnail: string;
  path: string;
}

interface ProjectCardProps {
  project: ProjectProps;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={project.path} className="project-link">
        {/* Background with subtle accent */}
        <div className="project-background">
          <div className="accent-corner"></div>
        </div>
        
        {/* Content container */}
        <div className="project-content">
          {/* Title that's always visible */}
          <h2 className="project-title">{project.title}</h2>
          
          {/* Content that appears on hover */}
          <div className={`project-hover-content ${isHovered ? 'visible' : ''}`}>
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
        </div>
        
        {/* Purple bottom border */}
        <div className="project-border"></div>
      </Link>
    </div>
  );
};

export default ProjectCard;