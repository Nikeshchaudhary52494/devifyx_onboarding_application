import { FiUsers, FiDollarSign, FiTrendingUp } from "react-icons/fi";
import StatsCard from "./StatsCard";

const statsData = [
  {
    title: "Total Users",
    value: "1,842",
    change: "↑ 12% from last month",
    icon: <FiUsers size={24} />,
    iconBgColor: "bg-blue-50",
    iconTextColor: "text-blue-500",
  },
  {
    title: "Revenue",
    value: "$42,389",
    change: "↑ 8% from last month",
    icon: <FiDollarSign size={24} />,
    iconBgColor: "bg-green-50",
    iconTextColor: "text-green-500",
  },
  {
    title: "Conversion",
    value: "3.7%",
    change: "↑ 1.2% from last month",
    icon: <FiTrendingUp size={24} />,
    iconBgColor: "bg-purple-50",
    iconTextColor: "text-purple-500",
  },
];

export default function Stats() {
  return (
    <div
      id="stats"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up"
    >
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}
