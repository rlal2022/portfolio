import React from "react";
import AboutMeCard from "../components/AboutMeCard";
import Skills from "../components/Skills";

const About = () => {
  return (
    <>
      <div className="about">
        <AboutMeCard />
        <Skills />
      </div>
    </>
  );
};

export default About;
