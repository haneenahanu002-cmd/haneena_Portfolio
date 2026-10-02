
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faServer,
  faDatabase,
  faScrewdriverWrench,
  faLayerGroup,
  faUsers,
  faArrowLeft,
  faComments,
  faLightbulb,
  faClock,
  faBookOpen,
  faPuzzlePiece,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./SkillsPage.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: faLaptopCode,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "React.js",
      "React Hooks",
      "Context API",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design",
      "DOM Manipulation",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Learning server-side development and API integration.",
    icon: faServer,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "CRUD Operations",
      "API Integration",
      "Async/Await",
      "Fetch API",
    ],
  },
  {
    number: "03",
    title: "Database & Cloud",
    description: "Working with databases and backend services.",
    icon: faDatabase,
    skills: ["MongoDB", "Firebase", "Firebase Authentication"],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "Tools used during development and design.",
    icon: faScrewdriverWrench,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vite", "npm"],
  },
  {
    number: "05",
    title: "Programming Concepts",
    description: "Core concepts used to build and maintain applications.",
    icon: faLayerGroup,
    skills: [
      "OOP Fundamentals",
      "JavaScript ES6+",
      "JSON",
      "Debugging",
      "Component-Based Architecture",
      "Authentication Basics",
    ],
  },
];

const softSkills = [
  {
    title: "Communication",
    description:
      "Sharing ideas clearly and communicating with team members.",
    icon: faComments,
  },
  {
    title: "Teamwork",
    description:
      "Collaborating with others to achieve shared goals.",
    icon: faUsers,
  },
  {
    title: "Problem-Solving",
    description:
      "Analysing challenges and finding practical solutions.",
    icon: faLightbulb,
  },
  {
    title: "Time Management",
    description:
      "Organising tasks and working towards deadlines.",
    icon: faClock,
  },
  {
    title: "Quick Learning",
    description:
      "Learning new concepts and improving development skills.",
    icon: faBookOpen,
  },
  {
    title: "Adaptability",
    description:
      "Adjusting to new tools, technologies, and requirements.",
    icon: faPuzzlePiece,
  },
];

function SkillsPage() {
  return (
    <main className="skills-page">
      {/* Page heading */}
      <section className="skills-page-banner">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="skills-eyebrow">
              <span>02</span> MY EXPERTISE
            </p>

            <h1>
              Skills & <span>Technologies.</span>
            </h1>

            <p className="skills-banner-text">
              Technologies I've learned, tools I use, and
              skills I'm developing to build meaningful
              digital experiences.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container className="skills-page-container">
        {/* Technical skills */}
        <section className="skills-content-section">
          <div className="skills-section-heading">
            <div>
              <p className="skills-eyebrow">
                <span>01</span> TECHNICAL SKILLS
              </p>
              <h2>
                My Tech <span>Stack</span>
              </h2>
              <p className="skills-section-description">
                My development tools and technical knowledge.
              </p>
            </div>
          </div>

          <Row className="g-4">
            {skillGroups.map((group, index) => (
              <Col md={6} xl={4} key={group.number}>
                <motion.article
                  className="skills-detail-card"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="skills-card-top">
                    <div className="skills-card-icon">
                      <FontAwesomeIcon icon={group.icon} />
                    </div>
                    <span className="skills-card-number">
                      {group.number}
                    </span>
                  </div>

                  <h3>{group.title}</h3>
                  <p className="skills-card-description">
                    {group.description}
                  </p>

                  <div className="skills-tag-list">
                    {group.skills.map((skill) => (
                      <span className="skills-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </Col>
            ))}
          </Row>
        </section>

        {/* Soft skills */}
        <section className="skills-content-section soft-skills-section">
          <div className="skills-section-heading">
            <div>
              <p className="skills-eyebrow">
                <span>02</span> PERSONAL STRENGTHS
              </p>
              <h2>
                My Soft <span>Skills</span>
              </h2>
              <p className="skills-section-description">
                Personal qualities that support learning,
                collaboration, and professional growth.
              </p>
            </div>
          </div>

          <Row className="g-4">
            {softSkills.map((skill, index) => (
              <Col sm={6} lg={4} key={skill.title}>
                <motion.article
                  className="soft-skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="soft-skill-icon">
                    <FontAwesomeIcon icon={skill.icon} />
                  </div>

                  <div>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                </motion.article>
              </Col>
            ))}
          </Row>
        </section>

        {/* Learning note */}
        <motion.section
          className="skills-learning-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="skills-learning-icon">
            <FontAwesomeIcon icon={faCode} />
          </div>

          <div>
            <h2>
              Always Learning. <span>Always Growing.</span>
            </h2>
            <p>
              I'm continuously improving my skills through
              practice, personal projects, and exploring new
              development techniques.
            </p>
          </div>
        </motion.section>

        {/* Back to portfolio */}
        <div className="skills-back-home">
          <Button
            as={Link}
            to="/"
            className="skills-home-button"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Portfolio
          </Button>
        </div>
      </Container>
    </main>
  );
}

export default SkillsPage;