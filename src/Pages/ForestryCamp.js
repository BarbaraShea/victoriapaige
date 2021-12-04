import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import FCHeader from '../images/ForestryHeader.png';
import Nav from "../Components/Nav.js";
import LogoNav from "../Components/LogoNav.js";
import FCImage from '../images/ForestryCampImage.png';
import ProblemHeader from '../images/Problem.png';
import DarkOne from  '../images/DarkOne.png';
import DarkTwo from  '../images/DarkTwo.png';
import DarkThree from  '../images/DarkThree.png';
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
import FC1 from '../images/FCStyleGuideImg.png';
import TestCircle from '../images/TestsCircle.png';
import BrandBanner from '../images/BrandBanner.png';
import FCTest1 from '../images/FCTest1.png';
import FCTest2 from '../images/FCTest2.png';
import FCTest3 from '../images/FCTest3.png';
import FollowUpRect from '../images/FollowUpRect.png';
import FollowUp from '../images/FollowUp.png';
import ArrowRight from '../images/ArrowRight.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import Return from '../images/Return.png';
import ProtoBan from '../images/SeeProto.png';
import MobileNav from '../Components/MobileNavCS'

const ForestryCamp2 = () => {
    
    return(
        <>
        <MobileNav/>
        <div id="page-wrap">
        <LogoNav/>
        <Nav/>
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
        <BulletCont>
        <Number src={DarkOne}/>
        <p className="prob">With two indoor and three outdoor dining spaces, customers don't know which spaces require a reservation and where to eat. </p>
        </BulletCont>
        <BulletCont>
        <Number src={DarkTwo}/>
        <p className="prob">Many customers are also not aware that Forestry Camp is associated with Burial Beer, recently voted best small brewery in the world by Craft Beer Brew. </p>
        </BulletCont>
        <HeaderContainer>
           <Header src={ResearchHeader} id="research"/>
        </HeaderContainer>
        <ComAna>
        <p><strong>Competitive Analysis</strong></p>
        </ComAna>
        <ComImg src={CompetitiveImg}/>
        <ResearchText>
        <p> I conducted competitive analysis on fine dining restaurants with unique + multimodal spaces.</p>
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
        <SurvBan src={SurveyBanner}/>
        <SurveyList>
        <ul>
            <li><strong> Why do people visit restaurant websites?</strong> To see the menu and book a reservation.</li>
            <li><strong> What are people looking for?</strong> Photos of the building, menus, and photos of the food.</li>
            <li><strong> How do we know it’s upscale?</strong> Fancy serif fonts, minimalistic design, an "about the chef," and bougie menu descriptors.</li>
        </ul>    
       </SurveyList>
        <InterviewHeader> 
        <p> <strong> Stakeholder Interviews </strong> </p>
         </InterviewHeader>
         <InterviewText>
        <p> Forestry Camp has an established brand base. I spoke at length with the three stakeholders below, who have a very clear pulse on their needs for Forestry Camp's upcoming website.</p> 
        </InterviewText>
        <PicsQuoteCont>
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
        </PicsQuoteCont>
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
            <li>Muddled explanation of The Outpost vs. Forestry Camp</li>
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
            <p><strong>User Flow</strong></p>
        </MethodText>
        <MethodContainer>
            <MethodImg src={UserFlow}/>
            <p>Since reducing customer confusion was the primary focus of my design, this flow <strong> put me in the shoes of a user.</strong> How would they look for information? A clear page for each restaurant section was the answer.</p>
        </MethodContainer>
        <MethodText>
            <p><strong>Sketches</strong></p>
        </MethodText>
        <MethodContainer>
                <MethodImg src={Sketches}/>
                <p>Physical pencil-and-paper sketching was of utmost importance to me. I tried to sketch <strong> as many crappy ideas as possible,</strong> to help identify the best visual solution to the user's problems.</p>
        </MethodContainer>
        <MethodText>
                 <p><strong>Responsive Wireframe</strong></p>
        </MethodText>
        <MethodContainer>
            <MethodImg src={Wireframe}/>
            <p> Once I knew the direction I wanted to pursue, I made responsive wireframes in Figma. I played around with a chessboard layout, and <strong>heavy utilization of negative space</strong> to fulfill the elevated vibe we wanted.</p>
        </MethodContainer>
        <MethodText>
                <p><strong>Style Guide</strong></p>
        </MethodText>
        <MethodContainer> 
        <MethodImg src={FC1}/>
        <p> This was fun. Research showed that fancy restaurants use <strong>minimal color schemes, serif fonts,</strong> and super nice photos. </p>
        <p> I wanted to choose fonts that speak to FC's <strong> focus on restoration and nature, </strong> and use colors that are regularly in the brand's photography.</p> 
        </MethodContainer>
        <HeaderContainer>
        <TestHeader id="test" src={TestCircle}/>
        </HeaderContainer>
         <Test>
        <p>A usability test was conducted with three participants in Forestry Camp's target market.</p>
        <p><strong>Goals</strong></p>
        </Test>
         <BulletCont>
        <Number src={DarkOne}/>
        <p className="test">See if people can define the difference between The Outpost and Forestry Camp.</p>
        </BulletCont>
        <BulletCont>
        <Number src={DarkTwo}/>
        <p className="test">Book a reservation for four people of October 19th at 6:30 in the upstairs dining room.</p>
        </BulletCont>
        <BulletCont>
        <Number src={DarkThree}/>
        <p className="test">Identify the brand message being Forestry Camp based on the design. What kind of place is it?</p>
        </BulletCont>
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
            <TestImg src={FCTest1}/>
            <TestImg src={FCTest2}/>
            <TestImg src={FCTest3}/>
        <ProtoCont id="proto">
        <div><a href="https://www.figma.com/proto/Mn4Z4cKysGglGqr0QDkWVl/Forestry-Camp?page-id=299%3A4448&node-id=299%3A4479&viewport=288%2C48%2C0.11&scaling=min-zoom&starting-point-node-id=299%3A4479" target="_blank"> <PrototypeBan src={ProtoBan}/> </a></div>
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
                    <Number src={White1}/>
                    <p> I wish I had conducted more interviews and tests with the older demographic that frequents Forestry Camp.</p>
                </BulletCont>
                <BulletCont>
                    <Number src={White2}/>
                    <p> The reservation feature was added later, and I wish I'd had more time to conduct a more thorough competetive analysis of this feature.</p>
                </BulletCont>
                <BulletCont>
                    <Number src={White3}/>
                    <p id="three"> I felt like it was a real win that my usability testing showed that the brand's vision was actualized. That made me feel super good.</p>
                </BulletCont>
            </FinalCont2>
        </FinalCont>
        <NavLink to="/"><ReturnImg src={Return}/></NavLink> 
        </div>
    </>
    )
};

export default ForestryCamp2;
const PicsQuoteCont = Styled.div
`
display: flex;
flex-direction: column;
    @media only screen and (max-width: 600px){
        display: flex;
        flex-direction: row;
    }

`


const ProtoCont =Styled.div
`
position: static;
`


const FCHeaderContainer = Styled.div
    `
   display: flex;
flex-direction: column;
margin-top: 4.5%;
margin-left: 4.5%;
margin-right: 4.5%;
margin-bottom: 2%;
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

const Problem = Styled.div
`
line-height: 1.2;
width: 62.4rem;
margin-left: 4.5%;
position: static;
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



const ComAna = Styled.div
`
position: static;
margin-left: 4.5%;
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
margin-left: 4.5%;
margin-top: 1.5rem;
@media only screen and (max-width: 1200px){
        width: 90%;
}
`

const ResearchText = Styled.div
`
position: static;
margin-left: 4.5%;
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
        margin-left: 0rem;

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
margin-left: 4.5%;
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
margin-left: 4.5%;
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
margin-left: 4.5%;
margin-right: 4.5%;
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
max-width: 24rem;
height: auto;
margin-top: 1.5rem;
margin-left: 4.5%;
@media only screen and (max-width: 1200px){
    width: 80%;
}
`

const SurveyList = Styled.div
`
position: static;
font-size: 1.5rem;
line-height: 1.4;
margin-left: 4.5%;
margin-top: 4.5%;
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
margin-top: 3rem;
margin-left: 4.5%;
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
margin-left: 4.5%;
margin-right: 4.5%;
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
margin-left: 4.5%;
@media only screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        margin-right: 0rem;
        justify-content: space-around;
        row-gap: 1rem;
    }
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
@media only screen and (max-width: 600px){
width: 100%;
height: auto;
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
margin-left: 4.5%;
margin-right: 4.5%;
 @media only screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
    }

`
const Quote = Styled.div

`
font-size: 1.5rem;
text-align: center;
max-width: 19rem;
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
margin-left: 4.5%;
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
margin-left: 4.5%;
margin-right: 4.5%;
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
margin-left: 4.5%;
margin-top: 1.5rem;
 @media only screen and (max-width: 1200px){
        width: 90%;
    }
`

const SolutionText = Styled.div

`
position: static;
margin-top: -8rem;
margin-left: 4.5%;
margin-right: 4.5%;
margin-bottom: 3rem;
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
max-width: 65rem;
width: 100%;
height: auto;
margin-left: 4.5%;
margin-top: 2rem;
align-items: center;
 p{
     margin-left: 1rem;
     max-width: 25rem;
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
 }
}
`

const MethodImg = Styled.img
`
position: static;
max-width: 39rem;
width: 100%
height: auto;
margin-top: 1.5rem;
 @media only screen and (max-width: 1200px){
        width: 80%;
        margin-top: 1rem;
        justify-content: center;
    }
`

const MethodText = Styled.div
`
postion: static;
margin-left: 4.5%;
margin-right: 4.5%;
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

const StyleGuide1 = Styled.img
`
position: static;
max-width: 39rem;
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

const Test = Styled.div
`
position: static;
margin-left: 4.5%;
p{
  margin-bottom: 1.5rem;
margin-top: 1.5rem;  
}

`

const Yahoo = Styled.div
`
position: static;
margin-left: 4.5%;
`

const BrandContainer = Styled.div
`
position: relative;
margin-top: 4.5%;
max-width: 52.4rem;
width: 100%;
height: auto;
`

const BrandBannerImg = Styled.img
`
width: 100%;
height: auto;
  @media only screen and (max-width: 1000px){
        height: 7.5rem;
        }
`


const BrandText = Styled.div
`
position: absolute;
max-width: 52.4rem;
width: 100%;
height: auto;
font-size: 1.6rem;
top: -8%;
left: 2%;
right: 2%;
text-align: center;
p{
    margin-bottom: -0.5rem;
}
#bottom{
    font-size: 1.5rem;
    @media only screen and (max-width: 600px){
        font-size: 1rem;
        margin-right: 5%;
}
`

const TestImg = Styled.img
`
position: static;
max-width: 60rem;
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
margin-top: 2rem;
margin-left: 4.5%;
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
const Number = Styled.img
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
margin-bottom: 4%;
align-items: baseline;
margin-left: 4%;
p{
    color: #FFF1EC;
    margin-left: 2rem;
    max-width: 50rem;
}

.test {
   color: #360713;
   max-width: 52rem;
}

.prob{
   color: #360713;
   max-width: 58rem;
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
margin-bottom: 1rem;
margin-left: 1rem;
margin-top: 3rem;
@media only screen and (max-width: 1200px){
font-size: 1.5rem;
}
}
color: #FFF1EC;
`