import React from 'react';
import {  } from '@fortawesome/free-solid-svg-icons'

const Overlay = () => {


  return (
    <div className="fixed w-10 left-0 bottom-0 ml-10 mb-24 flex flex-col items-center">
      <div className="border border-black bg-custom-orange w-1 h-32 rounded-full mb-6"></div>
        <a href="https://github.com/tarthurf">
          <i className="fab fa-github mb-6 text-3xl text-custom-aqua"></i>
        </a>
        <a href="https://www.linkedin.com/in/tyler-arthur-8a64779b/">
          <i className="fab fa-linkedin text-3xl text-custom-aqua"></i>
        </a>
      <div className="border border-black bg-custom-orange w-1 h-32 rounded-full mt-6"></div>

    </div>
  );
}

export default Overlay;