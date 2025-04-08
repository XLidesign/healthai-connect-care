
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { QrCode, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QRScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const startScanner = () => {
    setIsScanning(true);
    
    // Simulate a QR scan after 3 seconds
    setTimeout(() => {
      setIsScanning(false);
      setHasScanned(true);
      toast({
        title: "QR Code Scanned Successfully",
        description: "You can now connect your device",
      });
    }, 3000);
  };

  const handleContinue = () => {
    navigate("/connect-device");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Scan QR Code</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Connect with Health Provider</CardTitle>
          <CardDescription>
            Scan the QR code provided by your healthcare provider to connect your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border rounded-xl aspect-square flex items-center justify-center bg-muted/30">
            {isScanning ? (
              <div className="text-center space-y-4">
                <div className="animate-pulse-slow">
                  <QrCode className="h-16 w-16 mx-auto text-primary" />
                </div>
                <p>Scanning...</p>
              </div>
            ) : hasScanned ? (
              <div className="text-center space-y-4">
                <div className="rounded-full bg-green-100 p-4 w-fit mx-auto">
                  <QrCode className="h-12 w-12 text-green-600" />
                </div>
                <p className="text-green-600 font-medium">QR Code Scanned Successfully!</p>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <QrCode className="h-16 w-16 mx-auto text-muted-foreground" />
                <p className="text-muted-foreground">Camera preview will appear here</p>
              </div>
            )}
          </div>
          
          {hasScanned ? (
            <Button className="w-full" onClick={handleContinue}>
              Continue to Device Connection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button className="w-full" onClick={startScanner} disabled={isScanning}>
              {isScanning ? "Scanning..." : "Start Scanner"}
            </Button>
          )}
          
          <p className="text-sm text-muted-foreground text-center">
            You can find your QR code in your healthcare provider's materials or hospital check-in area
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QRScanner;
