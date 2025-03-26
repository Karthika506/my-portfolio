import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Text Praphrasing using LLMs',
      techStack: ['Python', 'LLMs', 'Hugging Face'],
      description: [
        'Developed a browser extension focused on paraphrasing and synonym extraction from input Text.',
        'Utilized the cutting-edge Gemini model as the underlying Language Model (LLM)',
        'Achieved state-of-the-art performance in paraphrasing and synonym identification',
        'Chose browser extensions over web apps to enhance user interaction and overall experience.'
      ],
      githubLink: 'https://github.com/Karthika506/text_paraphrasing',
      liveLink: 'https://text-paraphrasing-demo.com'
    },
    {
      id: 2,
      title: 'Memories application',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express JS'],
      description: [
        'Developed a web application focused on CRUD operations on a post.',
        'Utilized React Js for user interface, Express Js for routing and middleware, Node Js as backend server and Mongodb as a database for the Application.',
        'Implemented google authentication and manual login to create, update, delete and like the post in the application'
      ],
      githubLink: 'https://github.com/Karthika506/memories_application',
      liveLink: 'https://memories-app-demo.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      techStack: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      description: [
        'Designed and developed a modern, responsive portfolio website',
        'Implemented smooth scrolling and interactive animations',
        'Created a clean, minimalist design with optimal user experience',
        'Optimized for performance and SEO best practices'
      ],
      githubLink: 'https://github.com/yourusername/portfolio',
      liveLink: ''
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Some of my recent work</p>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <ul className="project-description">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" title="View on GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link" title="View Live Demo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="more-projects">
        <a href="https://github.com/Karthika506?tab=repositories" target="_blank" rel="noopener noreferrer" className="github-profile-link" title="View More Projects on GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span>More Projects on GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Projects; 