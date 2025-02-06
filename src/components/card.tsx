import React from "react";
import { MdLocalGasStation } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import Link from "next/link";

type Car = {
  _id: string;
  name: string;
  type: string;
  fuelcapacity: string;
  transmission: string;
  seatingCapacity: number;
  imageUrl: string;
};

function Card({ car }: { car: Car }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 w-full sm:w-[304px] h-auto">
      <div className="flex justify-between items-center pt-3">
        <h3 className="text-lg font-bold truncate">{car.name}</h3>
        <span className="text-red-500 text-xl">&#10084;</span>
      </div>
      <p className="text-sm text-gray-500 mb-4 mt-2 truncate">{car.type}</p>
      <img
        src={car.imageUrl || "/placeholder.png"}
        alt={car.name}
        className="w-full object-cover rounded-md mb-4 h-[115px] sm:h-[140px]"
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
      <div className="flex justify-between items-center pt-4">
        <p className="text-lg font-bold">$99.00/day</p>
        <Link
          href={`/${car.name}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Rent Now
        </Link>
      </div>
    </div>
  );
}

export default Card;
