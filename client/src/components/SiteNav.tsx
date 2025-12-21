import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { track } from "@/lib/track";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" onClick={() => track("nav_home")} className="flex items-center">
          <img 
            src="/assets/logo-white.png" 
            alt="CloudVerse AI" 
            className="h-7 w-auto hidden dark:block"
          />
          <img 
            src="/assets/logo-black.png" 
            alt="CloudVerse AI" 
            className="h-7 w-auto dark:hidden"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => track(link.track)}
              className={cn(
                "text-[13px] font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/signin" 
            onClick={() => track("nav_signin")}
            className="text-[13px] font-medium text-foreground hover:text-primary hidden sm:block"
          >
            Sign in
          </Link>
          <Link 
            href="/demo" 
            onClick={() => track("cta_demo", { location: "nav" })}
            className="text-[13px] font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
          >
            Book a demo
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
