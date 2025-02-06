import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-md">
        <h1 className="text-xl font-bold mb-6">Main Menu</h1>
        <nav>
          <ul className="space-y-4">
            <li className="text-blue-500 font-semibold">Dashboard</li>
            <li>Car Rent</li>
            <li>Insight</li>
            <li>Reimburse</li>
            <li>Inbox</li>
            <li>Calendar</li>
          </ul>
        </nav>
        <div className="mt-12">
          <h2 className="text-sm font-bold text-gray-500">Preferences</h2>
          <ul className="space-y-4 mt-4">
            <li>Settings</li>
            <li>Help & Center</li>
            <li>
              <span className="flex items-center">
                Dark Mode
                <button className="ml-4 bg-gray-300 p-1 rounded">⚙️</button>
              </span>
            </li>
          </ul>
        </div>
        <button className="mt-8 text-red-500">Log Out</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Details Rental */}
          <div className="col-span-2 bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Details Rental</h2>
            <div className="flex justify-between">
              <div><img
                    src="/rentacar/track1.png"
                    alt="tracking"
                 className="bg-gray-200 h-50 w-80 rounded mb-4">
                  </img>
              </div>
              <div className="w-1/2 pl-4">
                <div className="flex items-center mb-2">
                  <img
                    src="/rentacar/car (5).png"
                    alt="car"
                    className="w-30 h-16 6rounded mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">Nissan GT - R</h3>
                    <p className="text-gray-500 text-sm">Sport Car</p>
                  </div>
                </div>
                <div className="text-gray-500 text-sm">
                  <div className="mb-4">
                    <span>Pick-Up</span>
                    <div className="flex justify-between mt-1">
                      <span>Kota Semarang</span>
                      <span>20 July 2022</span>
                      <span>07:00</span>
                    </div>
                  </div>
                  <div>
                    <span>Drop-Off</span>
                    <div className="flex justify-between mt-1">
                      <span>Kota Semarang</span>
                      <span>21 July 2022</span>
                      <span>01:00</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-bold mt-4">$80.00</p>
              </div>
            </div>
          </div>

          {/* Top 5 Car Rental */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Top 5 Car Rental</h2>
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">72,030</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between">
                <span>Sport Car</span>
                <span>17,439</span>
              </li>
              <li className="flex justify-between">
                <span>SUV</span>
                <span>9,478</span>
              </li>
              <li className="flex justify-between">
                <span>Coupe</span>
                <span>18,197</span>
              </li>
              <li className="flex justify-between">
                <span>Hatchback</span>
                <span>12,510</span>
              </li>
              <li className="flex justify-between">
                <span>MPV</span>
                <span>14,406</span>
              </li>
            </ul>
          </div>

          {/* Recent Transaction */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Recent Transaction</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Nissan GT - R</span>
                <span>$80.00</span>
              </li>
              <li className="flex justify-between">
                <span>Koenigsegg</span>
                <span>$99.00</span>
              </li>
              <li className="flex justify-between">
                <span>Rolls-Royce</span>
                <span>$96.00</span>
              </li>
              <li className="flex justify-between">
                <span>CR-V</span>
                <span>$80.00</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
