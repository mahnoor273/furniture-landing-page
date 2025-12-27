import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2">

        {/* Left - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-black cursor-pointer">Built to Endure</li>
            <li className="hover:text-black cursor-pointer">New Arrival Products</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 px-6">
        <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center">

          {/* Left text */}
          <p className="text-sm text-gray-600">
            Copyright © 2025 Aurum Wood. All rights reserved.
          </p>

          {/* Right social icons */}
          <div className="flex space-x-3 mt-3 md:mt-0 text-gray-700">
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
            <FaTwitter className="cursor-pointer hover:text-black" />
            <FaYoutube className="cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
