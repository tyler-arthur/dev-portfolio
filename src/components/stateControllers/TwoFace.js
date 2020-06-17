import React, { useState } from 'react';

const TwoFace = () => {

  const happyFaceImg = "/static/media/img_1128conv_large_1.1a6a8872.jpg";
  const angryFaceImg = "/static/media/img_1148conv_large.f2289f09.jpg";

  const [angryFace, setAngryFace] = useState(false)

  return (
    <React.Fragment>
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
        <img className="h-full w-full object-top object-cover" src={happyFaceImg} alt="me" />
        :
        <img className="h-full w-full object-top object-cover" src={angryFaceImg} alt="angry-face" />
      }
    </div>
    </React.Fragment>
  )
}

export default TwoFace;