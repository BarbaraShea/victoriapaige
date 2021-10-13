import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";


//import 
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Work from "./Pages/WorkGrid";
import LandingPage from "./Pages/LandingPage";
import TimeWells from "./Pages/TimeWells";
import ForestryCamp from "./Pages/ForestryCamp";
import ProjectThree from "./Pages/ProjectThree";
import ProjectFour from "./Pages/ProjectFour";
import GlobalStyle from "./Components/GlobalStyle";
import Navbar from "./Components/Navbar";


function App() {
  return (
   <>
   <Router>
   <GlobalStyle />
   <Navbar/>
   <LandingPage exact path="/" component={LandingPage}/>
   {/* <Work exact path="/WorkGrid" component={Work}/>
   <About exact path="/About" component={About}/>  
   <Contact exact path="/Contact" component={Contact}/> */}
   {/* <TimeWells exact path="/TimeWells" component={TimeWells}/>
   <ForestryCamp exact path="/ForestryCamp" component={ForestryCamp}/> 
   <ProjectThree exact path="/ProjectThree" component={ProjectThree}/>
   <ProjectFour exact path="/ProjectFour" component={ProjectFour}/> */}
   </Router>
   </>
  );
}

export default App;
