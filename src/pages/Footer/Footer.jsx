import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaChevronUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-line"></div>
      
      <div className="footer-container">
        <div className="footer-left">
          <p>© 2026 <span className="accent">Rayan Mossaddaq</span></p>
          <p className="footer-tagline">Building the future of the web.</p>
        </div>

        <button className="scroll-top" onClick={scrollToTop} title="Go to top">
          <FaChevronUp />
        </button>

        <div className="social-icons">
          <a href="https://www.instagram.com/rayan_roox/" target="_blank" rel="noreferrer" className="social-link">
            <FaInstagram />
            <span className="tooltip">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;