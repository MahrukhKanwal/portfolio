import React from 'react'
import { IMAGES } from '../assets/constants/images';
import "../assets/global.css";

const Projects = () => {
  const ServiceData = [
    {
      title: "Botique ERP",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.botique,
      link: "",
    },
    {
      title: "Exam Maker",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.examMaker,
      link: "https://krunch-exam-maker.vercel.app/",
    },
    {
      title: "CRS STORE",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.crsStore,
      link: "https://krunch-gaming-store.vercel.app/",
    },
    {
      title: "LMS",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.tpa,
      link: "",
    },
    {
      title: "CRM",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.crm,
      link: "https://krunch-crm-sm-taha-ali.vercel.app/login",
    },
    {
      title: "AI Fashion Chek",
      description:
        "Building the user interface and user experience components of a website or web application.",
      icon: IMAGES.fashionCheck,
      link: "https://krunch-crm-sm-taha-ali.vercel.app/login",
    },

  ];

  return (
    <div className="horizontalCenter w-80 paddingMain">
      <div className="  text-center">
        <h4 className='headingText'>Projects </h4>
      </div>
      <div className="row  horizontalCenter">
        {ServiceData.map((data, index) => {
          return (
            <div className='col-md-4 d-flex flex-row justify-content-center'>
              <a href={data.link} target='_blank' style={{textDecoration:"none", color:"black", width:"75%"}}>
                {/* {
                  (index + 1) % 3 === 0 && (
                    <div className='col-md-1'></div>
                  )
                } */}
                <div className="justify-content-center d-flex flex-column align-items-center border shadow text-center mt-5 servicesBox" style={{width:"100%", padding:"25px"}}>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      marginBottom:"10px",
                    }}
                  >
                    <img src={data.icon} alt="" className="w-100" />
                  </div>

                  <h5>{data.title}</h5>
                  <p> {data.description} </p>
                </div>
                {
                  (index + 1) % 3 !== 0 && (
                    <div className='col-md-1'></div>
                  )
                }
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects
