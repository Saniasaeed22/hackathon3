"use client";
import React, { useEffect, useState, useCallback } from "react";
import client from '@/sanity/lib/client';
import Reviews from "@/components/review";
import Recomendcar from "@/components/recomendcar";
import Link from "next/link";

type Car = {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: number;
  tags: string[];
  imageUrl: string;
};

type Params = {
  name: string;
};

export default function CarDetailsPage({ params }: { params: Params }) {
  const [car, setCar] = useState<Car | null>(null);
  const [relatedCars, setRelatedCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Memoize `getSanityData` to ensure it only changes when `params.name` changes
  const getSanityData = useCallback(async () => {
    try {
      const res: Car[] = await client.fetch(`*[_type == "car"]{
        _id,
        name,
        slug,
        brand,
        type,
        fuelCapacity,
        transmission,
        seatingCapacity,
        tags,
        "imageUrl": image.asset->url
      }`);

      const decodedName = decodeURIComponent(params.name).replace(/\s+/g, "").toLowerCase();
      const selectedCar = res.find((val) => val.name.replace(/\s+/g, "").toLowerCase() === decodedName);

      if (selectedCar) {
        setCar(selectedCar);
        const related = res.filter((val) => val.name.replace(/\s+/g, "").toLowerCase() !== decodedName).slice(0, 6);
        setRelatedCars(related);
      } else {
        setError("Selected car not found");
      }
    } catch (err: any) {
      setError("An error occurred while fetching data");
      console.error(err);
    }
  }, [params.name]); // `getSanityData` depends on `params.name`

  // Call `getSanityData` when `params.name` changes
  useEffect(() => {
    getSanityData();
  }, [getSanityData]); // Include `getSanityData` in the dependency array

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="w-full p-4 sm:p-6 md:p-8">
      {car ? (
        <div className="rounded-lg p-4 flex flex-col md:flex-row gap-8">
          {/* Car Image & Details */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full md:max-w-lg h-auto bg-gradient-to-r from-[#3563E9] to-blue-300 rounded-lg p-4">
              <div className="w-full h-full text-white font-PlusJakartaSans flex flex-col justify-between">
                <div className="pt-2">
                  <h2 className="text-3xl">{car.name}</h2>
                  <p className="text-sm pt-1">{car.brand}</p>
                  <h2 className="text-2xl mt-2">Best design & acceleration</h2>
                  <p className="text-sm pt-1">Experience safety and comfort with a futuristic and elegant ride.</p>
                </div>

                {/* Main Car Image */}
                <div className="flex flex-col items-center">
                  <img src={car.imageUrl} alt="Car" className="max-w-full h-auto object-contain rounded-lg p-4" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-5 justify-center sm:justify-center sm:gap-1">
              <img
                src={car.imageUrl}
                alt="Car"
                className="w-[100px] sm:w-[120px] h-[80px] sm:h-[90px] object-contain rounded-lg bg-[#3563E9]"
              />
              <img
                src="/rentacar/view 3.png"
                alt="Car details"
                className="w-[110px] sm:w-[120px] h-[80px] sm:h-[90px] object-contain rounded-lg"
              />
              <img
                src="/rentacar/view 2.png"
                alt="Car details"
                className="w-[110px] sm:w-[120px] h-[80px] sm:h-[90px] object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Car Information */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">{car.name}</h3>
              <p className="text-gray-600">
                "Engineered for top performance, inspired by the toughest challenges, ensuring excellence on every road and track."
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-bold">Type</p>
                <p className="text-sm text-gray-500">{car.type}</p>
              </div>
              <div>
                <p className="font-bold">Capacity</p>
                <p className="text-sm text-gray-500">{car.seatingCapacity} Person</p>
              </div>
              <div>
                <p className="font-bold">Steering</p>
                <p className="text-sm text-gray-500">{car.transmission}</p>
              </div>
              <div>
                <p className="font-bold">Fuel</p>
                <p className="text-sm text-gray-500">{car.fuelCapacity}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-lg font-bold">$80.00/day</p>
              <Link href="/payment">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">No car details available</div>
      )}

      {/* Reviews & Recommendations */}
      <div className="pt-3">
        <Reviews />
      </div>
      <div className="pt-5">
        <Recomendcar />
      </div>
    </div>
  );
}