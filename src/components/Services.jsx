import React from "react";
import "../assets/global.css";
import { IMAGES } from "../assets/constants/images";

const Services = () => {
  const ServiceData = [
    {
      title: "Frontend Development",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.frontEnd,
    },
    {
      title: "Backend Development",
      description:
        "Creating the server-side logic, databases, and APIs that power the functionality of a website or web application.",
      icon: IMAGES.backEnd,
    },
    {
      title: "Web APIs",
      description:
        "Developing APIs (Application Programming Interfaces) that allow different software systems to communicate and share data.",
      icon: IMAGES.api,
    },
    {
      title: "Responsive Design",
      description:
        "Designing and developing websites that adapt and look great on various devices, including desktops, tablets, and smartphones.",
      icon: IMAGES.responsiveDesgin,
    },
    {
      title: "Maintanence & Support",
      description:
        "Providing ongoing updates, bug fixes, and technical support to ensure websites and applications continue to function smoothly.",
      icon: IMAGES.maintenance,
    },
    {
      title: "Social Media Integration",
      description:
        "Integrating social media features and content sharing capabilities into websites and applications.",
      icon: IMAGES.socialMedia,
    },
    {
      title: "Consulting & Strategy",
      description:
        "Advising clients on the best web development approaches, technologies, and strategies to achieve their business goals.",
      icon: IMAGES.strategy,
    },
    {
      title: "Artificial Intelligence",
      description:
        "Building websites with Artifical intelligence",
      icon: IMAGES.ai,
    },
  ];

  return (
    <div className="horizontalCenter w-80 paddingMain">
      <div className="  text-center">
        <h4 className="headingText">Services </h4>
      </div>
      <div className="row">
        {ServiceData.map((data, index) => {
          return (
            <div className="col-md-3 d-flex flex-row justify-content-center">
              <div className="border servicesBox  shadow justify-content-center flex-column align-items-center d-flex text-center cardBorder mt-4">
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={data.icon} alt="" className="w-100" />
                </div>

                <h5>{data.title}</h5>
                <p> {data.description} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
