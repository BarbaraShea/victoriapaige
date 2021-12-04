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
    <DropDown>
    <BurgerImg src={Burger}/>
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
    </DropDown>
    </NavCont>
    </>
    )
};

export default MobileNav;

const DropDown = Styled.div
`
position: relative;
display: inline-block;
align-content: flex-end;
float: right;
:hover #sidebar {
  display: block;  
}
`
const NavCont = Styled.div
`
flex-direction: row;
justify-content: space-between;
margin-left: 4.5%;
margin-right 4.5%;
margin-top: 1rem;
align-items: center;
position: -webkit-sticky;
	position: sticky;
	top: 0;
display:none;
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
cursor: pointer;
float: right;
`

const StyledNav = Styled.nav
`
    display: none;
    position: absolute;
    background-color: #FFF1EC;
    opacity: 1;
    width: 100%;
    right: 0;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 3;
    display: none;
    font-size: 1.5rem;
     ul {
        display: block;
        list-style: none;
        position: absolute;
        background-color: #FFF1EC;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 5;
    opacity: 1;
    };
    li {
        line-height: 2.5;
        text-align: right;
         
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