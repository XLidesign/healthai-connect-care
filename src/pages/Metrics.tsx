
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChartBar, 
  Activity, 
  TimerIcon,
  Clock,
  BarChart3
} from "lucide-react";
import PrototypeMetrics from "@/components/PrototypeMetrics";

const Metrics = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-3">
        <h1 className="text-3xl font-bold">Performance Metrics</h1>
        <p className="text-muted-foreground text-lg">
          Monitor system performance and ensure compliance with SLAs
        </p>
      </div>
      
      <Tabs defaultValue="prototype" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="prototype">
            <ChartBar className="mr-2 h-4 w-4" />
            Prototype SLAs
          </TabsTrigger>
          <TabsTrigger value="realtime">
            <Activity className="mr-2 h-4 w-4" />
            Real-time Analytics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="prototype" className="mt-6">
          <PrototypeMetrics />
        </TabsContent>
        
        <TabsContent value="realtime" className="mt-6">
          <div className="healthai-card p-8 flex flex-col items-center justify-center min-h-[400px]">
            <BarChart3 className="h-16 w-16 text-muted mb-4" />
            <h3 className="text-xl font-medium mb-2">Real-time Analytics Coming Soon</h3>
            <p className="text-muted-foreground text-center max-w-md">
              Advanced real-time analytics will be available in the next release. Stay tuned for detailed insights and performance monitoring capabilities.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Metrics;
