import React from 'react';
import { FaCode, FaLightbulb } from 'react-icons/fa'; // Updated icons
import './Skills.css';

const Skills = () => (
  <section className="skills" id="skills">
    <h2>Skills</h2>
    <div className="content">
      <div className="box">
        <FaCode className="icon" />
        <h3>Technical Skills</h3>
        <ul>
          <li><strong>Programming Languages:</strong></li>
          <div className="skill">
            <div className="progress-bar">
              <div style={{ width: '80%' }}>Python</div>
            </div>
            <span>80%</span>
          </div>
          <div className="skill">
            <div className="progress-bar">
              <div style={{ width: '40%' }}>JavaScript</div>
            </div>
            <span>40%</span>
          </div>
          <li><strong>Web Development:</strong></li>
          <div className="skill">
            <div className="progress-bar">
              <div style={{ width: '80%' }}>HTML</div>
            </div>
            <span>80%</span>
          </div>
          <div className="skill">
            <div className="progress-bar">
              <div style={{ width: '70%' }}>CSS</div>
            </div>
            <span>70%</span>
          </div>
          <div className="skill">
            <div className="progress-bar">
              <div style={{ width: '60%' }}>React</div>
            </div>
            <span>60%</span>
          </div>
          <li><strong>Tools:</strong></li>
          <div className="skill">
            <div className="progress-bar">
              <div style={{ width: '80%' }}>MS Excel</div>
            </div>
            <span>80%</span>
          </div>
          <div className="skill">
            <div className="progress-bar">
              <div style={{ width: '80%' }}>Power BI</div>
            </div>
            <span>50%</span>
          </div>
          <div className="skill">
            <div className="progress-bar">
              <div style={{ width: '80%' }}>VS Code Editor</div>
            </div>
            <span>80%</span>
          </div>
        </ul>
      </div>
      <div className="box">
        <FaLightbulb className="icon" />
        <h3>Soft Skills</h3>
        <ul>
          <li><strong>Communication:</strong> Excellent verbal and written communication skills</li>
          <li><strong>Collaborative Team Player:</strong> Team leadership, project management</li>
          <li><strong>Problem-Solving:</strong> Analytical thinking, creative problem-solving</li>
          <li><strong>Dedicated and Detail-Oriented:</strong> Carefully Attentive and Thorough</li>
          <li><strong>Quick Learner and Adaptive Thinker:</strong> Eager Learner and Flexible Thinker</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
