import { useState, useEffect, type ReactNode } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useHighlightPosition } from "./hook/useHighlightPosition";

interface FeatureStep {
  id: string;
  title: string;
  content: string;
  icon?: ReactNode;
}

interface AppTourProps {
  features: FeatureStep[];
  onClose: () => void;
}

const AppTour: React.FC<AppTourProps> = ({ features, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { position, previousElementRef } = useHighlightPosition(
    features,
    currentStep
  );

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < features.length - 1) setCurrentStep(currentStep + 1);
    else {
      onClose();
      if (previousElementRef.current) {
        previousElementRef.current.style.zIndex = "";
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const currentFeature = features[currentStep];

  return (
    <>
      {/* Dim Background */}
      <div className="fixed inset-0 z-10 bg-black/20 transition-opacity duration-300"></div>

      {/* Highlight Box */}
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

      {/* Tooltip */}
      <div
        className="absolute z-10 bg-white rounded-xl shadow-xl max-w-sm transition-all duration-300"
        style={{
          top: `${
            position.top + position.height + 220 > window.innerHeight
              ? position.top - 220
              : position.top + position.height + 20
          }px`,
          left: `${Math.min(position.left, window.innerWidth - 400)}px`,
        }}
      >
        <div className="p-6">
          {/* Title and Close */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              {currentFeature?.icon}
              <h3 className="text-lg font-semibold text-gray-800 ml-2">
                {currentFeature?.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Content */}
          <p className="text-gray-600 mb-6">{currentFeature?.content}</p>

          {/* Progress & Buttons */}
          <div className="flex justify-between items-center">
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

            <div className="flex space-x-3">
              {currentStep > 0 && (
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center"
                >
                  <FiChevronLeft className="mr-1" />
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors flex items-center"
              >
                {currentStep === features.length - 1 ? "Finish" : "Next"}
                {currentStep < features.length - 1 && (
                  <FiChevronRight className="ml-1" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppTour;
