
import { Button } from "@/components/ui/button";
import { healthData } from "@/data/mockData";
import { useState } from "react";
import AppShell from "@/components/AppShell";
import LatestHealthReadings from "@/components/health/LatestHealthReadings";
import DataActions from "@/components/health/DataActions";
import HealthOverviewChart from "@/components/health/HealthOverviewChart";
import HealthInsights from "@/components/health/HealthInsights";
import { Plus, Download, HelpCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

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
      description="Monitor and analyze your health data with Google HealthAI"
      actions={
        <>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="mr-2">
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export your health data as CSV or PDF</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Button size="sm" className="google-gradient-blue-purple">
            <Plus className="h-4 w-4 mr-1" />
            Add Data
          </Button>
        </>
      }
    >
      <div className="mb-6">
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 mb-2">
          AI-Powered Health Analysis
        </Badge>
        <p className="text-muted-foreground">
          Google HealthAI analyzes your data to provide personalized insights and recommendations.
          <a href="#" className="text-primary ml-1 inline-flex items-center">
            Learn more
            <HelpCircle className="h-3 w-3 ml-0.5" />
          </a>
        </p>
      </div>
      
      <Tabs defaultValue="dashboard" className="mb-6">
        <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard">
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
        </TabsContent>
        
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Long-term Health Trends</CardTitle>
              <CardDescription>View your health metrics over time with AI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-12">
                Trend analysis features will be available in the next update.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recommendations">
          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>Personalized health recommendations powered by Gemini</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-12">
                AI recommendations features will be available in the next update.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
};

export default HealthDashboard;
