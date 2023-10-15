import React, { useState } from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import styled from "styled-components";
import Button from "./Button";
import { IMAGES } from "../assets/constants/images";

// ...

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false)
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const NavbarContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 10px 20px;
    color: #fff;
    position:fixed;
    width:100vw
  `;

  const Logo = styled.div`
    img {
      max-height: 40px;
    }
  `;

  const NavMenu = styled.nav`
    ul {
      display: flex;
      text-Decoration:none;
      margin-bottom:0px;
      padding-left:0px

    }

    ul li {
      margin-right: 20px;
      padding:10px 20px;
      text-Decoration:none;
      list-style: none;
      cursor:pointer
    }

    @media (max-width: 768px) {
      display: none; /* Show on smaller screens */
      cursor: pointer;

 
  `;
  const MobileMenu = styled.div`

  
  @media (max-width: 768px) {
    display: ${menuOpen ? "block" : "none"};
    position: absolute;
    top: 60px; /* Adjust as needed */
    left: 0;
    background-color: #333;
    width: 100%;
    text-align: left;
    padding-right: 30px;
    list-style: none;
    text-Decoration:none;

  }

  ul {
    flex-direction: column;
    list-style: none;
  }
`;
const HamburgerIcon = styled.div`
display: none; /* Initially hidden on larger screens */

@media (max-width: 600px) {
  display: block; /* Show on smaller screens */
  cursor: pointer;
}
`;
  return (
    <NavbarContainer>
      <Logo>
        <img src={IMAGES.logo} alt="Logo" style={{filter: "invert(100%)"}} />
      </Logo>

      {

      }
      <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>
      <NavMenu>
        <ul>
       
          
    
          <li>
            <Link
              to="home"
              smooth={true}
              offset={30} // You may need to adjust the offset value
              duration={300}
              onClick={() => handleLinkClick('home')}
              style={{ color: activeLink === 'home' ? '#008080' : 'white' }}
            >
             Home
            </Link>
          </li>
          <li>
            <Link
              to="aboutMe"
              smooth={true}
              offset={0} // You may need to adjust the offset value
              duration={300}
              onClick={() => handleLinkClick('aboutMe')}
              style={{ color: activeLink === 'aboutMe' ? '#008080' : 'white' }}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              offset={30} // You may need to adjust the offset value
              duration={300}
              onClick={() => handleLinkClick('projects')}
            style={{ color: activeLink === 'projects' ? '#008080' : 'white' }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              offset={30} // You may need to adjust the offset value
              duration={300}
              onClick={() => handleLinkClick('services')}
              style={{ color: activeLink === 'services' ? '#008080' : 'white' }}
            >
              Services
            </Link>
          </li>
        </ul>
      </NavMenu>

      {window.innerWidth < 600 ?  

      <MobileMenu>
        <ul>
          <li>
            <Link
              to="home"
              smooth={true}
              offset={30}
              duration={300}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="aboutMe"
              smooth={true}
              offset={30}
              duration={300}
              onClick={() => handleLinkClick("aboutMe")}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              offset={30}
              duration={300}
              onClick={() => handleLinkClick("projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              offset={30}
              duration={300}
              onClick={() => handleLinkClick("services")}
            >
              Services
            </Link>
          </li>
        </ul>
        <div style={{padding:"0px 30px"}}>

        <Button title={"Ping Me!"} />
        </div>
      </MobileMenu>
      : null
      }
      { window.innerWidth > 600 ? 
      
        <Button title={"Ping Me!"} />
        : null

      }
      
    </NavbarContainer>
  );
}

export default Navbar;
