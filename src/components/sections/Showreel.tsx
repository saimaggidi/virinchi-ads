import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState } from "react";

export function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videos = [
    { title: 'Brand Story', img: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=800&auto=format&fit=crop' },
    { title: 'Social Campaign', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop' },
    { title: 'Product Launch', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="section-padding relative bg-virinchi-dark border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-[42px] md:text-[64px] font-[900] tracking-tighter leading-none mb-6">
          <span className="text-white">Impactful</span> <span className="text-gradient-brand">Campaigns</span>
        </h2>
        <p className="text-white/50 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          We bring brands to life through moving stories and strategic creative execution.
        </p>
      </div>

      <div className="relative flex overflow-hidden py-4 cursor-grab active:cursor-grabbing">
        <motion.div 
          className="flex gap-6 items-center shrink-0"
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          animate={isPlaying ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
        >
          {[...videos, ...videos, ...videos].map((video, idx) => (
            <div key={idx} className="relative w-[300px] md:w-[540px] rounded-[32px] overflow-hidden bg-gray-900 aspect-video cursor-pointer border border-white/10 group shadow-2xl shrink-0 transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={video.img} 
                alt={video.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-colors">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 group-hover:bg-brand-orange group-hover:border-transparent group-hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 text-white ml-2" fill="currentColor" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white font-[800] text-xl md:text-2xl tracking-tight">{video.title}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
