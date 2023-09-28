import styled from 'styled-components';
import Button from './Button';

const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  color: #fff;
`;

const Logo = styled.div`
  img {
    max-height: 40px;
  }
`;

const NavMenu = styled.nav`
  ul {
    display: flex;
  }

  ul li {
    margin-right: 20px;
  }
`;


function Navbar() {
  return (
    <NavbarContainer>
      <Logo>
        <img src="your-logo.png" alt="Logo" />
      </Logo>
      <NavMenu>
        <ul>
          <li><a href="#">Tab 1</a></li>
          <li><a href="#">Tab 2</a></li>
          <li><a href="#">Tab 3</a></li>
          <li><a href="#">Tab 4</a></li>
        </ul>
      </NavMenu>
      <Button title={"Ping Me!"}/>
    </NavbarContainer>
  );
}

export default Navbar;
