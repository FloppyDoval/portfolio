import React from 'react';
import '../styles/Experience.css';

interface ExperienceItem {
  title: string;
  role: string;
  date: string;
  link: {
    name: string;
    url: string;
  };
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Brown University",
      role: "Computer Science ScB",
      date: "Sept 2022-May 2026",
      link: { name: "Link", url: "#" },
    },
    {
      title: "UWC ISAK Japan",
      role: "Teaching Assistant - HISP 200",
      date: "August 2020 - May 2022",
      link: { name: "Link", url: "#" },
    },
    {
      title: "Duolingo Inc.",
      role: "Thrive Software Engineer Intern",
      date: "June - August 2024",
      link: { name: "Slides", url: "#" },
    },
    {
      title: "En la Plaza",
      role: "Founder and Co-Director",
      date: "February 2019 - Present",
      link: { name: "Instagram", url: "#" },
    },
    {
      title: "Latin American Leadership Academy",
      role: "Co-facilitator & Coach",
      date: "June 2022 - July 2023",
      link: { name: "Website", url: "#" },
    },
    {
      title: "Crimson Education",
      role: "Research Intern",
      date: "January - May 2022",
      link: { name: "Brochure", url: "#" },
    }
  ];

  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            
            <div className="timeline-content">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-role">{exp.role}</p>
              
              <a href={exp.link.url} className="timeline-link">
                {exp.link.name}
                <svg className="timeline-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;