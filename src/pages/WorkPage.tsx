import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CLIENT_DATA } from "../data/clients";
import { ArrowUpRight } from "lucide-react";
import { OurClients } from "../components/sections/OurClients";

export function WorkPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-virinchi-gray">
      {/* Page Header */}
      <div className="bg-[#050505] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-brand-orange/5 to-brand-teal/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-[800] mb-6 tracking-tight">Our Work</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Explore the impact we've created for some of the most dynamic business brands.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="transform -translate-y-12">
          <OurClients />
      </div>

      <div className="container mx-auto px-6 max-w-7xl pt-12 pb-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">All Client Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLIENT_DATA.map((item, idx) => (
             <motion.div 
             key={idx}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: idx * 0.1 }}
             className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
           >
             <div className="flex justify-between items-start mb-6">
               <div>
                 <h3 className="text-2xl font-[800] text-gray-900 leading-none mb-2 tracking-tight">{item.name}</h3>
                 <p className="text-[11px] text-gray-400 font-[700] uppercase tracking-[0.2em]">{item.sub}</p>
               </div>
               <Link to={`/client/${item.id}`} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
                 <ArrowUpRight className="w-4 h-4 text-gray-600" />
               </Link>
             </div>

             <div className="mb-8 flex-1">
               <p className="text-[15px] text-gray-600 leading-relaxed">
                  {item.description}
               </p>
             </div>

             <Link to={`/client/${item.id}`} className="w-full text-center py-3 bg-gray-50 text-gray-900 font-bold rounded-xl text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
               View Case Study
             </Link>
           </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
