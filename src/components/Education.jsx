import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGraduationCap,
  faCode,
  faBriefcase,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <section id="education" className="journey-section">
      <Container fluid className="journey-container">

        {/* Heading */}
        <div className="journey-heading">
          <span className="section-number">04</span>
          <span className="journey-line"></span>
          <span className="journey-title">My Journey</span>
        </div>

        <div className="journey-layout">

          {/* LEFT - TIMELINE */}
          <motion.div
            className="journey-timeline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="timeline-horizontal"></div>

            {/* 2023 */}
            <div className="timeline-item">
              <div className="timeline-circle">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>

              <span className="timeline-year">2023</span>
              <h4>BCA Start</h4>
              <p>Bachelor of Computer Applications</p>
            </div>

            {/* 2025 */}
            <div className="timeline-item">
              <div className="timeline-circle">
                <FontAwesomeIcon icon={faCode} />
              </div>

              <span className="timeline-year">2026</span>
              <h4>MERN Stack</h4>
              <p>Full Stack Development</p>
            </div>

            {/* 2026 */}
            <div className="timeline-item">
              <div className="timeline-circle">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>

              <span className="timeline-year">2026</span>
              <h4>Intern</h4>
              <p>June – December</p>
            </div>

          </motion.div>

          {/* EDUCATION */}
          <motion.div
            className="journey-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>

            <div>
              <h3>Education</h3>
              <h4>BCA</h4>
              <p>Noble Women's College, Manjeri</p>
              <span>2023 – 2026</span>
            </div>
          </motion.div>

          {/* CERTIFICATION */}
          <motion.div
            className="journey-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-icon">
              <FontAwesomeIcon icon={faCertificate} />
            </div>

            <div>
              <h3>Certifications</h3>
              <h4>College Presentation</h4>
              <p>Certificate of Participation</p>
              <span>2026</span>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default Education;