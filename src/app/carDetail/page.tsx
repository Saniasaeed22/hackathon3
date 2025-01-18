import React from "react";
import Filters from "@/components/filters";
import CarDetails from "@/components/cardetail";
import Reviews from "@/components/review";
import Card from "@/components/card";

export default function CarDetail() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Filters Section */}
        <div className="w-full sm:w-1/4 bg-white shadow-md rounded-lg p-4">
          <Filters />
        </div>

        {/* Main Content Section */}
        <div className="flex-1 space-y-6">
          <CarDetails />
          <Reviews />
          <Card />
        </div>
      </div>
    </div>
  );
}
