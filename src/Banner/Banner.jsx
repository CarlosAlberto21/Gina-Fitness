import React from 'react';
import img1 from "../assets/about.png";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Banner = () => {
  return (
    <div className='bg-[#B76E79] w-full h-full py-10 px-4'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto'>
        
        {/* Texto */}
        <div className='flex flex-col gap-6 md:w-1/2'>
          <h1 className='text-pink-200 text-4xl sm:text-5xl font-bold'>Gina Fitness</h1>

          <p className='text-white text-base sm:text-lg' style={{ fontFamily: "'Montserrat', cursive" }}>
            Hi! I’m Gina, a certified fitness coach passionate about helping people transform their bodies and boost their confidence.
            With over 2 of experience, I specialize in personalized training programs, functional workouts, and motivation strategies to help you achieve lasting results.
            Whether you’re starting your fitness journey or pushing towards new goals, I’m here to guide you every step of the way. Let's unlock your full potential together!
          </p>

          {/* Redes Sociales */}
          <div 
            data-aos="zoom-in"
            data-aos-duration="500"
            className='flex gap-6 justify-center md:justify-start'
          >
            <a href="https://www.instagram.com/lafitnesssodo/" target="_blank" rel="noopener noreferrer">
              <BsInstagram className='text-white hover:text-pink-200 transform transition-transform duration-300 hover:scale-110 hover:rotate-6 text-4xl sm:text-5xl md:text-6xl' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <BsFacebook className='text-white hover:text-pink-200 transform transition-transform duration-300 hover:scale-110 hover:rotate-6 text-4xl sm:text-5xl md:text-6xl' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <BsTwitter className='text-white hover:text-pink-200 transform transition-transform duration-300 hover:scale-110 hover:rotate-6 text-4xl sm:text-5xl md:text-6xl' />
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className='md:w-1/3 flex justify-center'>
          <img src={img1} alt="Fitness" className='w-[300px] sm:w-[400px] md:w-[500px] object-cover' />
        </div>

      </div>
    </div>
  );
};

export default Banner;
