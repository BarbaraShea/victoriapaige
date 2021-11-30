import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Styled, { keyframes } from 'styled-components';
import Logo from '../images/Logo.png';
import Snap from '../images/Snap.png';
import { NavLink } from 'react-router-dom';


const LandingLogoNav = () => {
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

export default LandingLogoNav;

const StyledNav = Styled.nav`
    float: right;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: -3rem;
    @media only screen and (max-width: 1350px){
display: none;
    }
`

const SnapImg = Styled.img
    `
   position: relative;
    top: 2px;
    right: 25px;
     width: 41px;
    height: 52px;
    display: none;
   `

const LogoImg = Styled.img
`
    margin: 0px;
    padding: 0px;
    position: absolute;
    top: 5px;
    right: 7px;
    width: 64px;
    height: 98px;
`

const LogoContainer = Styled.div
    `
    margin: 0px;
    padding: 0px;
    position: absolute;
    top: 0rem;
    right: 50px;
     :hover .hover-image {
        display: block;
    }
    `   