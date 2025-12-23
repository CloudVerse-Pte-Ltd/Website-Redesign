import { BaseLayout } from "@/layouts/BaseLayout";
import { useEffect } from "react";

export default function Tour() {
  useEffect(() => {
    document.title = "90-Second Tour — CloudVerse™";
  }, []);

  return (
    <BaseLayout>
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              90-Second Tour
            </h1>
            <p className="text-xl text-white/70 mb-12">
              See CloudVerse in action.
            </p>

            {/* Video Placeholder */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] aspect-video flex items-center justify-center mb-8">
              <div className="text-center">
                <p className="text-white/60 mb-4">Video coming soon</p>
                <p className="text-sm text-white/40">
                  Check back later for a full walkthrough of CloudVerse features.
                </p>
              </div>
            </div>

            <p className="text-white/70">
              In the meantime, <a href="/platform" className="text-blue-400 hover:text-blue-300 underline">explore our platform →</a>
            </p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
