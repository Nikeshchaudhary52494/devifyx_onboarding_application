import { FiUsers, FiDollarSign, FiSettings, FiFileText } from "react-icons/fi";

export default function QuickAction() {
  return (
    <div id="quick-actions" className="bg-card border rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="p-4 bg-blue-50 rounded-lg text-blue-500 border border-blue-500 hover:bg-blue-100 transition-colors flex flex-col items-center">
          <FiFileText size={24} className="mb-2" />
          <span>Generate Report</span>
        </button>
        <button className="p-4 bg-green-50 rounded-lg text-green-500 border border-green-500 hover:bg-green-100 transition-colors flex flex-col items-center">
          <FiUsers size={24} className="mb-2" />
          <span>Add User</span>
        </button>
        <button className="p-4 bg-purple-50 rounded-lg text-purple-500 border border-purple-500 hover:bg-purple-100 transition-colors flex flex-col items-center">
          <FiDollarSign size={24} className="mb-2" />
          <span>Process Payment</span>
        </button>
        <button className="p-4 bg-orange-50 rounded-lg text-orange-500 border border-orange-500 hover:bg-orange-100 transition-colors flex flex-col items-center">
          <FiSettings size={24} className="mb-2" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}
