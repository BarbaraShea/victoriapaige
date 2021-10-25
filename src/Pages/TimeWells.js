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
// import Rect from '../images/FollowUpRect.png';


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