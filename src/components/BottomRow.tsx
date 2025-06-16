import QuickAction from "./QuickAction";
import RecentActivites from "./RecentActivities";

export default function BottomRow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slide-up delay-200">
      <RecentActivites />
      <QuickAction />
    </div>
  );
}
