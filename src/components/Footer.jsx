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
      <p>&copy; {currentYear} website-URL</p>
    </footer>
  );
}

export default Footer;
