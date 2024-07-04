import React from 'react';
import './Projects.css';
import chrome from '../chrome-icon.png';
import github from '../github.png';

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="content">
      {projectsData.map((project, index) => (
        <div className="box" key={index}>
          <div className="overlay">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                <img src={chrome} alt="Deploy" />
              </a>
              <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Source Code" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const projectsData = [
  {
    title: "Portfolio",
    description: "This project highlights my creative work, skills, and achievements 🌟💻🏆 in a visually appealing format.",
    deployLink: "https://rithikab.netlify.app/",
    sourceLink: "https://github.com/RithikaB27/Personal-Portfolio.git",
  },
  {
    title: "Weather Application",
    description: "This weather application provides real-time forecasts, updates, and alerts 🌤️🌧️📱 with a user-friendly interface.",
    deployLink: "https://weatherapplication27.netlify.app/",
    sourceLink: "https://github.com/RithikaB27/Weather-Application.git",
  },
  {
    title: "Smart Canteen",
    description: "This smart canteen system streamlines ordering, payment, and meal tracking 🍔💳.",
    deployLink: "https://main--smartcanteenpro.netlify.app/",
    sourceLink: "https://github.com/RithikaB27/Smart-Canteen.git",
  },
  {
    title: "CalmNex",
    description: "CalmNex connects physically and mentally challenged individuals through community messaging 📱💬",
    deployLink: "https://calmnex.netlify.app/",
    sourceLink: "https://github.com/RithikaB27/CalmNex.git",
  },
];

export default Projects;
