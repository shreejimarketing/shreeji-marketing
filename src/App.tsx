import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import CustomProducts from "./pages/CustomProducts";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PageLoader from "./components/PageLoader";

const queryClient = new QueryClient();

function AppRoutes() {
  const location = useLocation();
  const [isChangingPage, setIsChangingPage] = useState(false);

  useEffect(() => {
    setIsChangingPage(true);
    const timer = setTimeout(() => {
      setIsChangingPage(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isChangingPage && <PageLoader />}

      <AnimatePresence mode="wait">
        <a
          href="https://wa.me/919825748990?text=Hello%20Shreeji%20Marketing%2C%20from%20web%20I%20am%20interested%20in%20your%20product."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-[1000]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M16 0C7.164 0 0 7.163 0 16c0 2.824.738 5.467 2.02 7.782L0 32l8.445-2.014A15.901 15.901 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.6a13.507 13.507 0 01-7.135-2.017l-.511-.309-5.002 1.19 1.33-4.876-.328-.5A13.564 13.564 0 012.4 16c0-7.514 6.086-13.6 13.6-13.6S29.6 8.486 29.6 16 23.514 29.6 16 29.6zm7.526-10.926c-.41-.205-2.425-1.198-2.802-1.333-.376-.137-.65-.205-.923.205-.273.41-1.06 1.333-1.3 1.607-.24.273-.48.308-.89.103-.41-.205-1.732-.638-3.3-2.034-1.22-1.087-2.043-2.426-2.278-2.836-.24-.41-.026-.63.18-.835.184-.183.41-.48.615-.72.205-.24.273-.41.41-.685.137-.273.068-.513-.034-.72-.103-.205-.923-2.226-1.265-3.048-.332-.792-.67-.685-.923-.698l-.786-.013c-.273 0-.71.103-1.08.513s-1.42 1.386-1.42 3.383c0 1.997 1.454 3.923 1.657 4.195.205.273 2.86 4.377 6.938 6.133 4.078 1.756 4.078 1.17 4.808 1.093.73-.068 2.425-.992 2.77-1.953.342-.96.342-1.785.24-1.953-.103-.17-.376-.273-.786-.478z" />
          </svg>
        </a>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/custom-products" element={<CustomProducts />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PageLoader />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
