
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, Clock, BarChart, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const DataActions = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

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
  );
};

export default DataActions;
