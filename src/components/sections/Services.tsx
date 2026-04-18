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
    <section className="py-32 relative bg-virinchi-gray overflow-hidden" id="services">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-24 text-center">
          <span className="text-brand-orange font-[700] tracking-[0.2em] text-[12px] uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-[36px] md:text-[56px] font-bold mb-6 text-gray-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Everything you need to grow digitally.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed">
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
              className="bg-white p-[40px] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="text-[42px] mb-8 leading-none drop-shadow-sm select-none">
                {service.icon}
              </div>
              
              <h3 className="font-[800] mb-[16px] text-[22px] text-gray-900 tracking-tight leading-[1.3]">
                {service.title}
              </h3>
              
              <p className="text-[15.5px] text-gray-500 leading-[1.65] mb-8 flex-1">
                {service.description}
              </p>

              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-[600] text-[15px] flex items-center transition-colors w-max">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
