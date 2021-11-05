import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Styled, { keyframes } from 'styled-components';
import Logo from '../images/LogoNav.png';
import Snap from '../images/Snap.png';
import { NavLink } from 'react-router-dom';


const LogoNav = () => {
    return (
    <>
    <StyledNav>
    <NavLink to='/'>
    <LogoContainer id="logo">
    <LogoImg src={Logo}/>
    <SnapImg className="hover-image" src={Snap}/>
    </LogoContainer>
    </NavLink>
    </StyledNav>
     </>
    )
};

export default LogoNav;

const StyledNav = Styled.nav`
    float: right;
`

const SnapImg = Styled.img
    `
    position: absolute;
    top: 0px;
    right: 285px;
    width: 41px;
    height: 52px;
    display: none;
   `

const LogoImg = Styled.img
`
position: relative;
width: 172px;
height: 98.69px;
right: 150px;
top: 0px;
`

const LogoContainer = Styled.div
    `
    top: 15px;
    position: absolute;
     :hover .hover-image {
        display: block;
    }
    `   