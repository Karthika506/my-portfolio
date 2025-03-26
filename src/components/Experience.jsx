import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Zyrone Energy',
      startDate: 'Jan 2024',
      endDate: 'Mar 2025 ',
      description: [
        'Engaged as Front-end intern focusing on developing user friendly interface in web application.',
        'Gained industrial experience on latest versions of angular and third party libraries such as echarts, mapbox and geocharts.',
        'Implementing RAG systems and optimizing prompt engineering techniques',
        'Worked on data preprocessing, feature engineering, and model optimization using Python and PyTorch'
      ],
      skillsGained: [
        'Angular',
        'FastAPI',
        'Typescript',
        'Prompt Engineering',
        'RAG Systems'
      ]
    },
    // {
    //   id: 2,
    //   title: 'Data Analytics Apprentice',
    //   company: 'Google',
    //   startDate: 'April 2025',
    //   endDate: 'Present',
    //   description: [
    //     ''
    //   ],
    //   skillsGained: [
    //     'Machine Learning',
    //     'Data Pipeline Development',
    //     'Feature Engineering',
    //     'Data Visualization',
    //     'Stakeholder Communication'
    //   ]
    // }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2>Work Experience</h2>
        <p>My professional journey and contributions</p>
      </div>
      <div className="experience-list">
        {experiences.map(experience => (
          <div key={experience.id} className="experience-item">
            <div className="experience-header">
              <h3>{experience.title}</h3>
              <span className="company">{experience.company}</span>
            </div>
            <div className="experience-date">
              {experience.startDate} - {experience.endDate}
            </div>
            <ul className="experience-description">
              {experience.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="skills-gained">
              <div className="skills-list">
                {experience.skillsGained.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 