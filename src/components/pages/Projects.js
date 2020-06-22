import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import projects from '../../assets/projects';

const Projects = () => {

  let [projectState, setProjectState] = useState(0);

  if (projectState >= 3) projectState = 0;
  if (projectState <= -1) projectState = 2;

  const projectPosition = (el) => {
    if (projectState === 0) {
      el = 
        <div className="space-x-5 text-custom-orange">
          <i className="fas fa-circle text-sm"></i>
          <i className="far fa-circle text-sm"></i>
          <i className="far fa-circle text-sm"></i>
        </div>
      
    } else if (projectState === 1) {
      el = 
        <div className="space-x-5 text-custom-orange">
          <i className="far fa-circle text-sm"></i>
          <i className="fas fa-circle text-sm"></i>
          <i className="far fa-circle text-sm"></i>
        </div>
      
    } else {
      el = 
        <div className="space-x-5 text-custom-orange">
          <i className="far fa-circle text-sm"></i>
          <i className="far fa-circle text-sm"></i>
          <i className="fas fa-circle text-sm"></i>
        </div>
      
    }
  }

  let positionCounter = 
    <div className="space-x-5 text-custom-orange">
      <i className="fas fa-circle text-sm"></i>
      <i className="far fa-circle text-sm"></i>
      <i className="far fa-circle text-sm"></i>
    </div>
  

    useEffect(() => {

    },[positionCounter])

  return (
    <div className="flex flex-col mx-3 p-6">
      <h1 className="text-4xl font-medium text-custom-orange underline">Some of my work</h1>
      <Card 
        title={projects[projectState].project}
        link={projects[projectState].link}
        image={projects[projectState].img}
        description={projects[projectState].description}
        next={() => {setProjectState(projectState += 1); projectPosition(positionCounter)}}
        last={() => {setProjectState(projectState -= 1); projectPosition(positionCounter)}}
        position={positionCounter}
      />
      <div className="h-1 w-full mb-5 rounded-full bg-custom-orange"></div>
      <div className="flex justify-around">
        <Link to="/about-me">
          <button className="flex-wrap flex-shrink p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
              Go Back
          </button>
        </Link>
        <Link to="/contact">
          <button className="flex-wrap flex-shrink p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;