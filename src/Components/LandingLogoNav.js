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
    top: 0rem;
    @media only screen and (max-width: 1350px){
display: none;
    }
`

const SnapImg = Styled.img
    `
    position: absolute;
    top: 0px;
    right: 2.5rem;
    width: 41px;
    height: 52px;
    display: none;
   `

const LogoImg = Styled.img
`
position: relative;
width: 60.7px;
height: 94px;
margin-right: 1rem;
top: 0px;
`

const LogoContainer = Styled.div
    `
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0rem;
    right: 1rem;
    position: absolute;
     :hover .hover-image {
        display: block;
    }
    `   