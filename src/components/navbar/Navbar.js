import React, { useState, useEffect} from 'react';
// import {  Link } from "react-router-dom";
import Hamburger from './Hamburger';
import NavLinks from './NavLinks';

const Navbar = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  return (
    <nav className="fixed z-20 top-0 flex flex-no-shrink justify-between w-full h-24 bg-custom-darkPurple shadow-lg lg:px-16">
      <div className="self-center mx-4">
        <h1 className="p-2 text-3xl text-custom-lavender border-2 rounded-md border-custom-orange">T A</h1>
      </div>
      <div>
      {width > breakpoint ?
        <NavLinks />
        :
        <Hamburger />
      }
      </div>
    </nav>
  );
}

export default Navbar;