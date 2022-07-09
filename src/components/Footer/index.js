import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
      Designed and built by{' '}
        <a 
        href="https://www.linkedin.com/in/pranav-chachra-03b2921bb"
        target="_blank"
        rel="noopener noreferrer"
        className="Footer__Link">Pranav Chachra</a>
      </section>
      <section>
      <a
          href="https://github.com/pranavchachra1702/Algorithm-Visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
         Source Code
        </a>
        </section>
    </footer>
  );
};

export default Footer;