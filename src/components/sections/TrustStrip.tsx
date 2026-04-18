import { motion } from "motion/react";

export function TrustStrip() {
  const logos = [
    "TechCorp", "HealthPlus", "EduGlobal", "City Politics",
    "Nexus AI", "Growth Matrix", "Blue Hospital", "Modern College"
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-gray-400 text-[12px] font-[600] uppercase tracking-[0.2em]">
          Trusted by Innovative Brands & Global Campaigns
        </p>
      </div>
      
      <div className="flex gap-16 animate-marquee whitespace-nowrap overflow-hidden">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 min-w-full justify-around items-center gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {logos.map((logo, idx) => (
              <span key={idx} className="font-heading font-bold text-[22px] tracking-tight text-gray-900">
                {logo}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
