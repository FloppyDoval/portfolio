// import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import About from './pages/About';
// import Home from '../src/pages/Home'
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Personas from './pages/ProjectDetails/Personas';
import Responsive from './pages/ProjectDetails/responsive-redesign';
import Iterative from './pages/ProjectDetails/IterativeDesign';
import Transformer from './pages/ProjectDetails/Transformer';
import VideoGameSuccess from './pages/ProjectDetails/VideoGameSuccess';
import BerlinApp from './pages/ProjectDetails/Berlin-app';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// This inner component handles redirect logic
const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects/personas" element={<Personas />} />
      <Route path="/projects/responsive" element={<Responsive />} />
      <Route path="/projects/iterative" element={<Iterative />} />
      <Route path="/projects/transformer" element={<Transformer />} />
      <Route path="/projects/game-predictor" element={<VideoGameSuccess />} />
      <Route path="/projects/berlin" element={<BerlinApp />} />
  </Routes>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;