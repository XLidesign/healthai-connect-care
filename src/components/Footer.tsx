
import { Link } from "react-router-dom";
import HealthAILogo from "./HealthAILogo";

const Footer = () => {
  return (
    <footer className="border-t py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <HealthAILogo size={32} />
              <span className="ml-2 text-xl font-bold healthai-gradient-text">HealthAI</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Connect your health devices, analyze your data, and find the right healthcare professional.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/qr-scanner" className="text-muted-foreground hover:text-foreground">QR Scanner</Link></li>
              <li><Link to="/connect-device" className="text-muted-foreground hover:text-foreground">Connect Devices</Link></li>
              <li><Link to="/health-dashboard" className="text-muted-foreground hover:text-foreground">Health Dashboard</Link></li>
              <li><Link to="/doctor-search" className="text-muted-foreground hover:text-foreground">Find Doctors</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/bills-management" className="text-muted-foreground hover:text-foreground">Bills Management</Link></li>
              <li><Link to="/medicine-delivery" className="text-muted-foreground hover:text-foreground">Medicine Delivery</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">AI Health Analysis</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Report Sharing</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Email: support@healthai.com</li>
              <li className="text-muted-foreground">Phone: +1 (800) 123-4567</li>
              <li className="text-muted-foreground">Hours: Mon-Fri 9am-5pm</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HealthAI Connect Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
