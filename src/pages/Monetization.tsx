
import { 
  BarChart3, 
  Building, 
  User, 
  FileText, 
  Flask, 
  TestTube,
  BadgeDollarSign,
  Layers,
  Users
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Monetization = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-3">
        <h1 className="text-3xl font-bold">Monetization Strategy</h1>
        <p className="text-muted-foreground text-lg">
          Leveraging Google's strengths in AI and healthcare to create sustainable revenue streams
        </p>
      </div>

      <Tabs defaultValue="b2b" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="b2b">
            <Building className="mr-2 h-4 w-4" />
            B2B Solutions
          </TabsTrigger>
          <TabsTrigger value="b2c">
            <User className="mr-2 h-4 w-4" />
            B2C Premium
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="b2b" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-healthai-blue" />
                Hospital Analytics Dashboard
              </CardTitle>
              <CardDescription>
                Enterprise-grade analytics powered by Google Looker integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-healthai-purple/5">
                    <h3 className="font-medium mb-2">Patient Flow Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduce wait times by 35% using ML-driven scheduling and resource allocation
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg bg-healthai-blue/5">
                    <h3 className="font-medium mb-2">Staff Productivity Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      Increase practitioner efficiency with AI-powered workflow recommendations
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg bg-healthai-teal/5">
                    <h3 className="font-medium mb-2">Financial Performance</h3>
                    <p className="text-sm text-muted-foreground">
                      Track key metrics and identify cost-saving opportunities with predictive models
                    </p>
                  </div>
                </div>
                
                <div className="rounded-lg border overflow-hidden">
                  <div className="bg-muted p-4">
                    <h3 className="font-medium">Google Looker Integration</h3>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">Core</Badge>
                      <span>Real-time data visualization of patient metrics</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">Advanced</Badge>
                      <span>Customizable dashboards for executive teams</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">Premium</Badge>
                      <span>Predictive analytics for resource planning</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-healthai">
                Schedule Demo
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="mr-2 h-5 w-5 text-healthai-purple" />
                Pharma: Targeted Clinical Trial Recruitment
              </CardTitle>
              <CardDescription>
                Connecting pharmaceutical companies with ideal candidates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Our advanced patient matching algorithms help pharmaceutical companies find the right participants for decentralized clinical trials, reducing recruitment time by up to 60%.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center">
                      <Users className="mr-2 h-4 w-4 text-healthai-blue" />
                      Precise Patient Matching
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Match trial requirements with patient profiles using our proprietary ML algorithms
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center">
                      <Layers className="mr-2 h-4 w-4 text-healthai-teal" />
                      Decentralized Trial Support
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Remote monitoring and virtual visit coordination for trial participants
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="b2c" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-healthai-purple" />
                  GenAI Doctor Note Summarization
                </CardTitle>
                <CardDescription>
                  Transform complex medical notes into clear, actionable summaries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm font-medium">Original Doctor's Note</div>
                    <p className="text-xs text-muted-foreground mt-2 italic">
                      "Pt presents with persistent epigastric pain, GERD symptoms, h/o Barrett's esophagus. EGD 2020 showed grade B esophagitis. Currently on PPI BID, advised dietary modification. CBC wnl, CMP shows mild transaminitis likely 2° to medication..."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="text-sm font-medium flex items-center">
                      <BadgeDollarSign className="mr-2 h-4 w-4 text-primary" />
                      Premium AI Summary
                    </div>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                        <span>You have stomach pain and acid reflux with a history of Barrett's esophagus (a condition affecting your esophagus lining)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                        <span>You're currently taking acid-reducing medication twice daily</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                        <span>Your blood tests are normal, but liver enzymes are slightly elevated</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                        <span>ACTION NEEDED: Follow recommended diet changes and continue medication</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm font-medium">$4.99/month</div>
                <Button>Subscribe</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Flask className="mr-2 h-5 w-5 text-healthai-blue" />
                  Personalized Clinical Trial Matching
                </CardTitle>
                <CardDescription>
                  Get matched with cutting-edge treatments and research opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Our premium trial matching service uses your health profile to find clinical trials that could benefit your specific condition.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">Advanced Matching Algorithm</h3>
                      <p className="text-sm text-muted-foreground">
                        Evaluates 200+ parameters to find perfect trial matches for your condition
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">Guided Application Process</h3>
                      <p className="text-sm text-muted-foreground">
                        Personalized assistance with application materials and trial requirements
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">Early Access to Treatments</h3>
                      <p className="text-sm text-muted-foreground">
                        Be among the first to access cutting-edge therapies and medications
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm font-medium">$9.99/month</div>
                <Button>Subscribe</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Monetization;
