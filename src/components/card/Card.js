import React from 'react';

const Card = (props) => {



  return (
    <React.Fragment>
    <div className="flex flex-col justify-center items-center mt-6">
      <div className="z-10 p-4 bg-custom-darkPurple shadow-lg rounded-t-lg">
        <div className="flex flex-col">
          <h1 className="mb-2 text-custom-aqua text-2xl md:text-3xl underline"><a href={props.link}>{props.title}</a></h1>
          <div className="self-center p-2 overflow-hidden bg-custom-lavender shadow-lg">
            <img className="h-full w-full object-center overflow-hidden" 
              src={props.image} 
              alt={props.title}
            />
          </div>
        </div>
      </div>
      <div className="w-11/12 px-2 pt-6 pb-2 -mt-4 border-4 border-solid border-custom-blue shadow-inner rounded-md text-custom-orange text-lg md:text-xl">
        <p className="border-t-2 border-custom-orange p-2">{props.description}</p>
      </div>
      
    </div>
    </React.Fragment>
  );
}

export default Card;