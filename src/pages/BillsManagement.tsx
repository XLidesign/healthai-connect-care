
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { bills } from "@/data/mockData";
import { Receipt, CreditCard, Search, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BillsManagement = () => {
  const [payingBillId, setPayingBillId] = useState<string | null>(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const pendingBills = bills.filter(bill => bill.status === "pending" || bill.status === "overdue");
  const paidBills = bills.filter(bill => bill.status === "paid");
  
  const filteredPendingBills = pendingBills.filter(bill =>
    bill.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bill.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredPaidBills = paidBills.filter(bill =>
    bill.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bill.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePayBill = (billId: string) => {
    setPayingBillId(billId);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cardNumber || !expiryDate || !cvv) {
      toast({
        title: "Missing Information",
        description: "Please fill out all payment fields",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate payment processing
    toast({
      title: "Processing Payment",
      description: "Please wait while we process your payment"
    });
    
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: "Your bill has been paid successfully",
      });
      
      setPayingBillId(null);
      setCardNumber("");
      setExpiryDate("");
      setCvv("");
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    if (status === "paid") {
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    } else if (status === "pending") {
      return <Clock className="h-5 w-5 text-yellow-600" />;
    } else {
      return <AlertCircle className="h-5 w-5 text-red-600" />;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Bills Management</h1>
      <p className="text-muted-foreground mb-6">View and pay your medical bills</p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Bills</CardTitle>
          <CardDescription>Find bills by hospital or description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search bills"
              className="pl-10"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="pending">
        <TabsList className="mb-4">
          <TabsTrigger value="pending" className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            Pending ({pendingBills.length})
          </TabsTrigger>
          <TabsTrigger value="paid" className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4" />
            Paid ({paidBills.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending">
          {filteredPendingBills.length > 0 ? (
            <div className="space-y-4">
              {filteredPendingBills.map(bill => (
                <Card key={bill.id} className={bill.status === "overdue" ? "border-red-200" : ""}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${
                          bill.status === "overdue" ? "bg-red-100" : "bg-yellow-100"
                        }`}>
                          {getStatusIcon(bill.status)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{bill.hospital}</h3>
                          <p className="text-sm text-muted-foreground">{bill.description}</p>
                          <p className="text-sm">Date: {bill.date}</p>
                          <div className="mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              bill.status === "overdue" ? "bg-red-100 text-red-600" : "bg-yellow-100 text-yellow-600"
                            }`}>
                              {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <p className="text-2xl font-bold">${bill.amount.toFixed(2)}</p>
                        {payingBillId === bill.id ? (
                          <Button variant="outline" size="sm" onClick={() => setPayingBillId(null)}>
                            Cancel
                          </Button>
                        ) : (
                          <Button size="sm" onClick={() => handlePayBill(bill.id)}>
                            Pay Now
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    {payingBillId === bill.id && (
                      <div className="mt-6 border-t pt-4">
                        <h4 className="font-medium mb-3">Payment Information</h4>
                        <form onSubmit={handleSubmitPayment}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <div className="relative">
                                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                  id="cardNumber"
                                  placeholder="1234 5678 9012 3456"
                                  className="pl-10"
                                  value={cardNumber}
                                  onChange={e => setCardNumber(e.target.value)}
                                />
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiryDate">Expiry Date</Label>
                                <Input
                                  id="expiryDate"
                                  placeholder="MM/YY"
                                  value={expiryDate}
                                  onChange={e => setExpiryDate(e.target.value)}
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="cvv">CVV</Label>
                                <Input
                                  id="cvv"
                                  placeholder="123"
                                  value={cvv}
                                  onChange={e => setCvv(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex justify-end gap-2">
                            <Button variant="outline" type="button" onClick={() => setPayingBillId(null)}>
                              Cancel
                            </Button>
                            <Button type="submit">
                              Pay ${bill.amount.toFixed(2)}
                            </Button>
                          </div>
                        </form>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg bg-muted/20">
              <Receipt className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No pending bills to display</p>
              {searchTerm && (
                <Button 
                  variant="outline" 
                  onClick={() => setSearchTerm("")}
                  className="mt-4"
                >
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="paid">
          {filteredPaidBills.length > 0 ? (
            <div className="space-y-4">
              {filteredPaidBills.map(bill => (
                <Card key={bill.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-full">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{bill.hospital}</h3>
                          <p className="text-sm text-muted-foreground">{bill.description}</p>
                          <p className="text-sm">Date: {bill.date}</p>
                          <div className="mt-1">
                            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
                              Paid
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <p className="text-2xl font-bold">${bill.amount.toFixed(2)}</p>
                        <Button variant="outline" size="sm">
                          View Receipt
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg bg-muted/20">
              <Receipt className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No paid bills to display</p>
              {searchTerm && (
                <Button 
                  variant="outline" 
                  onClick={() => setSearchTerm("")}
                  className="mt-4"
                >
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BillsManagement;
