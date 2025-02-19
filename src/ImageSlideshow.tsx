import React, { useState } from 'react';

interface ImageAssets {
  ml: string;
  sk: string;
  dog: string;
  [key: string]: string;
}

const ImageSlideshow = ({ images }: { images: ImageAssets }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageList = [
    { src: images.ml, alt: "ML Website accordion" },
    { src: images.sk, alt: "Stephen King's website" },
    { src: images.dog, alt: "DoggieLawn website" }
  ];

  const handlePrevious = () => {
    setCurrentSlide(current => 
      current === 0 ? imageList.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide(current => 
      current === imageList.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ 
        position: 'relative', 
        width: '600px', 
        height: '300px',
        backgroundColor: '#f0f0f0',
        marginBottom: '20px'
      }}>
        {/* Image counter */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#744210',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          zIndex: 1
        }}>
          {currentSlide + 1} / {imageList.length}
        </div>

        {/* Current image */}
        <img
          src={imageList[currentSlide].src}
          alt={imageList[currentSlide].alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />

        {/* Caption */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          backgroundColor: '#744210',
          color: 'white',
          padding: '10px',
          textAlign: 'center'
        }}>
          {imageList[currentSlide].alt}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrevious}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#744210',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#744210',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          ❯
        </button>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: '10px' }}>
        {imageList.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: currentSlide === index ? '#F5C77E' : '#ED8936',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;