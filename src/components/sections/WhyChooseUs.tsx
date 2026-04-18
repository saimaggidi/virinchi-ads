import { motion } from "motion/react";

export function MissionVision() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 aspect-[4/5] md:aspect-square rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl border-8 border-gray-50">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                 alt="Team vision mapping" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-virinchi-dark/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-20 bg-brand-orange shadow-2xl p-6 md:p-10 rounded-[32px] text-white"
            >
              <div className="text-[42px] md:text-[64px] font-[900] tracking-tighter leading-none mb-1">5+</div>
              <div className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] font-[800] opacity-80">Years of Growth</div>
            </motion.div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl z-0" />
            
            {/* Mobile-only accent pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-orange/5 blur-[100px] rounded-full z-0 block md:hidden animate-pulse-slow" />
          </div>

          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <span className="text-brand-orange font-[800] tracking-[0.2em] text-[12px] uppercase mb-4 block">Our DNA</span>
              <h2 className="text-[36px] md:text-[56px] font-[800] text-gray-900 tracking-tight leading-[1.1] mb-8">
                Mission <span className="text-brand-teal">&</span> Vision
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-lg mb-12">
                We don't just follow trends; we set them. Our purpose is rooted in the success of our partners and the innovation of our craft.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-virinchi-gray p-8 rounded-[32px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-[800] text-gray-900 mb-4 tracking-tight">Our Mission</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                  To create impactful digital experiences that help brands grow and connect with their audience in meaningful ways.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group bg-virinchi-gray p-8 rounded-[32px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-[800] text-gray-900 mb-4 tracking-tight">Our Vision</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                  To become a leading creative digital agency delivering innovative marketing solutions that push boundaries.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
