
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faGraduationCap,
  faDatabase,
  faScrewdriverWrench,
  faLayerGroup,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const skillCategories = [
  {
    title: "Frontend",
    icon: faLaptopCode,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: faGraduationCap,
    skills: ["Node.js", "Express.js", "REST API", "Firebase"],
  },
  {
    title: "Database",
    icon: faDatabase,
    skills: ["MongoDB", "Firebase"],
  },
  {
    title: "Tools",
    icon: faScrewdriverWrench,
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
  {
    title: "Concepts",
    icon: faLayerGroup,
    skills: [
      "Authentication",
      "Redux",
      "Responsive Design",
      "API Integration",
    ],
  },
];

function Skills() {
  return (
    <section className="tech-section" id="skills">
      <Container>
        <motion.div
          className="tech-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="tech-eyebrow">
              <span>02</span> Technical Skills
            </p>
            <h2>
              My Tech <span>Stack</span>
            </h2>
          </div>

          <Link to="/skills" className="tech-view-all">
            View All Skills
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </motion.div>

        <div className="tech-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              className="tech-card"
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div className="tech-card-heading">
                <div className="tech-icon">
                  <FontAwesomeIcon icon={category.icon} />
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="tech-tags">
                {category.skills.map((skill) => (
                  <span className="tech-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;