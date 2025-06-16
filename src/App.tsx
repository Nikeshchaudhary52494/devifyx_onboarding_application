import { useEffect, useState } from "react";
import BottomRow from "./components/BottomRow";
import ChartSection from "./components/ChartSection";
import Header from "./components/Header";
import Stats from "./components/Stats";
import AppTour from "./components/AppTour";
import "./i18n/i18n";

import {
  FiActivity,
  FiHome,
  FiPieChart,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdSkipForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  const [showTour, setShowTour] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onboarding_status = localStorage.getItem("devifyx_onboarding");
    if (onboarding_status !== "done") setShowTour(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const dashboardFeatures = [
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background p-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 z-10 lg:px-8">
        {showTour && (
          <AppTour
            features={dashboardFeatures}
            onClose={() => setShowTour(false)}
          />
        )}

        <div
          className="fixed bottom-6 right-6 md:top-6 md:bottom-auto z-50 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition duration-300 ease-in-out"
          onClick={() => setShowTour(true)}
          style={{ display: showTour ? "none" : "" }}
        >
          <AiOutlineExclamationCircle size={30} />
        </div>

        <div
          className="fixed bottom-6 right-6 z-50 cursor-pointer bg-green-600 hover:bg-green-700 gap-1 text-white p-2 rounded flex items-center shadow-lg transition duration-300 ease-in-out"
          onClick={() => setShowTour(false)}
          style={{ display: showTour ? "" : "none" }}
        >
          {t("buttons.skipTour")} <IoMdSkipForward />
        </div>

        <Header />
        <main className="py-8">
          <Stats />
          <ChartSection />
          <BottomRow />
        </main>
      </div>
    </div>
  );
}
