
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faLocationDot,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="aboutme-page">
      <div className="aboutme-banner">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="aboutme-eyebrow">GET TO KNOW ME</p>
            <h1>
              About <span>Me.</span>
            </h1>
            <p className="aboutme-banner-text">
              My journey, my passion, and my interest in
              building meaningful digital experiences.
            </p>
          </motion.div>
        </Container>
      </div>

      <Container className="aboutme-container">
        <motion.section
          className="aboutme-intro"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <p className="aboutme-label">
                <span>01</span> &nbsp; WHO I AM
              </p>

              <h2>
                Turning curiosity into
                <br />
                <span>creative solutions.</span>
              </h2>

              <p className="aboutme-paragraph">
                Hi, I'm Haneena T, a BCA graduate from
                Noble Women's College, Manjeri, under
                the University of Calicut.
              </p>

              <p className="aboutme-paragraph">
                I'm passionate about web development and
                enjoy creating modern, responsive, and
                user-friendly web applications. I work
                with frontend technologies like HTML,
                CSS, JavaScript, and React, while
                developing my skills in backend
                technologies and databases.
              </p>

              <p className="aboutme-paragraph">
                I enjoy exploring new technologies,
                improving my coding skills, and turning
                ideas into practical digital experiences.
                My goal is to grow as a Full Stack
                Developer and contribute to meaningful
                projects.
              </p>

              <div className="aboutme-personal-info">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {" "}Malappuram, Kerala, India
                </p>

                <p>
                  <FontAwesomeIcon icon={faGraduationCap} />
                  {" "}BCA Graduate · 2026
                </p>
              </div>
              <div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=haneenahanu002@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="aboutme-contact-btn"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                {" "}Get In Touch
              </a>
               </div>
              <div className="aboutme-back-home mt-2">
                <Button
                  as={Link}
                  to="/"
                  className="aboutme-home-btn"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  {" "}Back to Portfolio
                </Button>
              </div>
            </Col>

            <Col lg={5}>
              <div className="aboutme-visual">
                <div className="aboutme-photo-frame">
                  <img
                    src="src\assets\profile.png"
                    alt="Haneena T"
                    className="aboutme-photo"
                  />
                </div>

                <div className="aboutme-photo-caption">
                  <span className="caption-dot" />
                  <span>Developer · Learner · Creator</span>
                </div>
              </div>
            </Col>
          </Row>
        </motion.section>
      </Container>
    </section>
  );
}

export default AboutMe;