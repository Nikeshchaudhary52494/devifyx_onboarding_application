import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

export default function ChartSection() {
  const { t } = useTranslation();

  const [range, setRange] = useState("weekly");

  const options = ["weekly", "monthly", "yearly"];

  return (
    <div
      id="chart"
      className="bg-card border rounded-xl p-6 mb-8 animate-slide-up delay-100"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="sm:text-xl font-semibold">
          {t("chartSection.performanceOverview")}
        </h2>

        {/* Dropdown for small screens */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-sm">
                {t(`chartSection.${range}`)} <FaChevronDown size={12} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {options.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onSelect={() => setRange(option)}
                >
                  {t(`chartSection.${option}`)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Button group for medium and up */}
        <div className="hidden md:flex space-x-2">
          {options.map((option) => (
            <Button
              key={option}
              variant={range === option ? "default" : "outline"}
              size="sm"
              onClick={() => setRange(option)}
            >
              {t(`chartSection.${option}`)}
            </Button>
          ))}
        </div>
      </div>

      <div className="h-80 border bg-accent rounded-lg flex items-center justify-center">
        <p className="text-gray-500 p-2 text-center text-sm">
          {t("chartSection.chartText", { range: t(`chartSection.${range}`) })}
        </p>
      </div>
    </div>
  );
}
