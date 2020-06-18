import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './assets/main.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Overlay from './components/overlay/Overlay';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import pageContext from './utils/pageContext';
import Flashlight from './components/flashlight/Flashlight';

function App() {

  return (

    <div className="bg-custom-purple h-screen overflow-visible">
      <pageContext.Provider>
      <Router>
        <Switch>
          <Route path="/contact">
            <Navbar />
            <Overlay />
            <Contact />
          </Route>
          <Route path="/about-me">
            <Navbar />
            <Overlay />
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Navbar />
            <Overlay />
            <Projects />
          </Route>
          <Route path="/">
            <Navbar />
            <Overlay />
            <Home />
          </Route>
        </Switch>
      </Router>
      </pageContext.Provider>
    </div>
  );
}

export default App;
