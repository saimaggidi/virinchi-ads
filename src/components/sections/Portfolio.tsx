import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState('Posters');
  
  const tabs = ['Posters', 'Videos', 'Campaigning'];
  
  const portfolioItems = [
    { id: 1, type: 'Posters', title: 'Summer Collection', client: 'Style Brand', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop' },
    { id: 2, type: 'Videos', title: 'Healthcare Hero', client: 'City Hospital', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' },
    { id: 3, type: 'Campaigning', title: 'Vote 2024', client: 'Political Campaign', img: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop' },
    { id: 4, type: 'Posters', title: 'Fresh Eats', client: 'Food Delivery', img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop' },
    { id: 5, type: 'Videos', title: 'Campus Tour', client: 'State University', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop' },
    { id: 6, type: 'Campaigning', title: 'Tech Launch', client: 'Innovate AI', img: 'https://images.unsplash.com/photo-1523580494112-071d16940361?q=80&w=800&auto=format&fit=crop' }
  ];

  const filteredItems = portfolioItems.filter(item => item.type === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-teal font-[700] tracking-[0.2em] text-[12px] uppercase mb-4 block">Our Work</span>
          <h2 className="text-[36px] md:text-[56px] font-[800] tracking-tight leading-tight mb-6 text-gray-900">
            Featured Projects
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-[13px] font-[600] uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-gray-900 text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)]' 
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile Horizontal Scroll Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-[24px] overflow-hidden w-[240px] h-[380px] bg-gray-100 cursor-pointer shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-shadow md:w-auto md:h-auto md:aspect-[3/4] md:min-w-0 snap-center shrink-0"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                
                {item.type === 'Videos' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-brand-red ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-8">
                  <span className="text-white/80 text-[11px] font-[700] uppercase tracking-[0.2em] mb-2 block">
                    {item.client}
                  </span>
                  <h3 className="text-white text-[28px] font-[800] leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
