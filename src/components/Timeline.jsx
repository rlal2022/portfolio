import React from "react";
import infinity from "../assets/infinity.png";
import headstarter from "../assets/headstarter.png";
import "../css/timeline.css";

const timelineData = [
  {
    position: "Software Engineering Intern",
    company: "Infinite Options",
    date: "June 2023 - July 2023",
    description:
      "During my time at Infinite Options, I developed React pages and algorithms for the Meet Me Up app, enabling user profile customization, matching, and scheduling meetups. I built front-end pages for the Now Showing movie recommender app, allowing users to rate movies and receive tailored recommendations, and assisted in API development. I utilized Firebase for database management and authentication in both projects, ensuring secure data handling. I conducted unit and front-end testing to ensure quality and functionality across multiple projects. Additionally, I collaborated with two different teams of five, contributing to API development and fostering effective teamwork.",
    image: infinity,
  },
  {
    position: "Software Engineering Fellow",
    company: "Headstarter",
    date: "July 2024 - September 2024",
    description:
      "As a Headstarter Software Engineering Fellow, I am diving deep into the world of AI by building five innovative AI projects over the next five weeks. As part of Track A, my goal is to achieve either 1000 people on a waitlist, 1000 accounts created, or $1000 in revenue for my final project. This fellowship provides me with a fantastic opportunity to enhance my skills in various areas, including interview preparation and networking.",
    image: headstarter,
  },
];

const Timeline = () => {
  return (
    <div className="timeline">
      {timelineData.map((item, idx) => (
        <div
          key={idx}
          className={`timeline-container ${
            idx % 2 === 0 ? "left-container" : "right-container"
          }`}
        >
          <img src={item.image} alt={item.company} />
          <div className="text-box">
            <h2>{item.position}</h2>
            <h3>{item.company}</h3>
            <h5>{item.date}</h5>
            <p>{item.description}</p>
            <span
              className={`${
                idx % 2 === 0 ? "left-container-arrow" : "right-container-arrow"
              }`}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
