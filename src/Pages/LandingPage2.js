import React from 'react'
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import Arrow from '../images/Shape.png'
import Hello from '../images/HelloImVictoria.png';
import JFBanner from '../images/JFbanner.png';
import HCBanner from '../images/HCBanner.png';
import ADBanner from '../images/ADbanner.png';
import WorkImg from '../images/Work.png';
import ForestryCamp from '../images/FCLanding.png';
import TimeWells from '../images/TWLanding.png';
import Alltrails from '../images/ATLanding.png';
import FCO from '../images/FCoverlay.png';
import ATO from '../images/AToverlay.png';
import AboutImg from '../images/About.png';
import ProfilePic from '../images/ProfilePic.png';
import LetsTalk from '../images/LetsTalk.png';
import ArrowUp from '../images/ArrowUp.png';
import mail from "../images/email.png";
import linkedin from "../images/linkedin.png";
import ArrowR from "../images/ArrowRight.png";
import Resume from "../images/resume.png";
import NavBar2 from "../Components/NavBar2"

const LandingPage2 = () => {
    return (
        <div>
            <NavBar2></NavBar2>
        <IntroHeaderContainer>
            <Intro src={Hello} alt='Hello' id="intro"/>
        </IntroHeaderContainer>
        <LandingContainer>
        <IntroText>
            <p class='landing-list-intro'> Utilizing ten years of experience working as a behavior specialist and educator, I create </p>
            <TextOverImage>
                <LandingList class='landing-list'> joy-filled</LandingList>
                <Banner1 src={JFBanner}/>
            </TextOverImage>
            <TextOverImage>
                <LandingList class='landing-list'> human-centered </LandingList>
                <Banner2 src={HCBanner}/>
            </TextOverImage>
            <TextOverImage>
                <LandingList class='landing-list'> accessible-by-design </LandingList>
                <Banner3 src={ADBanner}/>
            </TextOverImage>
            <TextOverImage>
            <p class='landing-list'> digital products. </p>
            </TextOverImage>
        </IntroText>
        </ LandingContainer>
        <Link class="arrow" activeClass="active" to="work" spy={true} smooth={true} offset={-70} duration={500}><ArrowImg src={Arrow}/></Link>
        
        </div>
    )
}

export default LandingPage2

const IntroHeaderContainer = Styled.div
`
display: flex;
flex-direction: column;
@media only screen and (max-width: 1300px) {
    text-align: center;
    align-items: center;

`
const Intro = Styled.img
`
max-height: 100vh;
max-width: 40vh;
`
const LandingList = Styled.p
`
position: relative;
left: 2rem;
padding-top: 1rem;
@media only screen and (max-width: 1300px) {
    left: 0;
}

`
const TextOverImage = Styled.div
`
display: block;
@media only screen and (max-width: 1300px) {
display: flex;
flex-direction: column;
align-items: center;
// line-height: 1.5;
`
const LandingContainer = Styled.div
`
display: flex;
max-height: 100vh;
max-width: 70vw;
flex-direction: column; 
padding-top: 1rem;
@media only screen and (max-width: 1300px) {
    text-align: center;
    align-items: center;
    font-size: 1.5rem;
}
`
const Banner1 = Styled.img 
`
display: block;
position: relative;
bottom: 2.5rem;
z-index: -3;
@media only screen and (max-width: 1300px) {
    bottom: 2.5rem;
    z-index: -3;
}
`
const Banner2 = Styled.img 
`
display: block;
position: relative;
bottom: 3rem;
z-index: -2;
@media only screen and (max-width: 1300px) {
    bottom: 3rem;
    z-index: -2; 
}
`

const Banner3 = Styled.img 
`
display: block;
position: relative;
bottom: 4rem;
z-index: -2;
@media only screen and (max-width: 1300px) {
    bottom: 4rem;
    z-index: -2;
    width: 95vw;
}
`

const IntroText = Styled.div 
`
display: block;
flex-direction: column;
z-index: 5;
line-height: 2.5rem;
@media only screen and (max-width: 1300px) {
    // line-height: 3rem;
`
const ArrowImg = Styled.img 
    `
position: absolute;
bottom: 5rem;
    `