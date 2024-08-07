import React from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials-container">
      <a
        href="https://www.linkedin.com/in/rahullal-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="socials-card"
      >
        <div className="socials-card-body">
          <FaLinkedin className="socials-icon" style={{ color: "#0a66c2" }} />
          <h5 className="socials-title">LinkedIn</h5>
        </div>
      </a>
      <a
        href="https://www.github.com/rlal2022"
        target="_blank"
        rel="noopener noreferrer"
        className="socials-card"
      >
        <div className="socials-card-body">
          <FaGithub className="socials-icon" style={{ color: "#fff" }} />
          <h5 className="socials-title">Github</h5>
        </div>
      </a>
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="socials-card"
      >
        <div className="socials-card-body">
          <FaFileAlt className="socials-icon" style={{ color: "#fff" }} />
          <h5 className="socials-title">Resume</h5>
        </div>
      </a>
    </div>
  );
};

export default Socials;
