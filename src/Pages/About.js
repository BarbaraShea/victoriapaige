import React from 'react';
import Styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import AboutImg from '../images/About.png';
import ProfilePic from '../images/ProfilePic.png';


const About = () => {
    return (
        <>
        <StyledAbout id="about">
        <ImageContainer>
            <Image src={AboutImg} alt='About'/>
        </ImageContainer>     
        <PicContainer>
            <Picture src={ProfilePic} alt='Profile' />
       </PicContainer>      
        <p> I'm Victoria Bryant, <strong> a produce and brand designer </strong> located in the mountains of Asheville, North Carolina.</p>
        <p> I was a career public school educator who <strong> specialized in behavior analysis of high-risk students. </strong> Through working with them, their teachers, and their families, I gained three major skillsets:</p>
       
        <List>
        <ul>
        <li> I understand, empathize with, and communicate openly and kindly with people from all walks of life.</li>
        <li> I'm regularly able to present my thought processes in an easily understandable way.</li>
        <li> An innant balancer by nature, I stay inherently unflappable in high-stess situations.</li>
         </ul>
        </List>
        <p> I utlize these skills and my art + design background to create digital experiences that combine the power of methodology, research, empathy, and an "it's worth a try" mentality. </p> 
        <p> A maker and storyteller in my spare time, you can often find me reading, writing, flying kites at the top of hikes, or eating my way through my excessive cookbook collection. </p>
        </StyledAbout>
    </>
    )
};

export default About;

const StyledAbout = Styled.div
    `
    min-height: 100vh;
    display: block;
    align-items: left;
    justify-content: center;
    line-height: 1.4;
    font-size: 20px;

`
const List = Styled.div
`
margin-left: 20px;
margin-bottom: 20px;
`

const ImageContainer = Styled.div
    `
    display: flex;
    align-items: left;
    justify-content: left;
`

const PicContainer = Styled.div
    `
    display: block;
    align-items: right;
    margin-right: 128px;
    margin-left: 32px;
    float: top;
    position: relative;
`

const Image = Styled.img
    `
    width: 17%;
    height: 12%;
    margin-bottom: 15px;
    `
const Picture = Styled.img
    `
    height: 48%;
    width: 38%;
    margin-bottom: 20px;
    margin-left: 50px;
    float: right;
    float: top;
    `