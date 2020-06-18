import React from 'react';

const Card = (props) => {



  return (
    <React.Fragment>
    <div className="flex justify-center items-center">
      <div className="w-3/5 h-1/3 z-10 bg-custom-darkPurple py-4 px-8 shadow-lg rounded-bl-lg rounded-tr-lg">
        <div className="flex flex-col">
          <h1 className="text-custom-aqua text-3xl "><a href={props.link}>{props.title}</a></h1>
          <div className="block h-3/4 w-full m-4 self-center overflow-hidden p-4 bg-custom-lavender shadow-lg">
            <img className="h-full w-full object-center overflow-hidden" 
              src={props.image} 
              alt={props.title}
            />
          </div>
        </div>
      </div>
      <div className="w-1/3 h-1/3 z-0 border-4 border-solid border-custom-blue -ml-2 pl-8 p-4 shadow-inner rounded-md">
        <p className="text-custom-orange text-lg">{props.description}</p>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Card;