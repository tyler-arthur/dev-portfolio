import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home';
// import Overlay from './components/overlay/Overlay';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisH, faEllipsisV, faCircle as fasCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';

library.add(faGithub, faLinkedin, faEllipsisV, faEllipsisH, fasCircle, farCircle, faAngleLeft, faAngleRight)

function App() {

  return (

    <div className="relative pb-8 bg-custom-purple min-h-screen overflow-hidden">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
