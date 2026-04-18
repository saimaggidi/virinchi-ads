import { motion } from "motion/react";
import { MissionVision } from "../components/sections/WhyChooseUs";
import { TrustStrip } from "../components/sections/TrustStrip";

export function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-virinchi-dark text-white py-24 md:py-32 relative overflow-hidden">
        {/* Animated Background Image */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop" 
            alt="Agency Culture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-virinchi-dark/80 via-virinchi-dark/60 to-virinchi-dark" />
        </motion.div>

        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-orange/10 blur-[150px] z-0" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-[42px] md:text-7xl font-[800] mb-6 tracking-tight leading-none">About Us</h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-medium">
              We are a team of passionate digital marketers, designers, and developers dedicated to elevating brands.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section-padding container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[32px] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover"
                alt="Our Team"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[32px] shadow-2xl hidden md:block border border-gray-100">
              <div className="text-5xl font-[900] text-brand-teal mb-2 tracking-tighter">10+</div>
              <div className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-[32px] md:text-[48px] font-[800] tracking-tight text-gray-900 leading-[1.1]">
              Transforming businesses into industry leaders.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              At Virinchi Ads, we don't just run campaigns; we build sustainable digital ecosystems. By combining deep strategic insight with cutting-edge creative execution, we help our partners navigate the complex digital landscape.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
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
