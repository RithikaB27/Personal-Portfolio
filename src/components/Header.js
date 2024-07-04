import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaTools, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li><a href="#home" className="nav-link"><FaHome /> Home</a></li>
        <li><a href="#about" className="nav-link"><FaUser /> About Me</a></li>
        <li><a href="#skills" className="nav-link"><FaTools /> Skills</a></li>
        <li><Link to="/certifications" className="nav-link"><FaCertificate /> Certifications</Link></li>
        <li><Link to="/projects" className="nav-link"><FaProjectDiagram /> Projects</Link></li>
        <li><a href="#contact" className="nav-link"><FaEnvelope /> Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
