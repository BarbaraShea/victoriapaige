import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import ATNav from '../Components/ATNav.js';
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
import ProtoBan from '../images/PrototypeBanner.png';
import ALOpener from '../images/ALOpener.png';
import ALHeader from '../images/ALHeader.png';
import AlResearchImg1 from '../images/AlResearchImg1.png';
import AlResearchImg2 from '../images/AlResearchImg2.png';
import AlResearchImg3 from '../images/AlResearchImg3.png';

const Aloft = () => {
    return (
        <>
        <LogoNav/>
        <ATNav/>
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

        </>
    )
};

export default Aloft;

const ALHeaderContainer = Styled.div
    `
   display: flex;
flex-direction: column;
padding: 3rem;
@media only screen and (max-width: 1300px) {
    text-align: center;
    align-items: center;

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
    max-width: 61rem;
    width: 100%;
    height: auto;
    margin-left: 3rem;
    margin-top: -3rem;
    @media only screen and (max-width: 1350px){
        width: 90%;
        align-items: center;
    }
    `

    const Table = Styled.div
    `
    width: 70rem;
    height: 2.875rem;
    left: 1rem;
    // right: 22.5rem;
    // top: 35rem;
    margin-bottom: 15rem;
    
     ul {
        display: block;
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
        width: 100%;
        td {
            font-size: 1.2rem;
        }
        li {
            font-size: 1.2rem;
        }
    }
    `
const HeaderContainer = Styled.div
`
  position: static;
  display: flex;
  margin-top: 4rem;
  margin-left: 2rem;
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
margin-left: 2rem;
margin-top: 2rem;
margin-right: 1rem;
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
margin-left: 1.5rem;
margin-top: 1rem;
@media only screen and (max-width: 1200px){
        width: 90%;
}`

const ResearchHeaders = Styled.div
`
position: static;
margin-left: 1.5rem;
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
margin-top: 3rem;
margin-left: 2rem;
align-items: center;
gap: 1.5rem;
 @media only screen and (max-width: 1350px){
        flex-wrap: wrap;
    }
`