import React from 'react';
import {  Link } from "react-router-dom";

const Navbar = () => {


  return (
    <nav className="absolute flex flex-no-shrink w-full h-24 bg-custom-darkPurple shadow-lg px-16">
      <div className="flex items-center content-start w-2/3 text-custom-lavender">
        <h1 className="ml-16 text-3xl p-2 border-2 rounded-md border-custom-orange">T A</h1>
      </div>
      <div className="flex items-center justify-around w-1/3 text-custom-aqua">
          <Link to="/"
            href="#responsive-header"
          >
            Home
          </Link>
          <Link to="/about-me"
            href="#responsive-header"
          >
            About
          </Link>
          <Link to="/projects"
            href="#responsive-header"
          >
            Projects
          </Link>
          <Link to="/contact"
            href="#responsive-header"
          >
            Contact
          </Link>
      </div>
    </nav>
  );
}

export default Navbar;