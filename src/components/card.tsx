import React from "react";
import { MdLocalGasStation } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

function Card({ cars }: { cars: any[] }) {
  return (
    <div className="p-4">
      {/* Title Section */}
      <div className="flex justify-between items-center text-2xl font-Plus Jakarta Sans mt-4 mx-4 md:mx-16">
        <h2 className="text-[#90A3BF]">Popular Car</h2>
        <h3 className="text-[#3563E9] cursor-pointer">View All</h3>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap gap-6 justify-center mt-3 mx-4">
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[304px] h-[388px]"
          >
            <div className="flex justify-between items-center pt-3">
              <h3 className="text-lg font-bold">{car.name}</h3>
              <span className="text-red-500 text-xl">&#10084;</span>
            </div>
            <p className="text-sm text-gray-500 mb-4 mt-2">{car.type}</p>
            <img
              src={car.imageUrl || "/placeholder.png"}
              alt={car.name}
              className="w-full object-cover rounded-md mb-4 h-[115px]"
            />
            <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-2">
                <MdLocalGasStation />
                <span>{car.fuelcapacity}L</span>
              </div>
              <div className="flex items-center gap-2">
                <TbSteeringWheel />
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center gap-2">
                <BsFillPeopleFill />
                <span>{car.seatingCapacity} People</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-14">
              <p className="text-lg font-bold">$99.00/day</p>
              <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
