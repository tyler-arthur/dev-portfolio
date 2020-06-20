import React from 'react';

const Home = () => {

  return (
    <div className="flex flex-col items-start justify-center w-2/3 mt-32 ml-56">
      <p className="w-2/3 text-xl font-bold text-custom-orange">
        Hey there, my name is
      </p>
      <p className="w-2/3 text-7xl font-semibold text-custom-lavender">
        Tyler Arthur
      </p>
      <p className="w-full text-6xl font-medium text-custom-blue">
        I like to build apps for the web
      </p>
      <p className="w-2/3 self-start text-xl font-medium text-custom-orange mt-4">
        I am a full-stack web developer based in sunny San Diego, CA and I enjoy building eye-catching websites with elegance and simplicity in mind.
      </p>
      <div className="flex xl:w-1/2 lg:2/3 xl:justify-around lg:justify-between">
        <button className={`w-48 h-12 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg mt-24 focus:outline-none focus:shadow-outline ml-6`}>
          Let's get started!
        </button>
        <button className={`w-48 h-12 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg mt-24 focus:outline-none focus:shadow-outline`}>
          Let's get in touch!
        </button>
      </div>
    </div>
  );
}

export default Home;