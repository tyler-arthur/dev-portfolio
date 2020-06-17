import React from 'react';
import './assets/main.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home'

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Home />
    </React.Fragment>
  );
}

export default App;
