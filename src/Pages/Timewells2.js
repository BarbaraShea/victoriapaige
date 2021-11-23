import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import TWHeader from '../images/TimewellsHeader.png';
import TWNav from "../Components/TWNav";
import LogoNav from "../Components/LogoNav.js";
import TimewellsImg from '../images/Timewells.png';
import Return from '../images/Return.png';
import ProblemHeader from '../images/Problem.png';
import ResearchHeader from '../images/ResearchHeader.png';
import Solution from '../images/SolutionHeader.png';
import TestCircle from '../images/TestsCircle.png';
import FollowUp from '../images/FollowUp.png';
import Dark1 from  '../images/DarkOne.png';
import Dark2 from  '../images/DarkTwo.png';
import PersPics from '../images/PersonapPics.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import White4 from '../images/White4.png';
import Gap from '../images/GapHeader.png';
import TWLogo from '../images/TWLogo.png';
import Rect from '../images/FollowUpRect.png';

const Timewells2 = () => {
    return (
        <>
        <LogoNav/>
        <TWNav/>
        <TWHeaderContainer id="intro">
                <TW src={TWHeader} i="intro" alt='Timewells Case Study'/>
        </TWHeaderContainer>  
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
        <HeaderContainer>
             <Header src={ProblemHeader} id="problem"/>
        </HeaderContainer>
        <BulletCont>
            <Number src={Dark1}/>
            <p><strong>Time travel is a total unknown for your average person.</strong><span className="white"><strong> That can feel scary.</strong></span></p>
        </BulletCont>
        <BulletCont>
            <Number src={Dark2}/>
            <p><strong>Customers have to also decide what era to travel in on top of typical travel decisions.</strong><span className= "white"><strong> That can feel overwhelming. </strong></span></p>
        </BulletCont>
        <Text>
        <p>Timewells is offering a unique and brand new product to consumers. The company needs to present a trustworthy and understandable website and booking experience.</p>
        </Text>
        <HeaderContainer>
           <Header src={ResearchHeader} id="research"/>
        </HeaderContainer>
        <Text>
        <p><strong>Assume nothing.</strong></p>
        <p id="para">Talking to users about their motivations and frustrations helped me contextualize and use data-drive decisions for my eventual final product solution. Because as we know, <strong> the designer is not the user.</strong></p>
        </Text>
        <PersonaImg src={PersPics}/>
        <PersonHeaders>
            <Person>
            <p id="chris"><strong>Chris</strong></p>
            <p id="chris-age"> 32 years old </p>
            </Person>
            <Person>
            <p id="holly"><strong>Holly</strong></p>
            <p id="holly-age"> 31 years old </p>
            </Person>
            <Person>
            <p id="taylor"><strong>Taylor</strong></p>
            <p id="taylor-age"> 34 years old </p>
            </Person>
            <Person>
            <p id="sue"><strong>Sue</strong></p>
            <p id="sue-age"> 34 years old </p>
            </Person>
        </PersonHeaders>
         <Text>
        <p id="after"><strong>My interviewees were all well-traveled and adventurous.</strong> </p>
        <p id="last"> I do wish I had more range of age for my initial research.</p>
        </Text>
        <InsightsRectCont>
        <InsightsRect src={Rect}/>
            <InsightsCont2>
                <Thoughts><p><strong> Major Insights </strong></p> </Thoughts>
                <InsightsBulletCont id="insights">
                    <Number src={White1}/>
                    <p className="white"> Users travel to feel outside of their normal day-to-day-self.</p>
                </InsightsBulletCont>
                <InsightsBulletCont id="insights" >
                    <Number src={White2}/>
                    <p className="white">  Users want to be abe to search by style and vibe of trip, not just by location.</p>
                </InsightsBulletCont>
                <InsightsBulletCont id="insights">
                    <Number src={White3}/>
                    <p className="white"> Real reviews and pictures are incredibly important to build trust. </p>
                </InsightsBulletCont>
                 <InsightsBulletCont id="insights">
                    <Number src={White4}/>
                    <p className="white"> Cheap-looking websites are a major turnoff and prohibit purchases. </p>
                </InsightsBulletCont>
            </InsightsCont2>
        </InsightsRectCont>
        <NavLink to="/"><ReturnImg src={Return}/></NavLink> 
        </>
    )
};

export default Timewells2;


const TWHeaderContainer = Styled.div
    `
   display: flex;
flex-direction: column;
padding: 3rem;
@media only screen and (max-width: 1300px) {
    text-align: center;
    align-items: center;

`

const TW = Styled.img
    `
height: auto;
width: 100%;
max-width: 30rem;
;
    `

const TWImage = Styled.img
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
margin-top: 1rem;
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

const BulletCont = Styled.div
`
display: flex;
flex-direction:row;
margin-left: 4rem;
margin-bottom: 2.5rem;
margin-right: 1.5rem;
margin-top: 3rem;

p{
    margin-left: 2rem;
    max-width: 50rem;
}
.white{
    color: #FFF1EC;
     background-color: #360713;
    }
`

const Number = Styled.img
`
flex-direction: row;
width: 2rem;
height: 2rem;
`
const Text = Styled.div
`position: static;
max-width: 59rem;
width: 100%
height: auto;
margin-left: 1.5rem;
margin-top: 1.5rem;
margin-bottom: 1.5rem;
font-size: 1.5rem;
@media only screen and (max-width: 1200px){
        p{
        font-size: 1rem;
        line-height: 1.2;
        margin-top: 0.9rem;
        }
}
`

const PersonaImg = Styled.img
    `
    max-width: 60.5rem;
    width: 100%;
    height: auto;
    left: 4.375rem;
    margin-top: 1rem;
    margin-left: 2rem;
    @media only screen and (max-width: 1350px){
        width: 90%;
        align-items: center;
    }
    `

const PersonHeaders = Styled.div
`
display: flex;
position: static;
margin-left: 3.5rem;
max-width: 57rem;
width: 100%;
height: auto;
justify-content: space-between;
 @media only screen and (max-width: 1200px){
        width: 90%;
        align-items: center;
        margin-left: 2rem;

    }
`

const Person = Styled.div
`
flex-direction: row;
max-width: 8.8rem;
text-align: center;
`

const InsightsRect = Styled.img
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
const InsightsRectCont = Styled.div
`
position: relative;
display: block;
max-width: 65.5rem;
max-height: 35.5rem;
width: 100%;
`

const InsightsCont2 = Styled.div
`
position: absolute;
display: flex;
flex-direction: column;
margin-top: -28rem;
margin-left: 2rem;

`

const Thoughts = Styled.div
`
p{
font-size: 2rem;
margin-bottom: 1rem;
margin-left: 1rem;
@media only screen and (max-width: 1200px){
font-size: 1.5rem;
}
}
color: #FFF1EC;
`

const InsightsBulletCont = Styled.div
`
display: flex;
flex-direction:row;
margin-left: 4rem;
margin-bottom: 1.5rem;
margin-right: 1.5rem;
margin-top: 1.5rem;

p{
    margin-left: 2rem;
    max-width: 50rem;
}
.white{
    color: #FFF1EC;
     background-color: #360713;
    }
`