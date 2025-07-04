import { getActivities } from "@/lib/data";
import { useTranslation } from "react-i18next";

export default function RecentActivities() {
  const { t } = useTranslation();
  const activities = getActivities(t);

  return (
    <div id="recent-activity" className="bg-card border rounded-xl p-6">
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-semibold">{t("recentActivity.title")}</h2>
        <span className="ml-auto text-sm text-blue-500">
          {t("recentActivity.viewAll")}
        </span>
      </div>
      <div className="space-y-4">
        {activities.map((item: any) => (
          <div key={item.id} className="flex items-start group">
            <div className="flex-shrink-0 h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
            <div className="ml-3">
              <p className="text-sm font-medium group-hover:text-blue-500 transition-colors">
                {item.text}
              </p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
