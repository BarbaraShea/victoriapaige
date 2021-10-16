import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Styled, { keyframes } from 'styled-components';
import Logo from '../images/Logo.png';
import Snap from '../images/Snap.png';
import LogoText from '../images/logotype.png';
import { NavLink } from 'react-router-dom';


const TWNav = () => {
    return (
    <>
    <StyledNav>
    <NavLink to='/'>
    <LogoContainer class="logo">
    <LogoImg  src={Logo}/>
    <LogoType src={LogoText}/>
    <SnapImg className="hover-image" src={Snap}/>
    </LogoContainer>
    </NavLink>
    <ul class="navbar">
    <li><Link 
    activeClass="active"
    to="intro"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    >Case Study Intro</Link></li>
    <li><Link 
    activeClass="active"
    to="problem"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    >The Problem</Link></li>
    <li><Link 
    activeClass="active"
    to="research"
    spy={true}
    smooth={true}
    offset={-20}
    duration={1000}
    >The Research</Link></li>
    <li><Link 
    activeClass="active"
    to="gap"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    >The Gap + Solution</Link></li>
    <li><Link 
    activeClass="active"
    to="method"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    >The Method</Link></li>
    <li><Link 
    activeClass="active"
    to="test"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    >Test + Changes</Link></li>
     <li><Link 
    activeClass="active"
    to="follow"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    >The Follow Up</Link></li>
    </ul>     
    </StyledNav>
    </>
    )
};

export default TWNav;

const StyledNav = Styled.nav`
    float: right;
    padding: 270px 160px 10px 10px;
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
    right: 145px;
    width: 35px;
    height: 45px;
    display: none;
   `


const LogoImg = Styled.img 
    `
    margin: 0px;
    padding: 0px;
    display: block;
    width: 50px;
    height: 75px;
    
    `
const LogoType = Styled.img 
    `
    display: block;
    width: 90px;
    height: 49px; 
    padding: 2px;
    margin-top: 20px;
    margin-left: 3px;
    `

const LogoContainer = Styled.div
    `
    margin: 0px;
    padding: 0px;
    position: absolute;
    display: flex;
    top: 5px;
    right: 50px;
     :hover .hover-image {
        display: block;
    }
    `   