import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/images/RX.png";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Dynamic Background */}
      <div className="hero-overlay"></div>
      <div className="particles-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="hero-container">
        {/* Text content */}
        <div className="content-left">
          <span className="hero-tagline">Available for Hire</span>
          <h1 className="hero-title">
            Hi, I'm <span className="accent-text">Roox</span>
          </h1>
          <p className="hero-subtitle">
            Crafting digital experiences through <strong>modern web development</strong>.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Contact</a>
            <a href="#about" className="btn-secondary">About Me</a>
          </div>
        </div>

        {/* Character Visuals */}
        <div className="hero-image-wrapper">
          <div className="image-bg-blur"></div>
          <img src={HeroImage} alt="Roox Portfolio Hero" className="main-character" />
          <div className="glow-circle primary"></div>
          <div className="glow-circle secondary"></div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}