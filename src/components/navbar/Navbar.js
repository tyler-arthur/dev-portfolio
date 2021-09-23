import React, { useState, useEffect } from 'react';
import { withRouter, useLocation } from 'react-router';
import { Link } from "react-router-dom";
import Hamburger from './Hamburger';
import Pdf from "../../assets/Tyler-Arthur-Resume-2021.pdf"

const Navbar = () => {

  const location = useLocation()

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <nav className="fixed z-20 top-0 flex flex-no-shrink justify-between md:justify-around lg:justify-between w-full h-24 bg-custom-darkPurple shadow-lg lg:px-16">
      <div className="self-center mx-4">
        <Link to="/">
          <h1 className="p-2 text-3xl text-custom-lavender border-2 rounded-md border-custom-orange">T A</h1>
        </Link>
      </div>
      <div>
        {width > breakpoint ?
          <div className="relative h-full flex items-center md:space-x-8 md:pl-8 text-md text-custom-aqua">
            <Link className={location.pathname === "/about-me" ? "underline" : "hover:underline"}
              to="/about-me"
              href="#responsive-header"
            >
              About
            </Link>
            <Link className={location.pathname === "/projects" ? "underline" : "hover:underline"}
              to="/projects"
              href="#responsive-header"
            >
              Projects
            </Link>
            <Link className={location.pathname === "/contact" ? "underline" : "hover:underline"}
              to="/contact"
              href="#responsive-header"
            >
              Contact
            </Link>

            <a href="https://github.com/tyler-arthur">
              <i className="fab fa-github -mr-4 text-2xl text-custom-aqua"></i>
            </a>
            <a href="https://www.linkedin.com/in/tyler-arthur-8a64779b/">
              <i className="fab fa-linkedin text-2xl text-custom-aqua"></i>
            </a>
            <a href={Pdf} rel="noopener noreferrer" target="_blank">
              <i className="fas fa-file text-2xl text-custom-aqua"></i>
            </a>
          </div>
          :
          <Hamburger />
        }
      </div>
    </nav >
  );
}

export default withRouter(Navbar);