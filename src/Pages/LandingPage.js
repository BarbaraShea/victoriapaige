import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
// import { IoIosArrowDown } from "react-icons/io";
import Arrow from '../images/Shape.png'
import Hello from '../images/HelloImVictoria.png';
import JFBanner from '../images/JFbanner.png';
import HCBanner from '../images/HCBanner.png';
import ADBanner from '../images/ADbanner.png';
import WorkImg from '../images/Work.png';
import ForestryCamp from '../images/ForestryCampOpener.png';
import TimeWells from '../images/TimewellsOpener.png';
import AllTrails from '../images/AllTrailsOpener.png';
import FCO from '../images/FCoverlay.png';
// import TWO from '../images/TWoverlay.png';
import ATO from '../images/AToverlay.png';
import AboutImg from '../images/About.png';
import ProfilePic from '../images/ProfilePic.png';
import { IoIosArrowUp, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import LetsTalk from '../images/LetsTalk.png';
import ArrowUp from '../images/ArrowUp.png';
import Navbar from "../Components/Navbar";

const LandingPage = () => {
    return (
        <>
        <Navbar/>
        <Landing id="intro" class="landing">
        <IntroHeaderContainer>
            <Intro src={Hello} alt='Hello'/>
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
        </Landing>  

             <StyledWork id="work">
         <WorkHeaderContainer>
            <Work src={WorkImg} alt='Work Samples'/>
        </WorkHeaderContainer> 
        <Row>     
            <Col size={2}> 
                <NavLink to="/Timewells">
                <TW src={TimeWells} alt="Project1" to="/Timewells" />
                {/* <TWoverlay className="overlay-tw" src={TWO}/> */}
                </NavLink>
             </Col>
            <Col size={2}> 
                <NavLink to="ForestryCamp">
                <FCcont>  
                    <FC src={ForestryCamp} alt="Project2"/>
                    <FCoverlay className="overlay-fc" src={FCO}/>
                </FCcont>
                </NavLink>
            </Col>
        </Row>
        <Row>
            <Col size={1}> 
            <NavLink to="AllTrails">
                 <ATcont>
                    <AT src={AllTrails} alt="Project3"/>
                    <AToverlay className="overlay-at" src={ATO}/>
                </ATcont>
            </NavLink>
            </Col>
            <Col size={1}> 
            </Col>
        </Row>
        </StyledWork>
         <StyledAbout id="about">
        <AboutHeaderContainer>
            <About src={AboutImg} alt='About'/>
        </AboutHeaderContainer>     
        <PicContainer>
            <Picture src={ProfilePic} alt='Profile' />
       </PicContainer>      
        <p> I'm Victoria Bryant, <strong> a produce and brand designer </strong> located in the mountains of Asheville, North Carolina.</p>
        <p> I was a career public school educator who <strong> specialized in behavior analysis of high-risk students. </strong> Through working with them, their teachers, and their families, I gained three major skillsets:</p>
       
        <AboutList>
        <ul>
        <li> I understand, empathize with, and communicate openly and kindly with people from all walks of life.</li>
        <li> I'm regularly able to present my thought processes in an easily understandable way.</li>
        <li> An innant balancer by nature, I stay inherently unflappable in high-stess situations.</li>
         </ul>
        </AboutList>
        <p> I utlize these skills and my art + design background to create digital experiences that combine the power of methodology, research, empathy, and an "it's worth a try" mentality. </p> 
        <p> A maker and storyteller in my spare time, you can often find me reading, writing, flying kites at the top of hikes, or eating my way through my excessive cookbook collection. </p>
        </StyledAbout>

          <StyledContact id="contact">
        <ContactHeaderContainer>
            <Contact src={LetsTalk} alt='Contact'/>
        </ContactHeaderContainer>        <p> Interested in working together or just want to see adorable pictures of my dogs? You can find my contact information below.<strong> Let's get into it. </strong> </p>
        <ContactRow>
        <ContactCol size={2}>
        <a href="mailto:v.paige.bryant@gmail.com"><IoMdMail/></a>
        <a href="https://www.linkedin.com/in/victoria-bryant-1a153b20b/"><IoLogoLinkedin/></a>
        </ContactCol>
        </ContactRow>
           <Link 
    activeClass="active"
    to="intro"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    ><ArrowImgUp src={ArrowUp}/></Link> 
        </StyledContact> 
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
const StyledWork = Styled.div
    `
    min-height: 145vh;
    right-margin: 90rem;
    display: block;
    align-items: left;
    justify-content: center;
    line-height: 1.2;
 
`

const WorkHeaderContainer = Styled.div
    `
    display: flex;
    align-items: left;
    justify-content: left;
`

const Work = Styled.img `
    position: absolute;
    width: 312px;
    height: 75px;
    left: 0px;
    top: 750px;
`

const Row = Styled.div `
    display: block; 
`

const Col = Styled.div `
display: block;
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
    left: 257px;
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
    left: 263px;
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

// const media = {
//     xs: (styles) => `
//     @media only screen and (max-width:480px) {
//         ${styles}
//     }`


const StyledAbout = Styled.div
    `
    min-height: 95vh;
    display: block;
    align-items: left;
    justify-content: center;
    line-height: 1.4;
    font-size: 20px;

`
const AboutList = Styled.div
`
    margin-left: 20px;
    margin-bottom: 20px;
`

const AboutHeaderContainer = Styled.div
    `
    display: flex;
    align-items: left;
    justify-content: left;
    margin-bottom: 10px;
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

const About = Styled.img
    `
    width: 172px;
    height: 67px;
    left: 53px;
    margin-bottom: 20px;
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
const ContactRow = Styled.div `
    display: flex; 
`

const ContactCol = Styled.div `
    flex: ${(props) => props.size};
`

const ContactHeaderContainer = Styled.div
    `
    display: flex;
    align-items: left;
    justify-content: left;
`

const Contact = Styled.img
    `
    width: 278px;
    height: 92px;
    margin-bottom: 35px;
    `

const ArrowImgUp = Styled.img 
    `
    width: 40px;
    height; 40px;
    margin-top: 10px;
    `

