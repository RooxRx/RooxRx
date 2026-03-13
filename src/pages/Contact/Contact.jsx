import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg-overlay"></div>

      <div className="title-wrapper">
        <h2 className="title">contact <span className="accent">Me</span></h2>
        <div className="title-line"></div>
      </div>

      <div className="contact-container">
        {/* LEFT INFO: Cyber Card */}
        <div className="contact-info">
          <div className="info-header">
            <h3>Let's Collaborate</h3>
            <p>
              If you have a project in mind or just want to say hi, my inbox is always open.
            </p>
          </div>

          <div className="info-details">
            <div className="info-item">
              <div className="icon-box">
                <FaEnvelope className="contact-icon" />
              </div>
              <div className="info-text">
                <label>Email</label>
                <span>ryar26150@gmail.com</span>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FaPhone className="contact-icon" />
              </div>
              <div className="info-text">
                <label>Phone</label>
                <span>+212 XX XX XX XX</span>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FaMapMarkerAlt className="contact-icon" />
              </div>
              <div className="info-text">
                <label>Location</label>
                <span>Maroc</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM: Neon Inputs */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
            <span className="input-focus"></span>
          </div>
          
          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
            <span className="input-focus"></span>
          </div>

          <div className="input-group">
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <span className="input-focus"></span>
          </div>

          <button type="submit" className="submit-btn">
            <span>Send Message</span>
            <FaPaperPlane className="send-icon" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;