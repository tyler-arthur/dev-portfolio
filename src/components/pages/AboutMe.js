import React from 'react';

const AboutMe = () => {


  return (
    <React.Fragment>
      <div className="flex justify-center items-center mt-10">
        <div className="w-1/3 mr-24">
          <h1 className="text-4xl font-bold text-custom-orange underline mb-6">About</h1>
          <p className="text-lg text-custom-lavender">
            Hey there! In case you missed it, my name is Tyler. I am a full-stack web developer with expertise in customer service which ensures that my team delivers exactly what the customer wants. 
          </p>
          <p className="text-lg text-custom-lavender">
            I have a certificate for web development from <span>
            <a href="https://bootcamp.extension.ucsd.edu/coding/"
            className="text-custom-aqua underline">UC San Diego Extension</a></span> and 
            have studied fire sciences at <span>
            <a href="https://www.sdmiramar.edu/index.php/programs/fire-protection-technology"
            className="text-custom-aqua underline">SDCCD Miramar</a></span>. 
            My exposure to many different industries has given me a broad view of client management and building customer relationships.
          </p>
          <h1 className="text-lg text-custom-lavender mt-6">Some technologies I like to leverage are:</h1>
          <div className="flex justify-around mt-6">
            <div className="flex flex-col">
              <span className="text-custom-orange text-lg"><i className="fab fa-js-square text-2xl text-custom-orange"></i> JavaScript</span>
              <span className="text-custom-orange text-lg"><i className="fab fa-react text-2xl text-custom-orange"></i> React</span>
              <span className="text-custom-orange text-lg"><i className="fab fa-envira text-2xl text-custom-orange"></i> MongoDb</span>
            </div>
            <div className="flex flex-col">
              <span className="text-custom-orange text-lg"><i className="fab fa-node-js text-2xl text-custom-orange"></i> NodeJS</span>
              <span className="text-custom-orange text-lg"><i className="fas fa-server text-2xl text-custom-orange"></i> Express</span>
              <span className="text-custom-orange text-lg"><i className="fab fa-css3-alt text-2xl text-custom-orange"></i> Multiple CSS Frameworks</span>
            </div>
          </div>
        </div>
        <div className="block h-64 w-64 m-4 rounded-full overflow-hidden">
          <img className="h-full w-full object-top object-cover" 
            src={"/static/media/img_1128conv_large_1.1a6a8872.jpg"} 
            alt="me" 
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutMe;