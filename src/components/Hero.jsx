// Hero.jsx
import React from 'react';
import './Hero.css'; // Ensure you have this CSS file
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Ghostly Candle Co.</h1>
        <p className="hero-subtitle">Where Every Candle Tells a Ghostly Tale.</p>
        <button className="hero-button"><Link to="/Products">Shop Now</Link></button>
      </div>
    </div>
  );
};

export default Hero;
