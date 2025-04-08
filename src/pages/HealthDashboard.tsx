
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HeartPulse, Activity, Moon, UploadCloud, Clock, BarChart, Share2 } from "lucide-react";
import { healthData } from "@/data/mockData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const HealthDashboard = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Get the latest health data point
  const latestData = healthData[healthData.length - 1];
  
  // Format dates for chart
  const formattedData = healthData.map(item => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }));

  const handleUploadData = () => {
    setIsUploading(true);
    
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "Data Uploaded",
        description: "Your health data has been successfully uploaded to the cloud",
      });
    }, 2000);
  };

  const handleAnalyzeData = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "AI Analysis Complete",
        description: "Your health data has been analyzed. View your insights below.",
      });
    }, 3000);
  };

  const handleFindDoctor = () => {
    navigate("/doctor-search");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Health Dashboard</h1>
      <p className="text-muted-foreground mb-6">Monitor and analyze your health data</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Health Overview</CardTitle>
              <CardDescription>Past 7 days of health metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="heart-rate">
                <TabsList className="mb-4">
                  <TabsTrigger value="heart-rate">Heart Rate</TabsTrigger>
                  <TabsTrigger value="steps">Steps</TabsTrigger>
                  <TabsTrigger value="sleep">Sleep</TabsTrigger>
                  <TabsTrigger value="oxygen">Blood Oxygen</TabsTrigger>
                </TabsList>
                
                <TabsContent value="heart-rate">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={formattedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="heartRate" 
                          stroke="#9959D9" 
                          strokeWidth={2}
                          name="Heart Rate (bpm)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                
                <TabsContent value="steps">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={formattedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[0, 'dataMax + 1000']} />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="steps" 
                          stroke="#4285F4" 
                          strokeWidth={2}
                          name="Steps"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                
                <TabsContent value="sleep">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={formattedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[0, 10]} />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="sleepHours" 
                          stroke="#46C5DD" 
                          strokeWidth={2}
                          name="Sleep (hours)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                
                <TabsContent value="oxygen">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={formattedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[90, 100]} />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="bloodOxygen" 
                          stroke="#34A853" 
                          strokeWidth={2}
                          name="Blood Oxygen (%)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Latest Readings</CardTitle>
              <CardDescription>As of {new Date(latestData.date).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-healthai-purple/10 p-2 rounded-full mr-3">
                    <HeartPulse className="h-5 w-5 text-healthai-purple" />
                  </div>
                  <span className="text-sm font-medium">Heart Rate</span>
                </div>
                <span className="text-xl font-semibold">{latestData.heartRate} <span className="text-sm text-muted-foreground">bpm</span></span>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-healthai-blue/10 p-2 rounded-full mr-3">
                    <Activity className="h-5 w-5 text-healthai-blue" />
                  </div>
                  <span className="text-sm font-medium">Steps</span>
                </div>
                <span className="text-xl font-semibold">{latestData.steps.toLocaleString()}</span>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-healthai-teal/10 p-2 rounded-full mr-3">
                    <Moon className="h-5 w-5 text-healthai-teal" />
                  </div>
                  <span className="text-sm font-medium">Sleep</span>
                </div>
                <span className="text-xl font-semibold">{latestData.sleepHours} <span className="text-sm text-muted-foreground">hrs</span></span>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <HeartPulse className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Blood Oxygen</span>
                </div>
                <span className="text-xl font-semibold">{latestData.bloodOxygen}<span className="text-sm text-muted-foreground">%</span></span>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <HeartPulse className="h-5 w-5 text-red-600" />
                  </div>
                  <span className="text-sm font-medium">Blood Pressure</span>
                </div>
                <span className="text-xl font-semibold">
                  {latestData.bloodPressure.systolic}/{latestData.bloodPressure.diastolic} 
                  <span className="text-sm text-muted-foreground"> mmHg</span>
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={handleUploadData}
                disabled={isUploading}
              >
                {isUploading ? (
                  <Clock className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <UploadCloud className="mr-2 h-5 w-5" />
                )}
                {isUploading ? "Uploading..." : "Upload Health Data"}
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={handleAnalyzeData}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <Clock className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <BarChart className="mr-2 h-5 w-5" />
                )}
                {isAnalyzing ? "Analyzing..." : "AI Health Analysis"}
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={handleFindDoctor}
              >
                <Share2 className="mr-2 h-5 w-5" />
                Share with Doctor
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>AI Health Insights</CardTitle>
          <CardDescription>
            Personalized analysis based on your health data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="healthai-section">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <HeartPulse className="mr-2 h-5 w-5 text-healthai-purple" />
                Cardiovascular Health
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Your heart rate averages 71 bpm, which is within the normal resting range of 60-100 bpm.
              </p>
              <p className="text-sm">
                Your blood pressure readings are consistent and fall within the normal range. Continue with your current activity level to maintain heart health.
              </p>
            </div>
            
            <div className="healthai-section">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Activity className="mr-2 h-5 w-5 text-healthai-blue" />
                Physical Activity
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Your average daily step count is 8,557, which is close to the recommended 10,000 steps per day.
              </p>
              <p className="text-sm">
                Consider increasing your daily activity slightly to reach the optimal range for your age group.
              </p>
            </div>
            
            <div className="healthai-section">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Moon className="mr-2 h-5 w-5 text-healthai-teal" />
                Sleep Patterns
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                You average 7.5 hours of sleep per night, which meets the recommended 7-9 hours for adults.
              </p>
              <p className="text-sm">
                Your sleep pattern is relatively consistent. Maintaining a regular sleep schedule contributes positively to your overall health.
              </p>
            </div>
            
            <div className="healthai-section">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-green-600" />
                Recommendations
              </h3>
              <ul className="text-sm space-y-2">
                <li>• Maintain your current sleep schedule for optimal rest</li>
                <li>• Increase daily steps to reach 10,000 target</li>
                <li>• Continue regular monitoring of blood pressure</li>
                <li>• Consider consulting with a nutritionist for dietary advice</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <Button onClick={handleFindDoctor}>
              Connect with a Doctor
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthDashboard;
