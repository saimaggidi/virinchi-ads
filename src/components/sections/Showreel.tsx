import { motion } from "motion/react";
import { Play } from "lucide-react";

export function Showreel() {
  return (
    <section className="py-24 relative bg-virinchi-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-[36px] md:text-[56px] font-bold mb-12 text-white tracking-tight leading-tight">
          See How We Create <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-red to-brand-orange animate-pulse">Impactful Campaigns</span>
        </h2>

        <div className="relative w-full max-w-5xl mx-auto rounded-[32px] overflow-hidden group shadow-[0_20px_50px_-15px_rgba(237,28,36,0.3)] bg-gray-900 aspect-video cursor-pointer border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1200&auto=format&fit=crop" 
            alt="Video Showreel Thumbnail" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity hover:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl group-hover:bg-brand-red group-hover:border-transparent transition-colors duration-500"
            >
              <Play className="w-10 h-10 text-white ml-2" fill="currentColor" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
