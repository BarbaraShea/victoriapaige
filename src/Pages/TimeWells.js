import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import TWHeader from '../images/TimewellsHeader.png';
import TWNav from "../Components/TWNav";

const Timewells = () => {
    return (
        <>
        <TWNav/>
        <TWHeaderContainer>
            <TW src={TWHeader} alt='Timewells Case Study'/>
        </TWHeaderContainer>       
        </>
    )
};

export default Timewells;


const TWHeaderContainer = Styled.div
    `
    display: block;
    align-items: left;
    justify-content: left;
`

const TW = Styled.img
    `
    position: absolute;
    left: 3.58%;
    right: 61.08%;
    top: 6.5%;
    `