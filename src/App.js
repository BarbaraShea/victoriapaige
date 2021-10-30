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
import AllTrails from "./Pages/AllTrails";
import ProjectFour from "./Pages/ProjectFour";
import GlobalStyle from "./Components/GlobalStyle";


function App() {
  return (
   <>
   <Router>
   <GlobalStyle />
   <Switch>
   <LandingPage exact path="/" component={LandingPage}/>
   <Route exact path="/TimeWells" component={TimeWells}/>
   <Route exact path="/ForestryCamp" component={ForestryCamp}/> 
   <Route exact path="/AllTrails" component={AllTrails}/>
   <Route exact path="/ProjectFour" component={ProjectFour}/>
   </Switch>
   </Router>
   </>
  );
}

export default App;
