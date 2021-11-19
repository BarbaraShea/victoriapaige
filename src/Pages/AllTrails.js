import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import ATNav from '../Components/ATNav.js';
import LogoNav from "../Components/LogoNav.js";
import ATOpener from '../images/Alltrails.png';
import ProblemHeader from '../images/Problem.png';
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
        <LogoNav/>
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
        <PHeader src={ProblemHeader} id="problem"/>   
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
        <p class="para">I interviewed four people that are avid hikers/backpackers/ mountain bikers to hear about their experiences in the woods.</p>
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
        <p id="ATproto"> <strong><a href="https://www.figma.com/proto/lARHntk9QL09upIkgVY0VY/Timewells-Priority-Revision?page-id=0%3A1&node-id=272%3A256&viewport=241%2C48%2C0.62&scaling=min-zoom&starting-point-node-id=1%3A2118" target="_blank"> See Prototype </a></strong></p>
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
    width: 500px;
    height: 70px;
    `

const Table = Styled.div
    `
    position: absolute;
    height: 46px;
    left: 50px;
    right: 275px;
    top: 770px;
    
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
    font-size: 24px;
    }
   `

const ATImg = Styled.img
`
position: absolute;
width: 903px;
height: 671px;
left: 35px;
top: 141px;
`

const PHeader = Styled.img
`
position: absolute;
left: 56px;
top: 1065px;
width: 386px;
height: 94px;
`

const ProblemText = Styled.div
`
position: absolute;
left: 0px;
top: 1270px;
margin-right:200px;
#quote{
    font-size: 35px;
    line-height: 1.2;
}
#byline{
    font-size: 22px;
    margin-left: 680px;
    margin-bottom: 50px;
}
p {
    font-size: 24px;
}

`

const RHeader = Styled.img
`
position: absolute;
width: 379px;
height: 88px;
left: 70px;
top: 1630px;
`

const ResearchText1 = Styled.div
`
position: absolute;
left: 0px;
top: 1820px;
#header{
    font-size: 32px;
    margin-bottom: 280px;
}
p{
   font-size: 24px;
   margin-right: 480px; 
}
`

const RReadingImg = Styled.img
`
position: absolute;
width: 970px;
height: 163px;
left: 50px;
top: 1920px;
`

const ResearchText2 = Styled.div
`
position: absolute;
left: 0px;
top: 2400px;
#header{
    font-size: 32px;
    margin-bottom: 280px;
}
p{
   font-size: 24px;
   margin-right: 480px; 
}
`

const CompAnaImg = Styled.img
`
position: absolute;
width: 970px;
height: 163px;
left: 50px;
top: 2500px;
`

const ResearchText3 = Styled.div
`
position: absolute;
left: 0px;
top: 3000px;
#header{
    font-size: 35px;
    margin-bottom: 100px;
}
.para{
   font-size: 24px;
   margin-left: 640px;
   margin-right: 430px; 
}
`

const UserIntImg = Styled.img
`
position: absolute;
width: 530px;
height: 339px;
left: 74px;
top: 3100px;
`

const InsightsRect = Styled.img
`
position: absolute;
width: 1032px;
height: 857px;
left: 0px;
top: 3500px;

`

const InsightsText = Styled.div
`
position: absolute;
top: 3550px;
color: #FFF1EC;
left: -10px;
p{
    font-size: 32px;
}
`

const NeedsImg = Styled.img
`
position: absolute;
top: 3620px;
width: 846px;
height: 164px;
`

const FearsImg = Styled.img
`
position: absolute;
top: 3820px;
width: 846px;
height: 206px;
`

const MotivationsImg = Styled.img
`
position: absolute;
top: 4060px;
width: 846px;
height: 208px;
`

const GapHeader = Styled.img
`
position: absolute;
width: 276px;
height: 81px;
left: 70px;
top: 4450px;

`

const GapText = Styled.div
`
position: absolute;
left: 0px;
top: 4600px;
margin-right:160px;
#quote{
    font-size: 35px;
    margin-bottom: 40px;
    font-weight: 500;
}
p {
    font-size: 24px;
    line-height: 1.2;
}

`

const SolutionHeader = Styled.img
`
position: absolute;
width: 468px;
height: 56px;
left: 74px;
top: 4900px;

`

const SolutionText = Styled.div
`
position: absolute;
left: 0px;
top: 5050px;
font-size: 24px;
margin-right: 160px;
`

const AppsImg = Styled.img
`
position: absolute;
width: 911px;
height: 1059px;
left: 69px;
top: 5200px;

`

const SolutionText1 = Styled.div
`
text-align: center;
#p1 {
   position: absolute;
   top: 5690px;
   font-size: 24px;
   margin-left: 40px;
   margin-right: 1110px;
   text-align: center;

}
#p2 {
   position: absolute;
   top: 5690px;
   font-size: 24px;
   margin-left: 380px;
   margin-right: 800px;
   text-align: center;
   }
#p3 {
   position: absolute;
   top: 5690px;
   font-size: 24px;
   margin-left: 715px;
   margin-right: 300px;
   text-align: center;
   }
#p4 {
   position: absolute;
   top: 6270px;
   font-size: 24px;
   margin-left: 40px;
   margin-right: 1110px;
   text-align: center;
}
#p5 {
   position: absolute;
   top: 6270px;
   font-size: 24px;
    margin-left: 380px;
   margin-right: 800px;
   text-align: center;}
#p6 {
   position: absolute;
   top: 6270px;
   font-size: 24px;
   margin-left: 700px;
   margin-right: 420px;
   text-align: center;}
`

const MethodHeader = Styled.img

`
position: absolute;
width: 437px;
height: 120px;
left: 70px;
top: 6450px;
`

const LoraImg = Styled.img
`
position: absolute;
width: 639px;
height: 420px;
left: 70px;
top: 6750px;

`

const StoryImg = Styled.img

`
position: absolute;
width: 639px;
height: 404px;
left: 65px;
top: 8050px;


`

const MethodText = Styled.div
`
font-size: 19px;
#user-header {
   position: absolute;
   top: 6650px;
   font-size: 32px;
   margin-left: 15px;
}
#user-text {
   position: absolute;
   top: 6900px;
   font-size: 24px;
   margin-left: 670px;
    margin-right: 290px;
}
#feature-header {
   position: absolute;
   top: 7300px;
   font-size: 32px;
   margin-left: 15px;
}
#feature-text {
   position: absolute;
   top: 7400px;
   font-size: 24px;
  margin-left: 10px;
    margin-right: 400px;

}
#safety{
   position: absolute;
   top: 7600px;
   left: 90px;
   font-size: 22px;
}
#inclusivity{
   position: absolute;
   top: 7600px;
   left: 430px;
   font-size: 22px;
   margin-right: 700px;
}
#accessibility{
   position: absolute;
   top: 7600px;
   left: 770px;
   font-size: 22px;
   margin-right: 280px;
}
}
#story-header {
   position: absolute;
   top: 7950px;
   font-size: 32px;
   margin-left: 15px;
}
#story-text {
   position: absolute;
   top: 8170px;
   font-size: 24px;
      margin-left: 670px;
    margin-right: 290px;

}
#wireframe-header {
   position: absolute;
   top: 8530px;
   font-size: 32px;
   margin-left: 15px;
}
#wireframe-text {
   position: absolute;
   top: 8720px;
   font-size: 24px;
   margin-left: 670px;
    margin-right: 290px;

}
`
const SafetyList = Styled.img
`
position: absolute;
width: 124px;
height: 39.33px;
left: 70px;
top: 7540px;
`

const InclusivityList = Styled.img
`
position: absolute;
width: 173px;
height: 36.87px;
left: 400px;
top: 7540px;
`

const AccessibilityList = Styled.img
`
position: absolute;
width: 199px;
height: 36.61px;
left: 740px;
top: 7540px;
`

const WireframeImg = Styled.img
`
position: absolute;
width: 641px;
height: 366px;
left: 65px;
top: 8650px;

`

const TestHeader = Styled.img
`
position: absolute;
width: 502.1px;
height: 115px;
left: 63px;
top: 9130px;

`


const Number1 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 92px;
top: 9450px;
`

const Number2 = Styled.img

`
position: absolute;
width: 33px;
height: 33px;
left: 92px;
top: 9510px;
`


const NumberOne = Styled.img

`
position: absolute;
width: 7px;
height: 17px;
left: 103px;
top: 9455px;
`

const NumberTwo = Styled.img
`
position: absolute;
width: 11px;
height: 18px;
left: 103px;
top: 9518px;

`


const TestBullets = Styled.div
`
position: absolute;
// width: 860px;
// height: 60px;
left: 80px;
top: 9450px;
    p{
        margin-bottom: 32px;
        margin-right: 170px;
        font-size: 24px;
        line-height: 1.2;
    }
    #final{
        margin-top: 40px;
        margin-left: 0px;
    }
`

const Test = Styled.div
`
position: absolute;
line-height: 1.2;
left: 0px;
top: 9320px;
right: 140px;
 p {
    font-size: 24px;
    font-weight: 500;
    }
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
left: 50px;
top: 12520px;
font-size: 24px;
`

const ArrowRightImg = Styled.img
`
position: absolute;
left: 300px;
top: 12520px;
width: 15px;
height: 27px;

`

const TestImg1 = Styled.img
`
position: absolute;
width: 944.66px;
height: 862px;
left: 70px;
top: 9650px;
`

const Test1Text = Styled.div
`
position: absolute;
margin-right: 250px;
left: 660px;
top: 9750px;
font-size: 24px;
`
const Test1Text2 = Styled.div
`
position: absolute;
margin-right: 200px;
left: 660px;
top: 10100px;
font-size: 24px;
`

const TestImg2 = Styled.img
`
position: absolute;
width: 672px;
height: 718.69px;
left: 50px;
top: 10600px;

`
const Test2Text = Styled.div
`
position: absolute;
margin-right: 200px;
left: 660px;
top: 10900px;
font-size: 24px;
`
const Test2Text2 = Styled.div
`
position: absolute;
margin-right: 850px;
left: 60px;
top: 11050px;
font-size: 24px;
`

const TestImg3 = Styled.img
`
position: absolute;
width: 930.22px;
height: 987px;
left: 94px;
top: 11450px;

`
const Test3Text = Styled.div
`
position: absolute;
margin-right: 300px;
left: 600px;
top: 11620px;
font-size: 24px;
`

const Test3Text2 = Styled.div
`
position: absolute;
margin-right: 200px;
left: 680px;
top: 12050px;
font-size: 24px;
`

const FollowUpHeader = Styled.img
`
position: absolute;
width: 490px;
height: 53px;
left: 70px;
top: 12650px;

`

const FinalRect = Styled.img
`
position: absolute;
width: 1048px;
height: 486px;
left: 0px;
top: 12790px;

`

const WC1 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 12910px;

`

const WC2 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 13020px;

`
const WC3 = Styled.img
`
position: absolute;
width: 33px;
height: 33px;
left: 74px;
top: 13140px;

`

const FinalText = Styled.div

`
position: absolute;
top: 12820px;
color: #FFF1EC;
p{
    font-size: 35px;
    margin-bottom: 40px;
    margin-left: 0px;
}
 ul {
        display: block;
        list-style: none;
        font-size: 24px;
    }
 li {
        margin-left: 80px;
        margin-right: 400px;
        margin-bottom: 60px;

 }


`

const ReturnImg = Styled.img 
    `
    position: absolute;
    width: 299px;
    height: 34px;
    left: 63px;
    top: 13330px;
    `