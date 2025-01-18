const Reviews = () => {
  return (
    <div className="mt-6 bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8">
      <h3 className="text-lg sm:text-xl font-bold mb-4">Reviews</h3>
      <div className="space-y-4">
        {/* Review 1 */}
        <div className="border-b pb-4">
          <div className="flex items-center mb-2">
            <img
              src="/rentacar/Profil.png"
              alt="Reviewer"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-4">
              <p className="font-bold text-sm sm:text-base">Alex Stanton</p>
              <p className="text-xs sm:text-sm text-gray-500">CEO at Hitech</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            "We are very happy with the service from the MODERN Application! The
            process is easy to use and very convenient for car rental options."
          </p>
          <p className="text-xs sm:text-sm text-gray-500 text-right mt-2">21 May 2022</p>
        </div>

        {/* Review 2 */}
        <div className="border-b pb-4">
          <div className="flex items-center mb-2">
            <img
              src="/rentacar/Profill.png"
              alt="Reviewer"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-4">
              <p className="font-bold text-sm sm:text-base">Skylar Dias</p>
              <p className="text-xs sm:text-sm text-gray-500">CIO at Innovatech</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            "The service was excellent! The rental process was straightforward,
            and the car’s condition was perfect."
          </p>
          <p className="text-xs sm:text-sm text-gray-500 text-right mt-2">12 May 2022</p>
        </div>
      </div>
      
      {/* Show All Button */}
      <button className="text-blue-500 mt-4 flex justify-center text-xs sm:text-sm lg:text-base">
        Show All
      </button>
    </div>
  );
};

export default Reviews;
