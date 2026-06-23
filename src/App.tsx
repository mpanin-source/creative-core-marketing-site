import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/global/Layout";
import ScrollToTop from "./components/global/ScrollToTop";
import CalendlyPopup from "./components/CalendlyPopup";
import Index from "./pages/Index";
import PricingAndBooking from "./pages/PricingAndBooking";
import AISearch from "./pages/AISearch";
import FAQPage from "./pages/FAQPage";
import SEOServicePage from "./pages/services/SEOServicePage";
import SEMServicePage from "./pages/services/SEMServicePage";
import GEOServicePage from "./pages/services/GEOServicePage";
import CROServicePage from "./pages/services/CROServicePage";
import MarketingAutomationServicePage from "./pages/services/MarketingAutomationServicePage";
import CustomSoftwareServicePage from "./pages/services/CustomSoftwareServicePage";
import ProcessPage from "./pages/ProcessPage";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";
import { LogoVariantProvider } from "./components/cobalt-refresh/logo";
import RefreshPreloader from "./components/cobalt-refresh/RefreshPreloader";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="*"
            element={
              <LogoVariantProvider>
                <RefreshPreloader />
                <CalendlyPopup />
                <Layout>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/pricing-and-booking" element={<PricingAndBooking />} />
                    <Route path="/ai-search" element={<AISearch />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/services/seo" element={<SEOServicePage />} />
                    <Route path="/services/sem" element={<SEMServicePage />} />
                    <Route path="/services/geo" element={<GEOServicePage />} />
                    <Route path="/services/cro" element={<CROServicePage />} />
                    <Route path="/services/marketing-automation" element={<MarketingAutomationServicePage />} />
                    <Route path="/services/custom-software" element={<CustomSoftwareServicePage />} />
                    <Route path="/process" element={<ProcessPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              </LogoVariantProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
