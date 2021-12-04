import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import Nav from '../Components/Nav.js';
import LogoNav from "../Components/LogoNav.js";
import ProblemHeader from '../images/Problem.png';
import ResearchHeader from '../images/ResearchHeader.png';
import Gap from '../images/GapHeader.png';
import Solution from '../images/SolutionHeader.png';
import Method from '../images/MethodHeader.png';
import FollowUpRect from '../images/FollowUpRect.png';
import FollowUp from '../images/FollowUp.png';
import ArrowRight from '../images/ArrowRight.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import Return from '../images/Return.png';
import ProtoBan from '../images/SeeProto.png';
import ALOpener from '../images/ALOpener.png';
import ALHeader from '../images/ALHeader.png';
import AlResearchImg1 from '../images/AlResearchImg1.png';
import AlResearchImg2 from '../images/AlResearchImg2.png';
import AlResearchImg3 from '../images/AlResearchImg3.png';
import Rect from '../images/InsightsRect.png';
import MethodImg1 from '../images/AlMethodImg1.png';
import MethodImg2 from '../images/AlMethodImg2.png';
import MethodImg3 from '../images/AlMethodImg3.png';
import MethodImg4 from '../images/AlMethodImg4.png';
import TestCircle from '../images/TestsCircle.png';
import DarkOne from  '../images/DarkOne.png';
import DarkTwo from  '../images/DarkTwo.png';
import AloftGIF from '../images/AloftGIF.gif';
import AlTest1 from '../images/AlTest1.png';
import AlTest2 from '../images/AlTest2.png';
import AlTest3 from '../images/AlTest3.png';

const Aloft = () => {
    return (
        <>
        <LogoNav/>
        <Nav/>
        <ALHeaderContainer id="intro">
            <AL src={ALHeader} alt='Forestry CAmp Case Study'/>
        </ALHeaderContainer>  
        <ALImg src={ALOpener}/>
        <Table>
            <table>
            <tr>
                <td><strong>Overview</strong></td>
                <td>Create an end-to-end mobile app for aerialists allowing them to book a class and organize training videos.</td>
            </tr>
            <tr>
                <td><strong>Timeline</strong></td>
                <td>90 Hours - 5 weeks</td>
            </tr>
            <tr>
                <td><strong>Role</strong></td>
                <td>UX/UI Design, Branding and Logo Design, UX Writing</td>
            </tr>
            </table>
        </Table>
        <HeaderContainer>
        <Header src={ProblemHeader} id="problem"/>  
        </HeaderContainer>
        <ProblemText>
        <p id="quote"><strong>“My schedule is super tight, and it’s really hard to find classes that work for me. If I can’t go, I’m not training.””</strong></p>    
        <p id="byline"> -- Cami, aerialist</p>
        <p>Current booking systems for aerial classes don’t allow customized searches based on schedules and <strong>often require a lot of scrolling</strong> to identify what classes work for them.</p>
        <p id="para">Additionally, aerialists are visual learners that use video to record their training sessions. Currently, there isn’t a good way to organize these visual notes and people feel they’re spending <strong>too much time searching their video rolls</strong> to find what they want.</p>
        </ProblemText>
        <HeaderContainer>
        <Header src={ResearchHeader} id="research"/>
        </HeaderContainer>
        <ResearchHeaders><p><strong>Experiential Observations</strong></p></ResearchHeaders>
        <ResearchCont>
        <ResearchImg src={AlResearchImg1}/>
         <ResearchText1>
        <p>Because aerial arts are such a unique form of movement, I knew observing aerialists in person was important. I attended classes and watched how various students attempted to retain information (it was highly varied). </p>
        </ResearchText1>
        </ResearchCont>
        <ResearchHeaders><p id="header"><strong>Competitive Analysis</strong></p></ResearchHeaders>
        <ResearchCont>
        <ResearchImg src={AlResearchImg2}/>
         <ResearchText1>
        <p>I looked at three main class booking platforms -- MindBodyGreen, CircusDB, and a custom platform from an aerial studio. MindBody had the most seamless UX and best UI of the three, and CircusDB had the most prolematic designs on both ends. All three competitors showed the depth of opportunity for me to help solve this problem. </p>
        </ResearchText1>
        </ResearchCont>
        <ResearchHeaders><p id="header"><strong>User Interviews</strong></p></ResearchHeaders>
        <ResearchCont>
        <ResearchImg src={AlResearchImg3}/>
         <ResearchText1>
        <p>Four aerialists were interviewed, ranging from hobby aerialists to aerial instructors. Their preferred disciplines included trapeze, lyra, silks/sling, and pole.</p>
        <p id="para"><strong>The similary of responses from these users were incredible</strong>, and helped me easily identify a solution.</p>
        </ResearchText1>
        </ResearchCont>
        <InsightsRectCont>
        <InsightsRect src={Rect}/>
            <InsightsCont2>
                <MI><p><strong> Major Insights </strong></p></MI>
                <InsightsBullets>
                <p id="insights-header">Motivations</p>
                <ul>
                    <li>To be challenged and feel strong</li>
                    <li>Train both sides of their bodies with new tricks</li>
                    <li>Progress in their skillset and increase fluidity</li>
                </ul>
                <p id="insights-header">Frustrations</p>
                <ul>
                    <li>Not having a good way to organize notes</li>
                    <li>Attending a class that ends up not meeting their needs</li>
                    <li>Not able to easily find a class that fits their schedule</li>
                    <li>Teaching styles that aren't what they are looking for</li>
                </ul>
                <p id="insights-header">Needs</p>
                <ul>
                    <li>Organize training notes and easily find videos from classes</li>
                    <li>A better way to note what skills need work</li>
                    <li>Know someone's teaching style and class content ahead of time</li>
                    <li>A searchable calendar to find classes</li>
                </ul>
                </InsightsBullets>
            </InsightsCont2>
        </InsightsRectCont>
        <HeaderContainer>
            <GapHeader src={Gap} id="gap"/>
        </HeaderContainer>
         <GapText>
        <p id="quote">“I just end up scrolling through the schedule to find what works, and keep track of what I need to work on mentally.”</p>    
        <p> Aerialists need a way to easily find classes that fit their schedule, and upload training notes from it. Since they dump all of their content into their phone, <strong>it’s very difficult for them to locate videos from classes to remember what to train.</strong> </p>
        </GapText>
        <HeaderContainer>
        <SolutionHeader src={Solution}/>
        </HeaderContainer>
        <SolutionText>
        <p> <strong>Customized schedule filtering</strong> is the key way to be able to help aerialists progress in their skills and keep track of their training. Creating a one-stop booking system with <strong>a training library with tags and filters to organize their notes</strong> will meet these users needs. </p>
         </SolutionText>
         <SolutionGIF src={AloftGIF}/>
         <HeaderContainer>
        <Header id="method" src={Method}/>
        </HeaderContainer>
         <MethodText>
            <p id="user-header"><strong>Task Flow</strong></p>
        </MethodText>
        <MethodContainer>
             <MethodImg src={MethodImg1}/>
            <p id="user-text">I began with a simple task flow for the two main needs of the app - booking a class and adding training videos and notes. <strong>This helped guide me</strong> as I explored solutons for wireframes. </p>
        </MethodContainer>
         <MethodText>
            <p id="user-header"><strong>Branding</strong></p>
        </MethodText>
        <MethodContainer>
             <MethodImg src={MethodImg2}/>
            <p id="user-text">I wanted the branding to speak to the <strong>creativity and calm that people experience</strong> when doing aerials. A linear gradient added fun pops of color. The logo shows a trapeze, silks, and a lyra together.</p>
        </MethodContainer>
         <MethodText>
            <p id="user-header"><strong>Wireflow</strong></p>
        </MethodText>
        <MethodContainer>
             <MethodImg src={MethodImg3}/>
            <p id="user-text">I utilized Whimsical to create a wireflow and show how users would move between tasks on the app, and organize filters for <strong>how aerialsists would want to look for classes.</strong> I found this to be incredibly helpful and will continue using this method in the future. </p>
        </MethodContainer>
         <MethodText>
            <p id="user-header"><strong>User Persona</strong></p>
        </MethodText>
        <MethodContainer>
             <MethodImg src={MethodImg4}/>
            <p id="user-text">I then moved my wireframes into user interface design, focusing on the visual aspect of the app. I adapted a UI kit, as I wanted the design to feel fun and light <strong>while speaking to the intensity and artistry of aerial training.</strong> </p>
        </MethodContainer>
        <HeaderContainer>
            <Header id="test" src={TestCircle}/>
        </HeaderContainer>
        <Test>
        <p>For this app, I utilized the digital testing platform Maze. I loved this as a method for testing as the heatmaps and rating scales were helpful for data collection.  </p>
        <p id="goals"><strong>Research Goals</strong></p>
        </Test>
        <TestCont>
        <One src={DarkOne}/>
        <p>Book a class within a specific time and date availability</p>
        </TestCont>
        <TestCont>
        <Two src={DarkTwo}/>
        <p>Upload training notes from the class itself and save it to their Training Library</p>
        </TestCont>
        <Test>
        <p id="final"> All of my particpants successfully completed each goal.</p>
        </Test>
        <TestImg src={AlTest1}/>
        <TestImg src={AlTest2}/>
        <TestImg src={AlTest3}/>
        <ProtoCont id="proto">
        <div><a href="https://www.figma.com/proto/uEODZPCrFEzV0bWzvKJe8h/ALOFT?page-id=102%3A442&node-id=262%3A2096&viewport=288%2C48%2C0.43&scaling=scale-down&starting-point-node-id=262%3A1406" target="_blank"> <PrototypeBan src={ProtoBan}/> </a></div>
        </ProtoCont>
        <HeaderContainer>
            <Header id="follow" src={FollowUp}/>
         </HeaderContainer>
        <FollowUpText>
        <p> As a training aerialist myself, I really wish this app existed. </p>
        </FollowUpText>   
        <FinalCont>
        <FinalRect src={FollowUpRect}/>
            <FinalCont2>
                <Thoughts><p><strong> Final Thoughts </strong></p> </Thoughts>
                <BulletCont>
                    <W1 src={White1}/>
                    <p> There is so much more to explore with the training library. I could interview users on their organizational methods and further refine this section.</p>
                </BulletCont>
                <BulletCont>
                    <W2 src={White2}/>
                    <p> User testing went really well, and very few changes were needed. This gives me confidence that my research was solid. </p>
                </BulletCont>
                <BulletCont>
                    <W3 src={White3}/>
                    <p id="three"> I want to add even more filtering features in the future - perhaps a “my availability” where people can autoselect days and times they’re available.</p>
                </BulletCont>
            </FinalCont2>
        </FinalCont>
        <NavLink to="/"><ReturnImg src={Return}/></NavLink> 
        </>
    )
};

export default Aloft;

const ProtoCont =Styled.div
`
position: static;
margin-top: 4.5%;
cursor: pointer;
`

const ALHeaderContainer = Styled.div
    `
   display: flex;
flex-direction: column;
margin-top: 4.5%;
margin-left: 4.5%;
margin-right: 4.5%;
margin-bottom: 2%;


`

const AL = Styled.img
    `
height: auto;
width: 100%;
max-width: 26rem;
;
    `

const ALImg = Styled.img
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


const ProblemText = Styled.div
`
position: static;
margin-left: 4.5%;
margin-right: 4.5%;
margin-top: 2%;
max-width: 62rem;
#para {
        margin-top: 1.5rem;
    }
}
#quote{
    font-size: 2rem;
    line-height: 1.2;
    @media only screen and (max-width: 1200px){
        font-size: 1.5rem;
}
}
#byline{
    font-size: 1.4rem;
    margin-left: 40rem;
    margin-bottom: 3rem;
    margin-top: 1rem;
        @media only screen and (max-width: 1200px){
    margin-left: 20rem;
    font-size: 1rem;
     @media only screen and (max-width: 600px){
    margin-left: 10rem;
}

`
const ResearchText1 = Styled.div
`
flex-direction: row;
max-width: 27rem;
margin-right: 4.5%;
#para{
    margin-top: 1.5rem;
}
`

const ResearchImg = Styled.img
`
position: static;
flex-direction: row;
max-width: 32.8rem;
width: 100%;
height: auto;
margin-top: 1rem;
 @media only screen and (max-width: 1200px){
        width: 80%;
        margin-top: 1rem;
        justify-content: center;
    }`

const ResearchHeaders = Styled.div
`
position: static;
margin-left: 4.5%;
margin-top: 1.5rem;
p{
font-size: 2rem;
}
`
const ResearchCont = Styled.div
`
position: static;
display: flex;
flex-direction: row;
max-width: 65rem;
width: 100%;
margin-top: 2rem;
margin-left: 2rem;
margin-left: 4.5%;
align-items: center;
gap: 1.5rem;
 p{
     margin-left: 0rem;
     max-width: 30rem;
     margin-right: 4.5%;
 }
 @media only screen and (max-width: 1200px){
    flex-wrap: wrap;
    justify-content: flex-start;
    p{
    margin-top: 1.5rem;
    margin-left: 0rem;
    width: 90%;
    height: auto;
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

const InsightsRect = Styled.img
`
display: block;
max-width: 100%;
height: 42rem;
`

const InsightsBullets = Styled.div
`
margin-left: 7%;
margin-bottom: 1.5rem;
margin-right: 5%;
margin-top: 4%;
line-height: 1.6;
color: #FFF1EC;
#insights-header {
    margin-left: -2rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-weight: 500;
}
@media only screen and (max-width: 450px){
    // margin-left: 2rem;
    margin-top: 1%;
    line-height: 1.3;

}
`

const MI = Styled.div
`
p{
font-size: 2rem;
margin-left: 0rem;
margin-top: 1rem;
@media only screen and (max-width: 1200px){
font-size: 1.5rem;
}
}
color: #FFF1EC;
@media only screen and (max-width: 600px){
    margin-top: -1rem;
}
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

const SolutionHeader = Styled.img
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

const GapText = Styled.div
`
max-width: 62rem;
margin-left: 4.5%;
margin-right: 4.5%;
margin-top: 2rem;
margin-right: 1rem;
#quote{
    font-size: 2.2rem;
    margin-bottom: 40px;
    font-weight: 500;
     @media only screen and (max-width: 1200px){
        font-size: 1.5rem;
}
}
p {
    line-height: 1.2;
}
`

const SolutionText = Styled.div
`
margin-top: 3rem;
margin-left: 4.5%;
margin-right: 4.5%;
max-width: 62rem;
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
max-width: 39.75rem;
width: 100%
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
 @media only screen and (max-width: 1200px){
        width: 80%;
        margin-top: 1rem;
        margin-left: 0rem;

    }
`
const TestImg = Styled.img
`
position: static;
max-width: 66rem;
width: 100%
height: auto;
margin-left: 4.5%;
margin-top: 1.5rem;
 @media only screen and (max-width: 1200px){
        width: 80%;
    }
`

const One = Styled.img
`
flex-direction: row;
width: 2rem;
height: auto;
`

const Two = Styled.img
`
flex-direction: row;
width: 2rem;
height: auto;
`
const TestCont = Styled.div
`
postion: static;
display: flex;
flex-direction: row;
justify-content: flex-start;
max-width: 50rem;
margin-left: 5%;
margin-right: 2rem;
align-items: center;
margin-bottom: 1rem;
p {
    margin-left: 2rem;
}
`

const Test = Styled.div
`
position: static;
margin-top: 3rem;
max-width: 66.6rem;
margin-left: 4.5%;
margin-right:4.5%;
margin-right: 2rem;
margin-bottom: 2rem;
#goals {
    margin-top: 2rem;
}
`

const PrototypeBan = Styled.img
`
max-width: 17.5rem;
width: 100%;
height: auto;
margin-left: 1.5rem;
@media only screen and (max-width: 1200px){
      width: 40%;
      }
`


const FollowUpText = Styled.div
`
position: static; 
max-width: 60rem;
width: 100%;
height: auto;
margin-top: 2.5%;
margin-left: 4%;
margin-bottom: 2rem;
`

const FinalRect = Styled.img
`
display: block;
max-width: 65.5rem;
height: 42rem;
width: 100%;
@media only screen and (max-width: 375px){
      height: 38rem;
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

const FinalCont = Styled.div
`
position: relative;
display: block;
max-width: 100%;
max-height: 40rem;
margin-top: 3rem;
margin-bottom: 2rem;
width: 100%;
`

const FinalCont2 = Styled.div
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

const BulletCont = Styled.div
`
display: flex;
flex-direction:row;
margin-right: 5%;
margin-top: 4%;
margin-left: 4%;
// justify-content: space-between;
margin-bottom: 2.5rem;
p{
    color: #FFF1EC;
    margin-left: 2rem;
    max-width: 50rem;
}
#three {
    align-self: flex-start;
}
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
const Thoughts = Styled.div
`
p{
font-size: 2rem;
margin-bottom: 2rem;
margin-left: 0rem;
margin-top: 3rem;
@media only screen and (max-width: 1200px){
font-size: 1.5rem;
margin-top: 2rem;
}
}
color: #FFF1EC;
`

const SolutionGIF = Styled.img
`
max-width: 60.6 rem
widht: 100%;
heigh: auto;
margin-left: 3rem;
  @media only screen and (max-width: 1200px){
        width: 90%;
    }
`
