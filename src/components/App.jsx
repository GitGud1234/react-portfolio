import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Blogs from '../pages/Blogs';
import NavBar from './NavBar';
import Footer from './Footer';
import ProjectDisplay from '../pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
