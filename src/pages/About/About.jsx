import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {
  const [flip, setFlip] = useState(false);

  return (
    <section className="about" id="about">
      {/* BACKGROUND LAYERS (MATCHING HERO) */}
      <div className="about-particles"></div>
      <div className="about-glow-bg"></div>
      
      <div className="about-container">
        <div className="title-wrapper">
          <h2 className="title">About <span className="accent">Me</span></h2>
          <div className="title-line"></div>
        </div>

        <div className="about-grid">
          {/* 3D IMAGE SIDE */}
          <div className="photo-side">
            <div 
              className={`photo-card ${flip ? "flip-active" : ""}`} 
              onClick={() => setFlip(!flip)}
            >
              <div className="corner corner-tl"></div>
              <div className="corner corner-br"></div>
              
              <div className="photo-inner">
                <div className="photo-face photo-front">
                  <div className="inner-border"></div>
                  <img src="img3.png" alt="Rayan Front" />
                  <div className="card-overlay-glow"></div>
                  <div className="flip-hint">REVEAL PROFILE</div>
                </div>
                <div className="photo-back">
                  <div className="inner-border"></div>
                  <img src="img4.png" alt="Rayan Back" />
                </div>
              </div>
              <div className="card-bottom-glow"></div>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="text-side">
            <div className="glass-card">
              <h3 className="greeting">Hi, I'm <span className="accent">Rayan</span></h3>
              <p>
                I’m a 16-year-old developer from <strong>Temara, Morocco</strong>, 
                currently in the TCS scientific track. 
              </p>
              <p>
                I specialize in <strong>web design and scripting</strong>. I love turning 
                abstract ideas into functional, high-performance digital projects. 
              </p>
              <div className="info-tags">
                <span className="tag">Web Design</span>
                <span className="tag">Scripting</span>
                <span className="tag">UI/UX</span>
              </div>
            </div>
          </div>
        </div>

        <Skills />
      </div>
    </section>
  );
}

export default About;