export default function ChartSection() {
  return (
    <div
      id="chart"
      className="bg-white rounded-xl shadow-sm p-6 mb-8 animate-slide-up delay-100"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Performance Overview
        </h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-blue-50 text-blue-500 rounded-lg">
            Weekly
          </button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-50 rounded-lg">
            Monthly
          </button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-50 rounded-lg">
            Yearly
          </button>
        </div>
      </div>
      <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Chart visualization will appear here</p>
      </div>
    </div>
  );
}
