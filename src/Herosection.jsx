import React from "react";
import logo from "./images/logo.png";
import Heroimage from "./images/herosection.png";

const HeroSection = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="relative z-10 w-full px-6 md:px-12 py-4 flex justify-between items-center bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-40 md:w-56" />
        </div>

        {/* Nav Links */}
        <div className="hidden sm:flex space-x-6 md:space-x-10 text-black font-bold">
          <a
            href="#"
            className="hover:text-[#AF4C0F] hover:border-b border-[#AF4C0F] transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-[#AF4C0F] hover:border-b border-[#AF4C0F] transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-[#AF4C0F] hover:border-b border-[#AF4C0F] transition duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden text-black">
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white text-black py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-5xl font-bold mb-5 leading-[60px] mt-[20px]">
            Comfort Meets, <br /> Modern Style
          </h2>
          <p className="text-xl font-medium mb-8 leading-relaxed mt-[30px]">
            Handcrafted wooden chairs, stools, and <br />
            sofas designed for everyday comfort with <br />
            a touch of modern style.
          </p>

          {/* Buttons — now properly placed */}
          <div className="mt-[80px] flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#AF4C0F] hover:bg-black text-white font-bold py-3 px-8 rounded-md transition duration-300">
              Order Now
            </button>
            <button className="border-2 border-[#AF4C0F] text-[#AF4C0F] font-bold py-3 px-8 rounded-md hover:border-black hover:text-black transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-md mt-10 md:mt-0">
          <img
            src={Heroimage}
            alt="Hero"
            className="rounded-xl shadow-lg shadow-[#AF4C0F]/40"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

