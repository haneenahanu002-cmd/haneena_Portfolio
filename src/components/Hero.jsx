
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faArrowRight,
  faDownload,
  faEnvelope,
  faCode,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";



function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" />

      <Container fluid className="hero-container">
        <Row className="align-items-center hero-row">

          {/* LEFT: INTRODUCTION */}
          <Col lg={5} md={6} className="hero-left">
            <motion.div
              className="hero-intro"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="hero-greeting">Hello, I'm</p>

              <h1 className="hero-name">
                Haneena <span>T</span>
              </h1>

              <h2 className="hero-role">
                FULL STACK DEVELOPER
              </h2>

              <p className="hero-description">
                I build modern, responsive and scalable web
                applications using MERN stack and other modern
                technologies. Turning ideas into real-world
                digital solutions.
              </p>

              <div className="hero-buttons">
                <Button
                  href="#projects"
                  className="hero-btn hero-btn-primary"
                >
                  View Projects
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>

                <Button
                  href="src\assets\Haneena T — Resume.pdf"
                  download
                  className="hero-btn hero-btn-outline"
                >
                  Download CV
                  <FontAwesomeIcon icon={faDownload} />
                </Button>
              </div>

              {/* SOCIAL LINKS */}
              <div className="hero-socials">
                <a
                  href="https://github.com/haneenahanu002-cmd"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href="https://www.linkedin.com/in/haneena-hanu-09a6b932b/?isSelfProfile=true"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                

                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=haneenahanu002@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Send Email"
  className="social-icon"
>
  <FontAwesomeIcon icon={faEnvelope} />
</a>
              </div>
            </motion.div>
          </Col>

          {/* RIGHT: PROFILE PHOTO */}
          <Col lg={5} md={6} className="hero-center">
            <motion.div
              className="hero-profile-area"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="hero-portrait-arch" />

              <div className="hero-portrait-frame">
                <img
                  src="src\assets\profile.png"
                  alt="Haneena T - Full Stack Developer"
                  className="hero-profile-image"
                />
              </div>

              <div className="hero-plant-decoration">
                ✦
              </div>
            </motion.div>
          </Col>

          {/* RIGHT: FLOATING CARD */}
          <Col lg={2} className="hero-right d-none d-lg-block">
            <motion.div
              className="hero-handwriting"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span>Code</span>
              <span>Create</span>
              <span>Build</span>
              <small>♥</small>
            </motion.div>

            <motion.div
              className="hero-tech-card"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="tech-card-icon">
                <FontAwesomeIcon icon={faCode} />
              </div>

              <div className="tech-card-text">
                <span>MERN Stack</span>
                <strong>Developer</strong>
              </div>
            </motion.div>

            <a href="#about" className="hero-scroll">
              <FontAwesomeIcon icon={faArrowDown} />
              <span>Scroll Down</span>
            </a>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;