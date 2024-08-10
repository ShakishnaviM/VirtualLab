import React, { useState, useEffect } from 'react';
import './AboutUs.css';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "We are a team who was struggled at our A/Ls and trying to assist our Fellow sisters and brothers to study the practicals effectively",
    "Fellow sisters and brothers to study the practicals effectively using a virtual lab system.",
    "using a virtual lab system. Here, An Image model, AI chat-bot and NLP are being implemented",
    "Here, An Image model, AI chat-bot and NLP are being implemented to make you all aware of the experimental lessons",
    "to make you all aware of the experimental lessons.Here, An Image model, AI chat-bot and NLP are being implemented "
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="contentBoxWrapper">
      <div className="slideshow" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((text, index) => (
          <div className="slide" key={index}>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
