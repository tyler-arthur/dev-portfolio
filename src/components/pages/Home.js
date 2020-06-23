import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="flex flex-col mt-20 mx-3 md:mx-16 lg:mx-24 xl:mx-96 p-6">
      <p className="py-2 text-xl text-left font-bold text-custom-orange">
        Hey there, my name is
      </p>
      <p className="py-2 text-5xl md:text-7xl text-left font-semibold text-custom-lavender">
        Tyler Arthur
      </p>
      <p className="py-2 w-full text-4xl text-center font-medium md:font-bold lg:text-left lg:pl-12 text-custom-blue">
        I like to build apps for the web
      </p>
      <p className="py-2 self-center text-lg text-right md:text-xl md:text-center lg:text-left md:w-2/3 lg:w-1/2 xl:w-3/4 font-medium text-custom-orange">
        I am a full-stack web developer based in sunny San Diego, CA and I enjoy building eye-catching websites with elegance and simplicity in mind.
      </p>
      <div className="flex justify-around py-4 md:py-8 ">
        <Link to="/about-me">
          <button className="flex-grow flex-shrink md:text-2xl p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
            Let's get started!
          </button>
        </Link>
        <Link to="/contact">
          <button className="flex-wrap flex-shrink md:text-2xl p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
            Contact Me!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;