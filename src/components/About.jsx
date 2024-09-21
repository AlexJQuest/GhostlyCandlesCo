import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">Welcome to Ghostly Candle Co., where we create enchanting candles that brighten your space and lift your spirits.</p>
        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-text">To provide high-quality candles that light up your life with their captivating fragrances and beautiful designs.</p>
        {/* Add more content as needed */}
        <button className="about-button">Learn More</button>
      </div>
    </div>
  );
};

export default About;
