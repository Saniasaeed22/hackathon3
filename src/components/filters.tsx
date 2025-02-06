const Filters = () => {
  return (
    <div className="w-full md:w-[330px] h-screen text-center bg-white rounded-lg p-4 overflow-y-auto">
      {/* Type Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2 text-xl md:text-2xl">Type</h4>
        <ul className="space-y-2 text-gray-500 text-lg md:text-2xl">
          <li>Sport (10)</li>
          <li>SUV (12)</li>
          <li>MPV (6)</li>
          <li>Sedan (20)</li>
          <li>Coupe (14)</li>
          <li>Hatchback (8)</li>
        </ul>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <h4 className="font-medium mb-2 text-xl md:text-2xl">Category</h4>
        <ul className="space-y-2 text-gray-500 text-lg md:text-2xl">
          <li>2 Person (10)</li>
          <li>4 Person (20)</li>
          <li>6 Person (8)</li>
          <li>8 or More (4)</li>
        </ul>
      </div>

      {/* Price Filter */}
      <div className="mb-6 text-center">
        <h4 className="font-bold mb-2 text-xl md:text-2xl">Price</h4>
        <div className="flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-5 accent-blue-500 rounded-md mx-2 md:mx-7"
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">Max: $100.00</p>
      </div>
    </div>
  );
};

export default Filters;