import React from 'react';
import TwoFace from '../stateControllers/TwoFace'

const Home = () => {

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <TwoFace />
      <button className={`w-24 h-16 bg-black text-white rounded-tr-lg rounded-bl-lg`}
      >
        Let's get started!
      </button>
    </div>
  );
}

export default Home;