
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, Receipt, ShoppingBag, RefreshCcw } from "lucide-react";
import { healthData, bills } from "@/data/mockData";

const Index = () => {
  // Get the latest health data
  const latestHealthData = healthData[healthData.length - 1];
  
  // Get pending bills
  const pendingBills = bills.filter(bill => bill.status === 'pending' || bill.status === 'overdue');
  
  return (
    <div className="space-y-10">
      <HeroSection />
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Your Health Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <Activity className="mr-2 h-5 w-5 text-healthai-purple" />
                Latest Health Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              {latestHealthData ? (
                <div className="grid grid-cols-2 gap-4">
                  <div className="healthai-section">
                    <p className="text-sm text-muted-foreground">Heart Rate</p>
                    <p className="text-2xl font-semibold">{latestHealthData.heartRate} bpm</p>
                  </div>
                  <div className="healthai-section">
                    <p className="text-sm text-muted-foreground">Steps</p>
                    <p className="text-2xl font-semibold">{latestHealthData.steps.toLocaleString()}</p>
                  </div>
                  <div className="healthai-section">
                    <p className="text-sm text-muted-foreground">Sleep</p>
                    <p className="text-2xl font-semibold">{latestHealthData.sleepHours} hrs</p>
                  </div>
                  <div className="healthai-section">
                    <p className="text-sm text-muted-foreground">Blood Oxygen</p>
                    <p className="text-2xl font-semibold">{latestHealthData.bloodOxygen}%</p>
                  </div>
                </div>
              ) : (
                <div className="p-4 text-center">
                  <p>No health data available</p>
                  <Button asChild className="mt-4">
                    <Link to="/connect-device">Connect Device</Link>
                  </Button>
                </div>
              )}
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/health-dashboard" className="flex items-center justify-center">
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    View Complete Health Dashboard
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <Receipt className="mr-2 h-5 w-5 text-healthai-blue" />
                Recent Bills
              </CardTitle>
            </CardHeader>
            <CardContent>
              {pendingBills.length > 0 ? (
                <div className="space-y-4">
                  {pendingBills.slice(0, 2).map((bill) => (
                    <div key={bill.id} className="healthai-section flex justify-between items-center">
                      <div>
                        <p className="font-medium">{bill.hospital}</p>
                        <p className="text-sm text-muted-foreground">{bill.description}</p>
                        <p className="text-sm">{bill.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${bill.amount.toFixed(2)}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          bill.status === 'overdue' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center">
                  <p>No pending bills</p>
                </div>
              )}
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/bills-management" className="flex items-center justify-center">
                    <Receipt className="mr-2 h-4 w-4" />
                    Manage All Bills
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="healthai-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5 text-healthai-teal" />
              Medicine Delivery
            </h3>
            <Button asChild size="sm">
              <Link to="/medicine-delivery">Order Now</Link>
            </Button>
          </div>
          <p className="text-muted-foreground">
            Get your prescribed medications delivered directly to your home through our partners DoorDash and UberEats.
          </p>
          <div className="mt-4 flex gap-4">
            <img src="https://seeklogo.com/images/D/doordash-logo-55493FF9F7-seeklogo.com.png" alt="DoorDash" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="https://seeklogo.com/images/U/uber-eats-logo-CA3BA2098B-seeklogo.com.png" alt="UberEats" className="h-8 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>
      
      <section className="py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How HealthAI Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your all-in-one healthcare companion connecting your devices, data, and doctors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-healthai-purple/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-healthai-purple">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Scan QR Code</h3>
            <p className="text-muted-foreground">
              Quickly onboard by scanning the QR code at your healthcare provider
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-healthai-blue/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-healthai-blue">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect Devices</h3>
            <p className="text-muted-foreground">
              Sync your Apple Watch and other health monitoring devices
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-healthai-teal/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-healthai-teal">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-muted-foreground">
              Let AI analyze your health data and provide personalized insights
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-healthai h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect with Doctors</h3>
            <p className="text-muted-foreground">
              Share your data with healthcare professionals for better care
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
