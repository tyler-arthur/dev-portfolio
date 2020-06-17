import React, { useState } from 'react';

const Home = () => {

  const [angryFace, setAngryFace] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      {angryFace === false ?
        <p className="text-3xl font-bold w-1/2 text-center">
          Hi, My name is Tyler and I build apps for the web
        </p>
        :
        <p className="text-3xl font-bold w-1/2 text-center">
          Please, don't touch my face...
        </p>
      }
      <div className="block h-64 w-64 m-4 rounded-full overflow-hidden"
        onMouseEnter={() => setAngryFace(true)}
        onMouseLeave={() => setAngryFace(false)}
      >
        {angryFace === false ?
          <img className="h-full w-full object-top object-cover" src={"/static/media/img_1128conv_large_1.1a6a8872.jpg"} alt="me" />
          :
          <img className="h-full w-full object-top object-cover" src={"/static/media/img_1148conv_large.f2289f09.jpg"} alt="angry-face" />
        }
      </div>
      <button className={`w-24 h-16 bg-black text-white rounded-tr-lg rounded-bl-lg`}>
        Let's get started!
      </button>
    </div>
  );
}

export default Home;