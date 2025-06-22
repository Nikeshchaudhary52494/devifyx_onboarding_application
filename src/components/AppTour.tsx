import { useState, useEffect } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useHighlightPosition } from "./hook/useHighlightPosition";
import type { AppTourProps } from "@/types";
import { Button } from "./ui/button";
import { IoMdSkipForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function AppTour({
  features,
  setShowTour,
  showTour,
}: AppTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { position, previousElementRef } = useHighlightPosition(
    features,
    currentStep
  );

  const { t } = useTranslation();

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleClose = () => {
    setShowTour(false);
    localStorage.setItem("devifyx_onboarding", "done");
    if (previousElementRef.current) {
      previousElementRef.current.style.zIndex = "";
    }
    document.getElementById("header")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  const handleNext = () => {
    if (currentStep < features.length - 1) setCurrentStep(currentStep + 1);
    else handleClose();
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const currentFeature = features[currentStep];

  return (
    <>
      <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm dark:bg-white/20  transition-opacity duration-300"></div>

      <div
        className={`absolute z-10 border-2 border-blue-400 rounded-xl transition-all duration-300 ${
          isAnimating ? "animate-pulse" : ""
        }`}
        style={{
          top: `${position.top - 8}px`,
          left: `${position.left - 8}px`,
          width: `${position.width + 16}px`,
          height: `${position.height + 16}px`,
        }}
      />

      <div
        className="absolute z-10 bg-card rounded-xl shadow-xl max-w-sm transition-all duration-300"
        style={{
          top: `${
            position.top + position.height + 220 > window.innerHeight
              ? position.top - 220
              : position.top + position.height + 20
          }px`,
          left: `${Math.min(position.left, window.innerWidth - 400)}px`,
        }}
      >
        <div className="p-6 ">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              {currentFeature?.icon}
              <h3 className="text-lg font-semibold ml-2">
                {currentFeature?.title}
              </h3>
            </div>
            <Button
              onClick={() => handleClose()}
              className="text-gray-400 hover:text-blue-600 bg-transparent hover:bg-transparent transition-colors"
            >
              <FiX size={20} />
            </Button>
          </div>

          <p className="text-accent-foreground/70 mb-6">
            {currentFeature?.content}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentStep ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <span className="text-sm text-gray-600">
                {currentStep + 1} / {features.length}
              </span>
            </div>

            <div className="flex space-x-3">
              {currentStep > 0 && (
                <Button
                  onClick={handlePrev}
                  className="px-4 py-2 text-gray-600 bg-transparent hover:bg-gray-100 rounded-lg transition-colors flex items-center"
                >
                  <FiChevronLeft className="mr-1" />
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors flex items-center"
              >
                {currentStep === features.length - 1 ? "Finish" : "Next"}
                {currentStep < features.length - 1 && (
                  <FiChevronRight className="ml-1" />
                )}
              </Button>
              <div
                className="fixed bottom-6 right-6 z-50 cursor-pointer bg-green-600 hover:bg-green-700 gap-1 text-white p-2 rounded flex items-center shadow-lg transition duration-300 ease-in-out"
                onClick={() => handleClose()}
                style={{ display: showTour ? "" : "none" }}
              >
                {t("buttons.skipTour")} <IoMdSkipForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
