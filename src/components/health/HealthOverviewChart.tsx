
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HealthMetricsChart from "./HealthMetricsChart";

interface HealthOverviewChartProps {
  data: any[];
}

const HealthOverviewChart = ({ data }: HealthOverviewChartProps) => {
  return (
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
            <HealthMetricsChart 
              data={data} 
              dataKey="heartRate" 
              color="#9959D9" 
              name="Heart Rate (bpm)" 
            />
          </TabsContent>
          
          <TabsContent value="steps">
            <HealthMetricsChart 
              data={data} 
              dataKey="steps" 
              color="#4285F4" 
              name="Steps" 
              domain={[0, 'dataMax + 1000']}
            />
          </TabsContent>
          
          <TabsContent value="sleep">
            <HealthMetricsChart 
              data={data} 
              dataKey="sleepHours" 
              color="#46C5DD" 
              name="Sleep (hours)" 
              domain={[0, 10]}
            />
          </TabsContent>
          
          <TabsContent value="oxygen">
            <HealthMetricsChart 
              data={data} 
              dataKey="bloodOxygen" 
              color="#34A853" 
              name="Blood Oxygen (%)" 
              domain={[90, 100]}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HealthOverviewChart;
