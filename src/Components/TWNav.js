import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';


const TWNav = () => {
    return (
    <>
    <StyledNav>
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
    font-size: 1.5rem;
    margin-top: 25rem;
    margin-right: 3rem;
     ul {
        display: block;
        list-style: none;
    };
    li {
        line-height: 2.5;
        text-align: right;
        :hover {
          color: #FF7864;
        }
    }
          @media only screen and (max-width: 1400px){
display: none
    }
    `
