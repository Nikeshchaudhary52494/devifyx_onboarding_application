import { useTranslation } from "react-i18next";
import { FiUsers, FiDollarSign, FiTrendingUp } from "react-icons/fi";
import StatsCard from "./StatsCard";

export default function Stats() {
  const { t } = useTranslation();

  const statsData = [
    {
      title: t("stats.totalUsers"),
      value: "1,842",
      change: t("stats.totalUsersChange"),
      icon: <FiUsers size={24} />,
      iconBgColor: "bg-blue-50",
      iconTextColor: "text-blue-500",
    },
    {
      title: t("stats.revenue"),
      value: "$42,389",
      change: t("stats.revenueChange"),
      icon: <FiDollarSign size={24} />,
      iconBgColor: "bg-green-50",
      iconTextColor: "text-green-500",
    },
    {
      title: t("stats.conversion"),
      value: "3.7%",
      change: t("stats.conversionChange"),
      icon: <FiTrendingUp size={24} />,
      iconBgColor: "bg-purple-50",
      iconTextColor: "text-purple-500",
    },
  ];

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
