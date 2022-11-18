import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import LogoGreco from "../../assets/logo-completo-white.png";

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
    width: 10vw;
    height: 4vh;
    margin-top: 1.5rem 
  }
  .logo {
    width: 10vw;
    padding: 12px;
  }
  @media (max-width: 1025px) {
    .logo {
      width: 12vw;
    }
    img {    
      filter: drop-shadow(3px 5px 20px red);
      width: 15vw;
      height: 5vh;
      margin-top: 1rem 
    }
  }
  @media (max-width: 769px) {
    .logo {
      width: 12vw;
    }
    img {    
      filter: drop-shadow(3px 5px 20px red);
      width: 20vw;
      height: 4vh;
      margin-top: 1rem 
    }
  }
  @media (max-width: 520px) {
    .logo {
      width: 14vw;
    }
    img {    
      filter: drop-shadow(3px 5px 20px red);
      width: 30vw;
      height: 4vh;
      margin-top: 1rem 
    }
  }
  @media (max-width: 420px) {
    .logo {
      width: 18vw;
    }
    img {    
      filter: drop-shadow(3px 5px 20px red);
      width: 30vw;
      height: 4vh;
      margin-top: 1rem 
    }
    
    @media (max-width: 320px) {
      img {    
        filter: drop-shadow(3px 5px 20px red);
        width: 30vw;
        height: 4vh;
        margin-top: 1rem 
      }
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
