import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";



function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const data = new FormData();

    data.append("access_key", "582829cb-01f6-47bd-9a27-93576d7e41ba");

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully! 📩");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container fluid className="contact-container">

        {/* Heading */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-label">
            <span className="section-number">06</span>

            <span className="label-divider"></span>

            <span className="label-text">
              Contact
            </span>
          </div>

          <h2>
            Let's Build Something <span>Together.</span>
          </h2>

          <p>
            Have a project idea or an opportunity? Feel free to get in touch.
            I'd love to hear from you.
          </p>
        </motion.div>

        <Row className="contact-content g-4">

          {/* LEFT SIDE */}
          <Col lg={5} md={12}>
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div>
                  <span>Email</span>

                  <a href="mailto:haneenahanu002@gmail.com">
                    haneenahanu002@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>

                <div>
                  <span>Phone</span>

                  <a href="tel:+919037192107">
                    +91 9037192107
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>

                <div>
                  <span>Location</span>

                  <p>
                    Malappuram, Kerala, India
                  </p>
                </div>
              </div>

            </motion.div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={7} md={12}>
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <Row className="g-3">

                {/* Name */}
                <Col md={6}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>

                {/* Email */}
                <Col md={6}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>

                {/* Subject */}
                <Col xs={12}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Col>

                {/* Message */}
                <Col xs={12}>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </Col>

                {/* Button */}
                <Col xs={12}>
                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Send Message

                    <FontAwesomeIcon
                      icon={faArrowRight}
                    />
                  </button>
                </Col>

                {/* Status */}
                {status && (
                  <Col xs={12}>
                    <p className="contact-status">
                      {status}
                    </p>
                  </Col>
                )}

              </Row>
            </motion.form>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Contact;