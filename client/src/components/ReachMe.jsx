import React from "react";
import "../assets/global.css";
import { IMAGES } from "../assets/constants/images";


const ReachMe = () => {
  const link = [
    {
      title: "Github",
      icon: IMAGES.github,
    },
    {
      title: "LinkedIn",
      icon: IMAGES.linkedIn,
    },
    {
      title: "Gmail",
      icon: IMAGES.gmail,
    },
    {
      title: "Facebook",
      icon: IMAGES.facebook,
    },
  ];

  return (
    <div className="horizontalCenter w-80 paddingMain">
      <div className="  text-center">
        <h4 className="headingText">Reach Me</h4>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-between flex-wrap ">
        {link.map((data, index) => {
          return (
            <a className="reachMeBox  justify-content-start flex-column align-items-center d-flex text-center ">
              <h5 className="">{data.title}</h5>
              <a
                style={{
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                }}
                className=""
              
              >
                <img src={data.icon} alt="" className="w-100" />
              </a>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ReachMe;
