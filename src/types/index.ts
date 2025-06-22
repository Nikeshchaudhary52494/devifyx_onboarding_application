import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface FeatureStep {
  id: string;
  title: string;
  content: string;
  icon?: ReactNode;
}

export interface AppTourProps {
  features: FeatureStep[];
  showTour: Boolean;
  setShowTour: Dispatch<SetStateAction<boolean>>;
}
