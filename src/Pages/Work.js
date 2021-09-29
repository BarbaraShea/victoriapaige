import React from 'react';
// import { Link } from "react-router-dom";
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import WorkImg from '../images/Work.png';
import ForestryCamp from '../images/ForestryCampOpener.png';
import TimeWells from '../images/TimewellsOpener.png';

const Work = () => {
    return (
        <StyledWork id="work">
        <ImageContainer>
            <Image src={WorkImg} alt='Work Samples'/>
        </ImageContainer> 
        <BoxContainer>
        <TWContainer>
            <TW src={TimeWells} alt="Project1"/>
            <OverlayTW className="overlay-tw">Hello</OverlayTW>
        </TWContainer>  
        <FCContainer>
            <FC src={ForestryCamp} alt="Project1"/>
        </FCContainer>   
        </BoxContainer>     
       
        </StyledWork>
    )
};

export default Work;

const StyledWork = Styled.div
    `
    min-height: 100vh;
    right-margin: 90rem;
    display: block;
    align-items: left;
    justify-content: center;
    line-height: 1.2;
 
`

const ImageContainer = Styled.div
    `
    display: flex;
    align-items: left;
    justify-content: left;
`

const Image = Styled.img
    `
    width: auto;
    height: auto;
    margin-bottom: 37px;
    `
const BoxContainer = Styled.div
    `
    display: flex;
    align-items: center;
    justify-content: center;
`
const OverlayTW = Styled.div
`
  position: absolute;
  bottom: 0;
  top:0;
  right: 0;
  left: 0;
  margin: 20%;
  margin-left: 25%;
  margin-top: 10%;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  transition: .5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
`

const FCContainer = Styled.div
    `
    display: block;
    float: right;
`

const TWContainer = Styled.div
    `
    position: relative;
    // display: block;
    float: left;
    :hover .overlay-tw {
        opacity: 9;
    }
`

const FC = Styled.img
    `
    width: 65%;
    height: 80%;
    margin-bottom: 37px;
    margin-right: 150px;
    float: right;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `

const TW = Styled.img
    `
    width: 75%;
    height: 90%;
    margin-bottom: 37px;
    margin-right: 50px;
    margin-left: 50px;
    float: left;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `
