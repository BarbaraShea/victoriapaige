import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Styled, { keyframes } from 'styled-components';
import Logo from '../images/Logo.png';
// import Snap from '../images/Snap.png';

const NavBar = () => {
    return (
    <>
    <StyledNav>
    {/* <LogoContainer id="logo">
    <LogoImg  src={Logo}/>
    <SnapImg className="hover-image" src={Snap}/>
    </LogoContainer> */}
    <ul class="navbar">
    <li><Link 
    activeClass="active"
    to="intro"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    >Intro</Link></li>
    <li><Link 
    activeClass="active"
    to="work"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    >Work</Link></li>
    <li><Link 
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-20}
    duration={1000}
    >About</Link></li>
    <li><Link 
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    >Let's Talk</Link></li>
    </ul>     
    </StyledNav>
    </>
    )
};

export default NavBar;

const StyledNav = Styled.nav`
    float: right;
    font-size: 1.5rem;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 20rem;
    right: 3rem;
     ul {
        display: block;
        list-style: none;
    };
    li {
        line-height: 2.5;
        text-align: right;
        :hover {
          color: #FF7864;
        }
    }
    @media only screen and (max-width: 1400px){
display: none
    }
    `
