import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Frame402 from "/Frame402.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:mx-30 flex justify-center mb-1 px-4 md:px-10">
      <nav className="flex w-full items-center justify-evenly py-5">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <img
            src={Frame402}
            alt="Logo-website"
            className="sm:w-14 sm:h-14 md:size-auto"
          />
        </div>

        {/* Middle Section - Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-xl font-normal">
            Home
          </a>
          <a href="#" className="text-xl font-normal">
            Features
          </a>
          <a href="#" className="text-xl font-normal">
            Pricing
          </a>
          <a href="#" className="text-xl font-normal">
            Blog
          </a>
        </div>

        {/* Right Section - Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border-2 border-[#7743cc] rounded-full bg-white px-6 py-2 text-xl text-[#7743cc]">
            Sign up
          </button>
          <button className="bg-[#7743cc] rounded-full px-8 py-2 text-xl text-white">
            Log in
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-6 py-6">
            <a href="#" className="text-xl font-normal">
              Home
            </a>
            <a href="#" className="text-xl font-normal">
              Features
            </a>
            <a href="#" className="text-xl font-normal">
              Pricing
            </a>
            <a href="#" className="text-xl font-normal">
              Blog
            </a>
            <button className="border-2 border-[#7743cc] rounded-full bg-white px-6 py-2 text-xl text-[#7743cc] max-w-xs">
              Sign up
            </button>
            <button className="bg-[#7743cc] rounded-full px-7 py-2 text-xl text-white  max-w-xs">
              Log in
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
