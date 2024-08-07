import React from "react";
import "../css/App.css";

const AboutMeCard = () => {
  return (
    <>
      <div
        className="card about-card text-white mb-3 bg-transparent"
        style={{ maxWidth: "90rem" }}
      >
        <div className="card-header">
          <h2 className="card-title mb-0">About Me</h2>
        </div>
        <div className="card-body">
          <p className="card-text mt-0 fs-2">
            I am a recent graduate from San Jose State University with a
            Bachelor of Science in Mechanical Engineering. Throughout my
            academic journey, I developed a strong passion for coding, which led
            me to complete a rigorous coding bootcamp. My interest in technology
            has driven me to work on various personal and professional projects,
            constantly seeking to expand my skill set. Currently, I am delving
            deeper into the fascinating world of AI, eager to integrate these
            cutting-edge technologies into my future endeavors.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMeCard;
