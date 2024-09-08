import React from "react";
import { ReactTyped, Typed } from "react-typed";

const Hero = () => {
  return (
    <section className="text-white flex flex-col max-w-[800px] justify-center items-center  mx-auto w-full h-[420px] text-center  ">
      <div className="">
        <p className="font-bold p-2 text-[11px] sm:text-[14px] md:text-[16px]">
          GROWING WITH DATA ANALYTICS
        </p>
        <h2 className="text-lightGreen md:text-6xl sm:text-5xl text-4xl ">
          Grow with data.
        </h2>
        <div className="flex mt-2 text-center justify-center mr-4 p-2">
          <p className="md:text-3xl sm:text-2xl text-center ">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="ml-2 md:text-4xl sm:text-2xl "
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl px-4 text-[16px] font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] md:w-[200px] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
