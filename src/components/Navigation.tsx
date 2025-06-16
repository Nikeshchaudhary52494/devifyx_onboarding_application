import { FiSettings, FiHome, FiPieChart, FiFileText } from "react-icons/fi";

export default function Header() {
  return (
    <header
      id="header"
      className="bg-white rounded-xl shadow-sm p-6 animate-fade-in"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center">
          <span className="bg-blue-500 text-white p-2 rounded-lg mr-3">
            <FiHome />
          </span>
          Analytics Dashboard
        </h1>
        <nav className="flex space-x-4">
          <button className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors duration-200">
            <FiHome className="inline mr-2" /> Home
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors duration-200">
            <FiPieChart className="inline mr-2" /> Analytics
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors duration-200">
            <FiFileText className="inline mr-2" /> Reports
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors duration-200">
            <FiSettings className="inline mr-2" /> Settings
          </button>
        </nav>
      </div>
    </header>
  );
}
