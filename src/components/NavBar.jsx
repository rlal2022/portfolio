import React, { useState, useEffect } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const handleScroll = () => {
    const sections = ["home", "about", "experience", "contact"];
    const scrollPos = window.scrollY + 200;

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        setActiveSection(id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-none fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            RL
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "home" ? "active" : ""
                  }`}
                  href="#home"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "about" ? "active" : ""
                  }`}
                  href="#about"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "experience" ? "active" : ""
                  }`}
                  href="#experience"
                  onClick={() => scrollToSection("experience")}
                >
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "contact" ? "active" : ""
                  }`}
                  href="#contact"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main-content">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default NavBar;
