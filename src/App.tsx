import { useEffect, useState } from "react";
import BottomRow from "./components/BottomRow";
import ChartSection from "./components/ChartSection";
import Header from "./components/Header";
import Stats from "./components/Stats";
import AppTour from "./components/AppTour";

import {
  FiActivity,
  FiHome,
  FiPieChart,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdSkipForward } from "react-icons/io";

function App() {
  const [showTour, setShowTour] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const dashboardFeatures = [
    {
      id: "header",
      title: "Dashboard Navigation",
      content: "Access all sections of your dashboard quickly from here.",
      icon: <FiHome className="text-blue-500" />,
    },
    {
      id: "stats",
      title: "Key Performance Metrics",
      content: "Monitor your most important business metrics in real-time.",
      icon: <FiTrendingUp className="text-blue-500" />,
    },
    {
      id: "chart",
      title: "Analytics Dashboard",
      content:
        "Interactive visualizations help you understand trends and patterns.",
      icon: <FiPieChart className="text-blue-500" />,
    },
    {
      id: "recent-activity",
      title: "Activity Feed",
      content: "Stay updated with the latest system events and notifications.",
      icon: <FiActivity className="text-blue-500" />,
    },
    {
      id: "quick-actions",
      title: "Quick Actions",
      content: "Perform common tasks with just one click.",
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
    <div className="bg-gray-50 p-5">
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
          style={{
            display: showTour ? "none" : "",
          }}
        >
          <AiOutlineExclamationCircle size={30} />
        </div>
        <div
          className="fixed bottom-6 right-6  m z-50 cursor-pointer bg-green-600 hover:bg-green-700 gap-1 text-white p-2 rounded flex items-center shadow-lg transition duration-300 ease-in-out"
          onClick={() => setShowTour(false)}
          style={{
            display: showTour ? "" : "none",
          }}
        >
          Skip Tour <IoMdSkipForward />
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

export default App;
