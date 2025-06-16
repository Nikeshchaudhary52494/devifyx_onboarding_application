import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { FaChevronDown } from "react-icons/fa";

export default function ChartSection() {
  const [range, setRange] = useState("Weekly");

  const options = ["Weekly", "Monthly", "Yearly"];

  return (
    <div
      id="chart"
      className="bg-card border rounded-xl p-6 mb-8 animate-slide-up delay-100"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="sm:text-xl font-semibold">Performance Overview</h2>

        {/* Dropdown for small screens */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-sml 20">
                {range} <FaChevronDown size={5} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {options.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onSelect={() => setRange(option)}
                >
                  {option}
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
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="h-80 border bg-accent rounded-lg flex items-center justify-center">
        <p className="text-gray-500 p-2">
          Chart visualization for <strong>{range}</strong> will appear here
        </p>
      </div>
    </div>
  );
}
