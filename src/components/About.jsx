import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faFolderOpen,
  faCode,
  faGraduationCap,
  faArrowRight,
  faLaptopCode,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  const stats = [
    {
      icon: faFolderOpen,
      number: "4+",
      label: "Projects Built",
    },
    {
      icon: faCode,
      number: "15+",
      label: "Technologies",
    },
    {
      icon: faLaptopCode,
      number: "MERN",
      label: "Development Stack",
    },
    {
      icon: faGraduationCap,
      number: "2026",
      label: "BCA Graduate",
    },
  ];

  return (
    <section id="about" className="about-section">
      <Container fluid className="about-container">
        <Row className="about-row g-4">

          {/* LEFT: ABOUT INTRODUCTION */}
          <Col lg={4} md={12}>
            <motion.div
              className="about-intro"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-label">
                <span className="section-number">01</span>
                <span className="label-divider" />
                <span className="label-text">About Me</span>
              </div>

              <h2 className="about-heading">
                Turning Ideas into
                <br />
                Digital Experiences.
              </h2>

              <p className="about-description">
                I'm Haneena, a passionate and dedicated developer
                with a strong interest in building user-friendly,
                responsive and efficient web applications. I enjoy
                learning new technologies and solving real-world
                problems through code.
              </p>

              <Link to="/about-me" className="about-button">
                More About Me
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </motion.div>
          </Col>

          {/* RIGHT: STATS AND QUOTE */}
          <Col lg={8} md={12}>
            <motion.div
              className="about-details"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
            >

              {/* STAT CARDS */}
              <Row className="about-stats g-3">
                {stats.map((stat) => (
                  <Col xs={6} xl={3} key={stat.label}>
                    <motion.div
                      className="stat-card"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="stat-icon">
                        <FontAwesomeIcon icon={stat.icon} />
                      </div>

                      <div className="stat-content">
                        <h3>{stat.number}</h3>
                        <p>{stat.label}</p>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>

              {/* QUOTE */}
              <Row className="about-bottom g-3">
                <Col lg={12}>
                  <div className="about-quote">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="quote-icon"
                    />

                    <p>
                      I believe in continuous learning, clean code
                      and creating meaningful technology.
                    </p>

                    <span className="quote-signature">
                      — Haneena T
                    </span>

                    <div className="quote-decoration">〽</div>
                  </div>
                </Col>
              </Row>

            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default About;