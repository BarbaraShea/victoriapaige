import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import FCHeader from '../images/ForestryHeader.png';
import FCNav from "../Components/FCNav";
import FCDevice from '../images/FCdevice.png';
import FCCircle from '../images/FCcircle.png';
import FCVector from '../images/FCvector.png';
import ProblemHeader from '../images/Problem.png';
import ProblemBanner from '../images/ProblemBanner.png';
import NumCir from '../images/numcircle.png';
import One from '../images/1.png';
import Two from '../images/2.png';
import ResearchHeader from '../images/research.png';
import LoopHeader from '../images/loop.png';
import CompetitiveImg from '../images/analysis.png';

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
        <p> Many customers are also not aware that Forestry Camp is associated with Burial Beer, one of the most famous breweries on the east coast. </p>
        </Prob>
        <RLoop src={LoopHeader} id="research"/>
        <RHeader src={ResearchHeader}/>
        <ComAna>
        <p><strong>Competitive Analysis</strong></p>
        </ComAna>
        <ComImg src={CompetitiveImg}/>
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