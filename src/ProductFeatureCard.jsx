import React from 'react';
import Chairimage from './images/Wooden Rocking Chair with Cushion.png'
const ProductFeatureCard = () => {
  return (
 <div className="flex justify-center items-center p-4 sm:p-12 min-h-screen bg-white">
      
      {/* Main Content Area: Max width, similar to the image's bounding box */}
      <div className="flex flex-col lg:flex-row max-w-6xl w-full items-center">
        
        {/* Left Section: Image (The image itself has a soft background) */}
        <div className="lg:w-7/12 p-2 sm:p-4"> 
          {/* Note: I've increased the image section width (7/12) to match the visual ratio */}
          
          {/* Image Container with Rounded Corners and Shadow */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={Chairimage} // **Replace this with your actual image source**
              alt="Built to Endure: Solid wood furniture"
              className="w-full h-full object-cover"
              // Adjusting aspect ratio and style to mimic the original image's framing and soft background
              style={{ 
                  minHeight: '350px', 
                  maxHeight: '500px',
                  objectFit: 'cover'
              }}
            />
          </div>
        </div>
        
        {/* Right Section: Text and Button (It is NOT inside a white box, it's just on the white page background) */}
        <div className="lg:w-5/12 p-6 sm:p-10 flex flex-col justify-center">
          
          {/* Title - Bold and Large Font */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 tracking-tight mt-[10px]">
            Built to Endure
          </h2>
          
          {/* Description - Thin and Light Font */}
          <p className="text-base text-gray-700 mb-8 leading-relaxed font-normal mt-[20px]">
            Crafted with a solid wooden frame and premium cushioning, our sofas are made 
            to stand the test of time. Blending strength with modern comfort, they bring 
            lasting elegance to your living space.
          </p>
          
          {/* Shop Now Button - Exact Color and Rounded Corners */}
          <button
            onClick={() => console.log('Shop Now Clicked')}
            className="hover:text-black  text-white font-semibold py-3 px-5 rounded-lg transition duration-300  mt-[40px] w-20 border-none"
            style={{ 
                backgroundColor: '#AF4C0F', // Exact color match for the brown button
                minWidth: '180px', // Ensures a robust button size
                // Removed self-start for centered behavior if text was centered, but self-start is correct for left alignment
            }}
          >
            Shop Now
          </button>
          
        </div>
        
      </div>
    </div>
  );
};

export default ProductFeatureCard;