
interface HealthAILogoProps {
  size?: number;
}

const HealthAILogo = ({ size = 24 }: HealthAILogoProps) => {
  return (
    <div style={{ width: size, height: size }}>
      <img 
        src="/lovable-uploads/ddd6e92c-f8eb-40f9-a4ca-20d9f539e1e3.png" 
        alt="HealthAI Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default HealthAILogo;
