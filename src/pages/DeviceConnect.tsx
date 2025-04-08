
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Check, Watch, Smartphone, Heart, Bluetooth } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DeviceProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const DeviceConnect = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [connectedDevices, setConnectedDevices] = useState<string[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  const devices: DeviceProps[] = [
    {
      id: "apple-watch",
      name: "Apple Watch",
      icon: <Watch className="h-6 w-6" />,
      description: "Sync heart rate, activity, and sleep data"
    },
    {
      id: "smartphone",
      name: "Smartphone Health App",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Connect to Apple Health or Google Fit"
    },
    {
      id: "heart-monitor",
      name: "Heart Rate Monitor",
      icon: <Heart className="h-6 w-6" />,
      description: "External heart rate monitoring device"
    },
    {
      id: "blood-pressure",
      name: "Blood Pressure Monitor",
      icon: <Heart className="h-6 w-6" />,
      description: "Bluetooth-enabled blood pressure device"
    },
  ];

  const startScan = () => {
    setIsScanning(true);
    
    // Simulate finding devices after 2 seconds
    setTimeout(() => {
      setIsScanning(false);
      
      // Auto-connect to Apple Watch in this demo
      handleConnect("apple-watch");
      
      toast({
        title: "Devices Found",
        description: "Select a device to connect",
      });
    }, 2000);
  };

  const handleConnect = (deviceId: string) => {
    if (connectedDevices.includes(deviceId)) {
      // Disconnect
      setConnectedDevices(connectedDevices.filter(id => id !== deviceId));
      toast({
        title: "Device Disconnected",
        description: `${devices.find(d => d.id === deviceId)?.name} has been disconnected`,
        variant: "destructive"
      });
    } else {
      // Connect
      setConnectedDevices([...connectedDevices, deviceId]);
      toast({
        title: "Device Connected",
        description: `${devices.find(d => d.id === deviceId)?.name} has been connected`,
      });
    }
  };

  const handleContinue = () => {
    if (connectedDevices.length > 0) {
      navigate("/health-dashboard");
    } else {
      toast({
        title: "No Devices Connected",
        description: "Please connect at least one device to continue",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Connect Your Health Devices</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Available Devices</CardTitle>
          <CardDescription>
            Connect your health monitoring devices to sync your data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {devices.map((device) => (
              <div 
                key={device.id} 
                className="flex items-center justify-between border p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {device.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{device.name}</h3>
                    <p className="text-sm text-muted-foreground">{device.description}</p>
                  </div>
                </div>
                <Button 
                  variant={connectedDevices.includes(device.id) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleConnect(device.id)}
                >
                  {connectedDevices.includes(device.id) ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Connected
                    </>
                  ) : (
                    "Connect"
                  )}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={startScan}
              disabled={isScanning}
            >
              {isScanning ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Bluetooth className="mr-2 h-4 w-4" />
                  Scan for Devices
                </>
              )}
            </Button>
            <Button 
              className="flex-1"
              onClick={handleContinue}
              disabled={connectedDevices.length === 0}
            >
              Continue to Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>How to Connect</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4 list-decimal list-inside">
            <li className="pl-2">
              <span className="font-medium">Enable Bluetooth</span> - Make sure your Bluetooth is turned on for both your phone and the device you want to connect.
            </li>
            <li className="pl-2">
              <span className="font-medium">Put Device in Pairing Mode</span> - For most devices, you'll need to put them in pairing mode. Check your device manual for instructions.
            </li>
            <li className="pl-2">
              <span className="font-medium">Click "Scan for Devices"</span> - The app will search for available Bluetooth devices nearby.
            </li>
            <li className="pl-2">
              <span className="font-medium">Select Your Device</span> - Once your device appears in the list, click "Connect" to pair with it.
            </li>
            <li className="pl-2">
              <span className="font-medium">Allow Permissions</span> - You may be prompted to allow permissions for data sharing.
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeviceConnect;
