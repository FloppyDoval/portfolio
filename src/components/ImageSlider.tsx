import React, { useState } from 'react';
import "../../src/styles/ImageSlider.css";
import firstPage from "../../src/assets/images/w_firstPage.png";
import homePage from "../../src/assets/images/w_homepage.png";
import coursesPage from "../../src/assets/images/w_courses.png";
import lecturePage from "../../src/assets/images/w_lecture.png";
import myNotesPage from "../../src/assets/images/w_myNotes.png";
import signinPage from "../../src/assets/images/w_signin.png";
import userProfile from "../../src/assets/images/w_userProfile.png";
import video from "../../src/assets/images/w_video.png";

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  
  // Create an array of images in the order you want to display them
  const images = [
    firstPage,
    homePage,
    coursesPage,
    lecturePage,
    myNotesPage,
    signinPage,
    userProfile,
    video
  ];
  
  // Calculate total number of slides
  const totalSlides = images.length;

  const plusSlides = (n: number) => {
    let newIndex = slideIndex + n;
    if (newIndex > totalSlides) newIndex = 1;
    if (newIndex < 1) newIndex = totalSlides;
    setSlideIndex(newIndex);
  };

  return (
    <div className="container">
      {images.map((image, index) => (
        <div 
          key={index + 1}
          className="mySlides" 
          style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
        >
          <div className="numbertext">{index + 1} / {totalSlides}</div>
          <img 
            src={image} 
            style={{ width: '100%' }} 
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}

      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
    </div>
  );
};

export default ImageSlider;