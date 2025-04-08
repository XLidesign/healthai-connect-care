
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  QrCode,
  Watch,
  Activity,
  UserSearch,
  Receipt,
  ShoppingBag,
  Menu,
  X,
  User,
  Bell,
  Settings,
  HelpCircle,
  Search,
  ChartBar,
  BadgeDollarSign
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import HealthAILogo from "./HealthAILogo";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <LayoutDashboard className="mr-2 h-4 w-4" /> },
    { path: "/qr-scanner", label: "Scan QR", icon: <QrCode className="mr-2 h-4 w-4" /> },
    { path: "/connect-device", label: "Connect Device", icon: <Watch className="mr-2 h-4 w-4" /> },
    { path: "/health-dashboard", label: "Health Dashboard", icon: <Activity className="mr-2 h-4 w-4" /> },
    { path: "/doctor-search", label: "Find Doctor", icon: <UserSearch className="mr-2 h-4 w-4" /> },
    { path: "/bills-management", label: "Bills", icon: <Receipt className="mr-2 h-4 w-4" /> },
    { path: "/medicine-delivery", label: "Medicine", icon: <ShoppingBag className="mr-2 h-4 w-4" /> },
    { path: "/metrics", label: "Metrics", icon: <ChartBar className="mr-2 h-4 w-4" /> },
    { path: "/monetization", label: "Pricing", icon: <BadgeDollarSign className="mr-2 h-4 w-4" /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="flex items-center mr-6">
          <HealthAILogo size={32} withText={true} />
        </Link>
        
        <div className="hidden md:flex relative max-w-sm w-full mr-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search..." 
            className="pl-9 bg-muted/30 border-0 focus-visible:ring-1"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors",
                location.pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/60 hover:text-foreground hover:bg-accent"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center ml-auto space-x-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Help</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">User profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-2"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container py-2 px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium flex items-center",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/60 hover:text-foreground hover:bg-accent"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
