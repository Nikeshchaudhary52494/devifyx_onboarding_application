import type { FeatureStep } from "@/types";
import { useEffect, useState, useRef } from "react";

export const useHighlightPosition = (
  features: FeatureStep[],
  currentStep: number
) => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const previousElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (previousElementRef.current) {
        previousElementRef.current.style.zIndex = "";
      }

      const feature = features[currentStep];
      if (!feature) return;

      const element = document.getElementById(feature.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        setPosition({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height,
        });

        element.style.zIndex = "40";
        element.style.position = "relative";
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        previousElementRef.current = element;
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [features, currentStep]);

  return {
    position,
    previousElementRef,
  };
};
