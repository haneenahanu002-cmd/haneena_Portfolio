
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpRightFromSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


import { projects } from "../data/projects";



const filters = ["All", "React", "Frontend", "Backend"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
  activeFilter === "All"
    ? projects.slice(0, 4)
    : projects
        .filter((project) =>
          project.categories.includes(activeFilter)
        )
        .slice(0, 4);
        const navigate = useNavigate();

  return (
    <section className="projects-section" id="projects">
      <Container>
       
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="projects-title-group">
            <p className="projects-eyebrow">
              <span>03.</span> Featured Projects
            </p>
            <h2>My Work</h2>
          </div>

          <div className="projects-heading-actions">
            <div className="project-filters">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "project-filter active"
                      : "project-filter"
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <button
  type="button"
  className="view-all-projects"
  onClick={() => navigate("/projects")}
>
  View All Projects
  <FontAwesomeIcon icon={faArrowRight} />
</button>
          </div>
        </motion.div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <div className="project-image-link">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="project-image"
                    loading="lazy"
                    onError={(event) => {
                      console.error(
                        "Image failed to load:",
                        project.title,
                        event.currentTarget.src
                      );
                    }}
                  />

                  {(project.liveDemo || project.github) && (
                    <a
                      className="project-image-overlay"
                      href={project.liveDemo || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                      />
                    </a>
                  )}
                </div>

                <div className="project-card-content">
                  <h3>{project.title}</h3>

                  {project.academic && (
                    <span className="academic-project-label">
                      Academic Year Project
                    </span>
                  )}

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech-list">
                    {project.technologies.map((tech) => (
                      <span className="project-tech" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.liveDemo || project.github) && (
                    <div className="project-links">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                          <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                          />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

export default Projects;