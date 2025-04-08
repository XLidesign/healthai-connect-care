
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import DeviceConnect from "./pages/DeviceConnect";
import HealthDashboard from "./pages/HealthDashboard";
import DoctorSearch from "./pages/DoctorSearch";
import BillsManagement from "./pages/BillsManagement";
import MedicineDelivery from "./pages/MedicineDelivery";
import QRScanner from "./pages/QRScanner";
import HealthProfile from "./pages/HealthProfile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="qr-scanner" element={<QRScanner />} />
            <Route path="connect-device" element={<DeviceConnect />} />
            <Route path="health-dashboard" element={<HealthDashboard />} />
            <Route path="health-profile" element={<HealthProfile />} />
            <Route path="doctor-search" element={<DoctorSearch />} />
            <Route path="bills-management" element={<BillsManagement />} />
            <Route path="medicine-delivery" element={<MedicineDelivery />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
