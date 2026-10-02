import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLaptopCode,
  faPlug,
  faLayerGroup,
  faMobileScreenButton,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const services = [
  {
    icon: faGlobe,
    title: "Web Development",
    description: "Custom websites & web apps for your business.",
  },
  {
    icon: faLaptopCode,
    title: "Frontend Development",
    description: "Beautiful & responsive UI/UX interfaces.",
  },
  {
    icon: faPlug,
    title: "API Integration",
    description: "Connect with third-party services and APIs.",
  },
  {
    icon: faLayerGroup,
    title: "Full Stack Development",
    description: "End-to-end development with MERN stack.",
  },
  {
    icon: faMobileScreenButton,
    title: "Responsive Design",
    description: "Works perfectly on all devices.",
  },
];

function Services() {
  return (
    <section id="services" className="services-section">
      <Container fluid className="services-container">
        <Row className="align-items-center g-4">

          {/* Left Content */}
          <Col lg={3} md={12}>
            <motion.div
              className="services-intro"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="services-label">
                <span className="section-number">05</span>
                <span className="label-divider"></span>
                <span className="label-text">Services</span>
              </div>

              <h2>
                What I Can <span>Do</span>
              </h2>

              <p>
                I provide modern web solutions tailored to your needs.
                Let's build something great!
              </p>
              <a href="#contact" className="services-button">
  Get In Touch
  <FontAwesomeIcon icon={faArrowRight} />
</a>

              
            </motion.div>
          </Col>

          {/* Service Cards */}
          <Col lg={9} md={12}>
            <Row className="services-cards g-3">
              {services.map((service, index) => (
                <Col xl={2} lg={4} md={6} sm={10} xs={20} key={service.title}>
                  <motion.div
                    className="service-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Services;