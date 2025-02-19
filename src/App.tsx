// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ImageSlideshow from './ImageSlideshow';
import PDFViewer from './PDFViewer';
import ImageAssets from './imageAssets';
import ComponentAnalysis from './ComponentAnalysis';
import './App.css';

function App() {
  return (
    <Router basename="/accesibility-blog">
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/slideshow">Image Slideshow</Link>
            </li>
            <li>
              <Link to="/pdf">PDF Viewer</Link>
            </li>
            <li>
              <Link to="/analysis">Component Analysis</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <div>
              <h1>Accessibility Blog</h1>
              <p>Welcome to our exploration of web accessibility components.</p>
            </div>
          } />
          <Route path="/slideshow" element={<ImageSlideshow images={ImageAssets}/>} />
          {/* <Route path="/pdf" element={<PDFViewer />} /> */}
          <Route path="/analysis" element={<ComponentAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;