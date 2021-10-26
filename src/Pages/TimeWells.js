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
import PersPics from '../images/PersonapPics.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import White4 from '../images/White4.png';
import Gap from '../images/Gap.png';
import Asterisk from '../images/Asterisk.png';
import TWLogo from '../images/TWLogo.png';


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
        <PersonaImg src={PersonaImg}/>
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