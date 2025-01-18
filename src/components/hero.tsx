import Link from "next/link";
import React from "react";
import { IoEllipseSharp } from "react-icons/io5";
import { IoSwapVertical } from "react-icons/io5";

function Hero() {
  return (
    <div className="p-4">
      {/* Hero Cards Section */}
      <div className="flex flex-wrap gap-4 justify-center py-5">
        {/* Card 1 */}
        <div className="w-full md:w-[640px] h-[360px] bg-gradient-to-r from-[#54A6FF] to-[#3563E9] rounded-md shadow-md flex flex-col md:flex-row items-center p-6">
          <div className="text-white w-full md:w-[50%]">
            <h2 className="text-2xl md:text-3xl font-Plus Jakarta Sans">
              The Best Platform for Car Rental
            </h2>
            <p className="text-sm pt-4">
              Ease of doing a car rental safely and reliably. Of course, at a
              low price.
            </p>
            <button className="w-[120px] h-[44px] bg-[#3563E9] rounded-md mt-4">
              Rental Car
            </button>
          </div>
          <div className="justify-center mt-16">
            <img src="/rentacar/image 7.png" alt="car-image1" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-[640px] h-[360px] bg-gradient-to-r from-[#3563E9] to-blue-300 rounded-md shadow-md flex flex-col md:flex-row items-center p-4">
          <div className="text-white w-full md:w-[50%]">
            <h2 className="text-2xl md:text-3xl font-Plus Jakarta Sans">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-sm pt-4">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <button className="w-[120px] h-[44px] bg-[#54A6FF] rounded-md mt-4">
              Rental Car
            </button>
          </div>
          <div className= ' justify-center mt-16'>
            <img src="/rentacar/image 8.png" alt="car-image2" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Pick-Up Form */}
        <div className="w-full md:w-[582px] bg-white rounded-md shadow-md p-4">
          <div className="flex items-center gap-2 pb-4">
            <p className="text-[#3563E9]"><IoEllipseSharp/></p>
            <h2 className="text-md text-[#1A202C]">Pick-Up</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-[30%]">
              <h3 className="font-semibold">Locations</h3>
              <select className="w-full text-[#90A3BF] font-Plus Jakarta Sans py-2">
                <option>Select your city</option>
              </select>
            </div>
            <div className="w-full md:w-[30%]">
              <h3 className="font-semibold">Date</h3>
              <select className="w-full text-[#90A3BF] font-Plus Jakarta Sans py-2">
                <option>Select your date</option>
              </select>
            </div>
            <div className="w-full md:w-[30%]">
              <h3 className="font-semibold">Time</h3>
              <select className="w-full text-[#90A3BF] font-Plus Jakarta Sans py-2">
                <option>Select your time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex items-center justify-center w-[60px] h-[60px] mt-7">
          <button className="bg-[#3563E9] rounded-md text-2xl text-white p-4">
            <IoSwapVertical />
          </button>
        </div>

        {/* Drop-Off Form */}
        <div className="w-full md:w-[582px] bg-white rounded-md shadow-md p-4">
          <div className="flex items-center gap-2 pb-4">
          <p className="text-[#3563E9]"><IoEllipseSharp/></p>
            <h2 className="text-md text-[#1A202C]">Drop-Off</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-[30%]">
              <h3 className="font-semibold">Locations</h3>
              <select className="w-full text-[#90A3BF] font-Plus Jakarta Sans py-2">
                <option>Select your city</option>
              </select>
            </div>
            <div className="w-full md:w-[30%]">
              <h3 className="font-semibold">Date</h3>
              <select className="w-full text-[#90A3BF] font-Plus Jakarta Sans py-2">
                <option>Select your date</option>
              </select>
            </div>
            <div className="w-full md:w-[30%]">
              <h3 className="font-semibold">Time</h3>
              <select className="w-full text-[#90A3BF] font-Plus Jakarta Sans py-2">
                <option>Select your time</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
