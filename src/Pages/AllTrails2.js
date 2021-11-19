import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import ATNav from '../Components/ATNav.js';
import LogoNav from "../Components/LogoNav.js";
import ATOpener from '../images/Alltrails.png';
import ATHeader from '../images/AlltrailsHeader.png';
import ProblemHeader from '../images/Problem.png';
import ResearchHeader from '../images/ResearchHeader.png';
import ResearchReading from '../images/ResearchReading.png';
import CompAna from '../images/CompAnalysis.png';
import UserInt from '../images/UserInt.png';
import Rect from '../images/InsightsRect.png';
import Fears from '../images/fears.png';
import Motivations from '../images/motivations.png';
import Needs from '../images/needs.png';
import Gap from '../images/GapHeader.png';
import Solution from '../images/SolutionHeader.png';
import Apps from '../images/AppScreens.png';
import Method from '../images/MethodHeader.png';
import Lora from '../images/LoraPersona.png';
import Storyboard from '../images/Storyboard.png';
import Wireframe from '../images/ATWireframe.png';
import Safety from '../images/Safety.png';
import Accessibility from '../images/Accessibility.png';
import Inclusivity from '../images/Inclusivity.png';
import TestCircle from '../images/TestsCircle.png';

const AllTrails = () => {
    return (
        <>
        <LogoNav/>
        <ATNav/>
        <ATHeaderContainer id="intro">
            <AT src={ATHeader} alt='Forestry CAmp Case Study'/>
        </ATHeaderContainer>  
        <ATImg src={ATOpener}/>
        <Table>
            <table>
            <tr>
                <td><strong>Overview</strong></td>
                <td>Utilize the existing UI/UX app design at Alltrails to add a safety/accessibility/inclusivity feature.</td>
            </tr>
            <tr>
                <td><strong>Timeline</strong></td>
                <td>80 Hours - 4 weeks</td>
            </tr>
            <tr>
                <td><strong>Role</strong></td>
                <td>
                <ul>
                    <li>UX Research</li>
                    <li>Mobile Design</li>
                </ul>
                </td>
            </tr>
            </table>
        </Table>
        <HeaderContainer>
        <Header src={ProblemHeader} id="problem"/>  
        </HeaderContainer>
        <ProblemText>
        <p id="quote"><strong>“There are certain places I won’t hike alone, and if I do, I make sure I don’t dress as flamboyantly.”</strong></p>    
        <p id="byline"> -- Christian, an LGBTQ+ backpacker</p>
        <p> The outdoor industry historically focuses on white, fit, well-off, English-speaking males. <strong>There are limited support and features </strong> for outdoorsy folks that fall outside of this category, and <strong>the industry is underserving them.</strong></p>
        </ProblemText>
        <HeaderContainer>
        <Header src={ResearchHeader} id="research"/>
        </HeaderContainer>
        <ResearchHeaders><p><strong>Background Reading</strong></p></ResearchHeaders>
        <ResearchImg src={ResearchReading}/>
         <ResearchText1>
        <p>Who’s already doing the work? I identified <strong>nonprofits that are already bringing awareness to this vision</strong> and scoured their websites to learn as much as I could.</p>
        <p>Big thank you to: Disabled Hikers, Black Girls Hike RVA, LGBT Outdoors, Indiginous Women Hike, and Latino Outdoors for your equity advocacy in the outdoor industry.</p>
        </ResearchText1>
        <ResearchHeaders><p id="header"><strong>Competitive Analysis</strong></p></ResearchHeaders>
        <ResearchImg src={CompAna}/>
         <ResearchText1>
        <p>I checked out current hiking/biking/camping apps and sites. What features were they highlighting? Did anyone have safety and accessibility features on their platform?</p>
        <p><strong>None of the major hiking or backpacking apps had thorough accessibility features</strong>, none had equity measures, and very few had physical safety features. Most of these apps relied on reviews for this information.</p>
        </ResearchText1>
        <ResearchHeaders><p id="header"><strong>User Interviews</strong></p></ResearchHeaders>
        <UserIntCont>
            <UserIntImg src={UserInt}/>
            <ResearchText2>
            <p class="para">I interviewed four people that are avid hikers/backpackers/ mountain bikers to hear about their experiences in the woods.</p>
            <p class="para">All of these people fell into one or more categories of my target audience (LGBTQ+, BIPOC, temporarily or permanently disabled, or solo female).</p>
            </ResearchText2>
        </UserIntCont>
        <InsightsRectCont>
            <InsightsTextCont>
            <MI><p><strong> Major Insights </strong></p></MI>
            <InsightsImg src={Needs}/>
            <InsightsImg src={Fears}/>
            <InsightsImg src={Motivations}/>
            </InsightsTextCont>
            <InsightsRect src={Rect}/>
        </InsightsRectCont>
         <HeaderContainer>
            <GapHeader src={Gap} id="gap"/>
        </HeaderContainer>
         <GapText>
        <p id="quote">“Some hikes, I just won’t take my disabled mother on. It’s not worth it for the trail to say it’s easy when it’s not.”</p>    
        <p> People with disabilities, the LGBT+ community, Black and Indiginous people of color, non-native English speakers, and female hikers <strong> need more information before feeling safe and welcome on trails</strong>, especially when hiking alone.</p>
        </GapText>
        <HeaderContainer>
        <SolutionHeader src={Solution}/>
        </HeaderContainer>
        <SolutionText>
        <p> I decided to add safety, inclusivity and accessibility  features to Alltrails’ app <strong>to empower marginalised groups to get out in nature.</strong> This helped me to fully realize and name the <strong>why</strong> behind what I was doing, as an inspiration and a reminder of the importance of this feature. </p>
         </SolutionText>
         <AppImgCont>
         <AppsImg src={Apps}/>
         </AppImgCont>
         {/* <STextCont>
         <SolutionText1>
             <p id="p1">Self-disclosure aggregate ratings</p>
             <p id="p2">Safety and Accessibility Filters</p>
             <p id="p3">Inclusivity Indicators</p>
        </SolutionText1>
        <SolutionText2>
             <p id="p4">Trail Technicality + Condition Report</p>
             <p id="p5">Optional disclosure to encourage comfort</p>
             <p id="p6">A “what’s this?” feature</p>
        </SolutionText2>
        </STextCont> */}
        <HeaderContainer>
        <Header id="method" src={Method}/>
        </HeaderContainer>
         <MethodText>
            <p id="user-header"><strong>User Persona</strong></p>
        </MethodText>
        <MethodContainer>
             <LoraImg src={Lora}/>
            <p id="user-text">My girl Lora was an amalgamation of all my user interviews and research. Lora knows what she wants and needs, and I designed for her. </p>
        </MethodContainer>
       
       
         </>
    )
};

export default AllTrails;


const ATHeaderContainer = Styled.div
    `
   display: flex;
flex-direction: column;
padding: 3rem;
@media only screen and (max-width: 1300px) {
    text-align: center;
    align-items: center;

`

const AT = Styled.img
    `
height: auto;
width: 100%;
max-width: 30rem;
;
    `

const ATImg = Styled.img
    `
    max-width: 65rem;
    width: 100%;
    height: auto;
    left: 4.375rem;
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
max-width: 62rem;
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
position: static;
max-width: 62rem;
margin-left: 1.5rem;
margin-top: 1rem;
font-size: 1.5rem;
line-height: 1.5;
p {
    margin-bottom: 2rem;
}
@media only screen and (max-width: 1200px){
        p{
        font-size: 1rem;
        line-height: 1.2;
        margin-top: 0.9rem;
        }
}
`

const ResearchImg = Styled.img
`
position: static;
max-width: 60.6rem;
width: 100%;
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
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

const UserIntCont = Styled.div
`
position: static;
display: flex;
flex-direction: row;
margin-top: 5rem;
margin-left: 2rem;
gap: 1.5rem;
 @media only screen and (max-width: 1350px){
        flex-wrap: wrap;
    }
`

const ResearchText2 = Styled.div
`
flex-direction: row;
max-width: 21.5rem;
p{
    margin-bottom: 1rem;
}
`

const UserIntImg = Styled.img
`
    postion: static;
    max-width: 33rem;
    width: 100%;
    height: auto;
    left: 4.375rem;
    margin-top: -3rem;
    @media only screen and (max-width: 1350px){
        width: 90%;
        align-items: center;
    }
`

const InsightsRectCont = Styled.div
`
position: relative;
margin-top: 3rem;
max-width: 64.5rem;
width: 100%;
height: 52rem;
background-color: #360713;
margin-top: 3rem;
overflow: hidden;
  @media only screen and (max-width: 1000px){
      width: 100%;
    height: 48rem;
}
  @media only screen and (max-width: 800px){
      width: 100%;
    height: 40rem;
}
 @media only screen and (max-width: 800px){
      width: 100%;
    height: 30rem;
}
`

const InsightsRect = Styled.img
`
position: absolute;
max-width: 64.5rem;
width: 100%;
min-height: 32rem;
height: auto;
display: none;
`

const InsightsImg = Styled.img
`
max-width: 52.8rem;
width: 100%;
height: auto;
flex-direction: column;
margin-bottom: 3rem;
z-index: 2;
  @media only screen and (max-width: 1300px){
        width: 100%;
        align-items: center;
        margin-bottom: 2rem;
    }
`

const MI = Styled.div
`
z-index: 2;
flex-direction: column;
font-size: 2rem;
color: #FFF1EC;
margin-top: 3rem;
margin-bottom: 3rem;
 @media only screen and (max-width: 1300px){
        p{
            font-size: 2rem;
        }
    }
    @media only screen and (max-width: 1000px){
        p{
            font-size: 1rem;
        }
    } 
   @media only screen and (max-width: 600px){
       margin-bottom: 2rem;
        p{
            font-size: 1rem;

        }
    } 
`

const InsightsTextCont = Styled.div
`
position: absolute;
display: flex;
flex-direction: column;
margin-left: 2.5rem;
`

const GapText = Styled.div
`
max-width: 62rem;
margin-left: 3rem;
margin-top: 2rem;
#quote{
    font-size: 2.2rem;
    margin-bottom: 40px;
    font-weight: 500;
}
p {
    font-size: 24px;
    line-height: 1.2;
}
`
const SolutionText = Styled.div
`
margin-top: 3rem;
margin-left: 3rem;
max-width: 62rem;
`
const AppsCont = Styled.div
`
position: relative;
`

const AppsImg = Styled.img
`
position: absolute;
position: static;
max-width: 57rem;
width: 100%;
height: auto;
`

// const STextCont = Styled.div
// `
// position: absolute;
// max-width: 57rem;
// width: 100%;
// height: 66rem;
// display: flex;
// flex-direction: column;
// margin-left: 2rem;
// align-items: stretch;
// `

// const SolutionText1 = Styled.div
// `
// display: flex;
// flex-direction: row;
// justify-content: space-evenly;
// p{
//     max-width: 12.8rem;
//     text-align: center;
// }
// `

// const SolutionText2 = Styled.div
// `
// display: flex;
// flex-direction: row;
// justify-content: space-around;
// p{
//     max-width: 12.8rem;
//     text-align: center;
// }
// `

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

const AppImgCont = Styled.div
`
position: static;
max-width: 57rem;
width: 100%;
height: 90%;
overflow: hidden;
`

const MethodText = Styled.div
`
postion: static;
margin-left: 3.2rem;
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
margin-left: 2rem;
margin-top: 2rem;
justify-content: space-evenly;
 p{
     margin-left: 1rem;
     max-width: 18.75rem;
     margin-top: 8rem;
 }
 #style-text{
     margin-top: 1.5rem;
 }
 #wireframe-text{
         margin-top: 18rem;
}
 @media only screen and (max-width: 1200px){
    flex-wrap: wrap;
    p{
    margin-top: 1.5rem;
    width: 100%;
    height: auto;
    }
    #wireframe-text{
         margin-top: 1.5rem;
 }
}
`

const LoraImg = Styled.img
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
        margin-left: -1rem;

    }
`