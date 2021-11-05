import React from 'react';
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
import Navbar from "../Components/Navbar";
import mail from "../images/email.png";
import linkedin from "../images/linkedin.png";
import ArrowR from "../images/ArrowRight.png";
import Resume from "../images/resume.png";

const LandingPage = () => {
    return (
        <>
        <Navbar/>
        <IntroHeaderContainer>
            <Intro src={Hello} alt='Hello' id="intro"/>
        </IntroHeaderContainer>
       <Banner1 src={JFBanner}/>
        <Banner2 src={HCBanner}/>
        <Banner3 src={ADBanner}/>
        <IntroText>
            <p class='landing-list-intro'> Utilizing ten years of experience working as a behavior specialist and educator, I create </p>
            <p class='landing-list'> joy-filled</p>
            <p class='landing-list'> human-centered </p>
            <p class='landing-list'> accessible-by-design </p>
            <p class='landing-list'> digital products. </p>
        </IntroText>
        <Link class="arrow"
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        ><ArrowImg src={Arrow}/></Link>
    <Work src={WorkImg} alt='Work Samples' id="work"/>
    <NavLink to='/Forestrycamp'>
        <FC className="landing-image" src={ForestryCamp}/>
        <FCText>
            <p><strong> Forestry Camp </strong> </p>
            <p id="text"> Rebranding and refunctioning Forestry Camp’s restaurant website and reservation system.</p>
        </FCText>
        <FCHover>
            <p className="cs"><strong>See Case Study</strong></p>
            <CSArrow1 className="AR" src={ArrowR}/>
        </FCHover>
    </NavLink>
    <NavLink to='/Alltrails'>
        <AT className="landing-image" src={Alltrails}/>
        <ATText>
            <p><strong> Alltrails </strong> </p>
            <p id="text"> Expanding equity to the outdoors by adding inclusivity, accessibility, and safety features to the Alltrails app. </p>
        </ATText>
        <ATHover>
            <p className="cs"><strong>See Case Study</strong></p>
            <CSArrow2 className="AR" src={ArrowR}/>
        </ATHover>
    </NavLink>
    <NavLink to='/Timewells'>
        <TW className="landing-image" src={TimeWells}/>
        <TWText>
            <p><strong> Timewells </strong> </p>
            <p id="text"> Providing a sense of modernity, safety, and comfort for an innovative new travel company. </p>
        </TWText>
        <TWHover>
            <p className="cs"><strong>See Case Study</strong></p>
            <CSArrow3 className="AR" src={ArrowR}/>
        </TWHover>
    </NavLink>
    <About src={AboutImg} alt='About' id="about"/> 
    <Picture src={ProfilePic} alt='Profile' />
    <AboutText>
        <p> I'm Victoria Bryant, <strong> a product and brand designer </strong> located in the mountains of Asheville, North Carolina.</p>
        <p> I was a career public school educator who <strong> specialized in behavior analysis of high-risk students. </strong> Through working with them, their teachers, and their families, I gained three major skillsets:</p>
        <ul>
            <li> I understand, empathize with, and communicate openly and kindly with people from all walks of life.</li>
            <li> I'm regularly able to present my thought processes in an easily understandable way.</li>
            <li> An innant balancer by nature, I stay inherently unflappable in high-stess situations.</li>
        </ul>
    </AboutText>
    <AboutText2>
    <p> I utilize these skills and my art + design background to create digital experiences that combine the power of methodology, research, empathy, and an "it's worth a try" mentality. </p> 
        <p> A maker and storyteller in my spare time, you can often find me reading, writing, flying kites at the top of hikes, or eating my way through my excessive cookbook collection. </p>
    </AboutText2>
    <Contact src={LetsTalk} alt='Contact' id="contact"/>
    <ContactText>
    <p> Interested in working together or just want to see adorable pictures of my dogs? You can find my contact information below.<strong> Let's get into it. </strong> </p>
    <p id="mail"><a href="mailto:v.paige.bryant@gmail.com" >v.paige.bryant@gmail.com<MailIcon src={mail}/></a></p>
    <p id="linkedin"><a href="https://www.linkedin.com/in/victoria-bryant-1a153b20b/" target="_blank">Victoria Bryant<LinkedinIcon src={linkedin}/></a></p>
    <p id="resume"><a href="src/images/Victoria Bryant Resume.pdf" download>Resumé<ResumeIcon src={Resume}/></a></p>
    </ContactText>
           <Link 
    activeClass="active"
    to="intro"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    ><ArrowImgUp src={ArrowUp}/></Link> 
    </>   
    )
};

export default LandingPage;
 

const IntroHeaderContainer = Styled.div
    `
    display: block;
    align-items: left;
    justify-content: left;
`

const Intro = Styled.img
    `
   position: absolute;
left: 5.07%;
right: 66.7%;
top: 2.34%;
bottom: 96.77%;
    `

const ArrowImg = Styled.img 
    `
    position: absolute;
width: 50px;
height: 27px;
left: 55px;
top: 530px;

    `

const Banner1 = Styled.img 
    `
    position: absolute;
width: 11.25rem;
height: 4em;
left: 2.5em;
top: 14.7em;
    `

const Banner2 = Styled.img 
    `
  position: absolute;
width: 302px;
height: 69px;
left: 40px;
top: 310px;

    `

const Banner3 = Styled.img 
    `
    position: absolute;
width: 386.89px;
height: 71px;
left: 40px;
top: 375px;
    `

const IntroText = Styled.div 
`
    position: absolute;
    top: 7rem;
    left: -1rem;
    line-height: 1.5;
    p{
    font-size: 220%;
    }

`
const Work = Styled.img `
    position: absolute;
   width: 391px;
height: 94.9px;
    left: 0px;
    top: 600px;
`

const FC = Styled.img `
position: absolute;
width: 750px;
height: 420px;
left: 10px;
top: 700px;

`

const FCText = Styled.div
`
position: absolute;
top: 795px;
left: 700px;
#text{
    font-size: 20px;
    margin-right: 300px;
}
`

const FCHover = Styled.div
`
position: absolute;
top: 970px;
left: 700px;
.cs{
    font-size: 20px;
}
:hover .AR {
   transform: translateX(30px);
 }
`

const CSArrow1 = Styled.img
`
position: absolute;
top: 0px;
left: 250px;
width: 15.2px;
height: 27.2px;
transition: transform 600ms;
`

const AT = Styled.img `
position: absolute;
width: 710px;
height: 482.26px;
left: 50px;
top: 1150px;
`

const ATText = Styled.div
`
position: absolute;
top: 1255px;
left: 700px;
#text{
    font-size: 20px;
    margin-right: 300px;
}
`
const ATHover = Styled.div
`
position: absolute;
top: 1450px;
left: 700px;
.cs{
    font-size: 20px;
}
:hover .AR {
   transform: translateX(30px);
 }
`
const CSArrow2 = Styled.img
`
position: absolute;
width: 15.2px;
height: 27.2px;
top: 0px;
left: 250px;
transition: transform 600ms;
`

const TW = Styled.img `
position: absolute;
width: 710px;
height: 480px;
left: 50px;
top: 1620px;

`

const TWText = Styled.div
`
position: absolute;
top: 1750px;
left: 700px;
#text{
    font-size: 20px;
    margin-right: 300px;
}
`
const TWHover = Styled.div
`
position: absolute;
top: 1920px;
left: 700px;
.cs{
    
    font-size: 20px;
}
:hover .AR {
   transform: translateX(30px);
 }
`
const CSArrow3 = Styled.img
`
position: relative;
width: 15.2px;
height: 27.2px;
top: -40px;
left: 250px;
transition: transform 600ms;
`
const About = Styled.img
    `
position: absolute;
width: 216.26px;
height: 84.66px;
left: 53px;
top: 2100px;
    `
const Picture = Styled.img
    `
    position: absolute;
    width: 392px;
    height: 423px;
    left: 800px;
    top: 2200px;
    z-index: 0;
    margin: 0;
    `

const AboutText = Styled.div
`
    position: absolute;
    top: 2200px;
    margin-left: -60px;
    margin-right: 480px;
    ul{
        margin-left: 85px;
        margin-bottom: 20px;
        line-height: 1.5;
        li{
        font-size: 1.5em;
        margin-right: 150px;
        }
    }

`
const AboutText2 =Styled.div
`
position: absolute;
top: 2620px;
margin-left: -60px;
margin-right: 160px;

`
const Contact = Styled.img
    `
    position: absolute;
    width: 348px;
    height: 115px;
    left: 49px;
    top: 2850px;
    `

const ArrowImgUp = Styled.img 
    `
    position: absolute;
    left: 72px;
    top: 3400px;
    `

const ContactText = Styled.div
`
    position: absolute;
    margin-left: -60px;
    font-size: 19px;
    top: 3000px;
    margin-right: 240px;
    #mail{
        margin-left: 150px;
        margin-top: 70px;
    }
    #linkedin{
        margin-left: 150px;
        margin-top: 45px;

    }
    #resume{
        margin-left: 150px;
        margin-top: 45px;

    }

`

const MailIcon = Styled.img
`
position: absolute;
width: 40px;
height: 40px;
left: 85px;
top: 125px;

`

const LinkedinIcon = Styled.img
`
position: absolute;
width: 31px;
height: 31px;
left: 90px;
top: 200px;
`

const ResumeIcon = Styled.img
`
position: absolute;
width: 38px;
height: 38px;
left: 85px;
top: 270px;
`