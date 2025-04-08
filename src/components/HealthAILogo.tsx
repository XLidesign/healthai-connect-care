
import { cn } from "@/lib/utils";

interface HealthAILogoProps {
  size?: number;
  className?: string;
  withText?: boolean;
  textColor?: "default" | "gradient";
  variant?: "default" | "light" | "dark";
}

const HealthAILogo = ({ 
  size = 24, 
  className,
  withText = false,
  textColor = "default",
  variant = "default"
}: HealthAILogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div style={{ width: size, height: size }}>
        <img 
          src="/lovable-uploads/f10809fb-f5c1-4d93-ad90-492528f35d0c.png" 
          alt="Google HealthAI Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      {withText && (
        <div className="ml-2 flex items-center">
          <span className={cn(
            "font-bold", 
            textColor === "default" ? "text-foreground" : "healthai-gradient-text"
          )}>
            Google
          </span>
          <span className={cn(
            "font-bold", 
            textColor === "default" ? "text-primary" : "healthai-gradient-text"
          )}>
            HealthAI
          </span>
        </div>
      )}
    </div>
  );
};

export default HealthAILogo;
