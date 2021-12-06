import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import TWHeader from '../images/TimewellsHeader.png';
import MobileNav from "../Components/MobileNavCS";
import Nav from "../Components/Nav";
import LogoNav from "../Components/LogoNav.js";
import TimewellsImg from '../images/Timewells.png';
import Return from '../images/Return.png';
import ProblemHeader from '../images/Problem.png';
import ResearchHeader from '../images/ResearchHeader.png';
import Solution from '../images/SolutionHeader.png';
import TestCircle from '../images/TestsCircle.png';
import FollowUp from '../images/FollowUp.png';
import Dark1 from  '../images/DarkOne.png';
import Dark2 from  '../images/DarkTwo.png';
import PersPics from '../images/PersonapPics.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import White4 from '../images/White4.png';
import Gap from '../images/GapHeader.png';
import TWLogo from '../images/TWLogo.png';
import Rect from '../images/FollowUpRect.png';
import Lady from '../images/LadyPic.png';
import Man from '../images/ManPic.png';
import GapBanner from '../images/BrandBanner.png';
import TWMockup from '../images/GIFTimewells.png';
import TWGIF from '../images/TWGif.gif';
import Method from '../images/MethodHeader.png';
import UserPersona from '../images/SamPersona.png';
import TaskFlow from '../images/TaskFlowTW.png';
import UserFlow from '../images/UserflowTW.png';
import Sketch from '../images/SketchTW.png';
import Wireframe from '../images/WireframeTW.png';
import BrandUI from '../images/BrandUITW.png';
import TestPic1 from '../images/TWTestImg1.png';
import TestPic2 from '../images/TWTestImg2.png';
import TestPic3 from '../images/TWTestImg3.png';
import ProtoBan from '../images/SeeProto.png';
import FollowUpRect from '../images/FollowUpRect.png';


const Timewells2 = () => {
    return (
        <>
        <MobileNav/>
        <LogoNav/>
        <Nav/>
        <TWHeaderContainer id="intro">
                <TW src={TWHeader} i="intro" alt='Timewells Case Study'/>
        </TWHeaderContainer>  
        <TWImage src={TimewellsImg}/>
        <Table>
            <table>
            <tr>
                <td><strong>Overview</strong></td>
                <td>Timewells is a fictional company that recently made time travel fully available to the masses. The company required a desktop website that made finding a booking a trip easy and understandable.</td>
            </tr>
            <tr>
                <td><strong>Timeline</strong></td>
                <td>80 Hours</td>
            </tr>
            <tr>
                <td><strong>Role</strong></td>
                <td>
                <ul>
                    <li>End-to-end product design for an innovative company</li>
                    <li>Branding and logo creation</li>
                    <li>UX writing</li>
                </ul>
                </td>
            </tr>
            </table>
        </Table>
        <HeaderContainer>
             <Header src={ProblemHeader} id="problem"/>
        </HeaderContainer>
        <BulletCont>
            <Number src={Dark1}/>
            <p><strong>Time travel is a total unknown for your average person.</strong><span className="white"><strong> That can feel scary.</strong></span></p>
        </BulletCont>
        <BulletCont>
            <Number src={Dark2}/>
            <p><strong>Customers have to also decide what era to travel in on top of typical travel decisions.</strong><span className= "white"><strong> That can feel overwhelming. </strong></span></p>
        </BulletCont>
        <Text>
        <p>Timewells is offering a unique and brand new product to consumers. The company needs to present a trustworthy and understandable website and booking experience.</p>
        </Text>
        <HeaderContainer>
           <Header src={ResearchHeader} id="research"/>
        </HeaderContainer>
        <Text>
        <p><strong>Assume nothing.</strong></p>
        <p id="para">Talking to users about their motivations and frustrations helped me contextualize and use data-drive decisions for my eventual final product solution. Because as we know, <strong> the designer is not the user.</strong></p>
        </Text>
        <PersonaImg src={PersPics}/>
        <PersonHeaders>
            <Person>
            <p id="chris"><strong>Chris</strong></p>
            <p id="chris-age"> 32 years old </p>
            </Person>
            <Person>
            <p id="holly"><strong>Holly</strong></p>
            <p id="holly-age"> 31 years old </p>
            </Person>
            <Person>
            <p id="taylor"><strong>Taylor</strong></p>
            <p id="taylor-age"> 34 years old </p>
            </Person>
            <Person>
            <p id="sue"><strong>Sue</strong></p>
            <p id="sue-age"> 34 years old </p>
            </Person>
        </PersonHeaders>
         <Text>
        <p id="after"><strong>My interviewees were all well-traveled and adventurous.</strong> </p>
        <p id="last"> I do wish I had more range of age for my initial research.</p>
        </Text>
        <InsightsRectCont>
        <InsightsRect src={Rect}/>
            <InsightsCont2>
                <Thoughts><p><strong> Major Insights </strong></p> </Thoughts>
                <InsightsBulletCont id="insights">
                    <Number src={White1}/>
                    <p className="white"> Users travel to feel outside of their normal day-to-day-self.</p>
                </InsightsBulletCont>
                <InsightsBulletCont id="insights" >
                    <Number src={White2}/>
                    <p className="white">  Users want to be abe to search by style and vibe of trip, not just by location.</p>
                </InsightsBulletCont>
                <InsightsBulletCont id="insights">
                    <Number src={White3}/>
                    <p className="white"> Real reviews and pictures are incredibly important to build trust. </p>
                </InsightsBulletCont>
                 <InsightsBulletCont id="insights">
                    <Number src={White4}/>
                    <p className="white"> Cheap-looking websites are a major turnoff and prohibit purchases. </p>
                </InsightsBulletCont>
            </InsightsCont2>
        </InsightsRectCont>
        <HeaderContainer>
         <GapHeader src={Gap} id="gap" className="gapIMG"/>
        </HeaderContainer>
        <GapCont>
            <LogoImg src={TWLogo}/>
            <PersonImg2 src={Lady}/>
            <PersonImg2 src={Man}/>
        </GapCont>
        <GapText>
        <p> Timewells wants to sell their product, but users want to feel comfortable and confident before dropping a ton of cash on a trip. </p>
        </GapText>
        <HeaderContainer>
            <SolutionHeader src={Solution}/>
        </HeaderContainer>
        <GifCont>
            <SolutionImg src={TWMockup}/>
            <GIF src={TWGIF}/>
        </GifCont>
        <SolutionTextCont>
            <SolutionText>
            <p><strong> A multi-level filter feature </strong> so users can search for trips in myriad ways, depending on their personal inclination.</p>
            </SolutionText>
            <SolutionText>
            <p><strong> An "ask a real traveler" feature </strong> to help simultaneously meet user needs of wanting in-deth information and Timewells' need to build trust in their product.</p>
            </SolutionText>
        </SolutionTextCont>
        <HeaderContainer>
        <Header id="method" src={Method}/>
        </HeaderContainer>
        <MethodText>
            <p id="user-flow-header"><strong>User Persona</strong></p>
        </MethodText>
        <MethodContainer>
            <MethodImg src={UserPersona}/>
            <p id="user-flow-text">I created this to have a cohesive feel of my users when designing. "Would Same find this intuitive?" "Would Same trust this website?" were questions I asked myself regularly.</p>
        </MethodContainer>
        <MethodText>
            <p id="sketches-header"><strong>Task Flow</strong></p>
        </MethodText>
        <MethodContainer>
                <MethodImg src={TaskFlow}/>
                <p id="sketches-text">A graphic representation of the journey a user could make from point A to point B on Timewells' site.</p>
        </MethodContainer>
        <MethodText>
                 <p id="sketches-header"><strong>User Flow</strong></p>
        </MethodText>
        <MethodContainer>
            <MethodImg src={UserFlow}/>
            <p id="wireframe-text"> I needed to figure out all the potential paths Sam might take on the Timewells site. This was an intriguing exercise in <strong> predicting user behavior.</strong></p>
        </MethodContainer>
        <MethodText>
                <p id="style-header"><strong>Sketch</strong></p>
        </MethodText>
         <MethodContainer>
            <MethodImg src={Sketch}/>
            <p id="wireframe-text"> As a pencil-and-paper person, I started sketching wireframes on paper first. <strong>This hekped me figure our visual hierarchy and layout</strong> without being distracted by technology.</p>
        </MethodContainer>
         <MethodText>
                <p id="style-header"><strong>Wireframe Prototype</strong></p>
        </MethodText>
         <MethodContainer>
            <MethodImg src={Wireframe}/>
            <MethodTextCont>
            <p id="wireframe-text"> I designed my first solution and began to test it as a prototype. At this point, the solution made sense to me, but it need to be tested.</p>
            <p id="wireframe-text2"> This wireframe solved the problem of wanting multiple ways to read reviews.</p>       
            </MethodTextCont>
          </MethodContainer>
           <MethodText>
                <p id="style-header"><strong>Branding and UI</strong></p>
        </MethodText>
         <MethodContainer>
            <MethodImg src={BrandUI}/>
            <MethodTextCont>
            <p id="branding-text"> You can't judge a book by its cover, but my users definately judge trustability of websites by how they look. Here are some of the ways I developed Timewells' logo and brand styling. </p>
            <p id="branding-text2"> I wanted a split-analagous color scheme with a bright accent color to underscore <strong>adventure, nature, and excitement.</strong></p>
            </MethodTextCont>
          </MethodContainer>
           <HeaderContainer>
        <TestHeader id="test" src={TestCircle}/>
        </HeaderContainer>
        <Text>
        <p> I had five new users in the target demographic test out the website via a Figma prototype.</p>
        </Text>
         <TestTable>
            <table>
            <tr>
                <td class="table-header"><strong>Wins:</strong></td>
                <td>
                    <ul>
                    <li>5/5 were able to filter a trip based on need.</li>
                    <li>4/5 were able to contact a real traveler for more info.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="table-header"><strong>Edits:</strong></td>
                <td>Overall feedback was that links weren't clear, pictures should be clickable, and more descriptors were needed. Valid.</td>
            </tr>
          
            </table>
        </TestTable>
        <TestImg src={TestPic1}/>
        <TestImg src={TestPic2}/>
        <TestImg src={TestPic3}/>
         <ProtoCont id="proto">
        <div><a href="https://www.figma.com/proto/lARHntk9QL09upIkgVY0VY/Timewells-Priority-Revision?page-id=0%3A1&node-id=272%3A256&viewport=241%2C48%2C0.62&scaling=min-zoom&starting-point-node-id=1%3A2118" target="_blank"> <PrototypeBan src={ProtoBan}/> </a></div>
        </ProtoCont>
            <HeaderContainer>
            <Header id="follow" src={FollowUp}/>
         </HeaderContainer>
        <FollowUpText>
        <p> This was my first experience designing a product from end to end. I learned so
        much about my own work flow and what makes sense to my brain as I moved
        through the process.</p>
        </FollowUpText>   
        <FinalCont>
        <FinalRect src={FollowUpRect}/>
            <FinalCont2>
                <Thoughts><p><strong> Final Thoughts </strong></p> </Thoughts>
                <FinalBulletCont>
                    <W1 src={White1}/>
                    <p className="white"> I had way too many assumptions in my initial interview research. </p>
                </FinalBulletCont>
                <FinalBulletCont>
                    <W2 src={White2}/>
                    <p className="white"> Most of my users wanted to click on pictures rather than text, which allowed fun revisions.</p>
                </FinalBulletCont>
                <FinalBulletCont>
                    <W3 src={White3}/>
                    <p className="white"> My debriefing from usability testing showed some key insights that would have helped with my original design — such as a chat feature!</p>
                </FinalBulletCont>
            </FinalCont2>
        </FinalCont>
        <NavLink to="/"><ReturnImg src={Return}/></NavLink> 
        </>
    )
};

export default Timewells2;

const ProtoCont =Styled.div
`
position: static;
margin-top: 4.5%;
cursor: pointer;
`
const PrototypeBan = Styled.img
`
max-width: 17.5rem;
width: 100%;
height: auto;
margin-left: 1.5rem;
margin-top:2rem;
@media only screen and (max-width: 1200px){
      width: 40%;
      }
`

const TWHeaderContainer = Styled.div
    `
   display: flex;
flex-direction: column;
margin-top: 2%;
margin-left: 4.5%;
margin-right: 4.5%;
margin-bottom: 2%;


`

const TW = Styled.img
    `
height: auto;
width: 100%;
max-width: 30rem;
;
    `

const TWImage = Styled.img
    `
    max-width: 65rem;
    width: 100%;
    height: auto;
    margin-left: 2rem;
    @media only screen and (max-width: 1350px){
        width: 90%;
        margin-left: 1rem;
    }
    `

    const Table = Styled.div
    `
    max-width: 60rem;
    margin-left: 4.5%;
    margin-right: 4.5%;
     ul {
        list-style: none;
    };
    li {
        text-align: left;
    }
    td {
    vertical-align: top;
    padding: 0.625rem;
    font-size: 1.5rem;
    }
    @media only screen and (max-width: 1200px){
        width: 90%;
        td {
            font-size: 1rem;
        }
        li {
            font-size: 1rem;
        }
    }
    }
    `
const HeaderContainer = Styled.div
`
  position: static;
  display: flex;
  margin-top: 4rem;
margin-left: 4.5%;
flex-direction: column;
@media only screen and (max-width: 1200px){
        width: 70%;
}
`

const Header = Styled.img
`
position: static;
max-width: 21.4rem;
width: 100%;
height: auto;
`

const ReturnImg = Styled.img 
    `
    position: static;
    margin-top: 7%;
    margin-left: 3%;
    margin-bottom: 7%;
    max-width: 18.75rem;
    width: 100%;
    height: auto;
    @media only screen and (max-width: 1200px){
        width: 50%;
    }
    `

const BulletCont = Styled.div
`
display: flex;
flex-direction:row;
margin-left: 4.5%;
margin-right: 4.5%;
margin-bottom: 2.5rem;
margin-right: 1.5rem;
margin-top: 3rem;

p{
    margin-left: 2rem;
    max-width: 50rem;
}
.white{
    color: #FFF1EC;
     background-color: #360713;
    }
`

const Number = Styled.img
`
flex-direction: row;
width: 2rem;
height: 2rem;
`
const Text = Styled.div
`position: static;
max-width: 59rem;
width: 100%
height: auto;
margin-left: 4.5%;
margin-right: 4.5%;
margin-top: 1.5rem;
margin-bottom: 1.5rem;
font-size: 1.5rem;
@media only screen and (max-width: 1200px){
        p{
        font-size: 1rem;
        line-height: 1.2;
        margin-top: 0.9rem;
        }
}
`

const PersonaImg = Styled.img
    `
    max-width: 60.5rem;
    width: 100%;
    height: auto;
    margin-left: 4.5%;
    margin-right: 4.5%;
    margin-top: 1rem;
    @media only screen and (max-width: 1350px){
        width: 90%;
        align-items: center;
    }
     @media only screen and (max-width: 375px){
        width: 95%;
        align-items: center;
    }
    `

const PersonHeaders = Styled.div
`
display: flex;
position: static;
margin-left: 3%;
margin-right: 3%;
max-width: 57rem;
width: 100%;
height: auto;
justify-content: space-between;
 @media only screen and (max-width: 1200px){
        width: 98%;
        align-items: center;
        margin-left: 3%;
    }
 @media only screen and (max-width: 375px){
        margin-left: 2%;
        column-gap: 0.8rem;
        display: flex;
        justify-content: flex-start;
 }
`

const Person = Styled.div
`
flex-direction: row;
max-width: 8.8rem;
text-align: center;
`

const InsightsRect = Styled.img
`
display: block;
max-width: 100%;
height: 42rem;
 @media only screen and (max-width: 375px){
        height: 38rem;

    }
`
const InsightsRectCont = Styled.div
`
position: relative;
display: block;
max-width: 65.5rem;
max-height: 40rem;
margin-top: 3rem;
margin-bottom: 2rem;
width: 100%;

`


const InsightsCont2 = Styled.div
`
position: absolute;
width: 76.5%;
height: 83%;
top: 1.5%;
left: 5.7%;
@media only screen and (max-width: 1350px){
    width: 100%;
    top: 5%;
    left: 2%;
}
`

const Thoughts = Styled.div
`
p{
font-size: 2rem;
margin-bottom: 2rem;
margin-left: 0rem;
margin-top: 3rem;
@media only screen and (max-width: 1200px){
font-size: 1.5rem;
margin-top: 3.5%;
}
}
color: #FFF1EC;
`

const InsightsBulletCont = Styled.div
`
display: flex;
flex-direction:row;
margin-left: 4.5%;
margin-bottom: 1.5rem;
margin-right: 1.5rem;
margin-top: 1.5rem;

p{
    margin-left: 2rem;
    max-width: 50rem;
}
.white{
    color: #FFF1EC;
     background-color: #360713;
    }
`

const SolutionHeader = Styled.img
`
max-width: 29rem;
width: 100%;
height: auto;
`

const TestHeader = Styled.img
`
max-width: 29rem;
width: 100%;
height: auto;
`

const GapHeader = Styled.img
`
max-width: 16.7rem;
width: 100%;
height: auto;
`

const GapCont =Styled.div
`
position: static;
display: flex;
justify-content: flex-start;
gap: 60px;
max-width: 67rem;
width: 100%;
height: auto;
@media only screen and (max-width: 600px){
    display: flex;
    justify-content: center;
}
`
const GapText = Styled.div
`
max-width: 67rem;
width: 100%;
height: auto;
margin-left: 4.5%;
margin-right: 4.5%;
`

const LogoImg = Styled.img
 `
    max-width: 14.8rem;
    width: 100%;
    height: auto;
    margin-top: 1rem;
    margin-left: 2rem;
    @media only screen and (max-width: 1350px){
        width: 90%;
    }
    `

const PersonImg2 = Styled.img
 `
    max-width: 12rem;
    flex-direction: row;
    width: 100%;
    height: auto;
    @media only screen and (max-width: 1350px){
    display: none;
    }
    `

const GifCont = Styled.div
`
position: static;
position: relative;
max-width: 60rem;
width: 100%;
height: auto;
margin-top: 3rem;
margin-left: 4.5%;
margin-right: 4.5%;
@media only screen and (max-width: 1350px){
        width: 90%;
        }
`
const SolutionImg = Styled.img
`
width: 100%;
height: auto;
@media only screen and (max-width: 1350px){
        width: 90%;
        }
`
const GIF = Styled.img
`
position: absolute;
width: 76.5%;
height: 83%;
top: 6.5%;
left: 11.7%;
@media only screen and (max-width: 1350px){
    width: 69%;
    height: 82%;
    top: 6.5%;
    left: 10.5%;
}
`

const SolutionTextCont = Styled.div
`
position: static;
display: flex;
justify-content: flex-start;
margin-top: 4.5%;
margin-left: 4.5%;
margin-right: 4.5%;
@media only screen and (max-width: 1350px){
        flex-wrap: wrap;
        }
`

const SolutionText = Styled.div
`
flex-direction: row;
max-width: 25rem;
width: 100%;
height: auto;
margin-right: 1.5rem;
@media only screen and (max-width: 1350px){
        margin-top: 2rem;
        }
`

const MethodText = Styled.div
`
postion: static;
margin-left: 4.5%;
margin-top: 3rem;
p{
    font-size: 2rem;
}
 @media only screen and (max-width: 1200px){
     p{
        font-size: 1.5rem;
     }
}
`
const MethodContainer = Styled.div
`
display: flex;
position: static;
flex-direction: row;
justify-content: space-evenly;
max-width: 60rem;
width: 100%;
height: auto;
margin-left: 4%;
margin-top: 2rem;
align-items: center;
 p{
     max-width: 18.75rem;
     margin-left: 1rem;
    margin-right: 4.5%;
 }
 @media only screen and (max-width: 1200px){
    flex-wrap: wrap;
    justify-content: flex-start;
    p{
    margin-top: 1.5rem;
    width: 90%;
    height: auto;
    margin-left: 0rem;
    }
}
`
const MethodImg = Styled.img
`
position: static;
max-width: 39rem;
width: 100%
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
 @media only screen and (max-width: 1200px){
        width: 80%;
        margin-top: 1rem;
        margin-left:0rem;
    }
`

const MethodTextCont = Styled.div
`
display: flex;
flex-direction: column;
position: static;
justify-content: center;
margin-left: 1.5rem;
p{
    margin-top: 2rem;
}
@media only screen and (max-width: 1200px){
        margin-left: 7rem;
    }
@media only screen and (max-width: 1200px){
        margin-left: 0rem;
    }
`

const TestImg = Styled.img
`
position: static;
max-width: 60.3rem;
width: 100%
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
 @media only screen and (max-width: 1200px){
        width: 80%;
        margin-top: 1rem;
        justify-content: center;
    }
`

const TestTable = Styled.div
    `
    max-width: 70rem;
    margin-left: 4.5%;
    margin-right: 4.5%;    
     ul {
        list-style: none;
        margin-top: 0rem;
    };
    li {
        text-align: left;
    }
    td {
    vertical-align: top;
    text-align: left;
    padding: 0.2rem;
    font-size: 1.5rem;
    }
    @media only screen and (max-width: 1200px){
        width: 90%;
        td {
            font-size: 1.2rem;
        }
        li {
            font-size: 1.2rem;
        }
    }
    `
    
const PrototypeContainer = Styled.div
`
display: flex;
position: static;
margin-top: 3rem;
margin-bottom: 2rem;
`

const FinalCont = Styled.div
`
position: relative;
display: block;
max-width: 65.5rem;
max-height: 35.5rem;
width: 100%;
`

const FinalCont2 = Styled.div
`
position: absolute;
display: flex;
flex-direction: column;
width: 76.5%;
height: 83%;
top: 10.5%;
left: 5.7%;
justify-content: space-evenly;
@media only screen and (max-width: 1350px){
    width: 100%;
    height: 82%;
    top: 5%;
    left: 2%;
    justify-content: space-evenly;
}
`


const FollowUpText = Styled.div
`
position: static; 
max-width: 60rem;
width: 100%;
height: auto;
margin-top: 2rem;
margin-left: 2rem;
margin-bottom: 2rem;
@media only screen and (max-width: 1350px){
    width: 90%;
    }
`
const FinalRect = Styled.img
`
display: block;
max-width: 65.5rem;
height: 35rem;
width: 100%;
@media only screen and (max-width: 1200px){
        width: 100%;
        height: 35rem;

    }
`

const W1 = Styled.img
`
flex-direction: row;
width: 2rem;
height: 2rem;
`

const W2 = Styled.img
`
flex-direction: row;
width: 2rem;
height: 2rem;
`
const W3 = Styled.img
`
flex-direction: row;
width: 2rem;
height: 2rem;
`
const FinalBulletCont = Styled.div
`
display: flex;
flex-direction:row;
margin-left: 4rem;
margin-bottom: 1rem;
margin-right: 1.5rem;
margin-top: 1rem;

p{
    margin-left: 2rem;
    max-width: 50rem;
}
.white{
    color: #FFF1EC;
     background-color: #360713;
    }
`
