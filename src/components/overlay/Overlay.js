import React, { useState, useEffect } from "react";

const Overlay = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;

  useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  return (
    width < breakpoint ?
    null
    :
    <div className="fixed left-0 bottom-0 flex flex-col items-center px-1">
      <div className="border border-black bg-custom-orange w-1 h-32 rounded-full my-4"></div>

        <a href="https://github.com/tarthurf">
          <i className="fab fa-github mb-6 text-3xl text-custom-aqua"></i>
        </a>
        <a href="https://www.linkedin.com/in/tyler-arthur-8a64779b/">
          <i className="fab fa-linkedin text-3xl text-custom-aqua"></i>
        </a>
      <div className="lg:border lg:border-black lg:bg-custom-orange lg:w-1 lg:h-12 lg:h-32 lg:rounded-full mb-16 mt-4 lg:mt-0"></div>
    </div>
  );
}

export default Overlay;