
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { medicines } from "@/data/mockData";
import { ShoppingBag, Search, Truck, MapPin, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  quantity: number;
}

const MedicineDelivery = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [deliveryPartner, setDeliveryPartner] = useState("doordash");
  const [address, setAddress] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { toast } = useToast();

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (medicineId: string) => {
    const existingItem = cart.find(item => item.id === medicineId);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === medicineId ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { id: medicineId, quantity: 1 }]);
    }
    
    toast({
      title: "Added to Cart",
      description: "Item has been added to your cart",
    });
  };

  const removeFromCart = (medicineId: string) => {
    const existingItem = cart.find(item => item.id === medicineId);
    
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(item => 
        item.id === medicineId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== medicineId));
    }
  };

  const getItemQuantity = (medicineId: string) => {
    const item = cart.find(item => item.id === medicineId);
    return item ? item.quantity : 0;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const medicine = medicines.find(m => m.id === item.id);
      return total + (medicine ? medicine.price * item.quantity : 0);
    }, 0);
  };

  const handleCheckout = () => {
    if (!address) {
      toast({
        title: "Missing Information",
        description: "Please provide a delivery address",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Order Placed Successfully",
      description: `Your medicines will be delivered by ${deliveryPartner === "doordash" ? "DoorDash" : "UberEats"}`,
    });
    
    setCart([]);
    setAddress("");
    setIsCheckingOut(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Medicine Delivery</h1>
      <p className="text-muted-foreground mb-6">Order your prescriptions for delivery</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Search Medications</CardTitle>
              <CardDescription>Find your prescribed medications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by name or description"
                  className="pl-10"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMedicines.map(medicine => (
              <Card key={medicine.id}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-muted rounded-md flex items-center justify-center">
                      <img
                        src={medicine.image}
                        alt={medicine.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{medicine.name}</h3>
                      <p className="text-sm text-muted-foreground">{medicine.dosage}</p>
                      <p className="text-sm">${medicine.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="text-sm mt-2">{medicine.description}</p>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 p-3 flex justify-between">
                  {getItemQuantity(medicine.id) > 0 ? (
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeFromCart(medicine.id)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-3 w-6 text-center">
                        {getItemQuantity(medicine.id)}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => addToCart(medicine.id)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => addToCart(medicine.id)}
                    >
                      Add to Cart
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
            
            {filteredMedicines.length === 0 && (
              <div className="col-span-full text-center py-12 border rounded-lg bg-muted/20">
                <ShoppingBag className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No medications found</p>
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
          </div>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Your Cart</CardTitle>
              <CardDescription>
                {cart.length > 0 
                  ? `${cart.reduce((total, item) => total + item.quantity, 0)} items in your cart`
                  : "Your cart is empty"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {cart.length > 0 ? (
                <div className="space-y-4">
                  {cart.map(item => {
                    const medicine = medicines.find(m => m.id === item.id);
                    if (!medicine) return null;
                    
                    return (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{medicine.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {medicine.dosage} x {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold">
                          ${(medicine.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    );
                  })}
                  
                  <div className="border-t pt-4 flex justify-between items-center">
                    <p className="font-semibold">Total</p>
                    <p className="text-lg font-bold">${getTotalPrice().toFixed(2)}</p>
                  </div>
                  
                  {isCheckingOut ? (
                    <div className="space-y-4 pt-4 border-t">
                      <div>
                        <Label htmlFor="address">Delivery Address</Label>
                        <Textarea
                          id="address"
                          placeholder="Enter your full address"
                          value={address}
                          onChange={e => setAddress(e.target.value)}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label>Delivery Partner</Label>
                        <RadioGroup
                          value={deliveryPartner}
                          onValueChange={setDeliveryPartner}
                          className="mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="doordash" id="doordash" />
                            <Label htmlFor="doordash" className="flex items-center">
                              <img 
                                src="https://seeklogo.com/images/D/doordash-logo-55493FF9F7-seeklogo.com.png" 
                                alt="DoorDash" 
                                className="h-5 mr-2" 
                              />
                              DoorDash
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ubereats" id="ubereats" />
                            <Label htmlFor="ubereats" className="flex items-center">
                              <img 
                                src="https://seeklogo.com/images/U/uber-eats-logo-CA3BA2098B-seeklogo.com.png" 
                                alt="UberEats" 
                                className="h-5 mr-2" 
                              />
                              UberEats
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => setIsCheckingOut(false)}
                        >
                          Back
                        </Button>
                        <Button 
                          className="flex-1"
                          onClick={handleCheckout}
                        >
                          Place Order
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button 
                      className="w-full"
                      onClick={() => setIsCheckingOut(true)}
                    >
                      Checkout
                    </Button>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <ShoppingBag className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Add medicines to your cart to get started
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Delivery Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-healthai-purple mt-0.5" />
                <div>
                  <p className="font-medium">Fast Delivery</p>
                  <p className="text-sm text-muted-foreground">
                    Get your medications delivered within hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-healthai-blue mt-0.5" />
                <div>
                  <p className="font-medium">Real-time Tracking</p>
                  <p className="text-sm text-muted-foreground">
                    Track your delivery in real-time through the app
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <ShoppingBag className="h-5 w-5 text-healthai-teal mt-0.5" />
                <div>
                  <p className="font-medium">Secure Packaging</p>
                  <p className="text-sm text-muted-foreground">
                    All medications come in secure, tamper-evident packaging
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MedicineDelivery;
