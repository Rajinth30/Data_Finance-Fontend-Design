import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] mx-auto h-screen text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 sm:py-4">
          Grow with data.
        </h1>
        <div className="flex mx-auto">
          <p className="text-xl md:text-5xl sm:text-4xl font-bold pt-1 py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="text-xl pl-2 md:text-5xl sm:text-4xl font-bold pt-1 md:pl-4"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] hover:bg-green-400 w-[200px] rounded-3xl font-medium mx-auto my-6 py-3 text-black ease-in-out duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
