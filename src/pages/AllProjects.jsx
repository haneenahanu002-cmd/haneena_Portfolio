
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import "./AllProjects.css";

// Reuse the same project data from your Projects component.
import { projects } from "../data/projects";

function AllProjects() {
  return (
    <section className="all-projects-page">
      <Container>
        <Link to="/#projects" className="back-to-portfolio">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Portfolio
        </Link>

        <div className="all-projects-heading">
          <p>PORTFOLIO / PROJECTS</p>
          <h1>My Projects<span>.</span></h1>
          <p className="all-projects-subtitle">
            A collection of my web development projects,
            experiments, and creative work.
          </p>
        </div>

        <div className="all-projects-grid">
          {projects.map((project) => (
            <article className="all-project-card" key={project.id}>
              <div className="all-project-image">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                />
              </div>

              <div className="all-project-content">
                <div className="all-project-title">
                  <h2>{project.title}</h2>

                  {project.academic && (
                    <span className="academic-project-label">
                      Academic Year Project
                    </span>
                  )}
                </div>

                <p>{project.description}</p>

                <div className="all-project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="all-project-demo"
                  >
                    Live Demo
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AllProjects;