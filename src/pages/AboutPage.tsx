import { motion } from "motion/react";
import { MissionVision } from "../components/sections/WhyChooseUs";
import { TrustStrip } from "../components/sections/TrustStrip";

export function AboutPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-[#050505] text-white py-24 relative overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-orange/10 blur-[150px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-[800] mb-6 tracking-tight">About Virinchi Ads</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We are a team of passionate digital marketers, designers, and developers dedicated to elevating brands.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover"
                alt="Our Team"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-5xl font-black text-brand-teal mb-2">10+</div>
              <div className="text-gray-500 font-bold uppercase tracking-wider text-sm">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Transforming businesses into industry leaders.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Virinchi Ads, we don't just run campaigns; we build sustainable digital ecosystems. By combining deep strategic insight with cutting-edge creative execution, we help our partners navigate the complex digital landscape.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our approach is fiercely data-driven, yet undeniably human. We believe that behind every click is a person, and behind every brand is a story waiting to be told.
            </p>
          </motion.div>
        </div>
      </div>

      <MissionVision />
      <TrustStrip />
      
    </div>
  );
}
