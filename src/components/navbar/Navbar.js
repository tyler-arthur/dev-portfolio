import React from 'react';
import Headshot from "../../assets/images/img_1128conv_large_1.jpg"

const Navbar = () => {


  return (
    <nav className="flex flex-no-shrink w-full h-16 bg-black">
      <div className="flex items-center content-start w-2/3 text-white">
        <div className="block h-10 w-8 m-4 rounded-full overflow-hidden">
          <img className="h-full w-full object-cover" src={Headshot} alt="me" />
        </div>
        <h1 className="ml-8 text-3xl">Tyler Arthur</h1>
      </div>
      <div className="flex items-center justify-around w-1/3 text-white">
          <a href="#">Home</a>
          <a href="#">About Me</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;