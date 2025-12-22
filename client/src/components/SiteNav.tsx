import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { track } from "@/lib/track";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export function SiteNav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/platform", label: "Platform", track: "nav_platform" },
    { href: "/solutions", label: "Solutions", track: "nav_solutions" },
    { href: "/integrations", label: "Integrations", track: "nav_integrations" },
    { href: "/security", label: "Security", track: "nav_security" },
    { href: "/resources", label: "Resources", track: "nav_resources" },
    { href: "/pricing", label: "Pricing", track: "nav_pricing" },
    { href: "/company", label: "Company", track: "nav_company" },
  ];

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b-2 border-white/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 py-4">
          {/* Logo */}
          <Link href="/" onClick={() => track("nav_home")} className="flex items-center flex-shrink-0">
            <img 
              src="/assets/logo-white.png" 
              alt="CloudVerse AI" 
              className="h-6 lg:h-7 w-auto hidden dark:block"
            />
            <img 
              src="/assets/logo-black.png" 
              alt="CloudVerse AI" 
              className="h-6 lg:h-7 w-auto dark:hidden"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 flex-1 ml-12">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => track(link.track)}
                className={cn(
                  "text-sm transition-colors relative pb-1",
                  location === link.href 
                    ? "text-white font-semibold" 
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
                {location === link.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/40" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            {/* Sign in - Desktop only */}
            <Link 
              href="/signin" 
              onClick={() => track("nav_signin")}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors hidden lg:block"
            >
              Sign in
            </Link>

            {/* Book a demo - CTA */}
            <Link 
              href="/demo" 
              onClick={() => track("cta_demo", { location: "nav" })}
              className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Book a demo
            </Link>

            {/* Dark mode toggle */}
            <div className="text-white/40 hover:text-white/70 transition-colors">
              <ModeToggle />
            </div>
            
            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button 
                  className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background border-border">
                <div className="flex flex-col gap-1 mt-8">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => {
                        track(link.track);
                        setMobileOpen(false);
                      }}
                      className={cn(
                        "text-[15px] font-medium py-3 px-2 rounded-lg transition-colors",
                        location === link.href 
                          ? "text-white bg-white/10 font-semibold" 
                          : "text-white/70 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-white/10 my-4" />
                  <Link 
                    href="/signin" 
                    onClick={() => {
                      track("nav_signin");
                      setMobileOpen(false);
                    }}
                    className="text-[15px] font-medium py-3 px-2 rounded-lg text-white/60 hover:text-white transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link 
                    href="/demo" 
                    onClick={() => {
                      track("cta_demo", { location: "nav_mobile" });
                      setMobileOpen(false);
                    }}
                    className="text-[15px] font-semibold text-center bg-blue-600 text-white py-3 px-4 rounded-full hover:bg-blue-700 transition-colors mt-2"
                  >
                    Book a demo
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
