import React from 'react';
// import { Link } from "react-router-dom";
import Styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { IoIosArrowUp, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import LetsTalk from '../images/LetsTalk.png'

const Contact = () => {
    return (
        <StyledContact id="contact">
        <ImageContainer>
            <Image src={LetsTalk} alt='Contact'/>
        </ImageContainer>        <p> Interested in working together or just want to see adorable pictures of my dogs? You can find my contact information below.<strong> Let's get into it. </strong> </p>
        <Links>
        <ul>
        <li><a href="mailto:v.paige.bryant@gmail.com"><IoMdMail/></a></li>
        <li><a href="https://www.linkedin.com/in/victoria-bryant-1a153b20b/"><IoLogoLinkedin/></a></li>
        </ul>
        </Links>
           <Link 
    activeClass="active"
    to="intro"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    ><IoIosArrowUp/></Link> 
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
 
`

const Links = Styled.div
`
display: block;
margin-left: 20px;
margin-bottom: 20px;
style: none;
line-height: 2;
ul {
    list-style: none;
};
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
    margin-bottom: 20px;
    `