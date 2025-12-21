import { Link } from "wouter";
import { track } from "@/lib/track";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Platform", href: "/platform" },
        { label: "Solutions", href: "/solutions" },
        { label: "Integrations", href: "/integrations" },
        { label: "Pricing", href: "/pricing" },
        { label: "Security", href: "/security" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/resources" },
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Status", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/company" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "/contact" },
        { label: "Legal", href: "/legal/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary/30 pt-24 pb-12 border-t border-border mt-auto">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2">
             <Link href="/" onClick={() => track("footer_home")}>
              <a className="text-xl font-bold tracking-tight mb-4 block">CloudVerse</a>
            </Link>
            <p className="text-muted-foreground text-[15px] max-w-xs">
              Cloud financial management for modern engineering teams. Visibility, allocation, and optimization in one platform.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-[13px] text-foreground mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <a className="text-[13px] text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-muted-foreground">
            © {currentYear} CloudVerse Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/legal/privacy">
              <a className="text-[13px] text-muted-foreground hover:text-foreground">Privacy</a>
            </Link>
            <Link href="/legal/terms">
               <a className="text-[13px] text-muted-foreground hover:text-foreground">Terms</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
