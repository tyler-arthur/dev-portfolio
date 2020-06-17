import React from 'react';
import './assets/main.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import pageContext from './utils/pageContext';
import Flashlight from './components/flashlight/Flashlight';

function App() {

  return (
    <React.Fragment>
      <pageContext.Provider>
        <Navbar />
        <Home />
      </pageContext.Provider>
    </React.Fragment>
  );
}

export default App;
