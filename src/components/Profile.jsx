import React from "react";
import "../assets/global.css";
import Button from "./Button";
import { IMAGES } from "../assets/constants/images";

const Profile = () => {
  return (
    <div className="d-flex  marginHeader w-80 horizontalCenter flex-wrap paddingMain" id="home">
 
      <div className="profileText ">
        <h2 className="Header ">I'm Nashra</h2>
        <h2 className="Header">Ghaffar</h2>
        <p className="font-md">
          Welcome to my portfolio, where visual stories come to life. Through
          the lens of creativity, I embark on a journey to capture the essence
          of moments, emotions, and the world around us.
        </p>

        <Button title={"Check Projects"} />
      </div>
      <div style={{display:"flex",justifyContent:"center",flex:1}} >
      <div className="profileImageContainer">
        <img src={IMAGES.dummyPhoto} alt=""  className="profileImage" />

      </div>

      </div>
    
    </div>
  );
};

export default Profile;
