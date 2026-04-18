import { motion } from "motion/react";
import { ArrowRight, Heart, Share2, TrendingUp, Search, Megaphone, Target, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  const titleWords = "Scale Your Brand with".split(" ");

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-28 pb-20 bg-[#050505] text-white selection:bg-brand-orange/30">
      {/* Rich Abstract Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
           className="absolute inset-0 bg-gradient-brand opacity-20"
        />
        <motion.img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-[0.25] mix-blend-screen scale-110"
          animate={{ 
            scale: [1.05, 1.15, 1.05],
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        {/* Soft edge fading so it blends flawlessly into the rest of the site */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#050505]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]" />
        
        {/* Colorful deep orbs for subtle brand highlighting */}
        <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] rounded-full bg-brand-orange/15 blur-[180px]" />
        <div className="absolute bottom-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-brand-teal/15 blur-[180px]" />
        
        {/* Micro-animation Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
           {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-[55%] text-left pt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-white font-[700] text-[13px] tracking-widest uppercase">
                Award-Winning Agency
              </span>
            </motion.div>

            <h1 className="text-[44px] sm:text-[64px] lg:text-[84px] font-[800] tracking-[-0.05em] leading-[0.95] mb-[32px] flex flex-wrap gap-x-3">
              {titleWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.1 + idx * 0.08, ease: 'easeOut' }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-red to-brand-orange bg-[length:200%_auto] animate-gradient block w-full mt-2"
              >
                Creative Innovation
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-white/70 text-[18px] lg:text-[22px] leading-[1.6] mb-[48px] font-[400] max-w-[560px] text-balance"
            >
              We design premium digital experiences, high-converting websites, and explosive marketing campaigns that dominate your market.
            </motion.p>

            {/* Mobile marketing icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8 flex gap-6 block lg:hidden"
            >
              {[Megaphone, Target, BarChart3, Search].map((Icon, idx) => (
                <motion.div 
                  key={idx} 
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1] 
                  }}
                  transition={{ 
                    duration: 3 + idx, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: idx * 0.2 
                  }}
                  className="p-3 bg-white/5 rounded-full border border-white/10 relative overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                  <motion.div
                    animate={{ 
                      opacity: [0.4, 1, 0.4],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: idx * 0.5
                    }}
                  >
                    <Icon className="w-6 h-6 text-brand-orange" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <Link to="/contact" className="px-[36px] py-[18px] bg-white text-[#050505] rounded-[16px] font-[800] text-[16px] hover:bg-gray-100 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.15)] group">
                Start a Project
                <ArrowRight className="w-5 h-5 mx-1 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link to="/work" className="px-[36px] py-[18px] bg-transparent text-white border border-white/20 rounded-[16px] font-[700] text-[16px] hover:bg-white/10 transition-colors flex items-center justify-center gap-3 w-full sm:w-auto">
                View Our Work
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-[45%] relative hidden lg:block h-[400px] lg:h-[600px] mt-16 md:mt-0 px-6 scale-90 sm:scale-100 origin-top">
            {/* Minimalist Glass Analytics Mockups */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.4 }}
              className="absolute top-[10%] right-[10%] z-20"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-[340px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] overflow-hidden shadow-2xl"
              >
                <div className="p-5 border-b border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-orange to-brand-red p-[2px]">
                    <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
                      <span className="font-bold text-[12px] text-white">VA</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[14px] font-[800] text-white tracking-wide">Virinchi Ads</div>
                    <div className="text-[11px] text-brand-orange uppercase tracking-widest font-bold">Sponsored</div>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-gray-900 relative group overflow-hidden">
                  <motion.img 
                    animate={{ scale: [1, 1.05, 1] }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-90 mix-blend-luminosity" 
                    alt="Marketing" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent flex items-end p-5">
                    <div className="text-white font-[800] text-[20px] leading-tight">Driving Explosive Growth</div>
                  </div>
                </div>
                <div className="p-5 bg-white/5">
                  <div className="flex gap-4 mb-3">
                    <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                      <Heart className="w-6 h-6 text-brand-red fill-brand-red" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                      <Share2 className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <div className="text-[13px] font-[700] mb-1 text-white">Liked by 12,492 others</div>
                  <div className="text-[13px] text-gray-400">Taking modern brands to the absolute next level...</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Metric 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4 }}
              className="absolute top-[35%] left-[-15%] z-30"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-[24px] flex items-center gap-5 w-[260px] shadow-2xl"
              >
                <div className="w-14 h-14 rounded-full bg-brand-teal/20 flex items-center justify-center border border-brand-teal/30 shrink-0">
                  <TrendingUp className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <div className="text-[11px] text-brand-teal font-[800] uppercase tracking-widest mb-1">Traffic ROI</div>
                  <div className="text-[28px] font-bold text-white leading-none">+340%</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Floating Metric 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.4 }}
              className="absolute bottom-[10%] right-[-5%] z-40"
            >
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-[24px] w-[240px] shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-4 h-4 text-brand-orange animate-pulse" />
                  <div className="text-[12px] text-white font-[700] uppercase tracking-widest">Global Search</div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full mb-3 overflow-hidden relative">
                  <motion.div initial={{ width: "0%" }} animate={{ width: "90%" }} transition={{ duration: 1.5, delay: 1 }} className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-orange to-brand-red" />
                  <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm" />
                </div>
                <div className="h-2 w-3/4 bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div initial={{ width: "0%" }} animate={{ width: "75%" }} transition={{ duration: 1.5, delay: 1.2 }} className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-teal to-brand-green" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
