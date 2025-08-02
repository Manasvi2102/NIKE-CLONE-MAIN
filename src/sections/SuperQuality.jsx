import React from 'react';
import Button from './Button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="relative flex flex-col lg:flex-row items-center justify-between gap-16 w-full px-10 py-24 bg-gradient-radial from-[#edf1f7] via-white to-[#f7f7f7] overflow-hidden"
    >
      {/* Glowing Circles */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-20 blur-[100px] z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral-blue opacity-10 blur-[80px] z-0"></div>

      {/* Left Text Content */}
      <div className="z-10 flex-1 text-center lg:text-left animate-fade-up">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight font-palanquin">
          Elevate Your <br />
          <span className="text-coral-blue">Step</span> in Style
        </h2>

        <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto lg:mx-0 font-montserrat">
          Experience unparalleled comfort, performance, and bold design with our premium footwear. Designed for movers, built for icons.
        </p>

        <div className="mt-8">
          <Button label="Shop Now" />
        </div>
      </div>

      {/* Right Shoe Showcase */}
      <div className="flex-1 flex items-center justify-center relative z-10 group animate-fade-up">
        {/* Platform Base */}
        <div className="absolute bottom-0 w-[220px] h-[20px] bg-gray-300 rounded-full blur-sm opacity-60 shadow-inner"></div>

        {/* Shoe with Tilt on Hover */}
        <div className="relative w-[380px] h-[380px] bg-white rounded-full shadow-xl hover:rotate-[2deg] hover:scale-105 transition duration-700 ease-in-out flex items-center justify-center">
          <img
            src={shoe8}
            alt="Premium Shoe"
            className="w-[280px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
