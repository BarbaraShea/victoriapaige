import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import FCHeader from '../images/ForestryHeader.png';
import FCNav from "../Components/FCNav.js";
import LogoNav from "../Components/LogoNav.js";
import FCImage from '../images/ForestryCampImage.png';
import ProblemHeader from '../images/Problem.png';
import NumCir from '../images/numcircle.png';
import One from '../images/1.png';
import Two from '../images/2.png';
import Three from '../images/3.png';
import ResearchHeader from '../images/ResearchHeader.png';
import CompetitiveImg from '../images/analysis.png';
import SurveyGraphs from '../images/survey.png';
import SurveyBanner from '../images/SurveyBanner.png'
import Brand from '../images/Director.png'
import Manager from '../images/Manager.png'
import Retail from '../images/Retail.png'
import Landing from '../images/Landing.png'
import Gap from '../images/GapHeader.png';
import Solution from '../images/SolutionHeader.png';
import Devices from '../images/SolutionImg.png';
import Method from '../images/MethodHeader.png';
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
import Return from '../images/Return.png'


const ForestryCamp = () => {
    return (
        <>
        <LogoNav/>
        <FCNav/>
        <FCWrapper>
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
        <PHeader src={ProblemHeader} id="problem"/>
        <Problem>
        <p>"People are still really confused about the difference between our upstairs dining room and downstairs taproom."</p>
        </Problem>
        <Num1 src={NumCir}/>
        <NumOne src={One}/>
        <Num2 src={NumCir}/>
        <NumTwo src={Two}/>
        <Prob>
        <p>With two indoor and three outdoor dining spaces, customers don't know which spaces require a reservation and where to eat. </p>
        <p>Many customers are also not aware that Forestry Camp is associated with Burial Beer, one of the most famous breweries on the East Coast. </p>
        </Prob>
        <RHeader src={ResearchHeader} id="research"/>
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
        <SurvBan src={SurveyBanner}/>
        <BannerText> 
        <p> <strong> Okay, you did a survey. And? </strong> </p>
         </BannerText>
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
        <BrandImg src={Brand}/>
        <ManagerImg src={Manager}/>
        <RetailImg src={Retail}/>
        <Quote1>
        <p class="title"> <strong> Director of Brand </strong> </p>
        <p> "We tried to get our current website to meet our needs, but it's not really working. I would love for the new website to not have a parchment background."</p>
        </Quote1>
        <Quote2>
        <p class="title"> <strong> Director of Brand </strong> </p>
        <p> "Customers should know the Outpost is a little more within budget for some folks, but it's not great for people that need cushy chairs. Limiting the confusion between the spaces is the goal."</p>
        </Quote2>
        <Quote3>
        <p class="title"> <strong> General Manager </strong> </p>
        <p> "The cool thing is, most of the beers at Forestry Camp wouldn't be available without relationship with Burial. We want poeple to know that."</p>
        </Quote3>
        <GapHeader src={Gap} id="gap"/>
        <LandingImg src={Landing}/>
        <LandingText>
        <p><strong> Original Landing Page </strong></p>
        </LandingText>
        <AboutText>
        <p><strong> Original About Page </strong></p>
        </AboutText>
        <OriginalText>
        <p> We identified the following issues with the current website:</p>
        <ul>
            <li>Doesn't show enough photos of the incredible space and food</li>
            <li>Multiple fonts and colors</li>
            <li>Third-party reservation system</li>
            <li>Muddle explanation of The Outpost vs. Forestry Camp</li>
        </ul>
        </OriginalText>
        <SolutionHeader src={Solution} id="solution"/>
        <SolutionImg src={Devices}/>
        <SolutionText>
        <p> A responsive mobile design that proves an <strong> elevated brand message </strong> with an <strong>integrated reservations system</strong> to encourage bookings and visits from customers.</p>
        </SolutionText>
        <MethodHeader id="method" src={Method}/>
        <MethodText>
            <p id="user-flow-header"><strong>User Flow</strong></p>
            <p id="user-flow-text">Since customer confusion was the primary focus of my design, this flow <strong> put me in the shoes of a user.</strong> How would they look for information? A clear page for each restaurant section was the answer.</p>
            <p id="sketches-header"><strong>Sketches</strong></p>
            <p id="sketches-text">Physical pencil-and-paper sketching was of utmost importance to me. I tried to sketch <strong> as many crappy ideas as possible,</strong> to help identify the best visual solution to the user's problems.</p>
            <p id="wireframe-header"><strong>Responsive Wireframe</strong></p>
            <p id="wireframe-text"> Once I knew the direction I wanted to pursue, I made responsive wireframes in Figma. I played around with a chessboard layout, and <strong>heavy utilization of negative space</strong> to fulfill the elevated vibe the team was going for.</p>
            <p id="style-header"><strong>Style Guide</strong></p>
            <p id="style-text"> This was fun. Research showed that fancy restaurants use <strong>minimal color schemes, serif fonts,</strong> and super nice photos. </p>
            <p id="style-text-2"> I wanted to chose fonts that speak to FC's <strong> focus on restoration and nature, </strong> and use colors that are regularly in the brand's photography.</p> 
        </MethodText>
        <UserFlowImg src={UserFlow}/>
        <SketchesImg src={Sketches}/>
        <WireframeImg src={Wireframe}/>
        <StyleGuide1 src={FC1}/>
        <StyleGuide2 src={FC2}/>
        <TestBanner id="test" src={TestCircle}/>
         <Test>
        <p>A usability test was conducted with three participants in Forestry Camp's target market.</p>
        <p><strong>Goals</strong></p>
        </Test>
        <Number1 src={NumCir}/>
        <NumberOne src={One}/>
        <Number2 src={NumCir}/>
        <NumberTwo src={Two}/>
        <Number3 src={NumCir}/>
        <NumberThree src={Three}/>
        <TestBullets>
        <p>See if people can define the difference between The Outpost and Forestry Camp.</p>
        <p>Book a reservation for four people of October 19th at 6:30 in the upstairs dining room.</p>
        <p>Identify the brand message being Forestry Camp based on the design. What kind of place is it?</p>
        <p id="final"> Yahoo! 3/3 participants completed goals one and two. </p>
        </TestBullets>
        <BrandBannerImg src={BrandBanner}/>
        <BrandText> 
        <p> They described the brand as:</p>
        <p id="bottom"><strong>elevated, clean, rustic, preservation-oriented, and fancy.</strong></p>
        </BrandText>
        <ReservationImg src={Reservation}/>
        <ReservationText>
        <p>I felt like my reservation modal looked a little too wireframey. So, I reduced the contrast, reducaed the text and icon size, and the length of the text bars.</p>
        </ReservationText>
        <ReservationText2>
        <p> I also reduced the spacing between dining areas, so users would see they could scroll down here.</p>
        </ReservationText2>
        <OutpostImg src={Outpost}/>
        <OutpostText>
        <p> My usability test showed users were confused which page they were on. I pulled some imagery from the original logo to help users know where they were.</p>
        </OutpostText>
        <TimeImg src={Time}/>
        <TimeText>
        <p> Test showed that users were confused why their original time chose (6:30) wasn't available. A quick sentence above the available times will solve that problem!</p>
        </TimeText>
        <PrototypeBan src={BrandBanner}/>
        <ProtoText>
        <p><strong><a href="https://www.figma.com/proto/Mn4Z4cKysGglGqr0QDkWVl/Forestry-Camp?page-id=299%3A4448&node-id=299%3A4479&viewport=288%2C48%2C0.11&scaling=min-zoom&starting-point-node-id=299%3A4479" target="_blank"> See Prototype </a></strong></p>
        </ProtoText>
        <ArrowRightImg src={ArrowRight}/>
        <FollowUpHeader id="follow" src={FollowUp}/>
        <FollowUpText>
        <p> It was a great eperience working with such a wonderful and established team.</p>
        </FollowUpText>    
        <FinalRect src={FollowUpRect}/>
        <W1 src={White1}/>
        <W2 src={White2}/>
        <W3 src={White3}/>
        <FinalText>
        <p><strong> Final Thoughts </strong></p>
        <ul>
            <li> I wish I had conducted more interviews and tests with the older demographic that frequents Forestry Camp.</li>
            <li> The reservation feature was added later, and I wish I'd had more time to conduct a more thorough competetive analysis of this feature.</li>
            <li> I felt like it was a real win that my usability testing showed that the brand's vision was actualized. That made me feel super good. </li>
        </ul>
        </FinalText>
        <NavLink to="/"><ReturnImg src={Return}/></NavLink> 
        </FCWrapper>
        </>
    )
};

export default ForestryCamp;

const FCWrapper = Styled.div
`
max-width: 1280px;
margin 0 auto;
display: static;
`

const FCHeaderContainer = Styled.div
    `
    display: block;
    align-items: left;
    justify-content: left;
`

const FC = Styled.img
    `
    position: absolute;
    left: 3.58%;
    right: 61.08%;
    top: 6.5%;
    width: 28.125rem;
    height: 4.063rem;
    @media only screen and (max-width: 600px){
        width: 90%;
    }
    `

const FCImg = Styled.img
    `
    max-width: 65rem;
    width: 100%;
    height: auto;
    left: 4.375rem;
    padding: 1rem;
    top: 1.875rem;
    margin: 1rem;
    @media only screen and (max-width: 600px){
        width: 90%;
        align-items: center;
    }
    `

const TableContainer = Styled.div
`
`
const Table = Styled.div
    `
    width: 70rem;
    height: 2.875rem;
    left: 0.5rem;
    // right: 22.5rem;
    // top: 35rem;
    margin-bottom: 2rem;
    
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
const ProblemContainer = Styled.div
`
`

const PHeader = Styled.img
`
// left: 3.5rem;
// top: 90.875rem;
position: static;
max-width: 343px;
width: 100%;
height: auto;
  @media only screen and (max-width: 600px){
        width: 100%;
        max-width: 390px;
        align-items: center;
    }
`

const Problem = Styled.div
`
position: static;
line-height: 1.2;
left: 0px;
top: 1300px;
right: 220px;
color: #360713;
 p {
    font-size: 35px;
    font-weight: 500;
    }
`

const Num1 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 92px;
top: 1440px;
`

const Num2 = Styled.img

`
position: absolute;
width: 33px;
height: 33px;
left: 92px;
top: 1550px;
`

const NumOne = Styled.img

`
position: absolute;
width: 7px;
height: 17px;
left: 102px;
top: 1448px;
`

const NumTwo = Styled.img
`
position: absolute;
width: 11px;
height: 18px;
left: 102px;
top: 1555px;

`

const Prob = Styled.div
`
position: absolute;
width: 860px;
height: 60px;
left: 100px;
top: 1430px;
    p{
        margin-bottom: 37px;
        margin-right: -20px;
        font-size: 24px;
        line-height: 1.5;
    }
`


const RHeader = Styled.img
`
position: absolute;
width: 360px;
height: 87.38px;
left: 40px;
top: 1700px;
`

const ComAna = Styled.div
`
position: absolute;
left: 0px;
top: 1830px;
p{
font-size: 32px;
}
`

const ComImg = Styled.img
`
position: absolute;
width: 970px;
height: 163px;
left: 70px;
top: 1900px;
`

const ResearchText = Styled.div
`
position: absolute;
top: 2100px;
left: 0px;
font-size: 24px;
line-height: 1.2;
li {
    margin-left: 100px;
}
`

const SurveyHeader = Styled.div
`
position: absolute;
left: 0px;
top: 2380px;
p{
font-size: 32px;
}
`

const SurveyImg = Styled.img
`
position: absolute;
width: 952.56px;
height: 438.57px;
left: 74px;
top: 2460px;
`

const SurveyText = Styled.div
`
position: absolute;
font-size: 24px;
line-height: 1.5;
right: 200px;
top: 2950px;
left: 0px;

`

const SurvBan = Styled.img
`
position: absolute;
width: 382px;
height: 89px;
left: 55px;
top: 3100px;

`

const BannerText = Styled.div
`
position: absolute;
left: 0px;
top: 3120px;
right: 160px;
p{
    font-size: 26px;
}
`
const SurveyList = Styled.div
`
position: absolute;
font-size: 24px;
line-height: 1.3;
right: 280px;
top: 3240px;
left: 100px;

`

const InterviewHeader = Styled.div
`
position: absolute;
left: 0px;
top: 3430px;
p{
  font-size: 32px;  
}
`

const InterviewText = Styled.div
`
position: absolute;
font-size: 24px;
line-height: 1.5;
right: 120px;
top: 3505px;
left: 0px;

`

const BrandImg = Styled.img
`
position: absolute;
width: 200px;
height: 200px;
left: 100px;
top: 3650px;
`

const ManagerImg = Styled.img

`
position: absolute;
width: 200px;
height: 200px;
left: 450px;
top: 3650px;
`

const RetailImg = Styled.img

`position: absolute;
width: 200px;
height: 200px;
left: 800px;
top: 3650px;
`

const Quote1 = Styled.div

`
position: absolute;
top: 3880px;
left: -30px;
right: 100px;
font-size: 24px;
text-align: center;
width: 550px;
.title{
    font-size: 30px;
}
`

const Quote2 = Styled.div

`
position: absolute;
top: 3880px;
left: 320px;
right: 160px;
font-size: 24px;
text-align: center;
width: 550px;
.title{
    font-size: 30px;
}
`

const Quote3 = Styled.div

`
position: absolute;
top: 3880px;
left: 685px;
right: 160px;
font-size: 24px;
text-align: center;
width: 530px;
.title{
    font-size: 30px;
}
`

const GapHeader = Styled.img
`
position: absolute;
width: 276px;
height: 81px;
left: 70px;
top: 4300px;
`


const LandingImg = Styled.img
`
position: absolute;
width: 965px;
height: 283px;
left: 83px;
top: 4400px;
`

const LandingText = Styled.div
`
position: absolute;
top: 4700px;
left: 120px;
font-size: 24px;

`
const AboutText = Styled.div
`
position: absolute;
top: 4700px;
left: 620px;
font-size: 24px;

`

const OriginalText = Styled.div
`
position: absolute;
top: 4780px;
font-size: 24px;
left:0px;
ul{
    margin-left: 30px;
    line-height: 1.2;
    margin-left: 100px;
}

`

const SolutionHeader = Styled.img
`
position: absolute;
width: 480px;
height: 60px;
left: 68px;
top: 5000px;

`


const SolutionImg = Styled.img
`
position: absolute;
width: 1263px;
height: 887px;
left: 36px;
top: 4960px;

`

const SolutionText = Styled.div

`
position: absolute;
top: 5700px;
right: 500px;
left: 0px;
font-size: 24px;
`

const MethodHeader = Styled.img

`
position: absolute;
width: 437px;
height: 119.18px;
left: 70px;
top: 5900px;
`

const UserFlowImg = Styled.img
`
position: absolute;
width: 634.03px;
height: 425px;
left: 75px;
top: 6200px;
`

const SketchesImg = Styled.img
`
position: absolute;
width: 634px;
height: 493px;
left: 75px;
top: 6800px;

`

const WireframeImg = Styled.img
`
position: absolute;
width: 630px;
height: 818px;
left: 67px;
top: 7490px;

`

const MethodText = Styled.div
`
font-size: 19px;
#user-flow-header {
   position: absolute;
   top: 6110px;
   font-size: 32px;
   margin-left: 15px;
}
#user-flow-text {
   position: absolute;
   top: 6280px;
   font-size: 24px;
   margin-left: 680px;
    margin-right: 380px;

}
#sketches-header {
   position: absolute;
   top: 6720px;
   font-size: 32px;
    margin-left: 15px;
}
#sketches-text {
   position: absolute;
   top: 6850px;
   font-size: 24px;
  margin-left: 680px;
    margin-right: 380px;
}
#wireframe-header {
   position: absolute;
   top: 7380px;
   font-size: 32px;
   margin-left: 15px;
}
#wireframe-text {
   position: absolute;
   top: 7720px;
   font-size: 24px;
   margin-left: 680px;
    margin-right: 380px;

}
#style-header {
   position: absolute;
   top: 8380px;
   font-size: 32px;
   margin-left: 15px;
}
#style-text {
   position: absolute;
   top: 8520px;
   font-size: 24px;
   margin-left: 680px;
    margin-right: 380px;
}
#style-text-2{
   position: absolute;
   top: 8700px;
   font-size: 24px;
   margin-left: 680px;
    margin-right: 380px;

}
`

const StyleGuide1 = Styled.img
`
position: absolute;
width: 323px;
height: 564px;
left: 70px;
top: 8450px;

`

const StyleGuide2 = Styled.img
`
position: absolute;
width: 307px;
height: 563px;
left: 390px;
top: 8450px;

`

const TestBanner = Styled.img
`
position: absolute;
width: 502.1px;
height: 115px;
left: 63px;
top: 9100px;

`

const Number1 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 92px;
top: 9400px;
`

const Number2 = Styled.img

`
position: absolute;
width: 33px;
height: 33px;
left: 92px;
top: 9495px;
`

const Number3 = Styled.img

`
position: absolute;
width: 33px;
height: 33px;
left: 92px;
top: 9580px;
`

const NumberOne = Styled.img

`
position: absolute;
width: 7px;
height: 17px;
left: 103px;
top: 9407px;
`

const NumberTwo = Styled.img
`
position: absolute;
width: 11px;
height: 18px;
left: 103px;
top: 9500px;

`

const NumberThree = Styled.img
`
position: absolute;
width: 11px;
height: 18px;
left: 103px;
top: 9586px;

`

const TestBullets = Styled.div
`
position: absolute;
width: 860px;
height: 60px;
left: 100px;
top: 9400px;
    p{
        margin-bottom: 32px;
        margin-right: -20px;
        font-size: 24px;
        line-height: 1.2;
    }
    #final{
        top: 7600px;
        margin-left: -30px;
    }
`

const Test = Styled.div
`
position: absolute;
line-height: 1.2;
left: 0px;
top: 9260px;
right: 140px;
 p {
    font-size: 24px;
    font-weight: 500;
    }
`

const BrandBannerImg = Styled.img
`
position: absolute;
width: 839px;
height: 129px;
left: 57px;
top: 9750px;
`


const BrandText = Styled.div
`
position: absolute;
left: 10px;
top: 9770px;
text-align: center;
font-size: 24px;
p{
    margin-bottom: 10px;
}
#bottom{
    font-size: 30px;
}
`

const ReservationImg = Styled.img
`
position: absolute;
width: 973px;
height: 1244px;
left: 95px;
top: 9930px;
`

const ReservationText = Styled.div
`
position: absolute;
margin-right: 200px;
left: 700px;
top: 10000px;
font-size: 19px;
`
const ReservationText2 = Styled.div
`
    position: absolute;
    font-size: 19px;
    left: 100px;
    top: 10750px;
    text-align: right;
    margin-right: 850px;
`

const OutpostImg = Styled.img
`
position: absolute;
width: 754px;
height: 442px;
left: 99px;
top: 11250px;

`
const OutpostText = Styled.div
`
position: absolute;
margin-right: 200px;
left: 700px;
top: 11300px;
font-size: 19px;
`
const TimeImg = Styled.img
`
position: absolute;
width: 631px;
height: 735px;
left: 94px;
top: 11750px;

`
const TimeText = Styled.div
`
position: absolute;
margin-right: 200px;
left: 700px;
top: 12000px;
font-size: 19px;
`

const PrototypeBan = Styled.img
`
position: absolute;
width: 274px;
height: 77px;
left: 70px;
top: 12500px;

`

const ProtoText = Styled.div
`
position: absolute;
left: 30px;
top: 12520px;
font-size: 24px;
`

const ArrowRightImg = Styled.img
`
position: absolute;
left: 280px;
top: 12520px;
width: 15px;
height: 27px;

`

const FollowUpHeader = Styled.img
`
position: absolute;
width: 489px;
height: 60px;
left: 70px;
top: 12630px;

`

const FollowUpText = Styled.div
`
position: absolute;
top: 12730px;
left: 0px;
font-size: 24px;
margin-right: 150px;
`
const FinalRect = Styled.img
`
position: absolute;
width: 1048px;
height: 430px;
left: 0px;
top: 12810px;

`

const W1 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 12905px;

`

const W2 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 13010px;

`
const W3 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 13112px;

`

const FinalText = Styled.div

`
position: absolute;
top: 12830px;
color: #FFF1EC;
p{
    font-size: 32px;
    margin-bottom: 35px;
    margin-left: 0px;
}
 ul {
        display: block;
        list-style: none;
        font-size: 24px;
    }
 li {
        margin-left: 80px;
        margin-right: 450px;
        margin-bottom: 40px;

 }


`

const ReturnImg = Styled.img 
    `
    position: absolute;
    width: 300px;
    height: 35px;
    left: 63px;
    top: 13320px;
    margin-bottom: 70px;
    `