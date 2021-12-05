import React from 'react'
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import Arrow from '../images/Shape.png'
import Hello from '../images/Helllo.png';
import JFBanner from '../images/joy-banner.png';
import HCBanner from '../images/human-banner.png';
import ADBanner from '../images/surprise-banner.png';
import WorkImg from '../images/Work.png';
import Aloft from '../images/AloftOpener.png';
import ForestryCamp from '../images/FCLanding.png';
import Timewells from '../images/TWLanding.png';
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
import Navbar from "../Components/Navbar"
import Hello2 from '../images/HelloImVictoria.png';
import LogoNav from '../Components/LandingLogoNav'
import FCMobile from '../images/FCMobile.png';
import ATMobile from '../images/ATMobile.png';
import TWMobile from '../images/TWMobile.png';
import AMobile from '../images/AMobile.png';

const LandingPage = () => {
    return (
        <>
        <LogoNav/>
        <Navbar/>
        <IntroHeaderContainer>
            <Intro src={Hello} alt='Hello' id="intro"/>
            <MobileIntro src={Hello2} alt='Hello' id="intro"/>
        </IntroHeaderContainer>
        <IntroText>
            <p> Utilizing ten years of my background working as a behavior analyst and special educator, I create</p>
        </IntroText>
            <BannerCont>
                <Banner1 src={JFBanner}/>
                <Banner2 src={HCBanner}/>
                <Banner3 src={ADBanner}/>
            </BannerCont>
        <IntroText>
            <p> digital products. </p>
        </IntroText>
        {/* Nav Arrow */}
        <Link class="arrow" activeClass="active" to="work" spy={true} smooth={true} offset={-70} duration={500}><ArrowImg src={Arrow}/></Link>
        {/* Work Header */}
        <HeaderContainer>
            <Header src={WorkImg} alt='Work Samples' id="work"/>
        </HeaderContainer>
        {/* Work Section */}
        <NavLink to='/Aloft'>
        <ProjectContainer>
            <ProjectImg className="landing-image" src={Aloft}/>
            <ProjectTextCont>
                <ProjectTextCont2>
                    <p><strong> Aloft </strong> </p>
                    <p id="text"> Easing the process of booking an aerial class and the storage + organization of training notes in this app.</p>
                    <Hover>
                        <p className="cs"><strong>View Case Study</strong></p>
                        <CSArrow className="AR" src={ArrowR}/>
                    </Hover>
                </ProjectTextCont2>
            </ProjectTextCont>
        </ProjectContainer>
        <ProjectMobile src={AMobile}/>
        </NavLink>
        <NavLink to='/Forestrycamp'>
        <ProjectContainer>
            <ProjectImg className="landing-image" src={ForestryCamp}/>
            <ProjectTextCont>
                <ProjectTextCont2>
                    <p><strong> Forestry Camp </strong> </p>
                    <p id="text"> Rebranding and refunctioning Forestry Camp’s restaurant website and reservation system.</p>
                    <Hover>
                        <p className="cs"><strong>View Case Study</strong></p>
                        <CSArrow className="AR" src={ArrowR}/>
                    </Hover>
                </ProjectTextCont2>
            </ProjectTextCont>
        </ProjectContainer>
        <ProjectMobile src={FCMobile}/>
        </NavLink>
         <NavLink to='/Alltrails'>
        <ProjectContainer>
            <ProjectImg className="landing-image" src={Alltrails}/>
            <ProjectTextCont>
                <ProjectTextCont2>
                    <p><strong> Alltrails </strong> </p>
                    <p id="text"> Expanding equity to the outdoors by adding inclusivity, accessibility, and safety features to the Alltrails app. </p>
                    <Hover>
                        <p className="cs"><strong>View Case Study</strong></p>
                        <CSArrow className="AR" src={ArrowR}/>
                    </Hover>
                </ProjectTextCont2>
            </ProjectTextCont>
        </ProjectContainer>
        <ProjectMobile src={ATMobile}/>
        </NavLink>
         <NavLink to='/Timewells'>
        <ProjectContainer>
            <ProjectImg className="landing-image" src={Timewells}/>
            <ProjectTextCont>
                <ProjectTextCont2>
                    <p><strong> Timewells </strong> </p>
                    <p id="text"> Providing a sense of modernity, safety, and comfort for an innovative new travel company. </p>
                    <Hover>
                        <p className="cs"><strong>View Case Study</strong></p>
                        <CSArrow className="AR" src={ArrowR}/>
                    </Hover>
                </ProjectTextCont2>
            </ProjectTextCont>
        </ProjectContainer>
        <ProjectMobile src={TWMobile}/>
        </NavLink>
        {/* About */}
    <HeaderContainer>
        <Header src={AboutImg} alt='About' id="about"/> 
    </HeaderContainer>
    <AboutCont>
    <AboutText>
        <p> I'm Victoria Bryant, <strong>a digital experience designer </strong> located in the mountains of Asheville, North Carolina.</p>
        <p> I was a career public school educator who <strong> specialized in behavior research + analysis of high-risk students with disabilities. </strong> Through working with them, their teachers, and their families, I gained three major skillsets:</p>
        <ul>
            <li> I understand, empathize with, and communicate openly and kindly with people from all walks of life.</li>
            <li> I'm regularly able to present my thought processes in an easily understandable way.</li>
            <li> An innate balancer by nature, I stay inherently unflappable in high-stess situations.</li>
        </ul>
    </AboutText>
    <Picture1 src={ProfilePic} alt='Profile' />
    </AboutCont>
    <AboutText2>
    <p> I utilize these skills and my art + design background to create digital experiences that combine the power of methodology, research, empathy, and an "it's worth a try" mentality. </p> 
    <p> A maker and storyteller in my spare time, you can often find me reading, writing, flying kites at the top of hikes, or eating my way through my excessive cookbook collection. </p>
    </AboutText2>
    {/* Contact Section */}
    <HeaderContainer>
    <Header src={LetsTalk} alt='Contact' id="contact"/>
    </HeaderContainer>
    <AboutText2>
    <p> Interested in working together or just want to see adorable pictures of my dogs? You can find my contact information below.<strong> Let's get into it. </strong> </p>
    </AboutText2>
    <ContactIconContainer>
    <IconContainer>
    <p id="mail"><a href="mailto:v.paige.bryant@gmail.com"><MailIcon src={mail}/></a></p>
    <p id="mail"><a href="mailto:v.paige.bryant@gmail.com">v.paige.bryant@gmail.com</a></p>
    </IconContainer>
    <IconContainer>
    <p id="linkedin"><a href="https://www.linkedin.com/in/victoria-bryant-1a153b20b/" target="_blank"><LinkedinIcon src={linkedin}/></a></p>
    <p id="linkedin"><a href="https://www.linkedin.com/in/victoria-bryant-1a153b20b/" target="_blank">Victoria Bryant</a></p>
    </IconContainer>
    <IconContainer>
    <p id="resume"><a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:d0139579-441e-43f2-a15c-8309f4e64f31" target="_blank"><ResumeIcon src={Resume}/></a></p>
    <p id="resume"><a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:d0139579-441e-43f2-a15c-8309f4e64f31" target="_blank">Resumé</a></p>
    </IconContainer>
    </ContactIconContainer>
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
}

export default LandingPage

const IntroHeaderContainer = Styled.div
`
margin-top: 4.5%;
margin-left: 4.5%;
`
const Intro = Styled.img
`
max-width: 57rem;
width: 100%;
height: auto;
@media only screen and (max-width: 1100px){
        display: none;
    }
`
const MobileIntro = Styled.img
`
max-width: 23rem;
width: 100%;
height: auto;
display: none;
@media only screen and (max-width: 1100px){
        display: block;
    }
`

const HeaderContainer = Styled.div
`
  position: static;
  display: flex;
  margin-top: 4.5%;
  margin-left: 4.5%;
  flex-direction: column;
  @media only screen and (max-width: 1200px){
        width: 70%;
        }
`

const Header = Styled.img
`
max-width: 21.4rem;
width: 100%;
height: auto;
`
const BannerCont = Styled.div
`
display: flex;
flex-direction: column;
align-content: space-between;
margin-left: 4%;
row-gap: 1.5rem;
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
flex-direction: column;
max-width: 14%;
height: auto;
@media only screen and (max-width: 930px) {
max-width: 8rem;
height: auto;
`
const Banner2 = Styled.img 
`
flex-direction: column;
max-width: 24%;
height: auto;
@media only screen and (max-width: 930px) {
max-width: 13.5rem;
height: auto;

`


const Banner3 = Styled.img 
`
flex-direction: column;
max-width: 30%;
height: auto;
@media only screen and (max-width: 930px) {
max-width: 17rem;
height: auto;

`

const IntroText = Styled.div 
`
position: static;
max-width: 64rem;
margin-left: 4.5%;
margin-right: 4%;
p {
    font-size: 2rem;
    }
@media only screen and (max-width: 1350px){
        width: 90%;
        p {
            font-size: 1.5rem;
        }
    }
`
const ArrowImg = Styled.img 
`
margin-left: 4.5%;
margin-top: 1rem;
margin-bottom: 1rem;
max-width: 1.8rem;
`
// work section

const ProjectContainer = Styled.div
`
display: flex;
flex-direction: row;
max-width: 1350px;
margin-top: 3rem;
column-gap: 3rem;
align-items: center;
@media only screen and (max-width: 1350px){
        width: 90%;
        }
@media only screen and (max-width: 1000px){
        display: none;
        }
`

const ProjectTextCont = Styled.div
`
max-width: 18rem;
`

const ProjectTextCont2 = Styled.div
`
display: flex;
flex-direction: column;
p {
    font-size: 1.2rem;
}
`

const ProjectImg = Styled.img
`
max-width: 47.5rem;
width: 100%;
height: auto;
flex-direction: row;
margin-left: 4.5%;
transition: transform 500ms;
 :hover {
transform: scale(1.05,1.05);
@media only screen and (max-width: 1350px){
        width: 70%;
`

const Hover = Styled.div
`
display: flex;
align-items: center;
justify-content: flex-start;
column-gap: 1rem;
padding-top: 1rem;
:hover .AR {
transform: translateX(30px);
}
@media only screen and (max-width: 1300px) {
max-width: 90vw;

`

const CSArrow = Styled.img
`
max-width: 1.5rem;
height: 2rem;
transition: transform 600ms;
`
const ProjectMobile = Styled.img
`
max-width: 21.3rem;
width: 100%;
height: auto;
margin-left: 4.5%;
margin-top: 3rem;
display: none;
@media only screen and (max-width: 1000px){
        display: block;
        align-items: center;
        width: 95%;

`
//about

const AboutCont = Styled.div
`
display: flex;
margin-left: 4.5%;
flex-direction: row;
column-gap: 2rem;
@media only screen and (max-width: 1200px){
        flex-wrap: wrap-reverse;
    }
`

const AboutText = Styled.div
`
flex-direction: row;
max-width: 41rem;
p {
    font-size: 1.5rem;
}
li {
    font-size: 1.5rem;
    margin-left: 4.5%;
    margin-bottom: 1rem;
}
ul {
    margin-top: 2rem;
}
@media only screen and (max-width: 1200px){
        margin-right: 2rem;
        p {
            font-size: 1rem;
        }
        li {
            font-size: 1rem;
        }
    }
`
const Picture1 = Styled.img
`
max-width: 24.5rem;
height: 26rem;
@media only screen and (max-width: 375px){
    max-width: 95%;
    height: 50%;
}
`
const AboutText2 = Styled.div
`
max-width: 67rem;
margin-left: 4.5%;
margin-right: 3%;
`


const ArrowImgUp = Styled.img 
`
margin-left: 4.5%;
margin-bottom: 3rem;
`


const ContactIconContainer = Styled.div
`
margin-left: 4.5%;
display: flex;
flex-direction: column;
`
const IconContainer = Styled.div
`
display: flex;
`
const MailIcon = Styled.img
`
padding-right: 30px;
`
const LinkedinIcon = Styled.img
`
padding-right: 34px;
padding-left: 0.3rem;
`

const ResumeIcon = Styled.img
`
padding-right: 24px;
`