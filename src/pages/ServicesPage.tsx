import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Services } from "../components/sections/Services";

const detailedServices = [
  {
    title: "Social Media Marketing",
    features: [
      "Platform-specific strategy (Instagram, LinkedIn, TikTok, etc.)",
      "Community management & engagement",
      "Influencer partnerships and outreach",
      "Data-driven analytics and monthly reporting"
    ]
  },
  {
    title: "Web Development",
    features: [
      "Custom responsive design (Mobile-first)",
      "High-performance architecture (React, Next.js)",
      "Seamless CMS integration",
      "Conversion Rate Optimization (CRO)"
    ]
  },
  {
    title: "Search Engine Optimization (SEO)",
    features: [
      "Comprehensive site audits and technical SEO",
      "On-page keyword optimization",
      "High-authority link building strategy",
      "Local SEO and Google Business profile management"
    ]
  },
  {
    title: "Content Marketing",
    features: [
      "Brand storytelling and long-form blogs",
      "Video production and short-form reels",
      "Graphic design and ad creatives",
      "Whitepapers and lead magnets"
    ]
  },
  {
    title: "PPC Advertising",
    features: [
      "Google Ads Search & Display campaigns",
      "Meta (Facebook/Instagram) targeted ads",
      "A/B testing for ad copy and creatives",
      "Retargeting and lookalike audience building"
    ]
  },
  {
    title: "Email Marketing",
    features: [
      "Automated drip sequences for lead nurturing",
      "Lifecycle and retention campaigns",
      "A/B testing subject lines and layouts",
      "List segmentation and hygiene"
    ]
  }
];

export function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-virinchi-dark text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-brand-teal/10 mix-blend-overlay opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-[42px] md:text-7xl font-[800] mb-6 tracking-tight leading-none text-balance">Our Services</h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-medium">
              We provide end-to-end digital solutions that cover every touchpoint of your customer's journey.
            </p>
          </motion.div>
        </div>
      </div>

      <Services />

      {/* Deep Dive Section */}
      <div className="section-padding container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-[800] tracking-tight text-gray-900">What's Included?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {detailedServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-virinchi-gray p-8 rounded-[24px] border border-gray-100 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-[800] mb-6 text-gray-900 tracking-tight">{service.title}</h3>
              <ul className="space-y-4">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-bold text-[13px] leading-relaxed uppercase tracking-wider">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
