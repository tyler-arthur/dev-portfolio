import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Hamburger = () => {

  const [menuState, setMenuState] = useState(false)

  const switchMenuState = () => {
    menuState === false ?
        setMenuState(true)
        :
        setMenuState(false)
  }

  return (
    <div className="sticky top-auto mt-2 mr-6 text-5xl">
      <button onClick={switchMenuState}
      >
        <i className="fas fa-bars text-custom-aqua"></i>
      </button>
      {menuState === false?
        null
        :
        <div className="z-10 fixed py-2 px-5 mt-4 -ml-12 space-y-4 bg-opacity-75 bg-custom-darkPurple border-b border-l border-custom-orange shadow-inner text-xl font-medium text-right text-custom-aqua">
          <Link className="block focus:transition ease-in-out duration-300 "
          onClick={switchMenuState}  
          to="/"
            href="#responsive-header"
          >
            Home
          </Link>
          <Link className="block" 
          onClick={switchMenuState}  
          to="/about-me"
            href="#responsive-header"
          >
            About
          </Link>
          <Link className="block" 
          onClick={switchMenuState}  
          to="/projects"
            href="#responsive-header"
          >
            Projects
          </Link>
          <Link className="block" 
          onClick={switchMenuState}  
          to="/contact"
            href="#responsive-header"
          >
            Contact
          </Link>
          <div className="space-x-4 text-2xl">
            <a href="https://github.com/tarthurf">
              <i className="fab fa-github text-custom-aqua"></i>
            </a>
            <a href="https://www.linkedin.com/in/tyler-arthur-8a64779b/">
              <i className="fab fa-linkedin text-custom-aqua"></i>
            </a>
          </div>
        </div>
      }
    </div>
  );
}

export default Hamburger;