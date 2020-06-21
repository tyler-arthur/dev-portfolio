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
      <button  onClick={switchMenuState}
      >
        <i class="fas fa-bars"></i>
      </button>
      {menuState === false?
        null
        :
        <div className="fixed px-5 mt-4 -ml-16 bg-custom-purple  border-b-2 border-l-2 border-custom-darkPurple shadow-lg text-xl text-custom-aqua">
          <Link className="block p-4 focus:transition ease-in-out duration-300 "
          onClick={switchMenuState}  
          to="/"
            href="#responsive-header"
          >
            Home
          </Link>
          <Link className="block p-4" 
          onClick={switchMenuState}  
          to="/about-me"
            href="#responsive-header"
          >
            About
          </Link>
          <Link className="block p-4" 
          onClick={switchMenuState}  
          to="/projects"
            href="#responsive-header"
          >
            Projects
          </Link>
          <Link className="block p-4" 
          onClick={switchMenuState}  
          to="/contact"
            href="#responsive-header"
          >
            Contact
          </Link>
        </div>
      }
    </div>
  );
}

export default Hamburger;