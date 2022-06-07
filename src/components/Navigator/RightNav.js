import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;


  ul, ol {
    list-style:none;
  }
  
  .nav > li {
    float:left;
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
    margin-right: 3rem;
  }
  
  .nav li a {
    background-color: black;
    color: white;
    text-decoration:none;
    padding:8px 5px;
    display:block;
  }
  
  .nav li a:hover {
    color: #F6AE2D;
  }
  
  .nav li ul {
    display:none;
    position:absolute;
    min-width:70px;
  }
  
  .nav li:hover > ul {
    display:block;
  }
  
  .nav li ul li {
    position:relative;
    margin-left: -2rem;
    font-family: Montserrat Black Italic;
    color: #EF233C;
    text-transform: uppercase;
    z-index: 2;
  }

  a {
      text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 20;

    li {
      color: white;
    }
    .nav li ul {
      display:none;
      position:absolute;
      min-width:140px;
    }
    .nav li ul li {
      position:relative;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} id="menu">
      <ul className="nav">
				<li><Link to="/">INICIO</Link></li>
        <li><a href="#Nosotros">NOSOTROS</a></li>
        <li><Link to="/AboutUs">CONTACTO</Link></li>					
			</ul>
    </Ul>
  )
}

export default RightNav;