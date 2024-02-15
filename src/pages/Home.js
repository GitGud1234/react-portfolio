import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>About me section</h2>
        <div className="prompt">
          <p>Web Developer</p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ul className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, JavaScript, TypeScript, JQuery, BootStrap,
              MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, NextJS</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
