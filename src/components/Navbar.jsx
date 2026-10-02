
import React, { useState } from "react";
import { Container, Navbar as BsNavbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [darkMode, setDarkMode] = useState(true);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-theme");
  };

  return (
    <BsNavbar
      expand="lg"
      className={`portfolio-navbar ${darkMode ? "dark-nav" : "light-nav"}`}
    >
      <Container fluid className="navbar-container">

        {/* Logo */}
        <BsNavbar.Brand href="#home" className="portfolio-brand">
          <span className="brand-logo">
            H
          </span>
          <span className="brand-name">HANEENA T</span>
        </BsNavbar.Brand>

        {/* Mobile menu button */}
        <BsNavbar.Toggle
          aria-controls="portfolio-navbar-nav"
          className="custom-toggler"
        />

        <BsNavbar.Collapse id="portfolio-navbar-nav">
          {/* Navigation links */}
          <Nav className="portfolio-nav mx-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.name}
                href={link.href}
                className={`nav-item-link ${
                  activeLink === link.name ? "active-link" : ""
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>

          {/* Right-side actions */}
          <div className="navbar-actions">
            <button
              className="theme-toggle"
              onClick={handleTheme}
              aria-label="Toggle theme"
              type="button"
            >
              <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
            </button>

            <a
              href="src\assets\Haneena T — Resume.pdf"
              download
              className="download-cv"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>Download CV</span>
            </a>
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;