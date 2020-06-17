import React from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../pages/Home'

const Flashlight = () => {
  
  const flashlight = require('./flashlight.css')

  function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)

  document.addEventListener('touchmove',update)

  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
}

export default Flashlight;