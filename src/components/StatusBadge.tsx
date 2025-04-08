
import { cn } from "@/lib/utils";

type StatusType = "pending" | "overdue" | "paid" | "completed" | "active" | "inactive" | "success" | "error" | "warning" | "info";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-600";
      case "overdue":
        return "bg-red-100 text-red-600";
      case "paid":
      case "completed":
      case "success":
        return "bg-green-100 text-green-600";
      case "active":
        return "bg-blue-100 text-blue-600";
      case "inactive":
        return "bg-gray-100 text-gray-600";
      case "error":
        return "bg-red-100 text-red-600";
      case "warning":
        return "bg-amber-100 text-amber-600";
      case "info":
        return "bg-sky-100 text-sky-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <span className={cn(
      "text-xs px-2 py-1 rounded-full font-medium",
      getStatusStyles(),
      className
    )}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge;
