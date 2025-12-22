import { BaseLayout } from "@/layouts/BaseLayout";
import { useState } from "react";

export default function Partners() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for partner interest submission
    alert("Thank you for your interest. We'll be in touch soon.");
    setEmail("");
  };

  return (
    <BaseLayout>
      <section className="pt-16 lg:pt-24 pb-16 lg:pb-24 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="inline-block text-xs uppercase tracking-widest text-cv-muted font-semibold">
              CloudVerse™
            </span>
            <h1 className="cv-h1">Partner with us</h1>
            <p className="text-lg text-white/70">
              Build integrations, resell, or collaborate on cloud financial management.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
              >
                Get in touch
              </button>
            </form>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
