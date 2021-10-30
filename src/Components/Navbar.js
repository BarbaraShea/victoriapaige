import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Styled, { keyframes } from 'styled-components';
import Logo from '../images/Logo.png';
import Snap from '../images/Snap.png';

const NavBar = () => {
    return (
    <>
    <StyledNav>
    <LogoContainer class="logo">
    <LogoImg  src={Logo}/>
    <SnapImg className="hover-image" src={Snap}/>
    </LogoContainer>
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
    padding: 270px 80px 10px 10px;
    font-size: 18px;
     ul {
        display: block;
        list-style: none;
    };
    li {
        line-height: 2.2;
        text-align: right;
        :hover {
          color: #FF7864;
        }
    }
    `
const SnapImg = Styled.img
    `
    position: relative;
    top: 2px;
    right: 19px;
    width: 35px;
    height: 45px;
    display: none;
   `


const LogoImg = Styled.img 
    `
    margin: 0px;
    padding: 0px;
    position: absolute;
    top: 5px;
    right: 7px;
    width: 50px;
    height: 75px;
    
    `


const LogoContainer = Styled.div
    `
    margin: 0px;
    padding: 0px;
    position: absolute;
    top: 5px;
    right: 50px;
     :hover .hover-image {
        display: block;
    }
    `   