import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, PlayCircle, Image as ImageIcon, BarChart3, Target } from "lucide-react";
import { CLIENT_DATA } from "../data/clients";

export function ClientPage() {
  const { id } = useParams();
  const client = CLIENT_DATA.find(c => c.id === id);

  if (!client) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Client Not Found</h1>
        <Link to="/work" className="text-brand-orange hover:underline font-bold">Return to Our Work</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-virinchi-gray">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100 py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link to="/work" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors mb-10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h1 className={`text-5xl md:text-7xl font-black mb-4 tracking-tight ${client.color}`}>{client.name}</h1>
                <p className="text-lg md:text-xl font-bold uppercase tracking-[0.3em] text-gray-400">{client.sub}</p>
              </div>
              <div className="md:text-right max-w-sm">
                 <p className="text-gray-600 leading-relaxed font-medium">
                   {client.description}
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl py-20 space-y-24">
        
        {/* Key Metrics & Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Target className="w-5 h-5 text-gray-400" /> Strategies Deployed</h3>
            <div className="flex flex-wrap gap-3">
              {client.services.map((service, idx) => (
                <span key={idx} className="px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-lg font-bold text-gray-700 text-sm">
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-gray-400" /> Results Achieved</h3>
            <ul className="space-y-4">
               {client.metrics.map((metric, idx) => (
                 <li key={idx} className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded-xl">
                   <div className={`w-2 h-2 rounded-full bg-brand-orange`} />
                   <span className="font-bold text-lg">{metric}</span>
                 </li>
               ))}
            </ul>
          </motion.div>
        </div>

        {/* Video Reel Showcase */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
           <h3 className="text-2xl font-bold mb-8 flex items-center gap-2"><PlayCircle className="w-6 h-6 text-brand-red" /> Campaign Video Reel</h3>
           <div className="aspect-[21/9] bg-gray-900 rounded-[32px] overflow-hidden relative group cursor-pointer shadow-xl">
             <img src={client.videoPlaceholder} alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-luminosity" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-10 h-10 text-white ml-1" />
                </div>
             </div>
           </div>
        </motion.div>

        {/* Campaign Assets Showcase */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
           <h3 className="text-2xl font-bold mb-8 flex items-center gap-2"><ImageIcon className="w-6 h-6 text-brand-teal" /> Creative Posters & Assets</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {client.posters.map((poster, idx) => (
               <div key={idx} className="aspect-[4/5] rounded-[24px] overflow-hidden shadow-lg border border-gray-100 bg-white group p-4">
                  <div className="w-full h-full rounded-[16px] overflow-hidden relative">
                    <img src={poster} alt={`Campaign Asset ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
               </div>
             ))}
           </div>
        </motion.div>

      </div>
    </div>
  );
}
