import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import FCHeader from '../images/ForestryHeader.png';
import FCNav from "../Components/FCNav.js";
import FCDevice from '../images/FCdevice.png';
import FCCircle from '../images/FCcircle.png';
import FCVector from '../images/FCvector.png';
import ProblemHeader from '../images/Problem.png';
import ProblemBanner from '../images/ProblemBanner.png';
import NumCir from '../images/numcircle.png';
import One from '../images/1.png';
import Two from '../images/2.png';
import Three from '../images/3.png';
import ResearchHeader from '../images/research.png';
import LoopHeader from '../images/loop.png';
import CompetitiveImg from '../images/analysis.png';
import SurveyGraphs from '../images/survey.png';
import SurveyBanner from '../images/SurveyBanner.png'
import Brand from '../images/Director.png'
import Manager from '../images/Manager.png'
import Retail from '../images/Retail.png'
import Landing from '../images/OriginalLanding.png'
import About from '../images/OriginalAbout.png'
import Gap from '../images/Gap.png';
import Asterisk from '../images/Asterisk.png';
import Rect from '../images/Rectangle.png';
import Check from '../images/Check.png';
import Solution from '../images/Solution.png';
import Devices from '../images/SolutionImg.png';
import Method from '../images/Method.png';
import MethodBanner from '../images/MethodBanner.png';
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
import FollowUpStar from '../images/FollowUpStar.png';
import FollowUpRect from '../images/FollowUpRect.png';
import FollowUp from '../images/FollowUp.png';
import ArrowRight from '../images/ArrowRight.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import ArrowUp from '../images/ArrowUp.png';


const ForestryCamp = () => {
    return (
        <>
        <FCNav/>
        <FCHeaderContainer id="intro">
            <FC src={FCHeader} alt='Forestry CAmp Case Study'/>
        </FCHeaderContainer>  
        <Circle src={FCCircle}/>
        <Vector src={FCVector}/>
        <Device src={FCDevice}/>
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
        <PBanner src={ProblemBanner} id="problem"/>
        <PHeader src={ProblemHeader}/>
        <Problem>
        <p>"People are still really confused about the difference between our upstairs dining room and downstairs taproom."</p>
        </Problem>
        <Num1 src={NumCir}/>
        <NumOne src={One}/>
        <Num2 src={NumCir}/>
        <NumTwo src={Two}/>
        <Prob>
        <p>With two indoor and three outdoor dining spaces, customers don't know which spaces require a reservation and where to eat. </p>
        <p>Many customers are also not aware that Forestry Camp is associated with Burial Beer, one of the most famous breweries on the east coast. </p>
        </Prob>
        <RLoop src={LoopHeader} id="research"/>
        <RHeader src={ResearchHeader}/>
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
        <p> I surveyed 15 people from Forestry Camp's target market to hear more about their expectations for a fine dining restaurant. To get <strong> quantative data </strong> I used a likert scale, and for <strong> qualitative data </strong>, multiple-choice and open answer questions.</p> 
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
        <p> Forestry Camp has an established brand base. I spoke at length with the three stakeholder below, who have a very clear pulse on their needs for Forestry Camp's upcoming website.</p> 
        </InterviewText>
        <BrandImg src={Brand}/>
        <ManagerImg src={Manager}/>
        <RetailImg src={Retail}/>
        <Quote1>
        <p class="title"> <strong> Director of Brand </strong> </p>
        <p> "We tried to get our current website to meet our needs, but it' not really working. I would love for the new website to not have a parchment background."</p>
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
        <Star src={Asterisk}/>
        <LandingImg src={Landing}/>
        <AboutImg src={About}/>
        <Outline1 src={Rect}/>
        <Outline2 src={Rect}/>
        <LandingText>
        <p><strong> Original Landing Page </strong></p>
        </LandingText>
        <AboutText>
        <p><strong> Original About Page </strong></p>
        </AboutText>
        <OriginalText>
        <p> Forestry Camp is a super luxurious and cool restaurant. Here were some identified issues:</p>
        <ul>
            <li>Doesn't show enough photos of the incredible space and food</li>
            <li>Multiple fonts and colors</li>
            <li>Third-party reservation system</li>
            <li>Muddle explanation of The Outpost vs. Forestry Camp</li>
        </ul>
        </OriginalText>
        <SolutionHeader src={Solution}/>
        <CheckMark src={Check}/>
        <SolutionImg src={Devices}/>
        <SolutionText>
        <p> A responsive mobile design that proves an <strong> elevated brand message </strong> with an <strong>integrated reservations system</strong> to encourage bookings and visits from customers.</p>
        </SolutionText>
        <MBanner src={MethodBanner}/>
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
        <p id="final"> Yahoo! 3/3 participants complete goals one and two. </p>
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
        <p> <strong> See Prototype </strong></p>
        </ProtoText>
        <ArrowRightImg src={ArrowRight}/>
        <FollowUpHeader id="follow" src={FollowUp}/>
        <FollowStar src={FollowUpStar}/>
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
         <Link 
    activeClass="active"
    to="intro"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1000}
    ><ArrowImgUp src={ArrowUp}/></Link> 
        </>
    )
};

export default ForestryCamp;


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
    width: 415px;
    height: 40px;
    `

const Device = Styled.img
    `
    position: absolute;
    width: 832px;
    height: 453.55px;
    left: 28px;
    top: 157px;
    `

const Circle = Styled.img
    `
    position: absolute;
    width: 458px;
    height: 471px;
    left: 310.83px;
    top: 236px;
    `

const Vector = Styled.img
    `
    position: absolute;
    width: 620.98px;
    height: 670.23px;
    left: 22.63px;
    top: 35px;

    `

const Table = Styled.div
    `
    position: absolute;
    height: 46px;
    left: 50px;
    right: 290px;
    top: 670px;
    
     ul {
        display: block;
        list-style: none;
    };
    li {
        text-align: left;
    }
    td {
    vertical-align: top;
    padding: 15px;
    font-size: 18px;
    }
    `

const PBanner = Styled.img
`
position: absolute;
width: 274px;
height: 74px;
left: 66px;
top: 950px;
`

const PHeader = Styled.img
`
position: absolute;
left: 56px;
top: 965px;
width: 288px;
height: 40px;
`

const Problem = Styled.div
`
position: absolute;
line-height: 1.2;
left: 64px;
top: 1080px;
right: 140px;
color: #360713;
 p {
    font-size: 28px;
    font-weight: 500;
    }
`

const Num1 = Styled.img
`
position: absolute;
width: 28px;
height: 28px;
left: 92px;
top: 1190px;
`

const Num2 = Styled.img

`
position: absolute;
width: 28px;
height: 28px;
left: 92px;
top: 1270px;
`

const NumOne = Styled.img

`
position: absolute;
width: 7px;
height: 17px;
left: 101px;
top: 1196px;
`

const NumTwo = Styled.img
`
position: absolute;
width: 11px;
height: 18px;
left: 100px;
top: 1274px;

`

const Prob = Styled.div
`
position: absolute;
width: 860px;
height: 60px;
left: 180px;
top: 1180px;
    p{
        margin-bottom: 37px;
        margin-right: 190px;
        font-size: 19px;
        line-height: 1.5;
    }
`
const RLoop = Styled.img

`
position: absolute;
width: 398px;
height: 89px;
left: 32px;
top: 1378px;

`

const RHeader = Styled.img
`
position: absolute;
width: 283px;
height: 43px;
left: 74px;
top: 1398px;
`

const ComAna = Styled.div
`
position: absolute;
left: 77px;
top: 1500px;
font-size: 25px;

`

const ComImg = Styled.img
`
position: absolute;
width: 776px;
height: 130px;
left: 75px;
top: 1550px;
`

const ResearchText = Styled.div
`
position: absolute;
top: 1690px;
left: 75px;
font-size: 19px;
line-height: 1.5;
li {
    margin-left: 30px;
}
`

const SurveyHeader = Styled.div
`
position: absolute;
left: 77px;
top: 1940px;
font-size: 25px;

`

const SurveyImg = Styled.img
`
position: absolute;
width: 761px;
height: 350px;
left: 74px;
top: 2000px;
`

const SurveyText = Styled.div
`
position: absolute;
font-size: 19px;
line-height: 1.5;
right: 160px;
top: 2390px;
left: 74px;

`

const SurvBan = Styled.img
`
position: absolute;
width: 305px;
height: 71px;
left: 55px;
top: 2500px;

`

const BannerText = Styled.div
`
position: absolute;
left: 65px;
top: 2523px;
font-size: 22px;
right: 160px;
`
const SurveyList = Styled.div
`
position: absolute;
font-size: 19px;
line-height: 1.3;
right: 280px;
top: 2600px;
left: 74px;

`

const InterviewHeader = Styled.div
`
position: absolute;
left: 77px;
top: 2750px;
font-size: 25px;

`

const InterviewText = Styled.div
`
position: absolute;
font-size: 19px;
line-height: 1.5;
right: 120px;
top: 2805px;
left: 74px;

`

const BrandImg = Styled.img
`
position: absolute;
width: 160px;
height: 160px;
left: 99px;
top: 2900px;
`

const ManagerImg = Styled.img

`
position: absolute;
width: 160px;
height: 160px;
left: 365px;
top: 2900px;
`

const RetailImg = Styled.img

`position: absolute;
width: 160px;
height: 160px;
left: 632px;
top: 2900px;
`

const Quote1 = Styled.div

`
position: absolute;
top: 3090px;
left: 65px;
right: 160px;
font-size: 19px;
text-align: center;
width: 395px;
`

const Quote2 = Styled.div

`
position: absolute;
top: 3090px;
left: 331px;
right: 160px;
font-size: 19px;
text-align: center;
width: 395px;
`

const Quote3 = Styled.div

`
position: absolute;
top: 3090px;
left: 597px;
right: 160px;
font-size: 19px;
text-align: center;
width: 395px;
`

const GapHeader = Styled.img
`
position: absolute;
width: 173px;
height: 36px;
left: 70px;
top: 3410px;
`

const Star = Styled.img
`
position: absolute;
width: 60px;
height: 64px;
left: 240px;
top: 3400px;
`

const LandingImg = Styled.img
`
position: absolute;
width: 353px;
height: 199px;
left: 83px;
top: 3500px;
`

const AboutImg = Styled.img
`
position: absolute;
width: 353px;
height: 199px;
left: 475px;
top: 3500px;
`

const Outline1 = Styled.img
`
position: absolute;
width: 378px;
height: 226px;
left: 70px;
top: 3485px;
`

const Outline2 = Styled.img
`
position: absolute;
width: 378px;
height: 226px;
left: 462px;
top: 3485px;

`
const LandingText = Styled.div
`
position: absolute;
top: 3740px;
left: 165px;
font-size: 19px;

`
const AboutText = Styled.div
`
position: absolute;
top: 3740px;
left: 565px;
font-size: 19px;

`

const OriginalText = Styled.div
`
position: absolute;
top: 3780px;
font-size: 19px;
ul{
    margin-left: 30px;
    line-height: 1.2;
}

`

const SolutionHeader = Styled.img
`
position: absolute;
width: 304px;
height: 44px;
left: 68px;
top: 4000px;

`

const CheckMark = Styled.img
`
position: absolute;
width: 65px;
height: 60px;
left: 378px;
top: 3975px;

`

const SolutionImg = Styled.img
`
position: absolute;
width: 1010px;
height: 709px;
left: 36px;
top: 3960px;

`

const SolutionText = Styled.div

`
position: absolute;
top: 4560px;
right: 440px;
left: 60px;
font-size: 19px;
`

const MethodHeader = Styled.img

`
position: absolute;
width: 306px;
height: 40px;
left: 70px;
top: 4700px;
`

const MBanner = Styled.img
`
position: absolute;
width: 349px;
height: 95px;
left: 55px;
top: 4675px;
`

const UserFlowImg = Styled.img
`
position: absolute;
width: 508px;
height: 340px;
left: 75px;
top: 4870px;
`

const SketchesImg = Styled.img
`
position: absolute;
width: 507px;
height: 394px;
left: 75px;
top: 5370px;

`

const WireframeImg = Styled.img
`
position: absolute;
width: 504px;
height: 654px;
left: 67px;
top: 5910px;

`

const MethodText = Styled.div
`
font-size: 19px;
#user-flow-header {
   position: absolute;
   top: 4800px;
   font-size: 25px;
   margin-left: 15px;
}
#user-flow-text {
   position: absolute;
   top: 4950px;
   font-size: 19px;
   margin-left: 550px;
    margin-right: 300px;

}
#sketches-header {
   position: absolute;
   top: 5300px;
   font-size: 25px;
    margin-left: 15px;
}
#sketches-text {
   position: absolute;
   top: 5480px;
   font-size: 19px;
   margin-left: 550px;
   margin-right: 300px;
}
#wireframe-header {
   position: absolute;
   top: 5840px;
   font-size: 25px;
   margin-left: 15px;
}
#wireframe-text {
   position: absolute;
   top: 6040px;
   font-size: 19px;
   margin-left: 550px;
   margin-right: 300px;

}
#style-header {
   position: absolute;
   top: 6620px;
   font-size: 25px;
   margin-left: 15px;
}
#style-text {
   position: absolute;
   top: 6790px;
   font-size: 19px;
   margin-left: 550px;
   margin-right: 300px;
}
#style-text-2{
   position: absolute;
   top: 6930px;
   font-size: 19px;
   margin-left: 550px;
   margin-right: 300px;

}
`

const StyleGuide1 = Styled.img
`
position: absolute;
width: 258px;
height: 451px;
left: 70px;
top: 6685px;

`

const StyleGuide2 = Styled.img
`
position: absolute;
width: 245px;
height: 451px;
left: 325px;
top: 6685px;

`

const TestBanner = Styled.img
`
position: absolute;
width: 401px;
height: 92px;
left: 63px;
top: 7200px;

`

const Number1 = Styled.img
`
position: absolute;
width: 28px;
height: 28px;
left: 92px;
top: 7430px;
`

const Number2 = Styled.img

`
position: absolute;
width: 28px;
height: 28px;
left: 92px;
top: 7500px;
`

const Number3 = Styled.img

`
position: absolute;
width: 28px;
height: 28px;
left: 92px;
top: 7570px;
`

const NumberOne = Styled.img

`
position: absolute;
width: 7px;
height: 17px;
left: 101px;
top: 7435px;
`

const NumberTwo = Styled.img
`
position: absolute;
width: 11px;
height: 18px;
left: 100px;
top: 7505px;

`

const NumberThree = Styled.img
`
position: absolute;
width: 11px;
height: 18px;
left: 100px;
top: 7575px;

`

const TestBullets = Styled.div
`
position: absolute;
width: 860px;
height: 60px;
left: 160px;
top: 7430px;
    p{
        margin-bottom: 32px;
        margin-right: 170px;
        font-size: 19px;
        line-height: 1.2;
    }
    #final{
        top: 7600px;
        margin-left: -100px;
    }
`

const Test = Styled.div
`
position: absolute;
line-height: 1.2;
left: 64px;
top: 7330px;
right: 140px;
 p {
    font-size: 19px;
    font-weight: 500;
    }
`

const BrandBannerImg = Styled.img
`
position: absolute;
width: 671px;
height: 103px;
left: 57px;
top: 7680px;
`


const BrandText = Styled.div
`
position: absolute;
left: 100px;
top: 7690px;
text-align: center;
font-size: 19px;
p{
    margin-bottom: 10px;
}
#bottom{
    font-size: 23px;
}
`

const ReservationImg = Styled.img
`
position: absolute;
width: 778px;
height: 995px;
left: 95px;
top: 7835px;
`

const ReservationText = Styled.div
`
position: absolute;
margin-right: 90px;
left: 650px;
top: 7910px;
font-size: 19px;
`
const ReservationText2 = Styled.div
`
    position: absolute;
    font-size: 19px;
    left: 196px;
    top: 8600px;
    text-align: right;
    margin-right: 600px;
`

const OutpostImg = Styled.img
`
position: absolute;
width: 603px;
height: 353px;
left: 99px;
top: 8880px;

`
const OutpostText = Styled.div
`
position: absolute;
margin-right: 90px;
left: 630px;
top: 8930px;
font-size: 19px;
`
const TimeImg = Styled.img
`
position: absolute;
width: 504px;
height: 588px;
left: 94px;
top: 9270px;

`
const TimeText = Styled.div
`
position: absolute;
margin-right: 90px;
left: 630px;
top: 9480px;
font-size: 19px;
`

const PrototypeBan = Styled.img
`
position: absolute;
width: 219px;
height: 61px;
left: 70px;
top: 9950px;

`

const ProtoText = Styled.div
`
position: absolute;
left: 110px;
top: 9965px;
font-size: 19px;
text-decoration: underline
`

const ArrowRightImg = Styled.img
`
position: absolute;
left: 240px;
top: 9965px;
width: 15px;
height: 27px;

`

const FollowUpHeader = Styled.img
`
position: absolute;
width: 284px;
height: 50px;
left: 70px;
top: 10100px;

`

const FollowStar = Styled.img
`
position: absolute;
width: 60px;
height: 60px;
left: 353px;
top: 10090px;

`
const FollowUpText = Styled.div
`
position: absolute;
top: 10200px;
left: 70px;
font-size: 19px;
`
const FinalRect = Styled.img
`
position: absolute;
width: 838px;
height: 388px;
left: 0px;
top: 10280px;

`

const W1 = Styled.img
`
position: absolute;
width: 26px;
height: 26px;
left: 94px;
top: 10400px;

`

const W2 = Styled.img
`
position: absolute;
width: 26px;
height: 26px;
left: 94px;
top: 10500px;

`
const W3 = Styled.img
`
position: absolute;
width: 26px;
height: 26px;
left: 94px;
top: 10600px;

`

const FinalText = Styled.div

`
position: absolute;
top: 10300px;
color: #FFF1EC;
p{
    font-size: 23px;
    margin-bottom: 60px;
}
 ul {
        display: block;
        list-style: none;
        font-size: 19px;
    }
 li {
        margin-left: 80px;
        margin-right: 350px;
        margin-bottom: 60px;

 }


`

const ArrowImgUp = Styled.img 
    `
    position: absolute;
    width: 40px;
    height; 40px;
    top: 10700px;
    `