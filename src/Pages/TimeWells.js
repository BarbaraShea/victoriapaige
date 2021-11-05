import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import TWHeader from '../images/TimewellsHeader.png';
import TWNav from "../Components/TWNav";
import LogoNav from "../Components/LogoNav.js";
import TimewellsImg from '../images/Timewells.png';
import ProblemHeader from '../images/Problem.png';
import NumCir from '../images/numcircle.png';
import One from '../images/1.png';
import Two from '../images/2.png';
import Three from '../images/3.png';
import ResearchHeader from '../images/ResearchHeader.png';
import Rect from '../images/FollowUpRect.png';
import PersPics from '../images/PersonapPics.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import White4 from '../images/White4.png';
import Gap from '../images/GapHeader.png';
import TWLogo from '../images/TWLogo.png';
import Lady from '../images/LadyPic.png';
import Man from '../images/ManPic.png';
import GapBanner from '../images/BrandBanner.png';
import Solution from '../images/SolutionHeader.png';
import TWMockup from '../images/GIFTimewells.png';
import Method from '../images/MethodHeader.png';
import UserPersona from '../images/SamPersona.png';
import TaskFlow from '../images/TaskFlowTW.png';
import UserFlow from '../images/UserflowTW.png';
import Sketch from '../images/SketchTW.png';
import Wireframe from '../images/WireframeTW.png';
import BrandUI from '../images/BrandUITW.png';
import TestCircle from '../images/TestsCircle.png';
import TestPic1 from '../images/TestPic1.png';
import TestPic2 from '../images/TestPic2.png';
import TestPic3 from '../images/TestPic3.png';
import FollowUpRect from '../images/FollowUpRect.png';
import FollowUp from '../images/FollowUp.png';
import ArrowRight from '../images/ArrowRight.png';
import Return from '../images/Return.png'
import BrandBanner from '../images/BrandBanner.png';



const Timewells = () => {
    return (
        <>
        <LogoNav/>
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
        <PHeader src={ProblemHeader} id="problem"/>
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
        <RHeader src={ResearchHeader} id="research"/>
        <ResearchText>
        <p><strong>Assume nothing.</strong></p>
        <p id="para">Talking to users about their motivations and frustrations helped me contextualize and use data-drive decisions for my eventual final product solution. Because as we know, <strong> the designer is not the user.</strong></p>
        <p id="after"><strong>My interviewees were all well-traveled and adventurous.</strong> </p>
        <p id="last"> I do wish I had more range of age for my initial research.</p>
        </ResearchText>
        <PersonaImg src={PersPics}/>
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
        <SolutionImg src={TWMockup}/>
        <SolutionText1>
        <p><strong> A multi-level filter feature </strong> so users can search for trips in myriad ways, depending on their personal inclination.</p>
        </SolutionText1>
         <SolutionText2>
        <p><strong> An "ask a real traveler" feature </strong> to help simultaneously meet user needs of wanting in-deth information and Timewells' need to build trust in their product.</p>
        </SolutionText2>
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
        <TestHeader id="test" src={TestCircle}/>
        <TestText>
        <p> I had five new users in the target demographic test out the website via a Figma prototype.</p>
        </TestText>
         <TestTable>
            <table>
            <tr>
                <td class="table-header"><strong>Wins:</strong></td>
                <td>
                    <ul>
                    <li>5/5 were able to filter a trip based on need.</li>
                    <li>4/5 were able to contact a real traveler for more info.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="table-header"><strong>Edits:</strong></td>
                <td>Overall feedback was that links weren't clear, pictures should be clickable, and more descriptors were needed. Valid.</td>
            </tr>
          
            </table>
        </TestTable>
        <Test1Img src={TestPic1}/>
        <Test2Img src={TestPic2}/>
        <Test3Img src={TestPic3}/>
        <TestText1>
        <p> Imagery and description changes</p>
        </TestText1>
         <TestText2>
        <p> Hoverable link interactions</p>
        </TestText2>
         <TestText3>
        <p> Informative pop-up overlays</p>
        </TestText3>
        <PrototypeBan src={BrandBanner}/>
        <ProtoText>
        <p> <strong> <a href="https://www.figma.com/proto/lARHntk9QL09upIkgVY0VY/Timewells-Priority-Revision?page-id=0%3A1&node-id=272%3A256&viewport=241%2C48%2C0.62&scaling=min-zoom&starting-point-node-id=1%3A2118" target="_blank"> See Prototype </a></strong></p>
        </ProtoText>
        <ArrowRightImg src={ArrowRight}/>
        <FollowUpHeader id="follow" src={FollowUp}/>
        <FollowUpText>
        <p> This was my first experience designing a product from end to end. I learned so much about my own work flow and what makes sense to my brain as I moved through the process.</p>
        </FollowUpText>    
        <FinalRect src={FollowUpRect}/>
        <WC1 src={White1}/>
        <WC2 src={White2}/>
        <WC3 src={White3}/>
        <FinalText>
        <p><strong> Final Thoughts </strong></p>
        <ul>
            <li> I had way too many assumptions in my initial interview research.</li>
            <li> Most of my users wanted to click on pictures rather than text, which allowed fun revisions.</li>
            <li> My debriefings from usability testing showed some key insights that would have helped with my original design - such as a chat feature! </li>
        </ul>
        </FinalText>
        <NavLink to="/"><ReturnImg src={Return}/></NavLink> 
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
    width: 473.11px;
    height: 52.01px;
    `

const TWImage = Styled.img
`
position: absolute;
width: 1019px;
height: 563px;
left: 54px;
top: 170px;

`

const Table = Styled.div
    `
    position: absolute;
    height: 46px;
    left: 50px;
    right: 400px;
    top: 650px;
    font-size: 24px;
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
    }
    `

const PHeader = Styled.img
`
position: absolute;
left: 56px;
top: 980px;
width: 365px;
height: 94px;
`

const Problem = Styled.div
`
position: absolute;
line-height: 1.2;
left: 0px;
top: 1380px;
right: 140px;
color: #360713;
`

const Num1 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 92px;
top: 1140px;
`

const Num2 = Styled.img

`
position: absolute;
width: 33px;
height: 33px;
left: 92px;
top: 1265px;
`

const NumOne = Styled.img

`
position: absolute;
width: 8px;
height: 20px;
left: 102px;
top: 1148px;
`

const NumTwo = Styled.img
`
position: absolute;
width: 13px;
height: 20px;
left: 102px;
top: 1270px;

`

const Prob = Styled.div
`
position: absolute;
left: 110px;
top: 1085px;
    p{
        margin-right: 400px;
        font-size: 24px;
        margin-top: 45px;
        margin-bottom: 60px;
        line-height: 1.5;
    }
    .white{
        color: #FFF1EC;
        background-color: #360713;
    }
    #p1 {
        margin-right: 650px;
    }
    #p2 {
        margin-right: 350px;
    }
`


const RHeader = Styled.img
`
position: absolute;
width: 489px;
height: 112px;
left: 74px;
top: 1480px;
`

const ResearchText = Styled.div
`
position: absolute;
top: 1650px;
left: 0px;
p {
font-size: 32px;
}
#para{
    margin-right: 380px;
    font-size: 24px;
}
#after{
   margin-right: auto; 
   margin-top: 400px;
   font-size: 24px;
}
#last{
   font-size: 24px;

}
`

const PersonaImg = Styled.img
`
position: absolute;
width: 968px;
height: 205px;
left: 70px;
top: 1850px;

`

const InsightsRect = Styled.img
`
position: absolute;
width: 1103px;
height: 486px;
left: 0px;
top: 2300px;

`

const W1 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 2460px;

`

const W2 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 2530px;

`
const W3 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 2600px;

`

const W4 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 2670px;

`

const InsightsText = Styled.div

`
position: absolute;
top: 2360px;
color: #FFF1EC;
p{
    font-size: 32px;
    margin-bottom: 55px;
    margin-left: 0px;
}
 ul {
        display: block;
        list-style: none;
        font-size: 24px;
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
width: 276px;
height: 81px;
left: 70px;
top: 2900px;
`

const LogoImg = Styled.img
`
position: absolute;
width: 238.23px;
height: 222.74px;
left: 174px;
top: 3050px;
`

const LadyImg =Styled.img
`
position: absolute;
width: 187.65px;
height: 187.65px;
left: 520px;
top: 3030px;
`

const ManImg =Styled.img
`
position: absolute;
width: 187.65px;
height: 187.65px;
left: 720px;
top: 3030px;
`

const TWGapText = Styled.div 
`
position: absolute;
font-size: 19px;
top: 3300px;
left: 70px;
`
const PplGapText = Styled.div 
`
position: absolute;
font-size: 19px;
top: 3300px;
left: 450px;
margin-right: 300px;
`

const BannerText = Styled.div 
`
position: absolute;
font-size: 19px;
top: 3450px;
left:0px;
margin-right: 250px;
`

const GapBannerImg = Styled.img
`
position: absolute;
width: 977px;
height: 169px;
left: 57px;
top: 3400px;
`

const SolutionHeader = Styled.img
`
position: absolute;
width: 480px;
height: 60px;
left: 74px;
top: 3650px;

`

const SolutionImg = Styled.img
`
position: absolute;
width: 959px;
height: 553px;
left: 73px;
top: 3790px;

`

const SolutionText1 = Styled.div

`
position: absolute;
top: 4400px;
right: 800px;
left: 0px;
font-size: 19px;
`

const SolutionText2 = Styled.div

`
position: absolute;
top: 4400px;
right: 290px;
left: 460px;
font-size: 19px;
`
const MethodHeader = Styled.img

`
position: absolute;
width: 437px;
height: 119.18px;
left: 70px;
top: 4650px;
`

const UserPersonaImg = Styled.img
`
position: absolute;
width: 647px;
height: 515px;
left: 75px;
top: 4900px;
`

const TaskFlowImg = Styled.img
`
position: absolute;
width: 628px;
height: 216px;
left: 75px;
top: 5550px;

`

const UserFlowImg = Styled.img
`
position: absolute;
width: 641px;
height: 564px;
left: 67px;
top: 5880px;
`

const SketchImg = Styled.img
`
position: absolute;
width: 629px;
height: 370px;
left: 67px;
top: 6590px;

`

const WireframeImg = Styled.img
`
position: absolute;
width: 640px;
height: 794px;
left: 67px;
top: 7100px;

`
const BrandUIImg = Styled.img
`
position: absolute;
width: 655px;
height: 1116px;
left: 67px;
top: 8050px;

`
const MethodText = Styled.div
`
#user-header {
   position: absolute;
   top: 4825px;
   font-size: 32px;
   margin-left: 15px;
}
#user-text {
   position: absolute;
   top: 5030px;
   font-size: 24px;
   margin-left: 675px;
    margin-right: 380px;

}
#task-header {
   position: absolute;
   top: 5480px;
   font-size: 32px;
    margin-left: 15px;
}
#task-text {
   position: absolute;
   top: 5580px;
   font-size: 24px;
   margin-left: 675px;
    margin-right: 380px;
}
#user-flow-header {
   position: absolute;
   top: 5810px;
   font-size: 32px;
   margin-left: 15px;
}
#user-flow-text {
   position: absolute;
   top: 5950px;
   font-size: 24px;
   margin-left: 675px;
    margin-right: 380px;

}
#sketch-header {
   position: absolute;
   top: 6540px;
   font-size: 32px;
   margin-left: 15px;
}
#sketch-text {
   position: absolute;
   top: 6640px;
   font-size: 24px;
   margin-left: 675px;
    margin-right: 380px;
}
#wireframe-header {
   position: absolute;
   top: 7050px;
   font-size: 32px;
   margin-left: 15px;
}
#wireframe-text {
   position: absolute;
   top: 7200px;
   font-size: 24px;
   margin-left: 675px;
    margin-right: 380px;
}
#wireframe-text2 {
   position: absolute;
   top: 7360px;
   font-size: 24px;
   margin-left: 675px;
    margin-right: 380px;
}
#branding-header {
   position: absolute;
   top: 8000px;
   font-size: 32px;
   margin-left: 15px;
}
#branding-text {
   position: absolute;
   top: 8390px;
   font-size: 24px;
    margin-left: 675px;
    margin-right: 380px;
}
#branding-text2 {
   position: absolute;
   top: 8610px;
   font-size: 24px;
    margin-left: 675px;
    margin-right: 380px;
}
`

const TestHeader = Styled.img
`
position: absolute;
width: 502.1px;
height: 115px;
left: 63px;
top: 9300px;

`

const TestTable = Styled.div
    `
    position: absolute;
    height: 46px;
    left: 50px;
    right: 290px;
    top: 9520px;
    
     ul {
        display: block;
        list-style: none;
    };
    li {
        text-align: left;
    }
    td {
    vertical-align: center;
    padding: 20px;
    font-size: 24px;
    }
    .table-header {
        font-size: 32px;
    }
    `
const TestText = Styled.div
`
    position: absolute;
    font-size: 24px;
    top: 9450px;
    left: 0px;

`

const Test1Img =Styled.img
`
position: absolute;
width: 955px;
height: 644px;
left: 66px;
top: 9800px;

`

const Test2Img =Styled.img
`
position: absolute;
width: 956px;
height: 658px;
left: 66px;
top: 10550px;

`
const Test3Img =Styled.img
`
position: absolute;
width: 970px;
height: 676px;
left: 66px;
top: 11300px;

`

const TestText1 = Styled.div
`
position: absolute;
top: 10060px;
font-size: 16px;
left: 600px;
`

const TestText2 = Styled.div
`
position: absolute;
top: 10820px;
font-size: 16px;
left: 600px;
`

const TestText3 = Styled.div
`
position: absolute;
top: 11580px;
font-size: 16px;
left: 600px;
`

const PrototypeBan = Styled.img
`
position: absolute;
width: 274px;
height: 77px;
left: 70px;
top: 12050px;

`

const ProtoText = Styled.div
`
position: absolute;
left: 40px;
top: 12070px;
font-size: 24px;
`

const ArrowRightImg = Styled.img
`
position: absolute;
left: 300px;
top: 12070px;
width: 15px;
height: 27px;

`

const FollowUpHeader = Styled.img
`
position: absolute;
width: 489px;
height: 60px;
left: 70px;
top: 12200px;

`

const FollowUpText = Styled.div
`
position: absolute;
top: 12350px;
left: 0px;
font-size: 24px;
margin-right: 340px;
`
const FinalRect = Styled.img
`
position: absolute;
width: 1103px;
height: 400px;
left: 0px;
top: 12500px;

`

const WC1 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 12620px;

`

const WC2 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 12710px;

`
const WC3 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 12800px;

`

const FinalText = Styled.div

`
position: absolute;
top: 12520px;
color: #FFF1EC;
p{
    font-size: 32px;
    margin-bottom: 55px;
    margin-left: 0;
}
 ul {
        display: block;
        list-style: none;
        font-size: 24px;
        margin-left: 20px;
    }
 li {
        margin-left: 80px;
        margin-right: 400px;
        margin-bottom: 50px;

 }


`

const ReturnImg = Styled.img 
    `
    position: absolute;
    width: 250px;
    height: 35px;
    left: 63px;
    top: 13000px;
    bottom: 100px;
    `