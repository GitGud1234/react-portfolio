import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="footer">
      <p>gitgud1234.github.io/react-portfolio &copy; {currentYear} </p>
    </footer>
  );
}

export default Footer;
