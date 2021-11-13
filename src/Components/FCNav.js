import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';


const FCNav = () => {
    return (
    <>
    <StyledNav>
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
    </>
    )
};

export default FCNav;

const StyledNav = Styled.nav`
    float: right;
    padding: 16.875rem 10rem 0.625rem 0.625rem;
    font-size: 1.375rem;
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
    @media only screen and (max-width: 1350px){
display: none
    }
    `
