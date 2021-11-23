import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import FCHeader from '../images/ForestryHeader.png';
import FCNav from "../Components/FCNav.js";
import LogoNav from "../Components/LogoNav.js";
import FCImage from '../images/ForestryCampImage.png';
import ProblemHeader from '../images/Problem.png';
import DarkOne from  '../images/DarkOne.png';
import DarkTwo from  '../images/DarkTwo.png';
import ResearchHeader from '../images/ResearchHeader.png';
import CompetitiveImg from '../images/analysis.png';
import SurveyGraphs from '../images/survey.png';
import SurveyBanner from '../images/SurveyBanner.png';
import Brand from '../images/Director.png'
import Manager from '../images/Manager.png'
import Retail from '../images/Retail.png';
import Gap from '../images/GapHeader.png';
import Solution from '../images/SolutionHeader.png';
import Devices from '../images/SolutionImg.png';
import Method from '../images/MethodHeader.png';
import Landing from '../images/Landing.png'
import Sketches from '../images/Sketches.png';
import Wireframe from '../images/Wireframe.png';
import UserFlow from '../images/UserFlow.png';
import FC1 from '../images/FC1.png';
import FC2 from '../images/FC2.png';
import TestCircle from '../images/TestsCircle.png';
import BrandBanner from '../images/BrandBanner.png';
import Reservation from '../images/Reservation.png';
import Outpost from '../images/Outpost.png';
import Time from '../images/Time.png';
import FollowUpRect from '../images/FollowUpRect.png';
import FollowUp from '../images/FollowUp.png';
import ArrowRight from '../images/ArrowRight.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import Return from '../images/Return.png';
import ProtoBan from '../images/PrototypeBanner.png';

const ForestryCamp2 = () => {
    return(
        <>
        <LogoNav/>
        <FCNav/>
            <FCHeaderContainer id="intro">
                <FC className="headers" src={FCHeader} alt='Forestry CAmp Case Study'/>
            </FCHeaderContainer>  
            <FCImg src={FCImage}/>
        <Table>
            <table>
            <tr>
                <td><strong>Overview</strong></td>
                <td>Forestry Camp is a high-end restaurant with two unique dining experiences under one roof. Their current website doesn't meet the brand's needs, and a redesign was requested.</td>
            </tr>
            <tr>
                <td><strong>Timeline</strong></td>
                <td>90 Hours - 5 weeks</td>
            </tr>
            <tr>
                <td><strong>Role</strong></td>
                <td>
                <ul>
                    <li>Responsive mobile design</li>
                    <li>UX writing</li>
                    <li>Experience design</li>
                </ul>
                </td>
            </tr>
            </table>
        </Table>
        <HeaderContainer>
            <Header src={ProblemHeader} id="problem"/>
        </HeaderContainer>
        <Problem>
        <p>"People are still really confused about the difference between our upstairs dining room and downstairs taproom."</p>
        </Problem>
        <NumbersContainer>
        <One src={DarkOne}/>
        <Two src={DarkTwo}/>
        <Prob>
        <ul>
        <li>With two indoor and three outdoor dining spaces, customers don't know which spaces require a reservation and where to eat. </li>
        <li>Many customers are also not aware that Forestry Camp is associated with Burial Beer, one of the most famous breweries on the East Coast. </li>
        </ul>
        </Prob>
        </NumbersContainer>
        <HeaderContainer>
           <Header src={ResearchHeader} id="research"/>
        </HeaderContainer>
        <ComAna>
        <p><strong>Competitive Analysis</strong></p>
        </ComAna>
        <ComImg src={CompetitiveImg}/>
        <ResearchText>
        <p> I conducted competative analysis on fine dining restaurants with unique + multimodal spaces.</p>
        <p> We liked: </p>
        <ul>
            <li> Pages with press sections build brand trust </li>
            <li> Emphasis on photography of multiple spaces </li>
            <li> Sparse backgrounds + interesting serif fonts </li>
            <li> Minimal usage of shadow and gradient </li>
        </ul>
        </ResearchText>
        <SurveyHeader>
        <p><strong>Survey</strong></p>
        </SurveyHeader>
        <SurveyImg src={SurveyGraphs}/>
        <SurveyText>
        <p> I surveyed 15 people from Forestry Camp's target market to hear more about their expectations for a fine dining restaurant. To get <strong> quantative data </strong> I used a likert scale, and for <strong>qualitative data</strong>, multiple-choice and open answer questions.</p> 
        </SurveyText>
        <BannerContainer> 
        <SurvBan src={SurveyBanner}/>
        <p> <strong> Okay, you did a survey. And? </strong> </p>
        </BannerContainer>
        <SurveyList>
        <ul>
            <li><strong> Why visit?</strong> To see the menu and book a reservation.</li>
            <li><strong> Clues to type of experience?</strong> Photos of the building, menus, and photos of the food.</li>
            <li><strong> How do we know it's upscale?</strong> Fancy serif fonts, minimalistic design, an "about the chef," and bougie menu descriptors.</li>
        </ul>    
       </SurveyList>
        <InterviewHeader> 
        <p> <strong> Stakeholder Interviews </strong> </p>
         </InterviewHeader>
         <InterviewText>
        <p> Forestry Camp has an established brand base. I spoke at length with the three stakeholders below, who have a very clear pulse on their needs for Forestry Camp's upcoming website.</p> 
        </InterviewText>
        <PicsContainer>
        <PersonImg src={Brand}/>
        <PersonImg src={Manager}/>
        <PersonImg src={Retail}/>
        </PicsContainer>
        <QuoteContainer>
        <Quote>
        <p class="title"> <strong> Director of Brand </strong> </p>
        <p> "We tried to get our current website to meet our needs, but it's not really working. I would love for the new website to not have a parchment background."</p>
        </Quote>
        <Quote>
        <p class="title"> <strong> Director of Brand </strong> </p>
        <p> "Customers should know the Outpost is a little more within budget for some folks, but it's not great for people that need cushy chairs. Limiting the confusion between the spaces is the goal."</p>
        </Quote>
        <Quote>
        <p class="title"> <strong> General Manager </strong> </p>
        <p> "The cool thing is, most of the beers at Forestry Camp wouldn't be available without relationship with Burial. We want poeple to know that."</p>
        </Quote>
        </QuoteContainer>
        <HeaderContainer>
         <GapHeader src={Gap} id="gap" className="gapIMG"/>
        </HeaderContainer>
        <LandingImg src={Landing}/>
        <LandingText>
        <p><strong> Original Landing Page </strong></p>
        <p><strong> Original About Page </strong></p>
        </LandingText>
         <OriginalText>
        <p> We identified the following issues with the current website:</p>
        <ul>
            <li>Doesn't show enough photos of the incredible space and food</li>
            <li>Multiple fonts and colors</li>
            <li>Third-party reservation system</li>
            <li>Muddle explanation of The Outpost vs. Forestry Camp</li>
        </ul>
        </OriginalText>
        <HeaderContainer>
        <SolutionHeader src={Solution} id="solution"/>
        </HeaderContainer>
        <SolutionImg src={Devices}/>
        <SolutionText>
        <p> A responsive mobile design that proves an <strong> elevated brand message </strong> with an <strong>integrated reservations system</strong> to encourage bookings and visits from customers.</p>
        </SolutionText>
        <HeaderContainer>
        <Header id="method" src={Method}/>
        </HeaderContainer>
        <MethodText>
            <p id="user-flow-header"><strong>User Flow</strong></p>
        </MethodText>
        <MethodContainer>
            <UserFlowImg src={UserFlow}/>
            <p id="user-flow-text">Since customer confusion was the primary focus of my design, this flow <strong> put me in the shoes of a user.</strong> How would they look for information? A clear page for each restaurant section was the answer.</p>
        </MethodContainer>
        <MethodText>
            <p id="sketches-header"><strong>Sketches</strong></p>
        </MethodText>
        <MethodContainer>
                <SketchesImg src={Sketches}/>
                <p id="sketches-text">Physical pencil-and-paper sketching was of utmost importance to me. I tried to sketch <strong> as many crappy ideas as possible,</strong> to help identify the best visual solution to the user's problems.</p>
        </MethodContainer>
        <MethodText>
                 <p id="sketches-header"><strong>Responsive Wireframe</strong></p>
        </MethodText>
        <MethodContainer>
            <WireframeImg src={Wireframe}/>
            <p id="wireframe-text"> Once I knew the direction I wanted to pursue, I made responsive wireframes in Figma. I played around with a chessboard layout, and <strong>heavy utilization of negative space</strong> to fulfill the elevated vibe the team was going for.</p>
        </MethodContainer>
        <MethodText>
                <p id="style-header"><strong>Style Guide</strong></p>
        </MethodText>
        <MethodContainer> 
        <StyleCont>
        <StyleGuide1 src={FC1}/>
        <StyleGuide2 src={FC2}/> 
        </StyleCont>
        <StyleTextCont>
        <p> This was fun. Research showed that fancy restaurants use <strong>minimal color schemes, serif fonts,</strong> and super nice photos. </p>
        <p id="style-text"> I wanted to choose fonts that speak to FC's <strong> focus on restoration and nature, </strong> and use colors that are regularly in the brand's photography.</p> 
        </StyleTextCont>
        </MethodContainer>
        <HeaderContainer>
        <TestHeader id="test" src={TestCircle}/>
        </HeaderContainer>
         <Test>
        <p>A usability test was conducted with three participants in Forestry Camp's target market.</p>
        <p><strong>Goals</strong></p>
        </Test>
         <NumbersContainer>
        <One src={DarkOne}/>
        <Two src={DarkTwo}/>
        <Three src={DarkTwo}/>
        <TestList>
        <ul>
        <li>See if people can define the difference between The Outpost and Forestry Camp.</li>
        <li>Book a reservation for four people of October 19th at 6:30 in the upstairs dining room.</li>
        <li>Identify the brand message being Forestry Camp based on the design. What kind of place is it?</li>
        </ul>
        </TestList>
        </NumbersContainer>
        <Yahoo>
        <p id="final"> Yahoo! 3/3 participants completed goals one and two. </p>
        </Yahoo>
        <BrandContainer>
            <BrandBannerImg src={BrandBanner}/>
            <BrandText> 
            <p> They described the brand as:</p>
            <p id="bottom"><strong>elevated, clean, rustic, preservation-oriented, and fancy.</strong></p>
            </BrandText>
        </BrandContainer>
        <ResCont>
            <ReservationImg src={Reservation}/>
        </ResCont>
        <OutpostCont>
            <OutpostImg src={Outpost}/>
            <p> My usability test showed users were confused which page they were on. I pulled some imagery from the original logo to help users know where they were.</p>
        </OutpostCont>
        <TimeCont>
            <TimeImg src={Time}/>
            <p> Test showed that users were confused why their original time chose (6:30) wasn't available. A quick sentence above the available times will solve that problem!</p>
        </TimeCont>
        <PrototypeContainer>
            <PrototypeBan src={ProtoBan}/>
            <ProtoText>
            <p><strong><a href="https://www.figma.com/proto/Mn4Z4cKysGglGqr0QDkWVl/Forestry-Camp?page-id=299%3A4448&node-id=299%3A4479&viewport=288%2C48%2C0.11&scaling=min-zoom&starting-point-node-id=299%3A4479" target="_blank"> See Prototype </a></strong></p>
            </ProtoText>
            <ArrowRightImg src={ArrowRight}/>
        </PrototypeContainer>
        <HeaderContainer>
            <Header id="follow" src={FollowUp}/>
         </HeaderContainer>
        <FollowUpText>
        <p> It was a great eperience working with such a wonderful and established team.</p>
        </FollowUpText>   
        <FinalCont>
        <FinalRect src={FollowUpRect}/>
            <FinalCont2>
                <Thoughts><p><strong> Final Thoughts </strong></p> </Thoughts>
                <BulletCont>
                    <W1 src={White1}/>
                    <p> I wish I had conducted more interviews and tests with the older demographic that frequents Forestry Camp.</p>
                </BulletCont>
                <BulletCont>
                    <W2 src={White2}/>
                    <p> The reservation feature was added later, and I wish I'd had more time to conduct a more thorough competetive analysis of this feature.</p>
                </BulletCont>
                <BulletCont>
                    <W3 src={White3}/>
                    <p id="three"> I felt like it was a real win that my usability testing showed that the brand's vision was actualized. That made me feel super good.</p>
                </BulletCont>
            </FinalCont2>
        </FinalCont>
        <NavLink to="/"><ReturnImg src={Return}/></NavLink> 
    </>
    )
};

export default ForestryCamp2;


const FCHeaderContainer = Styled.div
    `
   display: flex;
flex-direction: column;
padding: 3rem;
@media only screen and (max-width: 1300px) {
    text-align: center;
    align-items: center;

`

const FC = Styled.img
    `
height: auto;
width: 100%;
max-width: 30rem;
;
    `

const FCImg = Styled.img
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
    margin-bottom: 20rem;
    
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
  margin-top: 2rem;
  margin-left: 2rem;
flex-direction: column;
@media only screen and (max-width: 1200px){
        width: 70%;
`

const Header = Styled.img
`
max-width: 21.4rem;
width: 100%;
height: auto;
#gap {
    max-width: 13.5rem;
    background-color: blue;
}
#solution {
    max-width: 25rem;
}

`

const Problem = Styled.div
`
line-height: 1.2;
width: 62.4rem;
padding-top: 3rem;
margin-left: 1rem;
 p {
    font-size: 2.2rem;
    font-weight: 500;
    }
    @media only screen and (max-width: 1200px){
        width: 90%;
       p{
           font-size: 1.5rem;
       }
    }
`

const Prob = Styled.div
`
flex-direcction: column;
max-width: 53.75rem;
width: 100%;
height: auto;
margin-left: 5rem;
margin-top: -10rem;
    ul{
        list-style: none;
    }
    li{
        margin-bottom: 2.2rem;;
        // margin-right: -20px;
        font-size: 1.5rem;
        line-height: 1.5;
    }
     @media only screen and (max-width: 1200px){
        width: 80%;
        margin-top: -9rem;
       li{
           font-size: 1rem;
       }
    }
`

const One = Styled.img
`
flex-direction: row;
width: 2rem;
height: auto;
margin-top: 2rem;
`

const Two = Styled.img
`
flex-direction: row;
width: 2rem;
height: auto;
margin-top: 5rem;
  @media only screen and (max-width: 1200px){
       margin-top: 4rem;
    }
`
const Three = Styled.img
`
flex-direction: row;
width: 2rem;
height: auto;
margin-top: 5rem;
  @media only screen and (max-width: 1200px){
       margin-top: 4rem;
    }
`

const NumbersContainer = Styled.div
`
display: flex;
flex-direction: column;
margin-left: 1.5rem;
`

const ComAna = Styled.div
`
position: static;
margin-left: 1.5rem;
margin-top: 1.5rem;
p{
font-size: 2rem;
}
`

const ComImg = Styled.img
`
position: static;
max-width: 60.6rem;
width: 100%;
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
@media only screen and (max-width: 1200px){
        width: 90%;
}
`

const ResearchText = Styled.div
`
position: static;
margin-left: 1.5rem;
margin-top: 1rem;
font-size: 1.5rem;
line-height: 4rem;
li {
    margin-left: 7rem;
    line-height: 2;
    list-style: inside;
}
@media only screen and (max-width: 1200px){
        li {
         font-size: 1rem;
        margin-left: 3rem;

        }
        p{
        font-size: 1rem;
        line-height: 1.2;
        margin-top: 0.9rem;
        }
}
`


const SurveyHeader = Styled.div
`
position: static;
margin-left: 1.5rem;
margin-top: 1.5rem;
p{
font-size: 2rem;
}
`

const SurveyImg = Styled.img
`
position: static;
max-width: 59rem;
width: 100%
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
@media only screen and (max-width: 1200px){
        width: 90%;
}
`

const SurveyText = Styled.div
`
position: static;
max-width: 59rem;
width: 100%
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
font-size: 1.5rem;
@media only screen and (max-width: 1200px){
        p{
        font-size: 1rem;
        line-height: 1.2;
        margin-top: 0.9rem;
        }
}
`
const SurvBan = Styled.img
`
position: static;
width: 24rem;
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;

`

const BannerContainer = Styled.div
`
position: static;
p{
    font-size: 1.6rem;
    margin-left: 2.8rem;
    margin-top: -4.2rem;
}
`
const SurveyList = Styled.div
`
position: static;
font-size: 1.5rem;
line-height: 1.4;
margin-left: 3rem;
margin-top: 3rem;
max-width: 59rem;
width: 100%
height: auto;
    li{
        list-style: inside;
        margin-bottom: 0.5rem;
    }    
@media only screen and (max-width: 1200px){
    li{
        font-size: 1rem;
    }
}
`

const InterviewHeader = Styled.div
`
position: static;
margin-left: 1.5rem;
margin-top: 1.5rem;
p{
font-size: 2rem;
}
`

const InterviewText = Styled.div
`
position: static;
max-width: 59rem;
width: 100%
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
font-size: 1.5rem;
@media only screen and (max-width: 1200px){
        p{
        font-size: 1rem;
        line-height: 1.2;
        margin-top: 0.9rem;
        }
}

`
const PicsContainer = Styled.div
`
display: flex;
position: static;
flex-direction: row;
justify-content: space-around;
margin-top: 2rem;
max-width: 59rem;
width: 100%;
height: auto;

`
const PersonImg = Styled.img
`
max-width: 12rem;
width: 100%;
height: auto;
@media only screen and (max-width: 1200px){
width: 30%;
height: 30%;
}
`

const QuoteContainer = Styled.div
`
display: flex;
position: static;
flex-direction: row;
justify-content: space-around;
margin-top: 2rem;
max-width: 59rem;
width: 100%;
height: auto;

`
const Quote = Styled.div

`
font-size: 1.5rem;
text-align: center;
width: 33rem;
.title{
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    }
@media only screen and (max-width: 1200px){
        p{
            font-size: 1rem;
        }
        .title{
            font-size: 1.5rem;
        }
`


const LandingImg = Styled.img
`
position: static;
max-width: 60rem;
width: 100%;
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
@media only screen and (max-width: 1200px){
        width: 90%;
}
`

const LandingText = Styled.div
`
position: static;
display: flex;
flex-direction: row;
max-width: 60rem;
width: 100%;
height: auto;
justify-content: space-around;
margin-top: 1.5rem;
`

const OriginalText = Styled.div
`
position: static;
margin-top: 1.5rem;
margin-left: 1.5rem;
ul{
    margin-left: 1.5rem;
    line-height: 1.2;
    margin-top: 1rem;
    font-size: 1.5rem;
     @media only screen and (max-width: 1200px){
        font-size: 1rem;
    }
}
`
const SolutionImg = Styled.img
`
position: static;
max-width: 79rem;
width: 100%;
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
 @media only screen and (max-width: 1200px){
        width: 90%;
    }
`

const SolutionText = Styled.div

`
position: static;
margin-top: -8rem;
margin-left: 2.5rem;
margin-bottom: 2.5rem;
max-width: 38rem;
width: 100%;
height: auto;
 @media only screen and (max-width: 1300px){
        width: 80%;
        margin-top: 1rem;

    }
`
const MethodContainer = Styled.div
`
display: flex;
position: static;
flex-direction: row;
max-width: 60rem;
width: 100%;
height: auto;
margin-left: 2rem;
margin-top: 2rem;
align-items: center;
 p{
     margin-left: 1rem;
     max-width: 18.75rem;
 }
 #style-text {
     margin-top: 1rem;
 }
 @media only screen and (max-width: 1200px){
    flex-wrap: wrap;
    p{
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    width: 100%;
    height: auto;
    }
    #wireframe-text{
         margin-top: 1.5rem;
 }
}
`
const UserFlowImg = Styled.img
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
        justify-content: center;
    }
`

const SketchesImg = Styled.img
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
    }
`

const WireframeImg = Styled.img
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
    }
`


const MethodText = Styled.div
`
postion: static;
margin-left: 3.2rem;
margin-top: 3rem;
// justify-content: center;
// align-items: center;
p{
    font-size: 2rem;
}
 @media only screen and (max-width: 1200px){
     p{
        font-size: 1.5rem;
     }
}
`

const StyleGuide1 = Styled.img
`
position: static;
max-width: 20rem;
width: 100%;
height: auto;
row-gap: 0px;
margin-top: 1.5rem;
margin-left: 1.5rem;
@media only screen and (max-width: 1200px){
        width: 80%;
        margin-top: 1rem;
    }

`

const StyleGuide2 = Styled.img
`
position: static;
max-width: 20rem;
width: 100%
height: auto;
row-gap: 0px;
margin-top: 1.5rem;
margin-left: 1.5rem;
@media only screen and (max-width: 1200px){
        width: 70%;
        margin-top: 1rem;
    }

`

const StyleCont = Styled.div
`
display: flex;
flex-direction: row;
position: static;
height: auto;
margin-right: 2rem;
@media only screen and (max-width: 1200px){
    flex-wrap:wrap;
}
`

const StyleTextCont = Styled.div
`
display: flex;
flex-direction: column;
position: static;
justify-content: center;
margin-left: 1.5rem;
@media only screen and (max-width: 1200px){
        margin-left: 7rem;
    }
@media only screen and (max-width: 1200px){
        margin-left: 0rem;
    }
`
const Test = Styled.div
`
position: static;
margin-left: 2rem;
p{
  margin-bottom: 1.5rem;
margin-top: 1.5rem;  
}

`

const TestList = Styled.div
`
flex-dreiction: column;
max-width: 53.75rem;
width: 100%;
height: auto;
margin-left: 5rem;
    ul{
        list-style: none;
        margin-top: -18rem;
    }
    li{
        margin-bottom: 2.2rem;;
        font-size: 1.5rem;
        line-height: 1.8;
    }
     @media only screen and (max-width: 1200px){
        width: 80%;
        margin-top: 2.5rem;
       li{
           font-size: 1rem;
           line-height: 2rem;
       }
    }
`
const Yahoo = Styled.div
`
position: static;
margin-left: 2rem;
`

const BrandContainer = Styled.div
`
position: static;
margin-top: 3rem;
max-width: 52.4rem;
width: 100%;
height: auto;
`

const BrandBannerImg = Styled.img
`
max-width: 52.4rem;
width: 100%;
height: auto;
`


const BrandText = Styled.div
`
max-width: 52.4rem;
width: 100%;
height: auto;
font-size: 1.6rem;
margin-top: -8rem;
text-align: center;
p{
    margin-bottom: 0.8rem;
}
#bottom{
    font-size: 2rem;
    @media only screen and (max-width: 1200px){
        font-size: 1rem;
}
}
    @media only screen and (max-width: 1200px){
        margin-top: -7rem;
    }
    @media only screen and (max-width: 600px){
        margin-top: -5rem;
    }
`

const ReservationImg = Styled.img
`
position: static;
max-width: 60.8rem;
width: 100%;
height: auto;
margin-left: 1.5rem;
margin-top: 5rem;
@media only screen and (max-width: 1200px){
        width: 80%;
    }
`

const ReservationText = Styled.div
`
margin-top: -70rem;
margin-left: 43.75rem;
max-width: 20rem;
width: 100%;
height: auto;
@media only screen and (max-width: 1200px){
        display: none;
    }
`
const ReservationText2 = Styled.div
`
margin-top: 50rem;
margin-left: 4.5rem;
max-width: 20rem;
width: 100%;
height: auto;
p{
    text-align: right;
}
@media only screen and (max-width: 1200px){
        display: none;
    }  
`
const OutpostImg = Styled.img
`
position: static;
max-width: 47.1rem;
width: 100%;
height: auto;
margin-top: 1rem;
margin-left: 1.5rem;
 @media only screen and (max-width: 1200px){
        width: 80%;
        margin-top: 1rem;
        margin-left: -1rem;

    }

`
const TimeImg = Styled.img
`
position: static;
max-width: 39.4rem;
width: 100%;
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
 @media only screen and (max-width: 1200px){
        width: 80%;
        margin-top: 1rem;
        margin-left: -1rem;

    }
`


const OutpostCont = Styled.div
`
position: static;
display: flex;
flex-direction: row;
margin-left: 3rem;
p{
    margin-top: 4rem;
    margin-left: -5rem;
    max-width: 20rem;
    width: 100%;
    height: auto;
    @media only screen and (max-width: 1200px){
        display: none;
    }  
}
`

const TimeCont = Styled.div
`
display: flex;
flex-direction: row;
position: static;
margin-left: 3rem;
p{
    margin-top: 20rem;
    margin-left: 1rem;
    max-width: 20rem;
    width: 100%;
    height: auto;
    @media only screen and (max-width: 1200px){
        display: none;
    }  
 
}
`

const ResCont = Styled.div
`
position: static;
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

const BulletCont = Styled.div
`
display: flex;
flex-direction:row;
margin-left: 2rem;
// justify-content: space-between;
margin-bottom: 2.5rem;
margin-right: 1.5rem;
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