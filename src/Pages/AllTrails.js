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
import Method from '../images/MethodHeader.png';
import Lora from '../images/LoraPersona.png';
import Storyboard from '../images/Storyboard.png';
import Wireframe from '../images/ATWireframe.png';
import Safety from '../images/Safety.png';
import Accessibility from '../images/Accessibility.png';
import Inclusivity from '../images/Inclusivity.png';
import TestCircle from '../images/TestsCircle.png';
import NumCir from '../images/numcircle.png';
import One from '../images/1.png';
import Two from '../images/2.png';
import ArrowRight from '../images/ArrowRight.png';
import Test1 from '../images/TestImg1.png'
import Test2 from '../images/TestImg2.png'
import Test3 from '../images/TestImg3.png'
import BrandBanner from '../images/BrandBanner.png';
import FollowUpRect from '../images/FollowUpRect.png';
import White1 from '../images/White1.png';
import White2 from '../images/White2.png';
import White3 from '../images/White3.png';
import FollowUp from '../images/FollowUp.png';
import Return from '../images/Return.png'


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
        <MethodHeader id="method" src={Method}/>
        <MethodText>
            <p id="user-header"><strong>User Persona</strong></p>
            <p id="user-text">My girl Lora was an amalgamation of all my user interviews and research. Lora knows what she wants and needs, and I designed for her. </p>
            <p id="feature-header"><strong>Feature List</strong></p>
            <p id="feature-text">This was an all-encompassing list of what each subcategory (safety, accessibility, and inclusivity) would require to help people feel comfortable on a trail.<strong> This helped me put the rubber (boot sole) to the road.</strong></p>
            <ul id="safety">
                <li> Signage </li>
                <li> Clarity of trail markers </li>    
                <li> Cell service </li>
                <li>Distance to closest hospital</li>
                <li>Presence of rangers</li>
                <li>Downed trees</li>
                <li>Presence of wildlife predation</li>
                <li>Open carry allowed (firearms)</li>
                <li>Emergency contact info</li>
            </ul>
            <ul id="inclusivity">
                <li>Allow self-identification for aggregated rating scores of inclusivity </li>
                <li>Non-English speakers</li>
                <li>BIPOC</li>
                <li>Non-neurotypical</li>
                <li>Native land acknowledgement</li>
                <li>Age (safe for little ones or for seniors)</li>
                <li>Easy to social distance for immunocompromised folks</li>
            </ul>
            <ul id="accessibility">
                <li>Easy for 2WD cars</li> 
                <li>Accessible parking</li>
                <li>Technicality rating (roots/rocks/etc)</li>
                <li>Upper body strength/dexterity</li>
                <li>Stable footing required</li>
                <li>Ability to climb over something</li>
                <li>Accessible by public transit</li> 
                <li>Step-free trail (low grade, no rocks)</li>
            </ul>
            <p id="story-header"><strong>Storyboard</strong></p>
            <p id="story-text"> This narative piece felt helpful for me as I know adding these type of features <strong>require a lot of buy-in from stakeholders.</strong> Here I’m able to show how an actual hiker would be looking for particular information.</p>
            <p id="wireframe-header"><strong>Wireframe</strong></p>
            <p id="wireframe-text">To add a feature, I needed to incorporate a wireframe into Alltrails’ existing UI and layout. <strong>The constraints made it easier than other projects,</strong> which I found refreshing. </p>
        </MethodText>
        <LoraImg src={Lora}/>
        <SafetyList src={Safety}/>
        <InclusivityList src={Inclusivity}/>
        <AccessibilityList src={Accessibility}/>
        <StoryImg src={Storyboard}/>
        <WireframeImg src={Wireframe}/>
        <TestHeader id="test" src={TestCircle}/>
         <Test>
        <p>A usability test was conducted with four participants in the target audience. </p>
        <p><strong>Research Goals</strong></p>
        </Test>
        <Number1 src={NumCir}/>
        <NumberOne src={One}/>
        <Number2 src={NumCir}/>
        <NumberTwo src={Two}/>
        <TestBullets>
        <p>Notice safety/accessibility/inclusivity features</p>
        <p>Use filters to find an accessible hike and leave a review.</p>
        <p id="final"> All four particpants successfully completed each goal. </p>
        </TestBullets>
         <TestImg1 src={Test1}/>
        <Test1Text>
        <p>“I really like that it says the hike is rated by the community - it’s not just some nebulous statement.”</p>
        </Test1Text>
        <Test1Text2>
        <p>I increased the contrast and added a background to the female hiker rating, since one user didn’t see it during testing.</p>
        </Test1Text2>
        <TestImg2 src={Test2}/>
        <Test2Text>
        <p> All of my users thought the blue pill buttons were colored differently because that was what they selected when filtering a hike. I added titles to ease clarity.</p>
        </Test2Text>
        <Test2Text2>
        <p> “The 2WD indicator is amazing! I always wish I knew things like that ahead of time.”</p>
        </Test2Text2>
        <TestImg3 src={Test3}/>
        <Test3Text>
        <p> “I wish there was a place on the trail conditions to note that I had to turn around.”</p>
        </Test3Text>
        <Test3Text2>
        <p>I added a “did you have to end your hike early?” question so people could indicate this on their trail report to help future hikers.</p>
        </Test3Text2>
        <PrototypeBan src={BrandBanner}/>
        <ProtoText>
        <p> <strong> See Prototype </strong></p>
        </ProtoText>
        <ArrowRightImg src={ArrowRight}/>
        <FollowUpHeader id="follow" src={FollowUp}/> 
        <FinalRect src={FollowUpRect}/>
        <WC1 src={White1}/>
        <WC2 src={White2}/>
        <WC3 src={White3}/>
        <FinalText>
        <p><strong> Final Thoughts </strong></p>
        <ul>
            <li> The swath of people I’m desigining for in this case study was huge. It could have been more focused if I’d stuck with one subgroup.</li>
            <li> I don’t feel like I did a great job finding a solution for women being scared of running into men with firearms on trails.  More research, please!</li>
            <li> The features seemed to be integrated smoothly. Most of my test subjects thought it was a real feature at first!  </li>
        </ul>
        </FinalText>
         <NavLink to="/"><ReturnImg src={Return}/></NavLink> 
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

const MethodHeader = Styled.img

`
position: absolute;
width: 349px;
height: 96px;
left: 70px;
top: 5200px;
`

const LoraImg = Styled.img
`
position: absolute;
width: 511px;
height: 336px;
left: 70px;
top: 5400px;

`

const StoryImg = Styled.img

`
position: absolute;
width: 511px;
height: 323px;
left: 65px;
top: 6360px;


`

const MethodText = Styled.div
`
font-size: 19px;
#user-header {
   position: absolute;
   top: 5330px;
   font-size: 25px;
   margin-left: 15px;
}
#user-text {
   position: absolute;
   top: 5500px;
   font-size: 19px;
   margin-left: 550px;
    margin-right: 300px;
}
#feature-header {
   position: absolute;
   top: 5785px;
   font-size: 25px;
   margin-left: 15px;
}
#feature-text {
   position: absolute;
   top: 5860px;
   font-size: 19px;
   margin-left: 15px;
margin-right: 300px;

}
#safety{
   position: absolute;
   top: 6040px;
   left: 90px;
   font-size: 16px;
}
#inclusivity{
   position: absolute;
   top: 6040px;
   left: 340px;
   font-size: 16px;
   margin-right: 600px;
}
#accessibility{
   position: absolute;
   top: 6040px;
   left: 640px;
   font-size: 16px;
   margin-right: 280px;
}
}
#story-header {
   position: absolute;
   top: 6300px;
   font-size: 25px;
   margin-left: 15px;
}
#story-text {
   position: absolute;
   top: 6450px;
   font-size: 19px;
   margin-left: 550px;
    margin-right: 300px;

}
#wireframe-header {
   position: absolute;
   top: 6730px;
   font-size: 25px;
   margin-left: 15px;
}
#wireframe-text {
   position: absolute;
   top: 6900px;
   font-size: 19px;
   margin-left: 550px;
    margin-right: 300px;

}
`
const SafetyList = Styled.img
`
position: absolute;
width: 99px;
height: 31px;
left: 70px;
top: 5985px;
`

const InclusivityList = Styled.img
`
position: absolute;
width: 138px;
height: 28px;
left: 320px;
top: 5985px;
`

const AccessibilityList = Styled.img
`
position: absolute;
width: 159px;
height: 28px;
left: 590px;
top: 5985px;
`

const WireframeImg = Styled.img
`
position: absolute;
width: 512px;
height: 292px;
left: 65px;
top: 6800px;

`

const TestHeader = Styled.img
`
position: absolute;
width: 401px;
height: 92px;
left: 63px;
top: 7150px;

`


const Number1 = Styled.img
`
position: absolute;
width: 28px;
height: 28px;
left: 92px;
top: 7395px;
`

const Number2 = Styled.img

`
position: absolute;
width: 28px;
height: 28px;
left: 92px;
top: 7450px;
`


const NumberOne = Styled.img

`
position: absolute;
width: 7px;
height: 17px;
left: 101px;
top: 7400px;
`

const NumberTwo = Styled.img
`
position: absolute;
width: 11px;
height: 18px;
left: 100px;
top: 7455px;

`


const TestBullets = Styled.div
`
position: absolute;
width: 860px;
height: 60px;
left: 160px;
top: 7400px;
    p{
        margin-bottom: 32px;
        margin-right: 170px;
        font-size: 19px;
        line-height: 1.2;
    }
    #final{
        margin-top: 40px;
        margin-left: -100px;
    }
`

const Test = Styled.div
`
position: absolute;
line-height: 1.2;
left: 64px;
top: 7300px;
right: 140px;
 p {
    font-size: 19px;
    font-weight: 500;
    }
`

const PrototypeBan = Styled.img
`
position: absolute;
width: 219px;
height: 61px;
left: 70px;
top: 9800px;

`

const ProtoText = Styled.div
`
position: absolute;
left: 110px;
top: 9815px;
font-size: 19px;
text-decoration: underline
`

const ArrowRightImg = Styled.img
`
position: absolute;
left: 240px;
top: 9815px;
width: 15px;
height: 27px;

`

const TestImg1 = Styled.img
`
position: absolute;
width: 755px;
height: 689px;
left: 70px;
top: 7580px;
`

const Test1Text = Styled.div
`
position: absolute;
margin-right: 190px;
left: 590px;
top: 7680px;
font-size: 19px;
`
const Test1Text2 = Styled.div
`
position: absolute;
margin-right: 120px;
left: 590px;
top: 7950px;
font-size: 19px;
`

const TestImg2 = Styled.img
`
position: absolute;
width: 537px;
height: 574px;
left: 99px;
top: 8330px;

`
const Test2Text = Styled.div
`
position: absolute;
margin-right: 140px;
left: 640px;
top: 8590px;
font-size: 19px;
`
const Test2Text2 = Styled.div
`
position: absolute;
margin-right: 640px;
left: 150px;
top: 8700px;
font-size: 19px;
`

const TestImg3 = Styled.img
`
position: absolute;
width: 744px;
height: 789px;
left: 94px;
top: 8950px;

`
const Test3Text = Styled.div
`
position: absolute;
margin-right: 210px;
left: 540px;
top: 9100px;
font-size: 19px;
`

const Test3Text2 = Styled.div
`
position: absolute;
margin-right: 90px;
left: 630px;
top: 9400px;
font-size: 19px;
`

const FollowUpHeader = Styled.img
`
position: absolute;
width: 392px;
height: 42px;
left: 70px;
top: 9950px;

`

const FinalRect = Styled.img
`
position: absolute;
width: 838px;
height: 388px;
left: 0px;
top: 10090px;

`

const WC1 = Styled.img
`
position: absolute;
width: 26px;
height: 26px;
left: 94px;
top: 10215px;

`

const WC2 = Styled.img
`
position: absolute;
width: 26px;
height: 26px;
left: 94px;
top: 10315px;

`
const WC3 = Styled.img
`
position: absolute;
width: 26px;
height: 26px;
left: 94px;
top: 10420px;

`

const FinalText = Styled.div

`
position: absolute;
top: 10120px;
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

const ReturnImg = Styled.img 
    `
    position: absolute;
    width: 239px;
    height: 27px;
    left: 63px;
    top: 10550px;
    `