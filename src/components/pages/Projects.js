import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import projects from '../../assets/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
import munchiMaps from '../../assets/images/munchimaps(cropped).png';


const Projects = () => {

  console.log(munchiMaps)

  let [projectState, setProjectState] = useState(0);

  if (projectState >= 4) projectState = 0;
  if (projectState <= -1) projectState = 3;

  useEffect(() => window.scrollTo(0, 0), [])
  
  return (
    <div className="flex flex-col mt-20 mx-3 md:mx-16 lg:mx-24 xl:mx-48 xxl:mx-64 p-6">
      <h1 className="text-4xl font-medium text-center text-custom-orange underline">Some of my work</h1>
      <Card 
        title={projects[projectState].project}
        link={projects[projectState].link}
        image={projects[projectState].img}
        description={projects[projectState].description}
        repo={projects[projectState].repo}
      />
      <div className="flex justify-around lg:justify-center space-x-10 items-center mt-2 lg:mt-6 mb-6">
        <button className="flex-wrap flex-shrink md:text-2xl p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline"
          onClick={() => setProjectState(projectState -= 1)}
        >
          <FontAwesomeIcon icon="angle-left" />
        </button>
        <div className="space-x-5 text-custom-orange">
        {projectState === 0 ?
          <FontAwesomeIcon icon={fasCircle} />
          :
          <FontAwesomeIcon icon={farCircle} />
        }
        </div>
        <div className="space-x-5 text-custom-orange">
        {projectState === 1 ?
          <FontAwesomeIcon icon={fasCircle} />
          :
          <FontAwesomeIcon icon={farCircle} />
        }
        </div>
        <div className="space-x-5 text-custom-orange">
        {projectState === 2 ?
          <FontAwesomeIcon icon={fasCircle} />
          :
          <FontAwesomeIcon icon={farCircle} />
        }
        </div>
        <div className="space-x-5 text-custom-orange">
        {projectState === 3 ?
          <FontAwesomeIcon icon={fasCircle} />
          :
          <FontAwesomeIcon icon={farCircle} />
        }
        </div>
        <button className="flex-wrap flex-shrink md:text-2xl p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline"
          onClick={() => setProjectState(projectState += 1)}
        >
          <FontAwesomeIcon icon="angle-right" />
        </button>
      </div>
      <div className="h-1 w-full mb-5 rounded-full bg-custom-orange"></div>
      <div className="flex justify-around">
        <Link to="/about-me">
          <button className="flex-wrap flex-shrink md:text-2xl p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
              Go Back
          </button>
        </Link>
        <Link to="/contact">
          <button className="flex-wrap flex-shrink md:text-2xl p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;