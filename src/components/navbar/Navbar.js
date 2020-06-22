import React from 'react';
// import {  Link } from "react-router-dom";
import Hamburger from './Hamburger';

const Navbar = () => {


  return (
    <nav className="fixed z-20 top-0 flex flex-no-shrink justify-between w-full h-24 bg-custom-darkPurple shadow-lg lg:px-16">
      <div className="self-center mx-4">
        <h1 className="p-2 text-3xl text-custom-lavender border-2 rounded-md border-custom-orange">T A</h1>
      </div>
      <div>
        <Hamburger />
      </div>
    </nav>
  );
}

export default Navbar;