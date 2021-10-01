import React from 'react';
// import { Link } from "react-router-dom";
import Styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { IoIosArrowUp, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import LetsTalk from '../images/LetsTalk.png';
import ArrowUp from '../images/ArrowUp.png';

const Contact = () => {
    return (
        <StyledContact id="contact">
        <ImageContainer>
            <Image src={LetsTalk} alt='Contact'/>
        </ImageContainer>        <p> Interested in working together or just want to see adorable pictures of my dogs? You can find my contact information below.<strong> Let's get into it. </strong> </p>
        <Row>
        <Col size={2}>
        <a href="mailto:v.paige.bryant@gmail.com"><IoMdMail/></a>
        <a href="https://www.linkedin.com/in/victoria-bryant-1a153b20b/"><IoLogoLinkedin/></a>
        </Col>
        </Row>
           <Link 
    activeClass="active"
    to="intro"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    ><ArrowImg src={ArrowUp}/></Link> 
        </StyledContact> 
    )
};

export default Contact;

const StyledContact = Styled.div
    `
    min-height: 100vh;
    display: in-line;
    right-margin: 70rem;
    align-items: left;
    justify-content: center;
    line-height: 1.2;
    line-height: 1.4;
    font-size: 20px;
 
`
const Row = Styled.div `
    display: flex; 
`

const Col = Styled.div `
    flex: ${(props) => props.size};
`

const ImageContainer = Styled.div
    `
    display: flex;
    align-items: left;
    justify-content: left;
`

const Image = Styled.img
    `
    width: 278px;
    height: 92px;
    margin-bottom: 35px;
    `

const ArrowImg = Styled.img 
    `
    width: 40px;
    height; 40px;
    margin-top: 10px;
    `