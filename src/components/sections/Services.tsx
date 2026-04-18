import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: "📱",
    title: "Social Media Marketing",
    description: "Engage your audience and build brand awareness through strategic social media campaigns and content."
  },
  {
    icon: "📊",
    title: "Web Development",
    description: "Build responsive, high-performance websites tailored to your business needs."
  },
  {
    icon: "🔍",
    title: "Search Engine Optimization (SEO)",
    description: "Boost your website's visibility with data-driven SEO strategies that drive organic traffic and improve rankings."
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    description: "Create compelling content that resonates with your audience and drives meaningful conversions."
  },
  {
    icon: "💰",
    title: "PPC Advertising",
    description: "Maximize your ROI with targeted paid advertising campaigns across multiple platforms."
  },
  {
    icon: "📧",
    title: "Email Marketing",
    description: "Build lasting relationships with your customers through personalized email campaigns."
  }
];

export function Services() {
  return (
    <section className="section-padding relative overflow-hidden bg-white" id="services">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20 text-center">
          <span className="text-brand-orange font-[700] tracking-[0.2em] text-[12px] uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-[32px] md:text-[56px] font-[800] mb-6 text-gray-900 tracking-tight leading-tight max-w-3xl mx-auto text-balance">
            Everything you need to grow digitally.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[16px] md:text-[20px] leading-relaxed">
            We're a full-service digital agency. We combine strategic thinking with creative excellence to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="relative group h-full"
            >
              <div className="bg-white p-[40px] rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 placeholder:hover:shadow-[0_40px_80px_-15px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col items-start h-full relative z-10 overflow-hidden">
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
                      pathLength: 0.25, 
                      pathOffset: [0, 1],
                      transition: { 
                        pathLength: { duration: 0.4 },
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

                <div className="w-16 h-16 bg-virinchi-gray rounded-[22px] flex items-center justify-center text-[32px] mb-10 leading-none group-hover:bg-brand-orange/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shrink-0 shadow-inner">
                  {service.icon}
                </div>
                
                <h3 className="font-[800] mb-[16px] text-[24px] text-gray-900 tracking-tight leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-[16px] text-gray-400 leading-relaxed mb-8 flex-1 font-medium">
                  {service.description}
                </p>

                <Link to="/services" className="group/link flex items-center gap-3 font-[800] text-[13px] uppercase tracking-widest text-gray-900 hover:text-brand-orange transition-all">
                  <span>Explore More</span>
                  <div className="relative w-8 h-[2px] bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-brand-orange -translate-x-full group-hover/link:translate-x-0 transition-transform duration-300" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
