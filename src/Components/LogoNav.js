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
    <LogoContainer class="logo">
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
    position: relative;
    top: 0px;
    right: 100px;
    width: 35px;
    height: 45px;
    display: none;
   `

const LogoImg = Styled.img
`
position: absolute;
width: 137px;
height: 78px;
right: 0px;
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