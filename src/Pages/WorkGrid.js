import React from 'react';
// import { Link } from "react-router-dom";
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import WorkImg from '../images/Work.png';
import ForestryCamp from '../images/ForestryCampOpener.png';
import TimeWells from '../images/TimewellsOpener.png';
import AllTrails from '../images/AllTrailsOpener.png';
import FCO from '../images/FCoverlay.png';
// import TWO from '../images/FCoverlay.png';
import ATO from '../images/AToverlay.png';


const Work = () => {
    return (
        <StyledWork id="work">
         <ImageContainer>
            <Image src={WorkImg} alt='Work Samples'/>
        </ImageContainer> 
        <Row>     
            <Col size={2}> 
                <TW src={TimeWells} alt="Project1"/>
                {/* <TWoverlay className="overlay-tw" src={TWO}/> */}
             </Col>
            <Col size={2}> 
                <FCcont>  
                    <FC src={ForestryCamp} alt="Project2"/>
                    <FCoverlay className="overlay-fc" src={FCO}/>
                </FCcont>
            </Col>
        </Row>
        <Row>
            <Col size={2}> 
                <ATcont>
                    <AT src={AllTrails} alt="Project3"/>
                    <AToverlay className="overlay-at" src={ATO}/>
                </ATcont>
            </Col>
            <Col size={2}> 
            </Col>
        </Row>
        </StyledWork>
    )
};

export default Work;
const StyledWork = Styled.div
    `
    min-height: 145vh;
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

const Image = Styled.img `
    position: absolute;
    width: 312px;
    height: 75px;
    left: 0px;
    top: 750px;
`

const Row = Styled.div `
    display: flex; 
`

const Col = Styled.div `
    flex: ${(props) => props.size};
`

const FC = Styled.img
    `
    position: absolute;
    width: 503px;
    height: 371px;
    left: 413px;
    top: 925px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `

const TW = Styled.img
    `
    position: absolute;
    width: 307px;
    height: 519px;
    left: 57px;
    top: 865px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `
const AT = Styled.img 
    `
    position: absolute;
    width: 416px;
    height: 272px;
    left: 57px;
    top: 1475px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   
    `
const FCoverlay = Styled.img `
    position: absolute;
    width: 475px;
    height: 339px;
    opacity: 0;
    left: 428px;
    top: 940px;
    transition: .5s ease; 
 `
const AToverlay = Styled.img `
    position: absolute;
    width: 404px;
    height: 256px;
    opacity: 0;
    left: 63px;
    top: 1483px;
    transition: .5s ease; 
 `
// const TWoverlay = Styled.div
// `
//   transition: .5s ease; 
// `
const FCcont = Styled.div 
`
     :hover .overlay-fc {
        opacity: 9;
    }
`
const ATcont = Styled.div 
`
     :hover .overlay-at {
        opacity: 9;
    }
`

const media = {
    xs: (styles) => `
    @media only screen and (max-width:480px) {
        ${styles}
    }`



}