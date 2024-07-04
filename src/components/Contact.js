import React from 'react';
import './Contact.css';
import github from '../github.png';
import gmail from '../gmail-icon.png';
import linkedin from '../linkedin.png';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact</h2>
    <div className="content">
      <a href="mailto:brithika906@gmail.com"><img src={gmail} alt="Gmail" className="pulse" /></a>
      <a href="https://www.linkedin.com/in/rithika936" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" className="pulse" /></a>
      <a href="https://github.com/RithikaB27" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" className="pulse" /></a>
    </div>
  </section>
);

export default Contact;
