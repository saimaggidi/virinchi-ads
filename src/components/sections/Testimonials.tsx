import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    quote: "Virinchi Ads completely changed how we reach our patients. The video campaigns were highly engaging.",
    name: "Dr. Ananya Sharma",
    role: "Director, City Health"
  },
  {
    quote: "Record-breaking admissions this year, thanks to the dynamic college promo reels.",
    name: "Rajiv Menon",
    role: "Dean, State University"
  },
  {
    quote: "Their political campaign strategies secured unmatched reach in our constituency.",
    name: "Vikram Singh",
    role: "Campaign Manager"
  },
  {
    quote: "Astounding results on our SaaS platform rollout. Lead acquisition costs dropped by 45%.",
    name: "Sarah Jenkins",
    role: "CMO, TechNova"
  },
  {
    quote: "Exceptional creativity and incredibly dedicated. They transformed our entire brand identity.",
    name: "James Patel",
    role: "Founder, GreenValley Eco"
  }
];

// Duplicate for infinite marquee loop
const MARQUEE_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export function Testimonials() {
  return (
    <section className="py-32 relative bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10 mb-20 text-center">
        <span className="text-brand-orange font-[700] tracking-[0.2em] text-[12px] uppercase mb-4 block">Feedback</span>
        <h2 className="text-[36px] md:text-[56px] font-[800] tracking-tight leading-tight text-gray-900">
          Client Testimonials
        </h2>
      </div>

      <div className="relative z-10 w-full flex overflow-hidden">
        {/* Left/Right masks for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 z-20 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 z-20 bg-gradient-to-l from-white to-transparent" />
        
        <motion.div 
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 md:gap-8 w-max px-6 md:px-8"
        >
          {MARQUEE_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="w-[320px] md:w-[480px] shrink-0 bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 relative group"
            >
              <div className="absolute top-8 left-8 text-brand-orange/10 text-8xl font-serif leading-none select-none transition-colors group-hover:text-brand-orange/20">"</div>
              <div className="relative z-10">
                <p className="text-[16px] md:text-[20px] text-gray-800 font-medium leading-[1.6] mb-10 tracking-tight">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-orange to-brand-red flex items-center justify-center shrink-0">
                    <span className="font-bold text-white text-sm">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-[800] text-[16px] text-gray-900">{item.name}</div>
                    <div className="text-gray-500 text-[11px] uppercase tracking-[0.2em] font-[700] mt-1">{item.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
