import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import Me from '../../assets/images/img_1128conv_large_1.jpg'
const AboutMe = () => {

  console.log(Me)

  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className="flex flex-col mt-20 justify-center md:mx-16 lg:mx-24 xl:mx-64 xxl:mx-96 mx-3 p-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-custom-orange underline">About</h1>
        <p className="text-lg md:text-xl text-custom-lavender">
        I am a Fullstack developer with a background in web development, client engagement, and military-grade hardware manufacturing. I am friendly, articulate, driven, and ready to grow professionally through experience.
        </p>
        <div className="sm:hidden md:block h-1 w-full rounded-full bg-custom-orange"></div>
        <div className="flex flex-col flex-no-wrap md:flex-row items-center md:justify-around">
          <div className="h-64 w-64 m-4 rounded-full overflow-hidden flex-shrink-0">
            <img className="h-full w-full object-top object-cover" 
              src={"/static/media/img_1128conv_large_1.1a6a8872.jpg"} 
              alt="me" 
            />
          </div>
          <p className="text-lg md:text-xl md:w-1/2 flex-shrink text-custom-lavender">
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
        <h1 className="text-lg md:text-2xl text-custom-lavender md:text-left lg:text-center">Some technologies I like to leverage are:</h1>
      </div>
      <div className="md:flex md:justify-around py-4">
        <div className="flex flex-col text-center md:text-justify space-y-1">
          <span className="text-custom-orange text-lg lg:text-xl"><i className="fab fa-js-square text-2xl lg:text-3xl text-custom-orange"></i> JavaScript</span>
          <span className="text-custom-orange text-lg lg:text-xl"><i className="fab fa-react text-2xl lg:text-3xl text-custom-orange"></i> React</span>
          <span className="text-custom-orange text-lg lg:text-xl"><i className="fab fa-envira text-2xl lg:text-3xl text-custom-orange"></i> MongoDb</span>
        </div>
        <div className="flex flex-col text-center md:text-justify space-y-1">
          <span className="text-custom-orange text-lg lg:text-xl"><i className="fab fa-node-js text-2xl lg:text-3xl text-custom-orange"></i> NodeJS</span>
          <span className="text-custom-orange text-lg lg:text-xl"><i className="fas fa-server text-2xl lg:text-3xl text-custom-orange"></i> Express</span>
          <span className="text-custom-orange text-lg lg:text-xl"><i className="fab fa-css3-alt text-2xl lg:text-3xl text-custom-orange"></i> CSS Frameworks</span>
        </div>
      </div>
      <div className="h-1 w-full my-4 rounded-full bg-custom-orange"></div>
      <div className="flex justify-around">
        <Link to="/">
          <button className="flex-wrap flex-shrink md:text-2xl p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
            Home
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