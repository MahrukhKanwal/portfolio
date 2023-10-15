import React from "react";
import "../assets/global.css";
import { IMAGES } from "../assets/constants/images";

const AboutMe = () => {
  return (
    <div className="horizontalCenter w-80 paddingMain" id="aboutMe">
      <div className="  text-center  ">
        <h4 className="headingText" >About Me </h4>
      </div>
      <div className="d-flex align-items-center justify-content-center  aboutMainContainer ">
        <div className="aboutData aboutContainer">
          <h2 className="aboutHeader">
            Exploring the Digital Frontier: Nashra Ghaffar's Journey in Web
            Development
          </h2>
          <p className="paraText">
            Hey there! I'm Nashra Ghaffar, a web developer specializing in the
            MERN stack. I've always been fascinated by the digital world and how
            it impacts our lives. Growing up, I loved playing around with
            computers, which eventually led me to pursue a career in web
            development. I'm passionate about the intersection of art,
            technology, and human interaction, and I bring a unique perspective
            to my work with my background in Computer Science. I love
            collaborating with others and I'm known for my problem-solving
            skills and commitment to creating captivating online experiences.
          </p>
        </div>
        <div className="aboutImageContainer">
          <img
            src={IMAGES.library}
            alt=""
            className="profileImage"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
