import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import FCHeader from '../images/ForestryHeader.png';
import FCNav from "../Components/FCNav";

const ForestryCamp = () => {
    return (
        <>
        <FCNav/>
        <FCHeaderContainer>
            <FC src={FCHeader} alt='Forestry CAmp Case Study'/>
        </FCHeaderContainer>       
        </>
    )
};

export default ForestryCamp;


const FCHeaderContainer = Styled.div
    `
    display: block;
    align-items: left;
    justify-content: left;
`

const FC = Styled.img
    `
    position: absolute;
    left: 3.58%;
    right: 61.08%;
    top: 6.5%;
    `