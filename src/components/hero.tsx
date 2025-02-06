import React from "react";
import PickDrop from "@/components/pickDrop";
import Link from "next/link";


function Hero() {
  return (
    <div className="p-4">
      {/* Hero Cards Section */}
      <div className="flex flex-wrap gap-4 justify-center py-5">
        {/* Card 1 */}
        <div className="w-full md:w-[640px] h-[360px] bg-gradient-to-r from-[#54A6FF] to-[#3563E9] rounded-md shadow-md flex flex-col md:flex-row items-center p-6 ">
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
 <div>

 </div>
 <div className="py-7"><PickDrop/></div>

 </div>
 

  );
}

export default Hero;
