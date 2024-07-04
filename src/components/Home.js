import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; 
import './Home.css';

const Home = () => (
  <section className="home" id="home">
    <div className="overlay">
      <h1>Welcome to my corner of the web!</h1>
      <h2>Rithika B</h2>
      <p>Front-End Wizard & Data Visualization Enthusiast</p>
      <a href="#about" className="scroll-down">
        Scroll down to discover my latest endeavors, creative endeavors, and insights <FaArrowDown />
      </a>
    </div>
  </section>
);

export default Home;
