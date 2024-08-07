import React from "react";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoPython,
} from "react-icons/io5";

const Skills = () => {
  return (
    <div className="container skill-container d-flex flex-column justify-content-center align-items-center">
      <h2 className="skill-header">Skills</h2>
      <div className="row">
        <div className="col-6 col-md-4">
          <div className="skill d-flex flex-column align-items-center">
            <div className="skill-icon" style={{ color: "yellow" }}>
              <IoLogoJavascript />
            </div>
            <p className="skill-title">Javascript</p>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="skill d-flex flex-column align-items-center">
            <div className="skill-icon" style={{ color: "#61DBFB" }}>
              <IoLogoReact />
            </div>
            <p className="skill-title">React</p>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="skill d-flex flex-column align-items-center">
            <div className="skill-icon" style={{ color: "#4584b6" }}>
              <IoLogoPython />
            </div>
            <p className="skill-title">Python</p>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="skill d-flex flex-column align-items-center">
            <div className="skill-icon" style={{ color: "#FF5733" }}>
              <IoLogoHtml5 />
            </div>
            <p className="skill-title">HTML</p>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="skill d-flex flex-column align-items-center">
            <div className="skill-icon" style={{ color: "#264de4" }}>
              <IoLogoCss3 />
            </div>
            <p className="skill-title">CSS</p>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="skill d-flex flex-column align-items-center">
            <div className="skill-icon" style={{ color: "#68a063" }}>
              <IoLogoNodejs />
            </div>
            <p className="skill-title">NodeJS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
