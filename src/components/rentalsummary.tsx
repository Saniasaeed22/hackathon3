"use client";

import React from "react";

const RentalSummary: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-2 border rounded-lg shadow-md bg-white pt-11">
      <h2 className="text-lg font-semibold mb-4 mt-4">Rental Summary</h2>

      <div className="flex items-center gap-4 mb-6">
        <img
          src="/rentacar/Look.png"
          alt="Car"
          className="w-24 h-16 rounded"
        />
        <div>
          <h3 className="text-lg font-bold">Nissan GT - R</h3>
          <div className="flex items-center text-sm text-yellow-500">
            ★★★★☆ <span className="text-gray-500 ml-2">440+ Reviewers</span>
          </div>
        </div>
     </div>


      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>$80.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>$0</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Apply promo code"
            className="p-2 flex-grow focus:outline-none"
          />
          <button className="px-4 bg-blue-500 text-white">Apply now</button>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center font-bold text-lg">
          <span>Total Rental Price</span>
          <span>$80.00</span>
        </div>
        <p className="text-sm text-gray-500">Overall price and includes rental discount</p>
      </div>
    </div>
  );
};

export default RentalSummary;
