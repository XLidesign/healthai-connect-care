
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { QrCode, Activity, UserSearch, Watch } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div className="bg-gradient-to-br from-healthai-purple/10 via-healthai-blue/10 to-healthai-teal/10 py-16 px-8 rounded-3xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 healthai-gradient-text">
            Your Health, Connected
          </h1>
          <p className="text-xl mb-10">
            Connect your wearable devices, analyze your health data with AI, and find the right healthcare professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-healthai hover:opacity-90">
              <Link to="/qr-scanner">
                <QrCode className="mr-2 h-5 w-5" />
                Scan QR Code
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/connect-device">
                <Watch className="mr-2 h-5 w-5" />
                Connect Device
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="healthai-card p-6">
            <div className="rounded-full bg-healthai-purple/10 p-3 w-fit mb-4">
              <Activity className="h-6 w-6 text-healthai-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Health Analysis</h3>
            <p className="text-muted-foreground mb-4">
              Upload and analyze your health data with advanced AI to get personalized insights.
            </p>
            <Button asChild variant="ghost" className="mt-auto">
              <Link to="/health-dashboard">View Dashboard</Link>
            </Button>
          </div>
          
          <div className="healthai-card p-6">
            <div className="rounded-full bg-healthai-blue/10 p-3 w-fit mb-4">
              <UserSearch className="h-6 w-6 text-healthai-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Doctors</h3>
            <p className="text-muted-foreground mb-4">
              Search for the right healthcare professional based on your needs and health data.
            </p>
            <Button asChild variant="ghost" className="mt-auto">
              <Link to="/doctor-search">Find Doctor</Link>
            </Button>
          </div>
          
          <div className="healthai-card p-6">
            <div className="rounded-full bg-healthai-teal/10 p-3 w-fit mb-4">
              <Watch className="h-6 w-6 text-healthai-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Device Integration</h3>
            <p className="text-muted-foreground mb-4">
              Connect your Apple Watch and other health devices to seamlessly sync your data.
            </p>
            <Button asChild variant="ghost" className="mt-auto">
              <Link to="/connect-device">Connect Devices</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
