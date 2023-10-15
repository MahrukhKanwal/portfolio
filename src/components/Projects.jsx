import React from 'react'
import { IMAGES } from '../assets/constants/images';
import "../assets/global.css";

const Projects = () => {
    const ServiceData = [
        {
          title: "Botique ERP",
          description:
            "Building the user interface and user experience components of a website or web application.",
          icon: IMAGES.frontEnd,
        },
        {
          title: "Exam Maker",
          description:
            "Building the user interface and user experience components of a website or web application.",
          icon: IMAGES.frontEnd,
        },
        {
          title: "CRS STORE",
          description:
            "Building the user interface and user experience components of a website or web application.",
          icon: IMAGES.frontEnd,
        },
        {
          title: "Learning Management Solution",
          description:
            "Building the user interface and user experience components of a website or web application.",
          icon: IMAGES.tpa,
        },
        {
          title: "Real Estate Management Solution",
          description:
            "Building the user interface and user experience components of a website or web application.",
          icon: IMAGES.frontEnd,
        },
        {
          title: "Customer Relationship Management",
          description:
            "Building the user interface and user experience components of a website or web application.",
          icon: IMAGES.frontEnd,
        },
       
      ];
    
      return (
        <div className="horizontalCenter w-80 paddingMain" id="projects">
          <div className="  text-center">
            <h4 className='headingText'>Projects </h4>
          </div>
          <div className="row  horizontalCenter">
            {ServiceData.map((data, index) => {
              return (

                <div className='col-md-4 '>
                    {
                        (index + 1) % 3 == 0 && (
                            <div className='col-md-1'></div>
                        )
                    }
                <div className="col-md-12 justify-content-center d-flex flex-column align-items-center border shadow text-center mt-5 servicesBox">
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
                {  
                        (index + 1) % 3 !== 0 && (
                            <div className='col-md-1'></div>
                        )
                      
                    }
                </div>
              );
            })}
          </div>
        </div>
      );
}

export default Projects
