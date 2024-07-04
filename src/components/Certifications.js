import React, { useEffect, useRef } from 'react';
import './Certifications.css';

import FreeCodeCamp from '../FreeCodeCamp-Responsive Web Creation.png';
import CISCO from '../CISCO-NM.png';
import IBM from '../IBM Python for DS.png';
import Excel from '../Jobaajlearnings-Excel Course.jpg';
import Python from '../SOLOLEARN INTO TO PYTHON.png';
import Java from '../SOLOLEARN INTRO TO JAVA.png';
import WebDeveloper from '../MLSA_WEbDeveloper_Workshop.jpg';
import DataAnalytics from '../Jobaajlearnings-Data Analytics workshop.jpg';
import PowerBi from '../Jobaajlearnings-PowerBi workshop.jpg';
import IOT from '../VIT_embedded systems and IOT.png';
import AI from '../VIT-AI for high voltage workshop.png';
import Expo from '../kingston project expo.jpg';
import WE from '../Web essentials.jpg';
import Quiz from '../Kingston-Quiz.jpg';
import Gravitas from '../VIT_Gravitas.png';
import TUTORPRO from '../TUTORPRO.png';
import DELNET from '../DELNET-Webinar on Green Building Campuses.jpg';
import ESF from '../Energy Swaraj Foundation.png';
import Organ from '../Organ_Donation_Day.jpg';
import Tuberculosis from '../World_Tuberculosis_Day.jpg';
import SDG from '../SDG QUIZ.png';
import Google from '../Foundations_Data_Data_Everywhere_Google.png';
import pmkvy from '../Software_Developer_Associate_PMKVY.jpg';
import django from '../Web_dev_with_django_NM.png';

const Certifications = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionRef.current.querySelectorAll('.certificates-box');
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
          section.style.animationPlayState = 'running';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="certifications" id="certifications" ref={sectionRef}>
      <h2>Certifications</h2>
      
      {[
        { title: 'Courses', images: [FreeCodeCamp, Google, django,pmkvy, CISCO, IBM, Python, Excel, Java] },
        { title: 'Workshops Attended', images: [WebDeveloper, DataAnalytics, PowerBi, IOT, AI] },
        { title: 'Achievements', images: [Expo, WE] },
        { title: 'Others', images: [Quiz, Gravitas, DELNET, ESF, Organ, Tuberculosis, SDG, TUTORPRO] },
      ].map((category, index) => (
        <div key={index} className="certificates-box">
          <h3>{category.title}</h3>
          <div className="certificates-grid">
            {category.images.map((imgSrc, imgIndex) => (
              <div key={imgIndex} className="certificate-card">
                <img src={imgSrc} alt={`${category.title} Certificate ${imgIndex + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
