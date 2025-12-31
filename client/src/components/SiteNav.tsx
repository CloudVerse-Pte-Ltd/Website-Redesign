import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { track } from "@/lib/track";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SIGNIN_URL, DEMO_URL, ROUTES } from "@/lib/links";

export function SiteNav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: ROUTES.platform, label: "Platform", track: "nav_platform" },
    { href: ROUTES.solutions, label: "Solutions", track: "nav_solutions" },
    { href: ROUTES.integrations, label: "Integrations", track: "nav_integrations" },
    { href: ROUTES.resources, label: "Resources", track: "nav_resources" },
    { href: ROUTES.pricing, label: "Pricing", track: "nav_pricing" },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-200 h-16 lg:h-[72px] flex items-center",
        scrolled 
          ? "bg-black/60 backdrop-blur border-b border-white/10" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-full">
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
          <div className="hidden lg:flex items-center gap-8 flex-1 ml-12">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => track(link.track)}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  location === link.href 
                    ? "text-white" 
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
                {location === link.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            {/* Sign in - Desktop only */}
            <a 
              href={SIGNIN_URL}
              onClick={() => track("nav_signin")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors hidden lg:block"
            >
              Sign in
            </a>

            {/* Book a demo - CTA */}
            <a 
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("cta_demo", { location: "nav" })}
              className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Book a demo
            </a>

            {/* Dark mode toggle */}
            <div className="text-white/40 hover:text-white/70 transition-colors">
              <ModeToggle />
            </div>
            
            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button 
                  className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background border-border">
                <div className="flex flex-col gap-1 mt-8 mb-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => {
                        track(link.track);
                        setMobileOpen(false);
                      }}
                      className={cn(
                        "text-[15px] font-medium py-3 px-3 rounded-lg transition-colors",
                        location === link.href 
                          ? "text-white bg-white/10 font-semibold" 
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4 space-y-3">
                  <a 
                    href={SIGNIN_URL}
                    onClick={() => {
                      track("nav_signin");
                      setMobileOpen(false);
                    }}
                    className="block text-[15px] font-medium py-3 px-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Sign in
                  </a>
                  <a 
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      track("cta_demo", { location: "nav_mobile" });
                      setMobileOpen(false);
                    }}
                    className="block text-[15px] font-semibold text-center bg-blue-600 text-white py-3 px-4 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Book a demo
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
