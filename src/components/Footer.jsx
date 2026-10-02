import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";



function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Top Footer */}
        <div className="footer-top">

          <div className="footer-brand">
            <h2>
              Haneena<span>.</span>T
            </h2>

            <p>
              MERN Stack Developer passionate about building
              modern and responsive web applications.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#education">My Journey</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>

            <div className="social-icons">

              <a
                href="https://github.com/haneenahanu002-cmd"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/haneena-hanu-09a6b932b/?isSelfProfile=true"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

            </div>
          </div>

          {/* Back To Top */}
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Haneena. All rights reserved.
          </p>

          <p>
            Designed & Built with <span>♥</span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;