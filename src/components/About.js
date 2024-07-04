import React from 'react';
import profileImage from '../profile.jpg'; 
import './About.css';

const About = () => (
  <section className="about" id="about">
    <div className="content">
      <div className="profile">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="text">
        <h2>About Me</h2>
        <p>Passionate about front-end web development and data analysis, I thrive on transforming ideas into engaging digital experiences and deriving actionable insights from data. With expertise in HTML, CSS, JavaScript, React, Python, and MS Excel, I am currently expanding my skill set with Power BI and Tableau. My goal is to leverage my technical skills and creativity to drive innovative solutions and impactful visualizations, contributing to meaningful projects that make a difference.</p>
      </div>
    </div>
  </section>
);

export default About;
