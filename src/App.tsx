import { useEffect, useState } from "react";
import BottomRow from "./components/BottomRow";
import ChartSection from "./components/ChartSection";
import Header from "./components/Header";
import Stats from "./components/Stats";
import AppTour from "./components/AppTour";
import "./i18n/i18n";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdSkipForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { getDashboardFeatures } from "./lib/data";
import Loader from "./components/Loader";

export default function App() {
  const { t } = useTranslation();

  const [showTour, setShowTour] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dashboardFeatures = getDashboardFeatures(t);

  useEffect(() => {
    const onboarding_status = localStorage.getItem("devifyx_onboarding");
    if (onboarding_status !== "done") setShowTour(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

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
