import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Styled, { keyframes } from 'styled-components';
import Logo from '../images/Logo.png';
import Snap from '../images/Snap.png';
import BurgerNav from '../images/BurgerNav.png';

const NavBar2 = () => {
    return (
    <>
    <StyledNav>
        <LogoContainer id="logo">
            <LogoImg  src={Logo}/>
            <SnapImg className="hover-image" src={Snap}/>
        </LogoContainer>
        <NavBarContainer>
            <ul class="navbar">
                <li><Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={1000} >Intro</Link></li>
                <li><Link activeClass="active" to="work" spy={true} smooth={true} offset={-50} duration={1000} >Work</Link></li>
                <li><Link  activeClass="active" to="about" spy={true} smooth={true} offset={-20} duration={1000} >About</Link></li>
                <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={1000} >Let's Talk</Link></li>
            </ul>
            <BurgerMenuContainer>
                <BMenu  src={BurgerNav}/>
            </BurgerMenuContainer>  
        </NavBarContainer>
        
        </StyledNav>
    </>
    )
};

export default NavBar2;

const StyledNav = Styled.div
`
@media only screen and (max-width: 1300px) {
    display: none;
`
const NavBarContainer = Styled.div
`
position: fixed;
right: 5%;
top: 40%;
padding-right: 3rem;
li {
    list-style: none;
    line-height: 2.2;
    text-align: right;
    :hover {
      color: #FF7864;
    }
}  
@media only screen and (max-width: 1300px) {
    display: none;
`
const SnapImg = Styled.img
`
position: fixed;
display: none;
top: 2.5%;
@media only screen and (max-width: 1300px) {
    display: none;
`


const LogoImg = Styled.img 
`
`
const BMenu = Styled.img
`  
`
const BurgerMenuContainer = Styled.div
`
`

const LogoContainer = Styled.div
    `
    position: fixed;
    padding-right: 2rem;
    right: 1%;
    :hover .hover-image {
        display: block;
    }
    `   