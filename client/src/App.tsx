import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

import Home from "@/pages/Home";
import Platform from "@/pages/Platform";
import Solutions from "@/pages/Solutions";
import Integrations from "@/pages/Integrations";
import Pricing from "@/pages/Pricing";
import Security from "@/pages/Security";
import Company from "@/pages/Company";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/platform" component={Platform} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/integrations" component={Integrations} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/security" component={Security} />
      <Route path="/company" component={Company} />
      <Route path="/resources" component={Resources} />
      <Route path="/contact" component={Contact} />
      
      {/* Legal place holders */}
      <Route path="/legal/terms">
         {params => <Company />} 
      </Route>
      <Route path="/legal/privacy">
         {params => <Company />}
      </Route>

      {/* Redirects */}
      <Route path="/about-us"><Redirect to="/company" /></Route>
      <Route path="/blog"><Redirect to="/resources" /></Route>
      <Route path="/partners"><Redirect to="/company" /></Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
