
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { doctors } from "@/data/mockData";
import { Search, Star, Calendar, Share2, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DoctorSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const { toast } = useToast();

  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialty === "all" || doctor.specialty === specialty;
    
    return matchesSearch && matchesSpecialty;
  });

  const handleShareData = (doctorId: string) => {
    setSelectedDoctor(doctorId);
    
    toast({
      title: "Health Data Shared",
      description: `Your health data has been shared with ${doctors.find(d => d.id === doctorId)?.name}.`,
    });
  };

  const handleBookAppointment = (doctorId: string) => {
    toast({
      title: "Appointment Request Sent",
      description: `Your appointment request with ${doctors.find(d => d.id === doctorId)?.name} has been sent.`,
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Find a Doctor</h1>
      <p className="text-muted-foreground mb-6">Search for healthcare professionals and share your health data</p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Filters</CardTitle>
          <CardDescription>Find the right doctor for your needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by name or hospital"
                  className="pl-10"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  {specialties.map(spec => (
                    <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <Card key={doctor.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 bg-muted">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{doctor.name}</h3>
                    <p className="text-white/80 text-sm">{doctor.specialty}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{doctor.rating}</span>
                  <span className="text-sm text-muted-foreground ml-1">({doctor.reviewCount} reviews)</span>
                </div>
                
                <p className="text-sm mb-3">{doctor.hospital}</p>
                
                <div className="mb-3">
                  <p className="text-sm font-medium mb-1">Available days:</p>
                  <div className="flex flex-wrap gap-1">
                    {doctor.availableDays.map(day => (
                      <span key={day} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{day}</span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/30 px-4 py-3 flex justify-between gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleShareData(doctor.id)}
                >
                  <Share2 className="mr-1 h-4 w-4" />
                  Share Data
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleBookAppointment(doctor.id)}
                >
                  <Calendar className="mr-1 h-4 w-4" />
                  Book
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No doctors match your search criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSpecialty("");
              }}
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
      
      {selectedDoctor && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Shared Health Data</CardTitle>
            <CardDescription>
              You've shared your health data with {doctors.find(d => d.id === selectedDoctor)?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="shared">
              <TabsList className="mb-4">
                <TabsTrigger value="shared">Shared Data</TabsTrigger>
                <TabsTrigger value="message">Messages</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
              </TabsList>
              
              <TabsContent value="shared">
                <div className="healthai-section">
                  <h3 className="text-lg font-semibold mb-3">Shared Health Records</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-healthai-purple mr-2"></div>
                      Last 7 days of health monitoring data
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-healthai-blue mr-2"></div>
                      AI health analysis and insights
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-healthai-teal mr-2"></div>
                      Blood pressure and heart rate history
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      Sleep pattern analysis from the past month
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="message">
                <div className="border rounded-lg p-4 bg-muted/20 flex items-center justify-center h-48">
                  <div className="text-center">
                    <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">No messages yet</p>
                    <Button className="mt-3">Start Conversation</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="appointments">
                <div className="border rounded-lg p-4 bg-muted/20 flex items-center justify-center h-48">
                  <div className="text-center">
                    <Calendar className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">No appointments scheduled</p>
                    <Button className="mt-3">Schedule Appointment</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DoctorSearch;
