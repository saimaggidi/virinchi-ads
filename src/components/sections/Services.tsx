import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: "📱",
    title: "Social Media Marketing",
    description: "Engage your audience and build brand awareness through strategic social media campaigns and content.",
    theme: "orange"
  },
  {
    icon: "📊",
    title: "Web Development",
    description: "Build responsive, high-performance websites tailored to your business needs.",
    theme: "teal"
  },
  {
    icon: "🔍",
    title: "Search Engine Optimization (SEO)",
    description: "Boost your website's visibility with data-driven SEO strategies that drive organic traffic and improve rankings.",
    theme: "multi"
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    description: "Create compelling content that resonates with your audience and drives meaningful conversions.",
    theme: "orange"
  },
  {
    icon: "💰",
    title: "PPC Advertising",
    description: "Maximize your ROI with targeted paid advertising campaigns across multiple platforms.",
    theme: "teal"
  },
  {
    icon: "📧",
    title: "Email Marketing",
    description: "Build lasting relationships with your customers through personalized email campaigns.",
    theme: "multi"
  }
];

function LogoIcon({ className, color = "currentColor" }: { className?: string, color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M25 80 V35 L40 50 V80 Z" fill={color === "brand" ? "#F37021" : color} />
      <path d="M25 35 L40 20 V35 Z" fill={color === "brand" ? "#F37021" : color} />
      <path d="M35 55 L75 20 V35 L35 70 Z" fill={color === "brand" ? "#00A99D" : color} />
      <path d="M25 65 L65 30 V45 L25 80 Z" fill={color === "brand" ? "#ED1C24" : color} />
      <path d="M75 20 V65 L60 50 V20 Z" fill={color === "brand" ? "#39B54A" : color} />
      <path d="M75 65 L60 80 V65 Z" fill={color === "brand" ? "#39B54A" : color} />
    </svg>
  );
}

export function Services() {
  return (
    <section className="section-padding relative overflow-hidden bg-white" id="services">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20 text-center">
          <span className="text-brand-orange font-[800] tracking-[0.2em] text-[12px] uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-[32px] md:text-[56px] font-[800] mb-6 text-gray-900 tracking-tight leading-tight max-w-3xl mx-auto text-balance">
            Everything you need to grow digitally.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[16px] md:text-[20px] leading-relaxed font-medium">
            We're a full-service digital agency. We combine strategic thinking with creative excellence to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => {
            const shadowClass = 
              service.theme === "orange" ? "group-hover:shadow-[0_40px_80px_-15px_rgba(243,112,33,0.15)]" :
              service.theme === "teal" ? "group-hover:shadow-[0_40px_80px_-15px_rgba(0,169,157,0.15)]" :
              "group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]";

            const watermarkColor = 
              service.theme === "orange" ? "#F37021" :
              service.theme === "teal" ? "#00A99D" : "brand";

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="relative group h-full"
              >
                <div className={`bg-white p-[32px] md:p-[40px] rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 transition-all duration-500 flex flex-col items-start h-full relative z-10 overflow-hidden ${shadowClass}`}>
                  {/* Background Watermark Logo */}
                  <div className="absolute -right-10 -bottom-10 w-48 h-48 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 z-0 pointer-events-none">
                    <LogoIcon className="w-full h-full" color={watermarkColor} />
                  </div>

                  {/* SVG Snake Border Overlay */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" preserveAspectRatio="none">
                    <motion.rect
                      width="100%"
                      height="100%"
                      rx="32"
                      fill="none"
                      stroke="url(#snakeGradient)"
                      strokeWidth="4"
                      initial={{ pathLength: 0, pathOffset: 0 }}
                      whileHover={{ 
                        pathLength: 0.3, 
                        pathOffset: [0, 1],
                        transition: { 
                          pathLength: { duration: 0.5 },
                          pathOffset: { duration: 3, repeat: Infinity, ease: "linear" }
                        }
                      }}
                    />
                    <defs>
                      <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F37021" />
                        <stop offset="100%" stopColor="#00A99D" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="w-14 md:w-16 h-14 md:h-16 bg-virinchi-gray rounded-[22px] flex items-center justify-center text-[28px] md:text-[32px] mb-8 md:mb-10 leading-none group-hover:bg-brand-orange/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shrink-0 shadow-inner relative z-10">
                    {service.icon}
                  </div>
                  
                  <h3 className="font-[800] mb-[16px] text-[22px] md:text-[24px] text-gray-900 tracking-tight leading-tight relative z-10">
                    {service.title}
                  </h3>
                  
                  <p className="text-[15px] md:text-[16px] text-gray-400 leading-relaxed mb-8 flex-1 font-medium relative z-10">
                    {service.description}
                  </p>

                  <Link to="/services" className="group/link flex items-center gap-3 font-[800] text-[13px] uppercase tracking-widest text-gray-900 hover:text-brand-orange transition-all relative z-10">
                    <span>Explore More</span>
                    <div className="relative w-8 h-[2px] bg-gray-200 overflow-hidden">
                      <div className="absolute inset-0 bg-brand-orange -translate-x-full group-hover/link:translate-x-0 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
