"use client";

import React, { useEffect, useState } from "react";
import client from "@/sanity/lib/client";
import Card from "@/components/card";

const Recomendcar = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      const query = `*[_type == "car"] {
        _id,
        name,
        slug,
        brand,
        type,
        fuelcapacity,
        transmission,
        seatingCapacity,
        tags,
        "imageUrl": image.asset->url
      }`;
      try {
        const fetchedCars = await client.fetch(query);
        setCars(fetchedCars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!cars.length) return <p className="text-center text-gray-500">No cars available.</p>;

  return (
    <div className="p-6">
      <h1 className="text-gray-400 font-semibold text-2xl mb-6">Recomendation Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {cars.map((car) => (
          <Card key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Recomendcar;
