const Filters = () => {
  return (
    <div className="w-full sm:w-2/3 md:w-1/3 p-6 sm:p-12 lg:p-24 bg-white rounded-lg">
      {/* Type Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Type</h4>
        <ul className="space-y-2 text-gray-600">
          <li>Sport (10)</li>
          <li>SUV (12)</li>
          <li>MPV (6)</li>
          <li>Sedan (20)</li>
          <li>Coupe (14)</li>
          <li>Hatchback (8)</li>
        </ul>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-bold mb-2">Category</h4>
        <ul className="space-y-2 text-gray-600">
          <li>2 Person (10)</li>
          <li>4 Person (20)</li>
          <li>6 Person (8)</li>
          <li>8 or More (4)</li>
        </ul>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h4 className="font-bold mb-2">Price</h4>
        <div className="flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full accent-blue-500"
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">Max: $100.00</p>
      </div>
    </div>
  );
};

export default Filters;
