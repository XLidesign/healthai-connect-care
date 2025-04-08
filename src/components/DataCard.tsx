
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DataCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  unit?: string;
  iconColor?: string;
  trend?: "up" | "down" | "stable";
  trendValue?: string;
  className?: string;
}

const DataCard = ({ 
  icon, 
  title, 
  value, 
  unit, 
  iconColor = "text-healthai-purple",
  trend,
  trendValue,
  className 
}: DataCardProps) => {
  const getTrendIcon = () => {
    if (trend === "up") {
      return (
        <div className="flex items-center text-green-600 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
              clipRule="evenodd"
            />
          </svg>
          {trendValue}
        </div>
      );
    } else if (trend === "down") {
      return (
        <div className="flex items-center text-red-600 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
          {trendValue}
        </div>
      );
    } else if (trend === "stable") {
      return (
        <div className="flex items-center text-blue-600 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
              clipRule="evenodd"
            />
          </svg>
          {trendValue}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("p-2 rounded-full", `bg-opacity-10 ${iconColor.replace('text-', 'bg-')}`)}>
            <div className={cn("h-5 w-5", iconColor)}>
              {icon}
            </div>
          </div>
          {trend && getTrendIcon()}
        </div>
        <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
        <div className="flex items-end">
          <span className="text-2xl font-bold">{value}</span>
          {unit && <span className="text-sm text-muted-foreground ml-1">{unit}</span>}
        </div>
      </CardContent>
    </Card>
  );
};

export default DataCard;
