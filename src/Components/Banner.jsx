import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Rectangle from "/Rectangle.png";
import Frame1 from "/Frame1.png";
import Frame3 from "/Frame3.png";
import Frame4 from "/Frame4.png";

const Banner = () => {
  return (
    <section className="font-[Inter] flex flex-col-reverse md:flex-row items-center justify-evenly px-8 md:px-12 md:ml-[14rem] md:mt-[-2rem] mb-[5rem] mt-[3rem] relative">
      <div className="w-full md:w-[50%] flex flex-col justify-center text-center md:text-left mt-[6rem] md:mt-0 items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter ">
          <span className="text-[#cec0f0]">Effortless </span> Accounting
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
          for Freelancers & Small
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
          Businesses
        </h1>

        <p className="text-lg md:text-xl text-[#121212] mt-4 mb-4 leading-relaxed py-2 tracking-tighter">
          Instant paid automates your invoicing, payments, and financial
          tracking—so you can focus on growing your business.
        </p>

        <button className="mt-6 flex items-center justify-center md:justify-start px-6 py-3 text-lg font-semibold bg-black text-white rounded-full hover:bg-gray-900 md:w-[17rem]">
          <span>Get Started Free</span>
          <span className="flex items-center justify-center w-9 h-9 bg-white text-black rounded-full ml-3">
            <FaArrowRight />
          </span>
        </button>
      </div>

      <div className="relative w-full md:w-[50%] flex justify-center mt-10 md:mt-0">
        <img
          src={Rectangle}
          alt="Smiling Woman"
          className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto relative z-0"
        />

        <img
          src={Frame1}
          alt="Financial Data"
          className="absolute bottom-[-5rem] right-0 sm:right-[2rem] md:right-[12rem] w-[120px] sm:w-[140px] md:w-44 lg:w-52 z-1"
        />
        <img
          src={Frame3}
          alt="Stats Overview"
          className="absolute top-[50%] left-[5%] sm:top-[45%] sm:left-[0] md:top-[70%] md:left-[3rem] w-[120px] sm:w-[150px] md:w-48 lg:w-56 z-1"
        />
        <img
          src={Frame4}
          alt="Small Widget"
          className="absolute bottom-[-1rem] left-[10%] sm:bottom-[-2rem] sm:left-[0] md:bottom-[-3rem] md:left-[-2rem] w-[100px] sm:w-[130px] md:w-40 lg:w-48 z-1"
        />
      </div>
    </section>
  );
};

export default Banner;
