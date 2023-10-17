import React from 'react';
import styled from 'styled-components';
import { IMAGES } from '../assets/constants/images';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  display:Flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  margin-top:10vh
`;
const Logo = styled.div`
img {
  max-height: 40px;
}
`;

const Email = styled.p`
  font-size: 16px;
  margin-top: 10px;

`;

const Copyright = styled.p`
  font-size: 16px;
  margin-top: 10px;
  margin-left:40px
`;

function Footer() {
  return (
    <FooterContainer>
        <Logo>
        <img src={IMAGES.logo} alt="Logo" style={{filter: "invert(100%)"}} />
      </Logo>
      <Email>Contact: crscommunity@gmail.com</Email>
      <Copyright>&copy; 2023 PortFolio</Copyright>
    </FooterContainer>
  );
}

export default Footer;
