import React from "react";

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  iconBgColor: string;
  iconTextColor: string;
}

export default function StatsCard({
  icon,
  title,
  value,
  change,
  iconBgColor,
  iconTextColor,
}: StatsCardProps) {
  return (
    <div className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${iconBgColor} ${iconTextColor} mr-4`}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-accent-foreground/70">
            {title}
          </p>
          <p className="text-2xl font-semibold">{value}</p>
          <p className="text-xs text-green-500">{change}</p>
        </div>
      </div>
    </div>
  );
}
