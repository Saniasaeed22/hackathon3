"use client";
import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const locations = ["Karachi", "Lahore", "Islamabad", "Queta", "Peshawar"];
const times = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];

const PickDrop = () => {
  const [pickUp, setPickUp] = useState({ location: "", date: "", time: "" });
  const [dropOff, setDropOff] = useState({ location: "", date: "", time: "" });

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg w-full max-w-5xl mx-auto">
      {/* Pick-Up Section */}
      <div className="p-4 bg-gray-100 rounded-xl flex-1 w-full">
        <div className="flex items-center gap-2 mb-3">
          <input type="radio" name="booking" checked readOnly className="text-blue-500" />
          <span className="font-semibold text-gray-800">Pick – Up</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold">Locations</label>
            <select
              className="w-full mt-1 p-2 border rounded-lg"
              onChange={(e) => setPickUp({ ...pickUp, location: e.target.value })}
            >
              <option>Select your city</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold">Date</label>
            <input
              type="date"
              className="w-full mt-1 p-2 border rounded-lg"
              onChange={(e) => setPickUp({ ...pickUp, date: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-semibold">Time</label>
            <select
              className="w-full mt-1 p-2 border rounded-lg"
              onChange={(e) => setPickUp({ ...pickUp, time: e.target.value })}
            >
              <option>Select your time</option>
              {times.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Swap Icon */}
      <div className="p-3 bg-blue-500 text-white rounded-lg flex items-center justify-center">
        <FaExchangeAlt className="text-xl" />
      </div>
      
      {/* Drop-Off Section */}
      <div className="p-4 bg-gray-100 rounded-xl flex-1 w-full">
        <div className="flex items-center gap-2 mb-3">
          <input type="radio" name="booking" checked readOnly className="text-blue-500" />
          <span className="font-semibold text-gray-800">Drop – Off</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold">Locations</label>
            <select
              className="w-full mt-1 p-2 border rounded-lg"
              onChange={(e) => setDropOff({ ...dropOff, location: e.target.value })}
            >
              <option>Select your city</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold">Date</label>
            <input
              type="date"
              className="w-full mt-1 p-2 border rounded-lg"
              onChange={(e) => setDropOff({ ...dropOff, date: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-semibold">Time</label>
            <select
              className="w-full mt-1 p-2 border rounded-lg"
              onChange={(e) => setDropOff({ ...dropOff, time: e.target.value })}
            >
              <option>Select your time</option>
              {times.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickDrop;
