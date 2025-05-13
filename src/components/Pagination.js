export default function Pagination() {
  return (
    <div className="bg-white p-4 flex flex-col md:flex-row md:justify-between md:items-center shadow rounded-md w-full">
      {/* Pagination Controls */}
      <div className="flex items-center flex-wrap gap-2 text-gray-700 mb-2 md:mb-0">
        <button className="px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm">
          {"<"}
        </button>
        <button className="px-4 py-1.5 rounded-md bg-gray-200 text-gray-900 font-semibold text-sm">
          1
        </button>
        <button className="px-4 py-1.5 rounded-md hover:bg-gray-100 text-sm">
          2
        </button>
        <button className="px-4 py-1.5 rounded-md hover:bg-gray-100 text-sm">
          3
        </button>
        <span className="px-2 text-sm">...</span>
        <button className="px-4 py-1.5 rounded-md hover:bg-gray-100 text-sm">
          10
        </button>
        <button className="px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm">
          {">"}
        </button>
      </div>

      {/* Right Side Text */}
      <div className="text-sm text-gray-500 flex gap-3 items-center">
        <div>Showing 1 to 8 of 50 entries</div>

        <span className="text-black cursor-pointer ml-2 flex items-center border px-3 py-2 border-gray-200 rounded-lg gap-2">
          Show 8
          <img src="" className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
}
