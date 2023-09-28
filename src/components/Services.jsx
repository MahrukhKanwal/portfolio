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
      title: "Frontend Development",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.frontEnd,
    },
    {
      title: "Frontend Development",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.frontEnd,
    },
    {
      title: "Frontend Development",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.frontEnd,
    },
    {
      title: "Frontend Development",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.frontEnd,
    },
    {
      title: "Frontend Development",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.frontEnd,
    },
    {
      title: "Frontend Development",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.frontEnd,
    },
    {
      title: "Frontend Development",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.frontEnd,
    },
  ];

  return (
    <div className="horizontalCenter w-80 paddingMain">
      <div className="  text-center">
        <h4 className="headingText">Services </h4>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-between flex-wrap  ">
        {ServiceData.map((data, index) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Services;
