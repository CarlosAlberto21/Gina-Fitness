import React from 'react';

const Hero = () => {
  return (
    <div className="h-screen w-full text-white relative z-40 flex justify-center items-center">
      <h1
        className="text-center text-[15vw] font-bold text-pink-500"
        style={{
          fontFamily: "'Pacifico', cursive",
          opacity: 0,
          animation: 'fadeInDraw 4s ease-out forwards',
        }}
      >
        Gianna
      </h1>

      <style>
        {`
          @keyframes fadeInDraw {
            0% {
              opacity: 0;
              filter: blur(4px);
              transform: scale(1.05);
            }
            40% {
              opacity: 0.5;
              filter: blur(2px);
            }
            100% {
              opacity: 1;
              filter: blur(0);
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
