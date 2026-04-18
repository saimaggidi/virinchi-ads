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
    <section className="py-24 relative bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-[36px] md:text-[56px] font-bold text-white tracking-tight leading-tight">
          Impactful Campaigns
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-6 items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
          style={{ animationPlayState: isPlaying ? 'paused' : 'running' }}
        >
          {[...videos, ...videos].map((video, idx) => (
            <div key={idx} className="relative w-[320px] md:w-[480px] rounded-[32px] overflow-hidden bg-gray-900 aspect-video cursor-pointer border border-white/10 group shadow-lg shrink-0">
              <img src={video.img} alt={video.title} className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-brand-red group-hover:border-transparent transition-all">
                  <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-6 text-white font-bold">{video.title}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
