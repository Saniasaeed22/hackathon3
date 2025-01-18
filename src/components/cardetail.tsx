const CarDetails = () => {
  return (
    <div className="w-full p-4">
      <div className="rounded-lg p-4 flex flex-col md:flex-row">
        {/* Left Section: Image & Text */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
          <div className="w-full md:w-[640px] h-[360px] bg-gradient-to-r from-[#3563E9] to-blue-300 rounded-md p-4">
            <div className="w-full h-full text-white font-Plus Jakarta Sans flex flex-col justify-between">
              <div className="pt-4 ">
                <h2 className="text-3xl">Sports car with the best design and acceleration</h2>
                <p className="text-sm pt-1">Safety and comfort while driving a futuristic and elegant sports car.</p>
              </div>
              <div className="flex justify-center">
                <img src="/rentacar/image 8.png" alt="Car" className="w-[284px] h-[224px] object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Car Details */}
        <div className="bg-white shadow-md rounded-lg p-4 mt-4 md:mt-0 ml-5">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Nissan GT-R</h3>
            <span className="text-red-500 text-xl">&#10084;</span>
          </div>
          <p className="text-sm text-gray-500"> (440+ Reviews)</p>
          <p className="text-gray-600 mt-4">
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground: the “race track.”
          </p>

          {/* Car Features: Grid Layout */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-bold">Type</p>
              <p className="text-sm text-gray-500">Sport</p>
            </div>
            <div>
              <p className="font-bold">Capacity</p>
              <p className="text-sm text-gray-500">2 Person</p>
            </div>
            <div>
              <p className="font-bold">Steering</p>
              <p className="text-sm text-gray-500">Manual</p>
            </div>
            <div>
              <p className="font-bold">Fuel</p>
              <p className="text-sm text-gray-500">70L</p>
            </div>
          </div>

          {/* Rent Now Button and Price */}
          <div className="mt-4 flex justify-between items-center">
            <p className="text-lg font-bold">$80.00/day</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
