import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
// import { IoIosArrowDown } from "react-icons/io";
import Arrow from '../images/Shape.png'
import Hello from '../images/HelloImVictoria.png';
import JFBanner from '../images/JFbanner.png';
import HCBanner from '../images/HCBanner.png';
import ADBanner from '../images/ADbanner.png';


const LandingPage = () => {
    return (
        <Landing id="intro" class="landing">
        <ImageContainer>
            <Image src={Hello} alt='Hello'/>
        </ImageContainer>
        <p class='landing-list-intro'> Utilizing ten years of experience working as a behavior specialist and educator, I create </p>
        <List>
        <Banner1Container>
        <Banner1 src={JFBanner}/>
        <Joy>
        <p class='landing-list'> joy-filled</p>
        </Joy>
        </Banner1Container>
        <Banner2Container>
        <Banner2 src={HCBanner}/>
        <Human>
        <p class='landing-list'> human-centered </p>
        </Human>
        </Banner2Container>
         <Banner3Container>
        <Banner3 src={ADBanner}/>
        <Accessible>
        <p class='landing-list'> accessible-by-design </p>
        </Accessible>
        </Banner3Container>
        <p class='landing-list'> digital products. </p>
        </List>
        <Link class="arrow"
    activeClass="active"
    to="work"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    ><ArrowImg src={Arrow}/></Link>
        </Landing>      
    )
};

export default LandingPage;

const Landing = Styled.div
    `
    min-height: 100vh;
    display: in-line;
    right-margin: 70rem;
    line-height: 1;
    
`
const List = Styled.div
    `
    line-height: 1;   
`

const ImageContainer = Styled.div
    `
    display: block;
    align-items: left;
    justify-content: left;
`

const Image = Styled.img
    `
    width: 350px;
    height: auto;
    margin-bottom: 0px;
    `

const ArrowImg = Styled.img 
    `
    width: 40px;
    height; 40px;
    margin-top: 10px;
    `

const Banner1 = Styled.img 
    `
    width: 150px;
    height; 50px;
    margin-left: -1.3%;
    `
const Banner1Container = Styled.div
    `
    position: relative;
    margin-bottom: 10px;
    `
const Joy = Styled.div
    `
    position: absolute;
    top: 40%;
    left: 100px;
    transform: translate(-50%, -50%);
    `
const Banner2 = Styled.img 
    `
    width: 255px;
    height; 50px;
    margin-left: -1.7%;
    `
const Banner2Container = Styled.div
    `
    position: relative;
    margin-bottom: 10px;
    `
const Human = Styled.div
    `
    position: absolute;
    top: 44%;
    left: 150px;
    transform: translate(-50%, -50%);
    `
const Banner3 = Styled.img 
    `
    width: 310px;
    height; 50px;
    margin-left: -1.7%;
    `
const Banner3Container = Styled.div
    `
    position: relative;
    margin-bottom: 10px;
    `
const Accessible = Styled.div
    `
    position: absolute;
    top: 44%;
    left: 180px;
    transform: translate(-50%, -50%);
    `