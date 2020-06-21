import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home';
import Overlay from './components/overlay/Overlay';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import pageContext from './utils/pageContext';

function App() {

  return (

    <div className="bg-custom-purple h-screen overflow-visible overflow-scroll">
      <pageContext.Provider>
      <Router>
        <Switch>
          <Route path="/contact">
            <Navbar />
            <Overlay />
            <Contact />
            <Footer />
          </Route>
          <Route path="/about-me">
            <Navbar />
            <Overlay />
            <AboutMe />
            <Footer />
          </Route>
          <Route path="/projects">
            <Navbar />
            <Overlay />
            <Projects />
            <Footer />
          </Route>
          <Route path="/">
            <Navbar />
            <Overlay />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
      </pageContext.Provider>
    </div>
  );
}

export default App;
