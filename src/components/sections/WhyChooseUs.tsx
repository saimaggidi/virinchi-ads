import { motion } from "motion/react";

export function MissionVision() {
  return (
    <section className="py-24 relative overflow-hidden bg-virinchi-gray">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2">
            <span className="text-brand-teal font-[700] tracking-[0.2em] text-[12px] uppercase mb-4 block">Our Purpose</span>
            <h2 className="text-[36px] md:text-[48px] font-[800] mb-8 text-gray-900 tracking-tight leading-tight">
              Mission & Vision
            </h2>
            
            <div className="space-y-6 mt-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[28px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 transition-shadow relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 w-1.5 h-full bg-brand-orange" />
                <h3 className="text-[20px] font-[800] text-gray-900 mb-3 tracking-tight">Our Mission</h3>
                <p className="text-[16px] text-gray-500 leading-[1.8]">
                  "To create impactful digital experiences that help brands grow and connect with their audience in meaningful ways."
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-10 rounded-[28px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 transition-shadow relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 w-1.5 h-full bg-brand-teal" />
                <h3 className="text-[20px] font-[800] text-gray-900 mb-3 tracking-tight">Our Vision</h3>
                <p className="text-[16px] text-gray-500 leading-[1.8]">
                  "To become a leading creative digital agency delivering innovative marketing solutions that push boundaries."
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative h-[600px]">
            <div className="absolute inset-0 bg-brand-teal/5 blur-[100px] rounded-full" />
            <div className="absolute inset-4 rounded-[40px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] relative z-10 bg-gray-100 border border-white">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                 alt="Team vision mapping" 
                 className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
               />
               <div className="absolute inset-0 bg-gray-900 mix-blend-overlay opacity-10" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 z-20 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-8 rounded-[24px] border border-gray-100"
            >
              <div className="text-[48px] font-[800] tracking-tighter text-brand-orange leading-none mb-2">5+</div>
              <div className="text-[12px] uppercase tracking-[0.2em] font-[700] text-gray-400">Years of Growth</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
