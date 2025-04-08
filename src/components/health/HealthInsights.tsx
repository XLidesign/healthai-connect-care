
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Activity, Moon, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HealthInsights = () => {
  const navigate = useNavigate();

  const handleFindDoctor = () => {
    navigate("/doctor-search");
  };

  return (
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
  );
};

export default HealthInsights;
