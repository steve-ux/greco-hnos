import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import LogoGreco from "../../assets/greco-logo.png";

const Nav = styled.nav`
  height: 12vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: black;
  z-index: 20;

  .logo {
    padding: 0.5px 30px;
  }
  img {    
    filter: drop-shadow(3px 5px 20px red);
  }
  .logoNav {
    width: 7vw;
    padding: 12px;
  }
  @media (max-width: 759px) {
    .logoNav {
      width: 12vw;
    }
  }
  @media (max-width: 520px) {
    .logoNav {
      width: 14vw;
    }
  }
  @media (max-width: 420px) {
    .logoNav {
      width: 18vw;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav className="navigator">
      <div className="logo">
        <img src={LogoGreco} width="75" alt="Logo de Greco Hermanos"/>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
