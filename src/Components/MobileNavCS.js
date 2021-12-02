import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../images/Logo.png';
import Burger from '../images/BurgerNav.png';

const MobileNav = () => {
    return (
    <>
    <NavCont>
    <LogoImg src={Logo}/>
    <BurgerImg src={Burger}/>
    <StyledNav id="sidebar">
    <ul class="navbar">
    <li><Link 
    activeClass="active"
    spy={true}
    to="intro"
    smooth={true}
    duration={1000}
    >Case Study Intro</Link></li>
    <li><Link 
    activeClass="active"
    spy={true}
    to="problem"
    smooth={true}
    duration={1000}
    >The Problem</Link></li>
    <li><Link 
    activeClass="active"
    spy={true}
    to="research"
    smooth={true}
    duration={1000}
    >The Research</Link></li>
    <li><Link 
    activeClass="active"
    spy={true}
    to="gap"
    smooth={true}
    duration={1000}
    >The Gap + Solution</Link></li>
    <li><Link 
    activeClass="active"
    spy={true}
    to="method"
    smooth={true}
    duration={1000}
    >The Method</Link></li>
    <li><Link 
    activeClass="active"
    spy={true}
    to="test"
    smooth={true}
    duration={1000}
    >Test + Changes</Link></li>
     <li><Link 
    activeClass="active"
    to="follow"
    smooth={true}
    duration={1000}
    >The Follow Up</Link></li>
    </ul>     
    </StyledNav>
    </NavCont>
    </>
    )
};

export default MobileNav;

const NavCont = Styled.div
`
display: flex;
flex-direction: row;
justify-content: space-between;
position: -webkit-sticky; /* Safari */
position: sticky;
margin-left: 3rem;
margin-top: 1rem;
align-items: center;
display: none;
:hover {
 cursor:pointer;
 }
// :hover #sidebar{
//     display: flex;
//     position: absolute;
//     right: -20px;
//     width: 20%;
//     height: 100%;
//     top: 10%;
//     -webkit-animation: slide 0.5s forwards;
//     animation-timing-function: ease-in-out;
// }
    @media only screen and (max-width: 1350px){
display: flex;
    }
`
const LogoImg = Styled.img
`
flex-direction: row;
position: relative;
width: 60.7px;
height: 94px;
margin-right: 1rem;
top: 0px;
`

const StyledNav = Styled.nav`
    display: none;
    float: right;
    flex-direction: row;
    font-size: 1.5rem;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    max-width: 20%;
    height: 100%;
     ul {
        display: block;
        list-style: none;
    };
    li {
        line-height: 2.5;
        text-align: right;
    }
    `

const BurgerImg = Styled.img
`
max-width: 2.68rem;
height: 1.75rem;
margin-right: 3rem;
margin-top: 1rem;
:active {
    display: none;
}
`