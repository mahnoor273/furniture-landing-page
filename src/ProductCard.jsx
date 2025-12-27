import React from 'react'
import Productimage from './images/White wooden chair.png'
const ProductCard = () => {
  return (
    <div>
       <section className="bg-white text-black py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Section */}
            <div className="max-w-md">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 tracking-tight mt-[10px]">Inspired by Wood</h2>
              <p className="text-base text-gray-700 mb-8 leading-relaxed font-normal mt-[40px]">
                Our wooden chairs are designed with <br /> graceful curves and clean finishes that <br /> add character to any space. Whether for  <br />dining, work, or leisure, they bring a touch <br />of style with everyday comfort.
              </p>
              <button className="bg-[#AF4C0F] hover:text-black text-white font-semibold py-3 px-10 rounded-lg transition duration-300 mt-[50px]">
               Discover Style
              </button>
            </div>
      
            {/* Image Section */}
            <div className="max-w-md">
              <img
                src={Productimage}
                alt="About Muscle Lift"
                className="rounded-xl shadow-lg shadow-white-600/40"
              />
            </div>
          </section>
    </div>
  )
}

export default ProductCard
