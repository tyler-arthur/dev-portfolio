import React from 'react';
import {  Link } from "react-router-dom";
import Headshot from "../../assets/images/img_1128conv_large_1.jpg"

const Navbar = () => {


  return (
    <nav className="flex flex-no-shrink w-full h-24 bg-custom-darkPurple shadow-lg px-16">
      <div className="flex items-center content-start w-2/3 text-white">
        <h1 className="ml-16 text-3xl">T A</h1>
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