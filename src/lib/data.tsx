import {
  FiActivity,
  FiHome,
  FiPieChart,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";

export const getActivities = (t: (key: string) => string) => [
  {
    id: 1,
    text: t("recentActivity.newUser"),
    time: t("recentActivity.time10min"),
  },
  {
    id: 2,
    text: t("recentActivity.systemUpdate"),
    time: t("recentActivity.time2hours"),
  },
  {
    id: 3,
    text: t("recentActivity.newReport"),
    time: t("recentActivity.timeYesterday"),
  },
  {
    id: 4,
    text: t("recentActivity.passwordChanged"),
    time: t("recentActivity.time2days"),
  },
];

export const getDashboardFeatures = (t: (key: string) => string) => [
  {
    id: "header",
    title: t("tour.header.title"),
    content: t("tour.header.content"),
    icon: <FiHome className="text-blue-500" />,
  },
  {
    id: "stats",
    title: t("tour.stats.title"),
    content: t("tour.stats.content"),
    icon: <FiTrendingUp className="text-blue-500" />,
  },
  {
    id: "chart",
    title: t("tour.chart.title"),
    content: t("tour.chart.content"),
    icon: <FiPieChart className="text-blue-500" />,
  },
  {
    id: "recent-activity",
    title: t("tour.recentActivity.title"),
    content: t("tour.recentActivity.content"),
    icon: <FiActivity className="text-blue-500" />,
  },
  {
    id: "quick-actions",
    title: t("tour.quickActions.title"),
    content: t("tour.quickActions.content"),
    icon: <FiSettings className="text-blue-500" />,
  },
];
