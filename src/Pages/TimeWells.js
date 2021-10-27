import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import TWHeader from '../images/TimewellsHeader.png';
import TWNav from "../Components/TWNav";
import TimewellsImg from '../images/Timewells.png';
import ProblemHeader from '../images/Problem.png';
import ProblemBanner from '../images/ProblemBanner.png';
import NumCir from '../images/numcircle.png';
import One from '../images/1.png';
import Two from '../images/2.png';
import Three from '../images/3.png';
import ResearchHeader from '../images/research.png';
import LoopHeader from '../images/loop.png';
import Rect from '../images/FollowUpRect.png';
// import PersPics from '../images/PersonapPics.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import White4 from '../images/White4.png';
import Gap from '../images/Gap.png';
import Asterisk from '../images/Asterisk.png';
import TWLogo from '../images/TWLogo.png';
import Lady from '../images/LadyPic.png';
import Man from '../images/ManPic.png';
import GapBanner from '../images/BrandBanner.png';
import Check from '../images/Check.png';
import Solution from '../images/Solution.png';
import TWMockup from '../images/TWMockup.png';
import Method from '../images/Method.png';
import MethodBanner from '../images/MethodBanner.png';
import UserPersona from '../images/SamPersona.png';
import TaskFlow from '../images/TaskFlowTW.png';
import UserFlow from '../images/UserflowTW.png';
import Sketch from '../images/SketchTW.png';
import Wireframe from '../images/WireframeTW.png';
import BrandUI from '../images/BrandUITW.png';


const Timewells = () => {
    return (
        <>
        <TWNav/>
        <TW src={TWHeader} alt='Timewells Case Study'/>
        <TWImage src={TimewellsImg}/>
         <Table>
            <table>
            <tr>
                <td><strong>Overview</strong></td>
                <td>Timewells is a fictional company that recently made time travel fully available to the masses. The ompany required a desktop website that made finding a booking a trip easy and understandable.</td>
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
        <PBanner src={ProblemBanner} id="problem"/>
        <PHeader src={ProblemHeader}/>
        <Num1 src={NumCir}/>
        <NumOne src={One}/>
        <Num2 src={NumCir}/>
        <NumTwo src={Two}/>
        <Prob>
        <p id="p1"><strong>Time travel is a total unknown for your average person.</strong><span class="white"><strong> That can feel scary.</strong></span></p>
        <p id="p2"><strong>Customers have to also decide what era to travel in on top of typical travel decisions.</strong><span class= "white"><strong> That can feel overwhelming. </strong></span></p>
        </Prob>
        <Problem>
        <p>Timewells is offering a unique and brand new product to consumers. The company needs to present a trustworthy and understandable website and booking experience.</p>
        </Problem>
         <RLoop src={LoopHeader} id="research"/>
        <RHeader src={ResearchHeader}/>
        <ResearchText>
        <p><strong>Assume nothing.</strong></p>
        <p id="para">Talking to users about their motivations and frustrations helped me contextualize and use data-drive decisions for my eventual final product solution. Because as we know, <strong> the designer is not the user.</strong></p>
        <p id="after"><strong>My interviewees were all well-traveled and adventurous.</strong> I do wish I had more range of age for my initial research.</p>
        </ResearchText>
        {/* <PersonaImg src={PersonaImg}/> */}
        <InsightsRect src={Rect}/>
        <W1 src={White1}/>
        <W2 src={White2}/>
        <W3 src={White3}/>
        <W4 src={White4}/>
        <InsightsText>
        <p><strong> Major Insights </strong></p>
        <ul>
            <li> Users travel to feel outside of their normal day-to-day-self.</li>
            <li> Users want to be abe to search by style and vibe of trip, not just by location.</li>
            <li> Real reviews and pictures are incredibly important to build trust. </li>
            <li> Cheap-looking websites are a major turnoff and prohibit purchases. </li>
        </ul>
        </InsightsText>
        <GapHeader src={Gap} id="gap"/>
        <Star src={Asterisk}/>
        <LogoImg src={TWLogo}/>
        <LadyImg src={Lady}/>
        <ManImg src={Man}/>
        <TWGapText>
        <p> Timewells wants to sell trips. </p>
       </TWGapText>
       <PplGapText>
        <p> Users want to feel comfortable and confident before dropping a ton of cash.</p>
       </PplGapText>
        <GapBannerImg src={GapBanner}/>
       <BannerText>
         <p> My users were very excited about time travel and had a lot of ideas for a good product experience. It would have been intersting to try and find solutions for everything, but results would be muddled.</p>
        </BannerText>
        <SolutionHeader src={Solution}/>
        <CheckMark src={Check}/>
        <SolutionImg src={TWMockup}/>
        <SolutionText1>
        <p><strong> A multi-level filter feature </strong> so users can search for trips in myriad ways, depending on their personal inclination.</p>
        </SolutionText1>
         <SolutionText2>
        <p><strong> An "ask a real traveler" feature </strong> to help simultaneously meet user needs of wanting in-deth information and Timewells' need to build trust in their product.</p>
        </SolutionText2>
        <MBanner src={MethodBanner}/>
        <MethodHeader id="method" src={Method}/>
        <MethodText>
            <p id="user-header"><strong>User Persona</strong></p>
            <p id="user-text">I created this to have a cohesive feel of my users when designing. "Would Same find this intuitive?" "Would Same trust this website?" were questions I asked myself regularly.</p>
            <p id="task-header"><strong>Task Flow</strong></p>
            <p id="task-text">A graphic representation of the journey a user could make from point A to point B on Timewells' site.</p>
            <p id="user-flow-header"><strong>User Flow</strong></p>
            <p id="user-flow-text"> I needed to figure out all the potential paths Sam might take on the Timewells site. This was an intriguing exercise in <strong> predicting user behavior.</strong></p>
            <p id="sketch-header"><strong>Sketch</strong></p>
            <p id="sketch-text"> As a pencil-and-paper person, I started sketching wireframes on paper first. <strong>This hekped me figure our visual hierarchy and layout</strong> without being distracted by technology. </p>
            <p id="wireframe-header"><strong>Wireframe Prototype</strong></p>
            <p id="wireframe-text"> I designed my first solution and began to test it as a prototype. At this point, the solution made sense to me, but it need to be tested.</p>
            <p id="wireframe-text2"> This wireframe solved the problem of wanting multiple ways to read reviews.</p>
             <p id="branding-header"><strong>Branding and UI</strong></p>
            <p id="branding-text"> You can't judge a book by its cover, but my users definately judge trustability of websites by how they look. Here are some of the ways I developed Timewells' logo and brand styling. </p>
            <p id="branding-text2"> I wanted a split-analagous color scheme with a bright accent color to underscore <strong>adventure, nature, and excitement.</strong></p>
        </MethodText>
        <UserPersonaImg src={UserPersona}/>
        <TaskFlowImg src={TaskFlow}/>
        <UserFlowImg src={UserFlow}/>
        <SketchImg src={Sketch}/>
        <WireframeImg src={Wireframe}/>
        <BrandUIImg src={BrandUI}/>
        </>
    )
};

export default Timewells;


const TWHeaderContainer = Styled.div
    `
    display: block;
    align-items: left;
    justify-content: left;
`

const TW = Styled.img
    `
    position: absolute;
    width: 415px;
    height: 40px;
    `

const TWImage = Styled.img
`
position: absolute;
width: 815px;
height: 532px;
left: 54px;
top: 120px;

`

const Table = Styled.div
    `
    position: absolute;
    height: 46px;
    left: 50px;
    right: 290px;
    top: 600px;
    
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
top: 1280px;
right: 140px;
color: #360713;
 p {
    font-size: 19px;
    }
`

const Num1 = Styled.img
`
position: absolute;
width: 28px;
height: 28px;
left: 92px;
top: 1060px;
`

const Num2 = Styled.img

`
position: absolute;
width: 28px;
height: 28px;
left: 92px;
top: 1160px;
`

const NumOne = Styled.img

`
position: absolute;
width: 7px;
height: 17px;
left: 101px;
top: 1065px;
`

const NumTwo = Styled.img
`
position: absolute;
width: 11px;
height: 18px;
left: 100px;
top: 1165px;

`

const Prob = Styled.div
`
position: absolute;
left: 150px;
top: 1015px;
    p{
        margin-right: 120px;
        font-size: 19px;
        margin-top: 45px;
        margin-bottom: 65px;
    }
    .white{
        color: #FFF1EC;
        background-color: #360713;
        font-size: 19px;
    }
    #p1 {
        margin-right: 480px;
    }
    #p2 {
        margin-right: 220px;
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

const ResearchText = Styled.div
`
position: absolute;
left: 77px;
top: 1500px;
font-size: 25px;
#para{
    font-size: 19px;
    margin-right: 320px;
}
#after{
   font-size: 19px;
   margin-right: 560px; 
   margin-top: 300px;
}
`

const PersonaImg = Styled.img
`
position: absolute;
width: 774px;
height: 164px;
left: 70px;
top: 1700px;

`

const InsightsRect = Styled.img
`
position: absolute;
width: 882px;
height: 420px;
left: 0px;
top: 2050px;

`

const W1 = Styled.img
`
position: absolute;
width: 26px;
height: 26px;
left: 94px;
top: 2180px;

`

const W2 = Styled.img
`
position: absolute;
width: 26px;
height: 26px;
left: 94px;
top: 2250px;

`
const W3 = Styled.img
`
position: absolute;
width: 26px;
height: 26px;
left: 94px;
top: 2320px;

`

const W4 = Styled.img
`
position: absolute;
width: 26px;
height: 26px;
left: 94px;
top: 2390px;

`

const InsightsText = Styled.div

`
position: absolute;
top: 2100px;
color: #FFF1EC;
p{
    font-size: 23px;
    margin-bottom: 55px;
}
 ul {
        display: block;
        list-style: none;
        font-size: 19px;
    }
 li {
        margin-left: 80px;
        margin-right: 350px;
        margin-bottom: 48px;

 }


`

const GapHeader = Styled.img
`
position: absolute;
width: 173px;
height: 36px;
left: 70px;
top: 2560px;
`

const Star = Styled.img
`
position: absolute;
width: 60px;
height: 64px;
left: 240px;
top: 2550px;
`

const LogoImg = Styled.img
`
position: absolute;
width: 190px;
height: 177px;
left: 174px;
top: 2650px;
`

const LadyImg =Styled.img
`
position: absolute;
width: 150px;
height: 150px;
left: 450px;
top: 2620px;
`

const ManImg =Styled.img
`
position: absolute;
width: 150px;
height: 150px;
left: 615px;
top: 2620px;
`

const TWGapText = Styled.div 
`
position: absolute;
font-size: 19px;
top: 2820px;
left: 150px;
`
const PplGapText = Styled.div 
`
position: absolute;
font-size: 19px;
top: 2820px;
left: 450px;
margin-right: 200px;
`

const BannerText = Styled.div 
`
position: absolute;
font-size: 19px;
top: 2950px;
left: 70px;
margin-right: 170px;
`

const GapBannerImg = Styled.img
`
position: absolute;
width: 790px;
height: 123px;
left: 57px;
top: 2920px;
`

const SolutionHeader = Styled.img
`
position: absolute;
width: 304px;
height: 44px;
left: 68px;
top: 3100px;

`

const CheckMark = Styled.img
`
position: absolute;
width: 65px;
height: 60px;
left: 378px;
top: 3070px;

`

const SolutionImg = Styled.img
`
position: absolute;
width: 775px;
height: 471px;
left: 73px;
top: 3200px;

`

const SolutionText1 = Styled.div

`
position: absolute;
top: 3700px;
right: 630px;
left: 70px;
font-size: 19px;
`

const SolutionText2 = Styled.div

`
position: absolute;
top: 3700px;
right: 250px;
left: 460px;
font-size: 19px;
`
const MethodHeader = Styled.img

`
position: absolute;
width: 306px;
height: 40px;
left: 70px;
top: 3900px;
`

const MBanner = Styled.img
`
position: absolute;
width: 349px;
height: 95px;
left: 55px;
top: 3875px;
`


const UserPersonaImg = Styled.img
`
position: absolute;
width: 517px;
height: 412px;
left: 75px;
top: 4100px;
`

const TaskFlowImg = Styled.img
`
position: absolute;
width: 502px;
height: 172px;
left: 75px;
top: 4670px;

`

const UserFlowImg = Styled.img
`
position: absolute;
width: 512px;
height: 451px;
left: 67px;
top: 4980px;
`

const SketchImg = Styled.img
`
position: absolute;
width: 504px;
height: 654px;
left: 67px;
top: 5910px;

`

const WireframeImg = Styled.img
`
position: absolute;
width: 504px;
height: 654px;
left: 67px;
top: 5910px;

`
const BrandUIImg = Styled.img
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
#user-header {
   position: absolute;
   top: 4025px;
   font-size: 25px;
   margin-left: 15px;
}
#user-text {
   position: absolute;
   top: 4200px;
   font-size: 19px;
   margin-left: 550px;
    margin-right: 300px;

}
#task-header {
   position: absolute;
   top: 4600px;
   font-size: 25px;
    margin-left: 15px;
}
#task-text {
   position: absolute;
   top: 4700px;
   font-size: 19px;
   margin-left: 550px;
   margin-right: 300px;
}
#user-flow-header {
   position: absolute;
   top: 4900px;
   font-size: 25px;
   margin-left: 15px;
}
#user-flow-text {
   position: absolute;
   top: 5150px;
   font-size: 19px;
   margin-left: 550px;
   margin-right: 300px;

}
#sketch-header {
   position: absolute;
   top: 6620px;
   font-size: 25px;
   margin-left: 15px;
}
#sketch-text {
   position: absolute;
   top: 6790px;
   font-size: 19px;
   margin-left: 550px;
   margin-right: 300px;
}
#wireframe-header {
   position: absolute;
   top: 6620px;
   font-size: 25px;
   margin-left: 15px;
}
#wireframe-text {
   position: absolute;
   top: 6790px;
   font-size: 19px;
   margin-left: 550px;
   margin-right: 300px;
}
#wireframe-text2 {
   position: absolute;
   top: 6790px;
   font-size: 19px;
   margin-left: 550px;
   margin-right: 300px;
}
`