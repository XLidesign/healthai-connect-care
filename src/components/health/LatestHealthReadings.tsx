
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { HeartPulse, Activity, Moon } from "lucide-react";

interface LatestHealthReadingsProps {
  data: {
    date: string;
    heartRate: number;
    steps: number;
    sleepHours: number;
    bloodOxygen: number;
    bloodPressure: {
      systolic: number;
      diastolic: number;
    };
  };
}

const LatestHealthReadings = ({ data }: LatestHealthReadingsProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Latest Readings</CardTitle>
        <CardDescription>As of {new Date(data.date).toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-healthai-purple/10 p-2 rounded-full mr-3">
              <HeartPulse className="h-5 w-5 text-healthai-purple" />
            </div>
            <span className="text-sm font-medium">Heart Rate</span>
          </div>
          <span className="text-xl font-semibold">{data.heartRate} <span className="text-sm text-muted-foreground">bpm</span></span>
        </div>
        
        <Separator />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-healthai-blue/10 p-2 rounded-full mr-3">
              <Activity className="h-5 w-5 text-healthai-blue" />
            </div>
            <span className="text-sm font-medium">Steps</span>
          </div>
          <span className="text-xl font-semibold">{data.steps.toLocaleString()}</span>
        </div>
        
        <Separator />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-healthai-teal/10 p-2 rounded-full mr-3">
              <Moon className="h-5 w-5 text-healthai-teal" />
            </div>
            <span className="text-sm font-medium">Sleep</span>
          </div>
          <span className="text-xl font-semibold">{data.sleepHours} <span className="text-sm text-muted-foreground">hrs</span></span>
        </div>
        
        <Separator />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <HeartPulse className="h-5 w-5 text-green-600" />
            </div>
            <span className="text-sm font-medium">Blood Oxygen</span>
          </div>
          <span className="text-xl font-semibold">{data.bloodOxygen}<span className="text-sm text-muted-foreground">%</span></span>
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
            {data.bloodPressure.systolic}/{data.bloodPressure.diastolic} 
            <span className="text-sm text-muted-foreground"> mmHg</span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default LatestHealthReadings;
