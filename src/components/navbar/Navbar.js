import React, { useState, useEffect} from 'react';
import {  Link } from "react-router-dom";
import Hamburger from './Hamburger';

const Navbar = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <nav className="fixed z-20 top-0 flex flex-no-shrink justify-between md:justify-around lg:justify-between w-full h-24 bg-custom-darkPurple shadow-lg lg:px-16">
      <div className="self-center mx-4">
        <h1 className="p-2 text-3xl text-custom-lavender border-2 rounded-md border-custom-orange">T A</h1>
      </div>
      <div>
      {width > breakpoint ?
        <div className="relative h-full flex items-center md:space-x-12 md:pl-8 text-2xl text-custom-aqua">
          <Link className="hover:underline"
          to="/"
            href="#responsive-header"
          >
            Home
          </Link>
          <Link className="hover:underline" 
          to="/about-me"
            href="#responsive-header"
          >
            About
          </Link>
          <Link className="hover:underline" 
          to="/projects"
            href="#responsive-header"
          >
            Projects
          </Link>
          <Link className="hover:underline" 
          to="/contact"
            href="#responsive-header"
          >
            Contact
          </Link>
        </div>
        :
        <Hamburger />
      }
      </div>
    </nav>
  );
}

export default Navbar;