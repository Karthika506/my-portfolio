import React from 'react';
import '../styles/About.css';

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="greeting">Hello there, I'm</h2>
          <h1 className="name">Karthika</h1>
          <h3 className="title">AI & Data Science Engineer</h3>
          <p className="description">
            Crafting intelligent solutions with LLMs & data science magic. ✨
            <br />
            Turning complex problems into elegant, AI-powered experiences.
          </p>
          <div className="cta-buttons">
            <button 
              className="primary-btn" 
              onClick={() => scrollToSection('projects')}
            >
              Discover my work
            </button>
            <button 
              className="secondary-btn"
              onClick={() => scrollToSection('contact')}
            >
              Get in touch
            </button>
          </div>
          <div className="scroll-indicator">
            <span>Scroll down</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 