import React from 'react';
import './assets/main.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Overlay from './components/overlay/Overlay';
import pageContext from './utils/pageContext';
import AboutMe from './components/about-me/AboutMe';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Flashlight from './components/flashlight/Flashlight';

function App() {

  return (

    <div className="bg-custom-purple h-screen overflow-visible">
      <pageContext.Provider>
      <Router>
        <Switch>
          <Route path="/about-me">
            <Navbar />
            <Overlay />
            <AboutMe />
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
