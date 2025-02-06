"use client";

import React, { useState } from "react";

interface BillingInfo {
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
}

interface RentalInfo {
  pickUp: {
    location: string;
    date: string;
    time: string;
  };
  dropOff: {
    location: string;
    date: string;
    time: string;
  };
}

const Billing: React.FC = () => {
  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
  });

  const [rentalInfo, setRentalInfo] = useState<RentalInfo>({
    pickUp: {
      location: "",
      date: "",
      time: "",
    },
    dropOff: {
      location: "",
      date: "",
      time: "",
    },
  });

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleRentalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    type: "pickUp" | "dropOff"
  ) => {
    const { name, value } = e.target;
    setRentalInfo((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [name]: value,
      },
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-3 space-y-3 ">
      {/* Billing Info Section */}
      <div className="p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4">Billing Info</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={billingInfo.name}
            onChange={handleBillingChange}
            className="p-2 border rounded w-full bg-[#F6F7F9]"
            aria-label="Name"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={billingInfo.phoneNumber}
            onChange={handleBillingChange}
            className="p-2 border rounded w-full bg-[#F6F7F9]"
            aria-label="Phone Number"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={billingInfo.address}
            onChange={handleBillingChange}
            className="p-2 border rounded w-full bg-[#F6F7F9]"
            aria-label="Address"
          />
          <input
            type="text"
            name="city"
            placeholder="Town or city"
            value={billingInfo.city}
            onChange={handleBillingChange}
            className="p-2 border rounded w-full bg-[#F6F7F9]"
            aria-label="City"
          />
        </div>
      </div>

      {/* Rental Info Section */}
      <div className="p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4">Rental Info</h2>

        {/* Pick-Up Section */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Pick-Up</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <select
              name="location"
              value={rentalInfo.pickUp.location}
              onChange={(e) => handleRentalChange(e, "pickUp")}
              className="p-2 border rounded w-full text-[#90A3BF] bg-[#F6F7F9]"
              aria-label="Pick-Up Location "
            >
              <option value="">Select your city</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
            </select>
            <input
              type="date"
              name="date"
              value={rentalInfo.pickUp.date}
              onChange={(e) => handleRentalChange(e, "pickUp")}
              className="p-2 border rounded w-full  text-[#90A3BF] bg-[#F6F7F9]"
              aria-label="Pick-Up Date"
            />
            <input
              type="time"
              name="time"
              value={rentalInfo.pickUp.time}
              onChange={(e) => handleRentalChange(e, "pickUp")}
              className="p-2 border rounded w-full  text-[#90A3BF] bg-[#F6F7F9]"
              aria-label="Pick-Up Time"
            />
          </div>
        </div>

        {/* Drop-Off Section */}
        <div>
          <h3 className="font-medium mb-2">Drop-Off</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <select
              name="location"
              value={rentalInfo.dropOff.location}
              onChange={(e) => handleRentalChange(e, "dropOff")}
              className="p-2 border rounded w-full  text-[#90A3BF] bg-[#F6F7F9]"
              aria-label="Drop-Off Location"
            >
              <option value="">Select your city</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
            </select>
            <input
              type="date"
              name="date"
              value={rentalInfo.dropOff.date}
              onChange={(e) => handleRentalChange(e, "dropOff")}
              className="p-2 border rounded w-full  text-[#90A3BF] bg-[#F6F7F9]"
              aria-label="Drop-Off Date"
            />
            <input
              type="time"
              name="time"
              value={rentalInfo.dropOff.time}
              onChange={(e) => handleRentalChange(e, "dropOff")}
              className="p-2 border rounded w-full  text-[#90A3BF] bg-[#F6F7F9]"
              aria-label="Drop-Off Time"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
