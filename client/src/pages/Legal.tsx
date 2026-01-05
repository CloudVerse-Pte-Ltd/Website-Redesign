import { BaseLayout } from "@/layouts/BaseLayout";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function Legal() {
  const [location] = useLocation();
  
  useEffect(() => {
    if (location === "/legal/terms") {
      document.title = "Terms of Service — CloudVerse™";
    } else if (location === "/legal/privacy") {
      document.title = "Privacy Policy — CloudVerse™";
    }
  }, [location]);

  const isTerms = location === "/legal/terms";

  return (
    <BaseLayout>
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-cv-ink mb-8">
            {isTerms ? "Terms of Service" : "Privacy Policy"}
          </h1>

          <div className="prose max-w-none text-cv-muted">
            <p className="mb-6">
              {isTerms
                ? "Terms of Service content goes here."
                : "Privacy Policy content goes here."}
            </p>
            <p className="text-sm text-cv-muted">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
