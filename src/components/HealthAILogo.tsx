
import { cn } from "@/lib/utils";

interface HealthAILogoProps {
  size?: number;
  className?: string;
  withText?: boolean;
  textColor?: "default" | "gradient";
}

const HealthAILogo = ({ 
  size = 24, 
  className,
  withText = false,
  textColor = "default" 
}: HealthAILogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div style={{ width: size, height: size }}>
        <img 
          src="/lovable-uploads/ddd6e92c-f8eb-40f9-a4ca-20d9f539e1e3.png" 
          alt="HealthAI Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      {withText && (
        <span className={cn(
          "ml-2 font-bold", 
          textColor === "default" ? "text-foreground" : "healthai-gradient-text"
        )}>
          HealthAI
        </span>
      )}
    </div>
  );
};

export default HealthAILogo;
