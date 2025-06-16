export default function RecentActivites() {
  return (
    <div id="recent-activity" className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
        <span className="ml-auto text-sm text-blue-500">View All</span>
      </div>
      <div className="space-y-4">
        {[
          {
            id: 1,
            text: "New user registered - John Doe",
            time: "10 mins ago",
          },
          {
            id: 2,
            text: "System update completed to v2.4",
            time: "2 hours ago",
          },
          {
            id: 3,
            text: "New report generated - Monthly Sales",
            time: "yesterday",
          },
          {
            id: 4,
            text: "Password changed for admin account",
            time: "2 days ago",
          },
        ].map((item) => (
          <div key={item.id} className="flex items-start group">
            <div className="flex-shrink-0 h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 group-hover:text-blue-500 transition-colors">
                {item.text}
              </p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
