import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      <p>gitgud1234.github.io/react-portfolio &copy; {currentYear} </p>
    </footer>
  );
}

export default Footer;
