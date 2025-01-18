import React from 'react';
import { MdLocalGasStation } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { TbSteeringWheel } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa';

function Recomendcar() {
  return (
    <div>
      <div className="m-4">
        <h2 className="text-[#90A3BF] text-2xl pl-4 sm:pl-6 md:pl-11">Recomendation Car</h2>
      </div>

      {/* Card Container */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-9">
        {/* Card 1 */}
                <div className="bg-white shadow-md rounded-lg p-7 w-full sm:w-[304px] h-[388px] mb-7">
                  <div className="flex justify-between items-center pt-3">
                    <h3 className="text-lg font-bold">All New Rush</h3>
                    <span className="text-red-500 text-xl">&#10084;</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 mt-2">Sport</p>
                  <img
                    src="/rentacar/car (6).png"
                    alt="All New Rush"
                    className="w-full object-cover rounded-md mb-4 "
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <MdLocalGasStation />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TbSteeringWheel />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPeopleFill />
                      <span>6 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-11">
                    <p className="text-lg font-bold">$99.00/day</p>
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                      Rent Now
                    </button>
                  </div>
                </div>
        
         {/* Card 2 */}
                 <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[304px] h-[388px]">
                   <div className="flex justify-between items-center pt-3">
                     <h3 className="text-lg font-bold">CR  - V</h3>
                     <span className="text-[#90A3BF]">
                       <FaRegHeart />
                     </span>
                   </div>
                   <p className="text-sm text-gray-500 mb-4 mt-2">Sport</p>
                   <img
                     src="/rentacar/car (7).png"
                     alt="CR  - V"
                     className="w-full object-cover rounded-md mb-4"
                   />
                   <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                     <div className="flex items-center gap-2">
                       <MdLocalGasStation />
                       <span>90L</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <TbSteeringWheel />
                       <span>Manual</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <BsFillPeopleFill />
                       <span>6 People</span>
                     </div>
                   </div>
                   <div className="flex justify-between items-center pt-11">
                     <p className="text-lg font-bold">$99.00/day</p>
                     <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                       Rent Now
                     </button>
                   </div>
                 </div>
                {/* Card 3 */}
                <div className="bg-white shadow-md rounded-lg p-7 w-full sm:w-[304px] h-[388px] mb-7">
                  <div className="flex justify-between items-center pt-3">
                    <h3 className="text-lg font-bold">All New Terios</h3>
                    <span className="text-red-500 text-xl">&#10084;</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 mt-2">Sport</p>
                  <img
                    src="/rentacar/car (8).png"
                    alt="All New Terios"
                    className="w-full object-cover rounded-md mb-4 "
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <MdLocalGasStation />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TbSteeringWheel />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPeopleFill />
                      <span>6 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-11">
                    <p className="text-lg font-bold">$99.00/day</p>
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                      Rent Now
                    </button>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[304px] h-[388px]">
                   <div className="flex justify-between items-center pt-3">
                     <h3 className="text-lg font-bold">CR  - V</h3>
                     <span className="text-red-500 text-xl">&#10084;</span>
                   </div>
                   <p className="text-sm text-gray-500 mb-4 mt-2">Sport</p>
                   <img
                     src="/rentacar/car (9).png"
                     alt="CR  - V"
                     className="w-full object-cover rounded-md mb-4"
                   />
                   <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                     <div className="flex items-center gap-2">
                       <MdLocalGasStation />
                       <span>90L</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <TbSteeringWheel />
                       <span>Manual</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <BsFillPeopleFill />
                       <span>6 People</span>
                     </div>
                   </div>
                   <div className="flex justify-between items-center pt-11">
                     <p className="text-lg font-bold">$99.00/day</p>
                     <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                       Rent Now
                     </button>
                   </div>
                 </div>
          {/* Card 5 */}
          <div className="bg-white shadow-md rounded-lg p-7 w-full sm:w-[304px] h-[388px] mb-7">
                  <div className="flex justify-between items-center pt-3">
                    <h3 className="text-lg font-bold">MG ZX Exclusice</h3>
                    <span className="text-red-500 text-xl">&#10084;</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 mt-2">Sport</p>
                  <img
                    src="/rentacar/car (10).png"
                    alt="MG ZX Exclusice"
                    className="w-full object-cover rounded-md mb-4 "
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <MdLocalGasStation />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TbSteeringWheel />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPeopleFill />
                      <span>6 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-11">
                    <p className="text-lg font-bold">$99.00/day</p>
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                      Rent Now
                    </button>
                  </div>
                </div>
        {/* Card 6 */}
        <div className="bg-white shadow-md rounded-lg p-7 w-full sm:w-[304px] h-[388px] mb-7">
                  <div className="flex justify-between items-center pt-3">
                    <h3 className="text-lg font-bold">New MG ZS</h3>
                    <span className="text-[#90A3BF]">
                       <FaRegHeart />
                       </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 mt-2">Sport</p>
                  <img
                    src="/rentacar/car (11).png"
                    alt="New MG ZS"
                    className="w-full object-cover rounded-md mb-4 "
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <MdLocalGasStation />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TbSteeringWheel />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPeopleFill />
                      <span>6 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-11">
                    <p className="text-lg font-bold">$99.00/day</p>
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                      Rent Now
                    </button>
                  </div>
                </div>
                {/* Card 7*/}
          <div className="bg-white shadow-md rounded-lg p-7 w-full sm:w-[304px] h-[388px] mb-7">
                  <div className="flex justify-between items-center pt-3">
                    <h3 className="text-lg font-bold">MG ZX Exclusice</h3>
                    <span className="text-red-500 text-xl">&#10084;</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 mt-2">Sport</p>
                  <img
                    src="/rentacar/car (10).png"
                    alt="MG ZX Exclusice"
                    className="w-full object-cover rounded-md mb-4 "
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <MdLocalGasStation />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TbSteeringWheel />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPeopleFill />
                      <span>6 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-11">
                    <p className="text-lg font-bold">$99.00/day</p>
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                      Rent Now
                    </button>
                  </div>
                </div>
          {/* Card 8*/}
        <div className="bg-white shadow-md rounded-lg p-7 w-full sm:w-[304px] h-[388px] mb-7">
                  <div className="flex justify-between items-center pt-3">
                    <h3 className="text-lg font-bold">New MG ZS</h3>
                    <span className="text-[#90A3BF]">
                       <FaRegHeart />
                       </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 mt-2">Sport</p>
                  <img
                    src="/rentacar/car (11).png"
                    alt="New MG ZS"
                    className="w-full object-cover rounded-md mb-4 "
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <MdLocalGasStation />
                      <span>90L</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TbSteeringWheel />
                      <span>Manual</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPeopleFill />
                      <span>6 People</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-11">
                    <p className="text-lg font-bold">$99.00/day</p>
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                      Rent Now
                    </button>
                  </div>
                </div>
            


      </div>

      <div className='flex justify-center'>
              <button className='bg-[#3563E9] text-white p-4 px-6 rounded-md'>Show more car</button>
            </div>

    </div>
  );
}

export default Recomendcar;
