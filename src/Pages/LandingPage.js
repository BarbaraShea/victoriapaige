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
// import { IoIosArrowUp, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import LetsTalk from '../images/LetsTalk.png';
import ArrowUp from '../images/ArrowUp.png';
import Navbar from "../Components/Navbar";
import CSA from "../images/CaseStudyArrow.png";
import mail from "../images/email.png";
import linkedin from "../images/linkedin.png";

const LandingPage = () => {
    return (
        <>
        <Navbar/>
        <IntroHeaderContainer>
            <Intro src={Hello} alt='Hello' id="intro"/>
        </IntroHeaderContainer>
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
    <Work src={WorkImg} alt='Work Samples' id="work"/>
    <FC src={ForestryCamp}/>
    <FCText>
    <p><strong> Forestry Camp </strong> </p>
    <p id="text"> Rebranding and refunctioning Forestry Camp’s restaurant website and reservation system.</p>
    </FCText>
    <NavLink to='/Forestrycamp'>
    <CSArrow1 src={CSA}/>
    </NavLink>
     <AT src={Alltrails}/>
    <ATText>
    <p><strong> Alltrails </strong> </p>
    <p id="text"> Expanding equity to the outdoors by adding inclusivity, accessibility, and safety features to the Alltrails app. </p>
    </ATText>
    <NavLink to='/Alltrails'>
    <CSArrow2 src={CSA}/>
    </NavLink>
    <TW src={TimeWells}/>
    <TWText>
    <p><strong> Timewells </strong> </p>
    <p id="text"> Providing a sense of modernity, safety, and comfort for an innovative new travel company. </p>
    </TWText>
    <NavLink to='/Timewells'>
    <CSArrow3 src={CSA}/>
    </NavLink>
    <About src={AboutImg} alt='About' id="about"/> 
    <Picture src={ProfilePic} alt='Profile' />
    <AboutText>
        <p class="margin"> I'm Victoria Bryant, <strong> a produce and brand designer </strong> located in the mountains of Asheville, North Carolina.</p>
        <p class="margin"> I was a career public school educator who <strong> specialized in behavior analysis of high-risk students. </strong> Through working with them, their teachers, and their families, I gained three major skillsets:</p>
        <ul>
            <li> I understand, empathize with, and communicate openly and kindly with people from all walks of life.</li>
            <li> I'm regularly able to present my thought processes in an easily understandable way.</li>
            <li> An innant balancer by nature, I stay inherently unflappable in high-stess situations.</li>
        </ul>
        <p> I utlize these skills and my art + design background to create digital experiences that combine the power of methodology, research, empathy, and an "it's worth a try" mentality. </p> 
        <p> A maker and storyteller in my spare time, you can often find me reading, writing, flying kites at the top of hikes, or eating my way through my excessive cookbook collection. </p>
    </AboutText>
    <Contact src={LetsTalk} alt='Contact' id="contact"/>
    <ContactText>
    <p> Interested in working together or just want to see adorable pictures of my dogs? You can find my contact information below.<strong> Let's get into it. </strong> </p>
    <p id="mail"><a href="mailto:v.paige.bryant@gmail.com" >v.paige.bryant@gmail.com<MailIcon src={mail}/></a></p>
    <p id="linkedin"><a href="https://www.linkedin.com/in/victoria-bryant-1a153b20b/">Victoria Bryant<LinkedinIcon src={linkedin}/></a></p>
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

const IntroHeaderContainer = Styled.div
    `
    display: block;
    align-items: left;
    justify-content: left;
`

const Intro = Styled.img
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
const Work = Styled.img `
    position: absolute;
    width: 312px;
    height: 75px;
    left: 0px;
    top: 550px;
`

const FC = Styled.img `
position: absolute;
width: 600px;
height: 336px;
left: 70px;
top: 650px;

`

const FCText = Styled.div
`
position: absolute;
top: 715px;
left: 700px;
font-size: 19px;
#text{
    font-size: 16px;
    margin-right: 200px;
}
`

const CSArrow1 = Styled.img
`
position: absolute;
width: 160px;
height: 27px;
left: 700px;
top: 880px;

`

const AT = Styled.img `
position: absolute;
width: 570px;
height: 385px;
left: 100px;
top: 1000px;

`

const ATText = Styled.div
`
position: absolute;
top: 1105px;
left: 700px;
font-size: 19px;
#text{
    font-size: 16px;
    margin-right: 200px;
}
`

const CSArrow2 = Styled.img
`
position: absolute;
width: 160px;
height: 27px;
left: 700px;
top: 1280px;

`

const TW = Styled.img `
position: absolute;
width: 570px;
height: 385px;
left: 100px;
top: 1350px;

`

const TWText = Styled.div
`
position: absolute;
top: 1455px;
left: 700px;
font-size: 19px;
#text{
    font-size: 16px;
    margin-right: 200px;
}
`

const CSArrow3 = Styled.img
`
position: absolute;
width: 160px;
height: 27px;
left: 700px;
top: 1630px;
`
const About = Styled.img
    `
position: absolute;
width: 172px;
height: 67px;
left: 53px;
top: 1760px;
    `
const Picture = Styled.img
    `
    position: absolute;
    width: 313px;
    height: 338px;
    left: 600px;
    top: 1850px;
    `

const AboutText = Styled.div
`
    position: absolute;
    font-size: 19px;
    top: 1860px;
    ul{
        margin-left: 20px;
        margin-right: 500px;
        margin-bottom: 20px;
    }
    .margin{
        margin-right: 500px;
    }

`
const Contact = Styled.img
    `
    position: absolute;
    width: 278px;
    height: 92px;
    left: 49px;
    top: 2350px;
    `

const ArrowImgUp = Styled.img 
    `
    position: absolute;
    left: 72px;
    top: 2800px;
    `

const ContactText = Styled.div
`
 position: absolute;
    font-size: 19px;
    top: 2500px;
    margin-right: 240px;
    #mail{
        margin-left: 150px;
        margin-top: 45px;
    }
    #linkedin{
        margin-left: 150px;
        margin-top: 40px;

    }

`

const MailIcon = Styled.img
`
position: absolute;
width: 40px;
height: 40px;
left: 85px;
top: 85px;

`

const LinkedinIcon = Styled.img
`
position: absolute;
width: 31px;
height: 31px;
left: 90px;
top: 150px;
`