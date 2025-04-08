
import { 
  Clock, 
  BadgePercent, 
  Timer,  
  FileChartPie,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PrototypeMetrics = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-3">
        <h2 className="text-2xl font-bold flex items-center">
          <FileChartPie className="mr-2 h-5 w-5 text-healthai-purple" />
          Prototype Performance Metrics
        </h2>
        <p className="text-muted-foreground">
          Real-time SLA monitoring for critical system components
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="mr-2 h-5 w-5 text-healthai-blue" />
              EHR Query Latency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">725ms</span>
                <span className="text-sm text-muted-foreground">Target: &lt;800ms (p99)</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Current Value</span>
                  <span className="font-medium text-green-600">Good</span>
                </div>
                <Progress value={75} className="h-2 bg-muted" />
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Last 24h Worst: 790ms</span>
                <span className="flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                  Within SLA
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <BadgePercent className="mr-2 h-5 w-5 text-healthai-purple" />
              AI Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">1.4s</span>
                <span className="text-sm text-muted-foreground">Target: &lt;1.2s (90%)</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Current Value</span>
                  <span className="font-medium text-amber-600">Warning</span>
                </div>
                <Progress value={85} className="h-2 bg-muted" />
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Last 24h Worst: 1.7s</span>
                <span className="flex items-center">
                  <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                  Above threshold
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Timer className="mr-2 h-5 w-5 text-healthai-teal" />
              Med Delivery ETA Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">±4 minutes</span>
                <span className="text-sm text-muted-foreground">Target: ±7 minutes</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Current Value</span>
                  <span className="font-medium text-green-600">Excellent</span>
                </div>
                <Progress value={90} className="h-2 bg-muted" />
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Last 24h Worst: ±6 minutes</span>
                <span className="flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                  Within SLA
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrototypeMetrics;
