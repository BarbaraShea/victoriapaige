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
        <OverallLandingContainer>
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
        {/* Nav Arrow */}
        </ LandingContainer>
        <Link class="arrow" activeClass="active" to="work" spy={true} smooth={true} offset={-70} duration={500}><ArrowImg src={Arrow}/></Link>
        {/* Forestry Project */}
        {/* Work Header */}
        <ProjectHeaderContainer>
        <Work src={WorkImg} alt='Work Samples' id="work"/>
        </ProjectHeaderContainer>
        {/* FC Image */}
        <ProjectContainer>
            <NavLink to='/Forestrycamp'>
                <FC className="landing-image" src={ForestryCamp}/>
            <FCText>
                <p><strong> Forestry Camp </strong> </p>
                <p id="text"> Rebranding and refunctioning Forestry Camp’s restaurant website and reservation system.</p>
                <FCHover>
                    <p className="cs"><strong>See Case Study</strong></p>
                    <CSArrow1 className="AR" src={ArrowR}/>
                </FCHover>
            </FCText>
            </NavLink>
        </ProjectContainer>
        {/* All Trails Project */}
        <ProjectContainer>
            <NavLink to='/Alltrails'>
            <AT className="landing-image" src={Alltrails}/>
        <ATText>
            <p><strong> Alltrails </strong> </p>
            <p id="text"> Expanding equity to the outdoors by adding inclusivity, accessibility, and safety features to the Alltrails app. </p>
            <ATHover>
                <p className="cs"><strong>See Case Study</strong></p>
                <CSArrow2 className="AR" src={ArrowR}/>
            </ATHover>
        </ATText>
    </NavLink>
    </ProjectContainer>
    {/* TimeWells */}
    <ProjectContainer>
    <NavLink to='/Timewells'>
        <TW className="landing-image" src={TimeWells}/>
        <TWText>
            <p><strong> Timewells </strong> </p>
            <p id="text"> Providing a sense of modernity, safety, and comfort for an innovative new travel company. </p>
        <TWHover>
            <p className="cs"><strong>See Case Study</strong></p>
            <CSArrow3 className="AR" src={ArrowR}/>
        </TWHover>
        </TWText>
    </NavLink>
    </ProjectContainer>
    <About src={AboutImg} alt='About' id="about"/> 
    <AboutContainer>
    <Picture1 src={ProfilePic} alt='Profile' />
    <AboutText>
        <p> I'm Victoria Bryant, <strong> a product and brand designer </strong> located in the mountains of Asheville, North Carolina.</p>
        <p> I was a career public school educator who <strong> specialized in behavior analysis of high-risk students. </strong> Through working with them, their teachers, and their families, I gained three major skillsets:</p>
        <ul>
            <li> I understand, empathize with, and communicate openly and kindly with people from all walks of life.</li>
            <li> I'm regularly able to present my thought processes in an easily understandable way.</li>
            <li> An innant balancer by nature, I stay inherently unflappable in high-stess situations.</li>
        </ul>
    </AboutText>
    <Picture2 src={ProfilePic} alt='Profile' />
    </AboutContainer>
    <AboutText2>
    <p> I utilize these skills and my art + design background to create digital experiences that combine the power of methodology, research, empathy, and an "it's worth a try" mentality. </p> 
    <p> A maker and storyteller in my spare time, you can often find me reading, writing, flying kites at the top of hikes, or eating my way through my excessive cookbook collection. </p>
    </AboutText2>
    </OverallLandingContainer>
    )
}

export default LandingPage2

const OverallLandingContainer = Styled.div
`
padding: 2rem 3rem;
overflow: hidden;  

`
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
max-width: 20vw;
@media only screen and (max-width: 1300px) {
max-width: 90vw;
}
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
padding: 3rem 0;
`
const ProjectHeaderContainer = Styled.div
`
display: flex;
flex-direction: column;
@media only screen and (max-width: 1300px) {
text-align: center;
align-items: center;
}
`
const Work = Styled.img 
`
max-height: 100vh;
max-width: 20vw;
@media only screen and (max-width: 1300px) {
max-width: 90vw;
}
`
const ProjectContainer = Styled.div
`
// position: absolute;
display: flex;
// flex-direction: row;
// justify-content: center;
// max-height: 100vh;
// max-width: 100vw;
// @media only screen and (max-width: 1300px) {

// }

`
const FC = Styled.img 
`
display: flex;
align-items: center;
max-height: 100vh;
max-width: 100vw;
position: relative;

@media only screen and (max-width: 1300px) {
max-width: 80vw;
right: 1.75rem;
// overflow: hidden;
padding: 2rem 0;

`

const FCText = Styled.div
`
display: flex;
flex-direction: column;
position: absolute;
align-items: right;
right: 27vw;
max-width: 20vw;
top: 54rem;
@media only screen and (max-width: 1300px) {
min-width: 100vw;
min-height: auto;
align-items: center;
justify-content: center;
padding-top: 10rem;
left: .15rem;
text-align: center;
}

`

const FCHover = Styled.div
`
display: flex;
justify-content: space-between;
padding-top: 2rem;
:hover .AR {
transform: translateX(30px);
}
@media only screen and (max-width: 1300px) {
max-width: 90vw;
align-items: center;
text-align: center;
justify-content: center;
`

const CSArrow1 = Styled.img
`
padding: 0 2rem;
align-items: center;
transition: transform 600ms;
`

const AT = Styled.img 
`
display: flex;
align-items: center;
max-height: 100vh;
max-width: 100vw;
position: relative;
padding: 0 2.65rem;
@media only screen and (max-width: 1300px) {
max-width: 80vw;
right: 1rem;
overflow: hidden;
padding: 12rem 0;
`

const ATText = Styled.div
`
display: flex;
flex-direction: column;
position: absolute;
align-items: right;
right: 27vw;
max-width: 20vw;
top: 82rem;
@media only screen and (max-width: 1300px) {
min-width: 90vw;
min-height: auto;
align-items: center;
justify-content: center;
padding-top: 10rem;
left: .15rem;
text-align: center;
}
`
const ATHover = Styled.div
`
display: flex;
justify-content: space-between;
padding-top: 2rem;
:hover .AR {
transform: translateX(30px);
}
@media only screen and (max-width: 1300px) {
max-width: 100vw;
align-items: center;
text-align: center;
justify-content: center;
`
const CSArrow2 = Styled.img
`
padding: 0 2rem;
align-items: center;
transition: transform 600ms;
`

const TW = Styled.img 
`
display: flex;
align-items: center;
max-height: 100vh;
max-width: 100vw;
position: relative;
padding: 0 2.65rem;
@media only screen and (max-width: 1300px) {
max-width: 100vw;
padding-top: 5rem;
right: 3.5rem;
`

const TWText = Styled.div
`
display: flex;
flex-direction: column;
position: absolute;
align-items: right;
right: 27vw;
max-width: 20vw;
top: 114rem;
@media only screen and (max-width: 1300px) {
min-width: 100vw;
min-height: auto;
align-items: center;
justify-content: center;
padding-top: 7rem;
left: .15rem;
text-align: center;
}
`
const TWHover = Styled.div
`
display: flex;
justify-content: space-between;
padding-top: 2rem;
:hover .AR {
transform: translateX(30px);
}
@media only screen and (max-width: 1300px) {
max-width: 100vw;
align-items: center;
text-align: center;
justify-content: center;
`
const CSArrow3 = Styled.img
`
padding: 0 2rem;
align-items: center;
transition: transform 600ms;
`
const AboutContainer = Styled.div
`
display: flex;
flex-direction: row;
align-items: left;
@media only screen and (max-width: 1300px) {
    flex-direction: column;
    max-width: 100vw;
    align-items: center;
    text-align: left;
    justify-content: center;
    font-size: 1rem;
`
const About = Styled.img
`
max-height: 100vh;
max-width: 15vw;
@media only screen and (max-width: 1300px) {
max-width: 90vw;
padding-top: 15rem;
`
const Picture1 = Styled.img
`
display:none;
max-height: 50vh;
max-width: 80vw;
@media only screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    
}
`
const Picture2 = Styled.img
`
max-height: 100vh;
max-width: 20vw;
@media only screen and (max-width: 1300px) {
display: block;
min-width: 100vw;
max-height: 50vh;
display: none;
`

const AboutText = Styled.div
`
max-width: 60vw;
max-height: 100vh;
@media only screen and (max-width: 1300px) {
    max-width: 100vw;
},
p {
    line-height: 1.5;
},
ul {
    margin-left: 3rem;
    padding-top: 2rem;
@media only screen and (max-width: 1300px) {
    margin-left: 0rem;
    }
},
li {
    list-style: inside;
    font-size: 1.45rem;
    line-height: 2;
@media only screen and (max-width: 1300px) {
    line-height: 1;
    padding-top: 1rem;
}
`
const AboutText2 = Styled.div
`
padding-top: 2rem;
max-width: 85vw;
p {
    padding: 1rem 0;
    @media only screen and (max-width: 1300px) {
    max-width: 100vw;
    padding-top: 5rem;
    padding-bottom: 0rem;
    }
},
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