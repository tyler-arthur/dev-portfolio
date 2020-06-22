import React from 'react';
import { Link } from 'react-router-dom';
import Me from '../../assets/images/img_1128conv_large_1.jpg'
const AboutMe = () => {

  console.log(Me)

  return (
    <div className="flex flex-col mt-20 justify-center md:mx-16 mx-3 p-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-custom-orange underline">About</h1>
        <p className="text-lg md:text-xl text-custom-lavender">
          Hey there! In case you missed it, my name is Tyler. I am a full-stack web developer with expertise in customer service which ensures that my team delivers exactly what the customer wants. 
        </p>
        <div className="sm:hidden md:block h-1 w-full rounded-full bg-custom-orange"></div>
        <div className="md:flex md:items-center">
          <div className="h-64 w-64 m-4 rounded-full overflow-hidden md:flex-shrink-0">
            <img className="h-full w-full object-top object-cover" 
              src={"/static/media/img_1128conv_large_1.1a6a8872.jpg"} 
              alt="me" 
            />
          </div>
          <p className="text-lg md:text-xl text-custom-lavender">
            I have a certificate for web development from <span>
            <a href="https://bootcamp.extension.ucsd.edu/coding/"
            className="text-custom-aqua underline">UC San Diego Extension</a></span> and 
            have studied fire sciences at <span>
            <a href="https://www.sdmiramar.edu/index.php/programs/fire-protection-technology"
            className="text-custom-aqua underline">SDCCD Miramar</a></span>. 
            My exposure to many different industries has given me a broad view of client management and building customer relationships.
          </p>
        </div>
        <div className="md:hidden h-1 w-full rounded-full bg-custom-orange"></div>
        <h1 className="text-lg md:text-2xl text-custom-lavender md:text-left">Some technologies I like to leverage are:</h1>
      </div>
      <div className="md:flex md:justify-around py-4">
        <div className="flex flex-col text-center md:text-justify space-y-1">
          <span className="text-custom-orange text-lg"><i className="fab fa-js-square text-2xl text-custom-orange"></i> JavaScript</span>
          <span className="text-custom-orange text-lg"><i className="fab fa-react text-2xl text-custom-orange"></i> React</span>
          <span className="text-custom-orange text-lg"><i className="fab fa-envira text-2xl text-custom-orange"></i> MongoDb</span>
        </div>
        <div className="flex flex-col text-center md:text-justify space-y-1">
          <span className="text-custom-orange text-lg"><i className="fab fa-node-js text-2xl text-custom-orange"></i> NodeJS</span>
          <span className="text-custom-orange text-lg"><i className="fas fa-server text-2xl text-custom-orange"></i> Express</span>
          <span className="text-custom-orange text-lg"><i className="fab fa-css3-alt text-2xl text-custom-orange"></i> Multiple CSS Frameworks</span>
        </div>
      </div>
      <div className="h-1 w-full my-4 rounded-full bg-custom-orange"></div>
      <div className="flex justify-around">
        <Link to="/">
          <button className="flex-wrap flex-shrink md:text-2xl p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
            Go Back
          </button>
        </Link>
        <Link to="/projects">
          <button className="flex-grow flex-shrink md:text-2xl p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;