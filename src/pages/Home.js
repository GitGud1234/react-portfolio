import React from 'react';
import '../styles/Home.css';
//import { Paper, Grid } from '@mui/material';

function Home() {
  return (
    <div>
      <div className="landing">
        <h1>Hi, I am Gelmis</h1>
        <div className="prompt">
          <p>
            An <span style={{ color: '#EC8F1B' }}>aspiring developer</span>{' '}
            trying to break into the tech industry and make awesome
            contributions!
          </p>
        </div>
      </div>
    </div>
  );
}

/*
        <ul className="list">
            <li className="item">
              <h2>A passion for learning</h2>
              <span>Always keen on learning and growing. </span>
            </li>

            <li className="item">
              <h2>Aspiring developer</h2>
              <span></span>
            </li>
          </ul>
*/

export default Home;
