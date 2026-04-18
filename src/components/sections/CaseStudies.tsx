import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CLIENT_DATA } from "../../data/clients";

export function CaseStudies() {
  // Using dynamic client data for the Work showcase
  const showcaseClients = CLIENT_DATA.slice(0, 4);

  return (
    <section className="py-24 relative bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-brand-green font-[700] tracking-[0.2em] text-[12px] uppercase mb-4 block">Proven Results</span>
          <h2 className="text-[36px] md:text-[56px] font-[800] tracking-tight leading-tight mb-6 text-gray-900">
            Our Work
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[16px] md:text-[18px]">
            We turn challenges into measurable growth. Discover how we've helped our clients succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {showcaseClients.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[32px] p-[48px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative group overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gray-50 overflow-hidden">
                <div className={`h-full border-t-[6px] ${item.color} w-0 group-hover:w-full transition-all duration-700 ease-out`}></div>
              </div>

              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-[28px] font-[800] text-gray-900 leading-none mb-3 tracking-tight">{item.name}</h3>
                  <p className="text-[12px] text-gray-400 font-[700] uppercase tracking-[0.2em]">{item.sub}</p>
                </div>
                <Link to={`/client/${item.id}`} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-transparent group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <p className="text-[16px] text-gray-900 font-medium leading-[1.6]">
                   {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {item.services.map((service, s_idx) => (
                    <span key={s_idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <Link to={`/client/${item.id}`} className="text-brand-orange font-bold text-sm tracking-widest uppercase flex items-center hover:opacity-80 transition-opacity">
                View Full Profile <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <Link to="/work" className="px-[32px] py-[16px] bg-gray-900 text-white rounded-full font-[700] text-[16px] hover:bg-black transition-colors inline-flex items-center gap-2">
                See All Client Profiles
             </Link>
        </div>
      </div>
    </section>
  );
}
