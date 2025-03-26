import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: '< />',
      skills: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS']
    },
    {
      title: 'Data & AI',
      icon: '🌐',
      skills: ['TensorFlow', 'LLM Fine-tuning', 'Prompt Engineering']
    },
    {
      title: 'Frontend',
      icon: '⚛️',
      skills: ['React JS', 'Angular', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: '🔧',
      skills: ['Node JS', 'MongoDB', 'SQL', 'RESTful APIs']
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      skills: ['Git', 'Docker']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <p className="skills-description">
        Here are the technologies and tools I've been working with. I'm constantly learning and expanding my
        skillset to stay at the cutting edge of AI and web development.
      </p>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="skills-quote">
        "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
      </p>
    </section>
  );
};

export default Skills; 