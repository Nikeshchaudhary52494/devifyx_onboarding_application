import type { ReactNode } from "react";

export interface FeatureStep {
  id: string;
  title: string;
  content: string;
  icon?: ReactNode;
}

export interface AppTourProps {
  features: FeatureStep[];
  onClose: () => void;
}
