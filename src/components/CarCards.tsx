"use client";

import React, { useEffect, useState } from "react";
import client from "@/sanity/lib/client";
import Card from "@/components/card";

const CarCards = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      const query = `
        *[_type == "car"] {
          _id,
          name,
          brand,
          type,
          fuelcapacity,
          transmission,
          seatingCapacity,
          tags,
          "imageUrl": image.asset->url
        }
      `;
      const fetchedCars = await client.fetch(query);
      setCars(fetchedCars);
      setLoading(false);
    };

    fetchCars();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Card cars={cars} />
    </div>
  );
};

export default CarCards;
