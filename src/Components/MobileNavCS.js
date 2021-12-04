import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../images/Logo.png';
import Burger from '../images/BurgerNav.png';

const MobileNav = () => {


    return (
    <>
    <NavCont id="navbar">
    <NavLink to='/'>
    <LogoImg src={Logo}/>
    </NavLink>
    <BurgerImg id="burger" src={Burger}/>
    <StyledNav id="sidebar">
    <ul className="dropdown-content">
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
flex-direction: row;
justify-content: space-between;
margin-left: 4%;
margin-right 4%;
margin-top: 1rem;
align-items: center;
display:none;
    @media only screen and (max-width: 1350px){
display: flex;
    }
 :hover #sidebar {
    display: initial;  
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
cursor: pointer;
float: right;
`

const StyledNav = Styled.div
`
    display: none;
    position: absolute; 
    background-color: #FFF1EC;
    opacity: 1;
    width: 97%;
    margin-top: 3rem;
    z-index: 3;
    font-size: 1.5rem;
     ul {
        display: block;
        list-style: none;
        position: absolute;
        background-color: #FFF1EC;
        margin-right 6%; 
        box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.2);
        z-index: 5;
        opacity: 1;
        width: 95%;
    };
    li {
        line-height: 2.5;
        text-align: center;
        display: block;
        hover: {
            font-weight: bold;
        }
    }  

    `

const BurgerImg = Styled.img
`
max-width: 2.68rem;
height: 1.75rem;
margin-right: 4.5%;
margin-top: 1rem;
:active {
    display: none;
}
`