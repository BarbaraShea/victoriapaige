import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import Nav from '../Components/Nav.js';
import NavBar2 from '../Components/NavBar2.js';
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
import Apps from '../images/AlltrailsPNG 1.png';
import Method from '../images/MethodHeader.png';
import Lora from '../images/LoraPersona.png';
import Storyboard from '../images/Storyboard.png';
import Wireframe from '../images/ATWireframe.png';
import Safety from '../images/Safety.png';
import Accessibility from '../images/Accessibility.png';
import Inclusivity from '../images/Inclusivity.png';
import TestCircle from '../images/TestsCircle.png';
import DarkOne from  '../images/DarkOne.png';
import DarkTwo from  '../images/DarkTwo.png';
import ATTest1 from '../images/ATTest1.png';
import ATTest2 from '../images/ATTest2.png';
import ATTest3 from '../images/ATTest3.png';
import FollowUpRect from '../images/FollowUpRect.png';
import FollowUp from '../images/FollowUp.png';
import ArrowRight from '../images/ArrowRight.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import Return from '../images/Return.png';
import ProtoBan from '../images/SeeProto.png';

const AllTrails = () => {
    return (
        <>
        <LogoNav/>
        <Nav/>
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
        <InsightsRect src={Rect}/>
            <InsightsCont2>
                <MI><p><strong> Major Insights </strong></p></MI>
                <InsightsBullets>
                <p id="insights-header">Needs</p>
                <ul>
                    <li>Understand if a trail is far from cell service</li>
                    <li>Know how close hospitals are/help is if needed</li>
                    <li>Have ways to judge difficulty other than incline</li>
                </ul>
                <p id="insights-header">Fears</p>
                <ul>
                    <li>Trails being very technically difficult (climbing, downed trees, etc)</li>
                    <li>Other folks’ ratings aren’t always accurate</li>
                    <li>Running into men in the woods when they have guns</li>
                    <li>Washed out trails and closures</li>
                </ul>
                <p id="insights-header">Motivations</p>
                <ul>
                    <li>Hiking is a meditative activity</li>
                    <li>Experience nature without getting lost</li>
                    <li>Save time by knowing as much as possible about the hike beforehand</li>
                    <li>Know if a trail is easy to navigate and explore</li>
                </ul>
                </InsightsBullets>
            </InsightsCont2>
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
        <HeaderContainer>
        <Header id="method" src={Method}/>
        </HeaderContainer>
         <MethodText>
            <p id="user-header"><strong>User Persona</strong></p>
        </MethodText>
        <MethodContainer>
             <MethodImg src={Lora}/>
            <p id="user-text">My girl Lora was an amalgamation of all my user interviews and research. Lora knows what she wants and needs, and I designed for her. </p>
        </MethodContainer>
       <MethodText>
            <p id="user-header"><strong>Feature List</strong></p>
        </MethodText>            
        <FeatureText><p id="feature-text">This was an all-encompassing list of what each subcategory (safety, accessibility, and inclusivity) would require to help people feel comfortable on a trail.<strong> This helped me put the rubber (boot sole) to the road.</strong></p></FeatureText>
        <FeatureContainer>
            <ListCont>
            <SafetyImg src={Safety}/>
            <ul id="safety">
                <li> Signage </li>
                <li> Clarity of trail markers </li>    
                <li> Cell service </li>
                <li>Distance to closest hospital</li>
                <li>Presence of rangers</li>
                <li>Downed trees</li>
                <li>Presence of wildlife predation</li>
                <li>Open carry allowed (firearms)</li>
                <li>Emergency contact info</li>
            </ul>
            </ListCont>
            <ListCont>
        <InclImg src={Inclusivity}/>
            <ul id="inclusivity">
                <li>Allow self-identification for aggregated rating scores of inclusivity </li>
                <li>Non-English speakers</li>
                <li>BIPOC</li>
                <li>Non-neurotypical</li>
                <li>Native land acknowledgement</li>
                <li>Age (safe for little ones or for seniors)</li>
                <li>Easy to social distance for immunocompromised folks</li>
            </ul>
            </ListCont>
            <ListCont>
        <AccImg src={Accessibility}/>
            <ul id="accessibility">
                <li>Easy for 2WD cars</li> 
                <li>Accessible parking</li>
                <li>Technicality rating (roots/rocks/etc)</li>
                <li>Upper body strength/dexterity</li>
                <li>Stable footing required</li>
                <li>Ability to climb over something</li>
                <li>Accessible by public transit</li> 
                <li>Step-free trail (low grade, no rocks)</li>
            </ul>
            </ListCont>
        </FeatureContainer>
        <MethodText>
            <p id="user-header"><strong>Storyboard</strong></p>
        </MethodText>
        <MethodContainer>
             <MethodImg src={Storyboard}/>
            <p id="story-text"> This narative piece felt helpful for me as I know adding these type of features <strong>require a lot of buy-in from stakeholders.</strong> Here I’m able to show how an actual hiker would be looking for particular information.</p>
        </MethodContainer>
          <MethodText>
            <p id="user-header"><strong>Wireframe</strong></p>
        </MethodText>
        <MethodContainer>
            <MethodImg src={Wireframe}/>    
            <p id="wireframe-text">To add a feature, I needed to incorporate a wireframe into Alltrails’ existing UI and layout. <strong>The constraints made it easier than other projects,</strong> which I found refreshing. </p>
        </MethodContainer>
        <HeaderContainer>
        <Header id="test" src={TestCircle}/>
        </HeaderContainer>
         <Test>
        <p>A usability test was conducted with four participants in the target audience. </p>
        <p id="goals"><strong>Research Goals</strong></p>
        </Test>
        <TestCont>
        <One src={DarkOne}/>
        <p>Notice safety/accessibility/inclusivity features</p>
        </TestCont>
        <TestCont>
        <Two src={DarkTwo}/>
        <p>Use filters to find an accessible hike and leave a review.</p>
        </TestCont>
        <Test>
        <p id="final"> All four particpants successfully completed each goal. </p>
        </Test>
        <TestImg src={ATTest1}/>
        <TestImg src={ATTest2}/>
        <TestImg src={ATTest3}/>
        <ProtoCont id="proto">
        <div><a href="https://www.figma.com/proto/J6JueelgSzwIOhbHShXdgk/Alltrails?page-id=106%3A17&node-id=162%3A964&viewport=288%2C48%2C0.27&scaling=scale-down&starting-point-node-id=131%3A12&show-proto-sidebar=1" target="_blank"> <PrototypeBan src={ProtoBan}/> </a></div>
        </ProtoCont>
        <HeaderContainer>
            <Header id="follow" src={FollowUp}/>
         </HeaderContainer>
        <FollowUpText>
        <p> It was a great experience working with such a wonderful and established team.</p>
        </FollowUpText>   
        <FinalCont>
        <FinalRect src={FollowUpRect}/>
            <FinalCont2>
                <Thoughts><p><strong> Final Thoughts </strong></p> </Thoughts>
                <BulletCont>
                    <W1 src={White1}/>
                    <p> The swath of people I’m desigining for in this case study was huge. It could have been more focused if I’d stuck with one subgroup.</p>
                </BulletCont>
                <BulletCont>
                    <W2 src={White2}/>
                    <p> I don’t feel like I did a great job finding a solution for women being scared of running into men with firearms on trails.  More research, please!</p>
                </BulletCont>
                <BulletCont>
                    <W3 src={White3}/>
                    <p id="three"> The features seemed to be integrated smoothly. Most of my test subjects thought it was a real feature at first!</p>
                </BulletCont>
            </FinalCont2>
        </FinalCont>
        <NavLink to="/"><ReturnImg src={Return}/></NavLink> 
         </>
    )
};

export default AllTrails;
const ProtoCont =Styled.div
`
position: static;
margin-top: 4.5%;
cursor: pointer;
`

const ATHeaderContainer = Styled.div
    `
   display: flex;
flex-direction: column;
margin-top: 4.5%;
margin-left: 4.5%;
margin-right: 4.5%;
margin-bottom: 2%;

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
margin-left: 4.5%;
margin-right: 4.5%;
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
margin-left: 4.5%;
margin-top: 1.5rem;
@media only screen and (max-width: 1200px){
        width: 90%;
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

const UserIntCont = Styled.div
`
position: static;
display: flex;
flex-direction: row;
margin-top: 5rem;
margin-left: 4.5%;
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

const GapText = Styled.div
`
max-width: 62rem;
margin-left: 4.5%;
margin-right: 4.5%;
margin-top: 2rem;
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
const AppsCont = Styled.div
`
position: relative;
`

const AppsImg = Styled.img
`
position: absolute;
position: static;
margin-left: 4%;
max-width: 57rem;
width: 100%;
height: auto;
@media only screen and (max-width: 1350px){
    width: 90%;
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
margin-top: 1rem;
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

const FeatureContainer = Styled.div
`
position: static;
display: flex;
flex-direction: row;
justify-content: space-evenly;
max-width: 60.6rem;
margin-left: 4.5%;
@media only screen and (max-width: 1000px){
    flex-wrap: wrap;
    justify-content: flex-start;
    }
`

const ListCont = Styled.div
`
display: flex;
flex-direction: column;
margin-top: 1rem;
margin-left: 2rem;
width: 19.5rem;
`

const SafetyImg = Styled.img
`
flex-direction: column;
max-width: 7rem;
width: 100%;
height: auto;
margin-bottom: 1.5rem;
margin-top: 1.5rem;

`

const InclImg = Styled.img
`
margin-bottom: 1.5rem;
margin-top: 1.5rem;
flex-direction: column;
max-width: 10rem;
width: 100%;
height: auto;
`

const AccImg = Styled.img
`
margin-bottom: 1.5rem;
margin-top: 1.5rem;
flex-direction: column;
max-width: 12rem;
width: 100%;
height: auto;
`

const FeatureText = Styled.div
`
position: static;
margin-top: 3rem;
max-width: 66.6rem;
margin-left: 4.5%;
margin-right: 4.5%;
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
margin-right: 4.5%;
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
margin-bottom: 2rem;
#goals {
    margin-top: 4%;
}
`
const TestImg = Styled.img
`
position: static;
max-width: 60.5rem;
width: 100%;
height: auto;
margin-left: 4.5%;
margin-top: 5%;
@media only screen and (max-width: 1200px){
        width: 80%;
    }
`

const PrototypeBan = Styled.img
`
max-width: 17.5rem;
width: 100%;
height: auto;
margin-left: 4.5%;
margin-top:2rem;
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