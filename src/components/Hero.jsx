import React from "react";
import "../css/App.css";
import hero from "../assets/hero.mp4";
import { HiCodeBracket } from "react-icons/hi2";

const Hero = () => {
  return (
    <>
      <header className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src={hero} type="video/mp4" />
        </video>
        <div className="container">
          <div className="row align-items-center mb-6">
            <div className="col-12 col-lg-5 text-center text-lg-start order-md-1">
              <h1
                className="hero-name-text display-3 mb-3 fw-normal"
                style={{ color: "white" }}
              >
                Hey, I'm Rahul Lal
              </h1>
              <h2
                className=" hero-left-text display-6 fw-normal"
                style={{ color: "white" }}
              >
                Welcome to my portfolio! I am a Software Engineer from
                California
              </h2>
            </div>
            <div className="col-12 col-lg-2 order-md-2 d-none d-lg-block">
              <div className="vertical-separator"></div>
            </div>
            <div className=" col-12 col-lg-5 text-center order-md-3">
              <HiCodeBracket
                className="hero-bracket"
                style={{
                  fontSize: "20rem",
                  color: "white",
                  marginRight: "30px",
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
