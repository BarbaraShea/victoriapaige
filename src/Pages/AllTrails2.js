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
import DarkOne from  '../images/DarkOne.png';
import DarkTwo from  '../images/DarkTwo.png';
import Test1 from '../images/TestImg1.png';
import Test2 from '../images/TestImg2.png';
import Test3 from '../images/TestImg3.png';
import FollowUpRect from '../images/FollowUpRect.png';
import FollowUp from '../images/FollowUp.png';
import ArrowRight from '../images/ArrowRight.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import Return from '../images/Return.png';
import ProtoBan from '../images/PrototypeBanner.png';

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
        <Test1Cont>
            <TestImg1 src={Test1}/>
            <Test1Text>
            <p>“I really like that it says the hike is rated by the community - it’s not just some nebulous statement.”</p>
            <p>I increased the contrast and added a background to the female hiker rating, since one user didn’t see it during testing.</p>
            </Test1Text>
        </Test1Cont>
        <Test2Cont2>
        <Test2Cont>
            <TestImg2 src={Test2}/>
            <Test2Text>
            <p> All of my users thought the blue pill buttons were colored differently because that was what they selected when filtering a hike. I added titles to ease clarity.</p>
            </Test2Text>
        </Test2Cont>
             <Test2Text2>
            <p> “The 2WD indicator is amazing! I always wish I knew things like that ahead of time.”</p>
            </Test2Text2>
        </Test2Cont2>
        <Test3Cont>
            <TestImg3 src={Test3}/>
            <Test3TextCont>
                <Test3Text>
                <p> “I wish there was a place on the trail conditions to note that I had to turn around.”</p>
                </Test3Text>
                <Test3Text2>
                <p>I added a “did you have to end your hike early?” question so people could indicate this on their trail report to help future hikers.</p>
                </Test3Text2>
            </Test3TextCont>
        </Test3Cont>
        <PrototypeContainer>
            <PrototypeBan src={ProtoBan}/>
            <ProtoText>
            <p id="ATproto"> <strong><a href="https://www.figma.com/proto/lARHntk9QL09upIkgVY0VY/Timewells-Priority-Revision?page-id=0%3A1&node-id=272%3A256&viewport=241%2C48%2C0.62&scaling=min-zoom&starting-point-node-id=1%3A2118" target="_blank"> See Prototype </a></strong></p>
            </ProtoText>
            <ArrowRightImg src={ArrowRight}/>
        </PrototypeContainer>
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
align-items: center;
 p{
     max-width: 18.75rem;
     margin-left: 1rem;
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
    margin-left: 0rem;
    }
    #wireframe-text{
         margin-top: 1.5rem;
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
        margin-left: -1rem;

    }
`

const FeatureContainer = Styled.div
`
position: static;
display: flex;
flex-direction: row;
justify-content: space-evenly;
max-width: 60.6rem;
margin-left: 3rem;
@media only screen and (max-width: 1200px){
    flex-wrap: wrap;
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
margin-left: 3rem;

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
margin-left: 3.5rem;
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
margin-left: 3rem;
margin-bottom: 2rem;
#goals {
    margin-top: 2rem;
}
`

const TestImg1 = Styled.img
`
position: static;
flex-direction: row;
max-width: 59rem;
width: 100%;
height: auto;
flex-direction: row;
@media only screen and (max-width: 1200px){
    width: 80%;
    }
`

const Test1Cont = Styled.div
`
display:flex;
max-width: 59rem;
width: 100%;
margin-left: 3rem;
// align-items: flex-start;
// justify-content: flex-start;

`

const Test1Text = Styled.div
`
display:flex;
flex-direction: column;
max-width: 16.5rem;
margin-left: -18rem;
p{
    margin-top: 6rem;
    margin-bottom: 10rem;
}
@media only screen and (max-width: 1200px){
    width: 20%;
    margin-left: -15rem;
    }
@media only screen and (max-width: 1000px){
    display: none;
    }
`

const TestImg2 = Styled.img
`
position: static;
flex-direction: row;
max-width: 59rem;
width: 100%;
height: auto;
flex-direction: row;
@media only screen and (max-width: 1200px){
    width: 80%;
    }
`

const Test2Cont = Styled.div
`
display:flex;
max-width: 59rem;
width: 100%;
margin-left: 3rem;
margin-top: 3rem;
align-items: center;
// justify-content: flex-start;
`

const Test2Text = Styled.div
`
display:flex;
flex-direction: column;
max-width: 16.5rem;
margin-left: 2rem;
@media only screen and (max-width: 1000px){
    display: none;
    }
`

const Test2Text2 = Styled.div
`
display:flex;
flex-direction: column;
max-width: 16.5rem;
margin-top: -15rem;
margin-left: 7rem;
@media only screen and (max-width: 1000px){
    display: none;
    }
`

const Test2Cont2 = Styled.div
`
display:flex;
flex-direction: column;
max-width: 59rem;
width: 100%;
margin-top: 3rem;
align-items: flex-start;
`

const TestImg3 = Styled.img
`
position: static;
flex-direction: row;
max-width: 59rem;
width: 100%;
height: auto;
flex-direction: row;
@media only screen and (max-width: 1200px){
    width: 80%;
    }
`

const Test3Cont = Styled.div
`
display:flex;
max-width: 59rem;
width: 100%;
margin-left: 3rem;
margin-top: 12rem;
@media only screen and (max-width: 1000px){
        margin-top: 5rem;
    }
`

const Test3Text = Styled.div
`
flex-direction: column;
max-width: 19.5rem;
margin-top: 11.5rem;
margin-left: -6rem;
@media only screen and (max-width: 1200px){
    margin-left: -2rem;
    }
@media only screen and (max-width: 1000px){
    display: none;
    }
`
const Test3Text2 = Styled.div
`
flex-direction: column;
max-width: 19rem;
margin-top: 20rem;
@media only screen and (max-width: 1200px){
    margin-left: 3rem;
    }
@media only screen and (max-width: 1000px){
    display: none;
    }
`

const Test3TextCont = Styled.div
`
display:flex;
flex-direction: column;
margin-left: -17rem;
@media only screen and (max-width: 1000px){
    display: none;
    }
`
const PrototypeContainer = Styled.div
`
display: flex;
position: static;
margin-top: 3rem;
margin-bottom: 2rem;
`
const PrototypeBan = Styled.img
`
max-width: 17.5rem;
width: 100%;
height: auto;
margin-left: 1.5rem;
`

const ProtoText = Styled.div
`
margin-left: -15rem;
margin-top: 1.2rem;
@media only screen and (max-width: 1200px){
       p {
           font-size: 1.5rem;
       } 
    }
`

const ArrowRightImg = Styled.img
`
max-width: 1.1rem;
width: 100%;
height: 2.1rem; 
margin-left: 1rem;
margin-top: 1.2rem;

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
`

const FinalRect = Styled.img
`
display: block;
max-width: 65.5rem;
height: auto;
width: 100%;
@media only screen and (max-width: 1200px){
        width: 100%;
        height: 30.5rem;

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

// const FinalText = Styled.div
// `
// color: #FFF1EC;
// flex-direcction: column;
// max-width: 53.75rem;
// width: 100%;
// height: auto;
// margin-left: 5rem;
// margin-top: -16rem;
//     ul{
//         list-style: none;
//     }
//     li{
//         margin-bottom: 2.2rem;;
//         // margin-right: -20px;
//         font-size: 1.5rem;
//         line-height: 1.5;
//     }
//      @media only screen and (max-width: 1200px){
//         width: 80%;
//        li{
//            font-size: 1rem;
//            margin-bottom: 2.5rem;
//        }
//     }
// `
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
margin-top: -28rem;
margin-left: 2rem;

`

const BulletCont = Styled.div
`
display: flex;
flex-direction:row;
margin-left: 2rem;
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
    margin-top: 3rem;
    margin-bottom: 3rem;
    max-width: 18.75rem;
    width: 100%;
    height: auto;
    `
const Thoughts = Styled.div
`
p{
font-size: 2rem;
margin-bottom: 3rem;
margin-left: 1rem;
@media only screen and (max-width: 1200px){
font-size: 1.5rem;
}
}
color: #FFF1EC;
`