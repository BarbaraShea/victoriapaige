import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import ATNav from '../Components/ATNav.js';
import ATOpener from '../images/Alltrails.png';
import ProblemHeader from '../images/Problem.png';
import ProblemBanner from '../images/ProblemBanner.png';
import FCHeader from '../images/ForestryHeader.png';
import ResearchHeader from '../images/ResearchHeader.png';
import ResearchReading from '../images/ResearchReading.png';
import CompAna from '../images/CompAnalysis.png';
import UserInt from '../images/UserInt.png';
import Rect from '../images/FollowUpRect.png';
import ATHeader from '../images/AlltrailsHeader.png';
import Fears from '../images/fears.png';
import Motivations from '../images/motivations.png';
import Needs from '../images/needs.png';
import Gap from '../images/GapHeader.png';
import Solution from '../images/SolutionHeader.png';
import Apps from '../images/AppScreens.png';

const AllTrails = () => {
    return (
        <>
        <ATNav/>
        <ATHeaderContainer id="intro">
            <AT src={ATHeader} alt='Forestry CAmp Case Study'/>
        </ATHeaderContainer>  
        <ATImg src={ATOpener}/>
        <Table>
            <table>
            <tr>
                <td><strong>Overview</strong></td>
                <td>Utilize the existing UI/UX app design at Alltrails to add a safety/accessibility/inclusivity feature.</td>
            </tr>
            <tr>
                <td><strong>Timeline</strong></td>
                <td>80 Hours - 4 weeks</td>
            </tr>
            <tr>
                <td><strong>Role</strong></td>
                <td>
                <ul>
                    <li>UX Research</li>
                    <li>Mobile Design</li>
                </ul>
                </td>
            </tr>
            </table>
        </Table>
        <PBanner src={ProblemBanner} id="problem"/>
        <PHeader src={ProblemHeader}/>   
        <ProblemText>
        <p id="quote"><strong>“There are certain places I won’t hike alone, and if I do, I make sure I don’t dress as flamboyantly.”</strong></p>    
        <p id="byline"> -- Christian, an LGBTQ+ backpacker</p>
        <p> The outdoor industry historically focuses on white, fit, well-off, English-speaking males. <strong>There are limited support and features </strong> for outdoorsy folks that fall outside of this category, and <strong>the industry is underserving them.</strong></p>
        </ProblemText>
        <RHeader src={ResearchHeader} id="research"/>
        <ResearchText1>
        <p id="header"><strong>Background Reading</strong></p>
        <p>Who’s already doing the work? I identified <strong>nonprofits that are already bringing awareness to this vision</strong> and scoured their websites to learn as much as I could.</p>
        <p>Big thank you to: Disabled Hikers, Black Girls Hike RVA, LGBT Outdoors, Indiginous Women Hike, and Latino Outdoors for your equity advocacy in the outdoor industry.</p>
        </ResearchText1>
        <RReadingImg src={ResearchReading}/>
        <ResearchText2>
        <p id="header"><strong>Competitive Analysis</strong></p>
        <p>I checked out current hiking/biking/camping apps and sites. What features were they highlighting? Did anyone have safety and accessibility features on their platform?</p>
        <p><strong>None of the major hiking or backpacking apps had thorough accessibility features</strong>, none had equity measures, and very few had physical safety features. Most of these apps relied on reviews for this information.</p>
        </ResearchText2>
        <CompAnaImg src={CompAna}/>
         <ResearchText3>
        <p id="header"><strong>User Interviews</strong></p>
        <p class="para">I interviewed four people that are avid hikers/backpackers/mountain bikers to hear about their experiences in the woods.</p>
        <p class="para">All of these people fell into one or more categories of my target audience (LGBTQ+, BIPOC, temporarily or permanently disabled, or solo female).</p>
        </ResearchText3>
        <UserIntImg src={UserInt}/>
        <InsightsRect src={Rect}/>
        <InsightsText>
        <p> <strong> Major Insights </strong></p>
        </InsightsText>
        <NeedsImg src={Needs}/>
        <FearsImg src={Fears}/>
        <MotivationsImg src={Motivations}/>
        <GapHeader src={Gap} id="gap"/>
         <GapText>
        <p id="quote">“Some hikes, I just won’t take my disabled mother on. It’s not worth it for the trail to say it’s easy when it’s not.”</p>    
        <p> People with disabilities, the LGBT+ community, Black and Indiginous people of color, non-native English speakers, and female hikers <strong> need more information before feeling safe and welcome on trails</strong>, especially when hiking alone.</p>
        </GapText>
        <SolutionHeader src={Solution}/>
        <SolutionText>
        <p> I decided to add safety, inclusivity and accessibility  features to Alltrails’ app <strong>to empower marginalised groups to get out in nature.</strong> This helped me to fully realize and name the <strong>why</strong> behind what I was doing, as an inspiration and a reminder of the importance of this feature. </p>
         </SolutionText>
         <AppsImg src={Apps}/>
         <SolutionText1>
             <p id="p1">Self-disclosure aggregate ratings</p>
             <p id="p2">Safety and Accessibility Filters</p>
             <p id="p3">Inclusivity Indicators</p>
             <p id="p4">Trail Technicality + Condition Report</p>
             <p id="p5">Optional disclosure to encourage comfort</p>
             <p id="p6">A “what’s this?” feature</p>
        </SolutionText1>
         </>
    )
};

export default AllTrails;


const ATHeaderContainer = Styled.div
    `
    display: block;
    align-items: left;
    justify-content: left;
`

const AT = Styled.img
    `
    position: absolute;
    left: 3.58%;
    right: 61.08%;
    top: 6.5%;
    width: 415px;
    height: 40px;
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

const ATImg = Styled.img
`
position: absolute;
width: 722px;
height: 536px;
left: 35px;
top: 141px;
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

const ProblemText = Styled.div
`
position: absolute;
left: 56px;
top: 1070px;
margin-right:160px;
#quote{
    font-size: 28px;
}
#byline{
    font-size: 16px;
    margin-left:480px;
    margin-bottom: 50px;
}
p {
    font-size: 19px;
}

`

const RHeader = Styled.img
`
position: absolute;
width: 303px;
height: 70px;
left: 70px;
top: 1370px;
`

const ResearchText1 = Styled.div
`
position: absolute;
left: 77px;
top: 1520px;
font-size: 25px;
#header{
    font-size: 25px;
    margin-bottom: 230px;
}
p{
   font-size: 19px;
   margin-right: 300px; 
}
`

const RReadingImg = Styled.img
`
position: absolute;
width: 776px;
height: 130px;
left: 77px;
top: 1600px;
`

const ResearchText2 = Styled.div
`
position: absolute;
left: 77px;
top: 1960px;
font-size: 25px;
#header{
    font-size: 25px;
    margin-bottom: 230px;
}
p{
   font-size: 19px;
   margin-right: 300px; 
}
`

const CompAnaImg = Styled.img
`
position: absolute;
width: 776px;
height: 130px;
left: 77px;
top: 2040px;
`

const ResearchText3 = Styled.div
`
position: absolute;
left: 77px;
top: 2410px;
font-size: 25px;
#header{
    font-size: 25px;
    margin-bottom: 100px;
}
.para{
   font-size: 19px;
   margin-left: 460px;
   margin-right: 330px; 
}
`

const UserIntImg = Styled.img
`
position: absolute;
width: 424px;
height: 271px;
left: 74px;
top: 2500px;
`

const InsightsRect = Styled.img
`
position: absolute;
width: 825px;
height: 685px;
left: 0px;
top: 2850px;

`

const InsightsText = Styled.div
`
position: absolute;
top: 2900px;
font-size: 25px;
color: #FFF1EC;
`

const NeedsImg = Styled.img
`
position: absolute;
top: 2960px;
width: 676px;
height: 131px;
`

const FearsImg = Styled.img
`
position: absolute;
top: 3130px;
width: 676px;
height: 164px;
`

const MotivationsImg = Styled.img
`
position: absolute;
top: 3340px;
width: 676px;
height: 166px;
`

const GapHeader = Styled.img
`
position: absolute;
width: 220px;
height: 64px;
left: 70px;
top: 3600px;

`

const GapText = Styled.div
`
position: absolute;
left: 56px;
top: 3730px;
margin-right:160px;
#quote{
    font-size: 28px;
    margin-bottom: 40px;
    font-weight: 500;
}
p {
    font-size: 19px;
}

`

const SolutionHeader = Styled.img
`
position: absolute;
width: 374px;
height: 44px;
left: 74px;
top: 4000px;

`

const SolutionText = Styled.div
`
position: absolute;
left: 74px;
top: 4100px;
font-size: 19px;
margin-right: 160px;
`

const AppsImg = Styled.img
`
position: absolute;
width: 728px;
height: 847px;
left: 69px;
top: 4200px;

`

const SolutionText1 = Styled.div
`
text-align: center;
#p1 {
   position: absolute;
   top: 4600px;
   font-size: 19px;
   margin-left: 55px;
   margin-right: 890px;
   text-align: center;

}
#p2 {
   position: absolute;
   top: 4600px;
   font-size: 19px;
   margin-left: 310px;
   margin-right: 620px;
   text-align: center;
   }
#p3 {
   position: absolute;
   top: 4600px;
   font-size: 19px;
   margin-left: 615px;
   margin-right: 400px;
   text-align: center;
   }
#p4 {
   position: absolute;
   top: 5065px;
   font-size: 19px;
   margin-left: 55px;
   margin-right: 890px;
   text-align: center;
}
#p5 {
   position: absolute;
   top: 5065px;
   font-size: 19px;
   margin-left: 310px;
   margin-right: 620px;
   text-align: center;}
#p6 {
   position: absolute;
   top: 5065px;
   font-size: 19px;
   margin-left: 590px;
   margin-right: 380px;
   text-align: center;}
`