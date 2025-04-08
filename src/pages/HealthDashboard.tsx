
import { Button } from "@/components/ui/button";
import { healthData } from "@/data/mockData";
import { useState } from "react";
import AppShell from "@/components/AppShell";
import LatestHealthReadings from "@/components/health/LatestHealthReadings";
import DataActions from "@/components/health/DataActions";
import HealthOverviewChart from "@/components/health/HealthOverviewChart";
import HealthInsights from "@/components/health/HealthInsights";

const HealthDashboard = () => {
  // Get the latest health data point
  const latestData = healthData[healthData.length - 1];
  
  // Format dates for chart
  const formattedData = healthData.map(item => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }));

  return (
    <AppShell 
      title="Health Dashboard" 
      description="Monitor and analyze your health data"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <HealthOverviewChart data={formattedData} />
        </div>
        
        <div>
          <LatestHealthReadings data={latestData} />
          <DataActions />
        </div>
      </div>
      
      <HealthInsights />
    </AppShell>
  );
};

export default HealthDashboard;
