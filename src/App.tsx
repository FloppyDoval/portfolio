import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
// import AccessibilityBlog from '../src/pages/Acc';
import Personas from './pages/ProjectDetails/Personas';
import Responsive from './pages/ProjectDetails/responsive-redesign';
import Iterative from './pages/ProjectDetails/IterativeDesign';


// import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            {/* <Route path="/projects/acc" element={<AccessibilityBlog />} /> */}
            <Route path="/projects/personas" element={<Personas />} />
            <Route path="/projects/responsive" element={<Responsive />} />
            <Route path="/projects/iterative" element={<Iterative />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;