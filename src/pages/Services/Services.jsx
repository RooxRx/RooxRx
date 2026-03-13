import React from "react";
import "./Services.css";
import { FaCode, FaPalette, FaLaptopCode } from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="serv">
      {/* Background layer to keep the grid consistency */}
      <div className="services-bg-overlay"></div>

      <div className="title-wrapper">
        <h2 className="title">My <span className="accent">Services</span></h2>
        <div className="title-line"></div>
      </div>

      <div className="services-container">
        <div className="service-card">
          <div className="card-glow"></div>
          <FaCode className="service-icon" />
          <h3>Frontend Development</h3>
          <p>
            I build modern and interactive websites using <span>React</span>, 
            <span>HTML/CSS</span>, <span>JavaScript</span>, and <span>Next.js</span>.
          </p>
        </div>

        <div className="service-card">
          <div className="card-glow"></div>
          <FaPalette className="service-icon" />
          <h3>UI Design</h3>
          <p>
            Creating clean and modern user interfaces with a focus on 
            <span>visual design</span> and <span>usability</span>.
          </p>
        </div>

        <div className="service-card">
          <div className="card-glow"></div>
          <FaLaptopCode className="service-icon" />
          <h3>Web Applications</h3>
          <p>
            Building robust web applications with <span>dynamic features</span>, 
            <span>API integration</span>, and smooth performance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;