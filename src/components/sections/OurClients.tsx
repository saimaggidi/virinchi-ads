import { motion } from "motion/react";

const CLIENTS = [
  { name: "Aakash", sub: "Industrial Park", color: "text-[#002f6c]", accent: "text-[#8cc63f]" },
  { name: "Akshar", sub: "Matrix", color: "text-[#1d5c52]", accent: "text-[#1d5c52]" },
  { name: "D5", sub: "208", color: "text-[#d4af37]", accent: "text-[#d4af37]" },
  { name: "Galaxy", sub: "Industrial Park", color: "text-[#007198]", accent: "text-[#f47920]" },
  { name: "Patidar", sub: "Tours & Travels", color: "text-[#c2ab65]", accent: "text-[#c2ab65]" },
  { name: "Jayras", sub: "Enterprise", color: "text-[#1a1a1a]", accent: "text-[#1a1a1a]" },
  { name: "Green Valley", sub: "Embracing Nature", color: "text-[#395e34]", accent: "text-[#e77a41]" },
  { name: "ATS", sub: "Aimtech Solution", color: "text-[#004b87]", accent: "text-[#e31837]" }
];

export function OurClients() {
  return (
    <section className="py-24 bg-white relative border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[44px] font-[700] tracking-tight text-gray-900 border-none">
            Our Clients
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {CLIENTS.map((client, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              key={idx}
              className="group border border-gray-200 bg-white aspect-[4/3] flex flex-col items-center justify-center p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-default"
            >
              {/* Mock Logo Representations based on the provided image style */}
              <div className="flex flex-col items-center justify-center text-center">
                {/* Generic icon shape placeholder above text */}
                <div className={`w-10 h-10 mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300 ${client.color}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 22H22L12 2Z" className="opacity-20" />
                    <path d="M12 8L6 20H18L12 8Z" className={client.accent} />
                  </svg>
                </div>
                <h3 className={`font-heading font-[800] text-[16px] md:text-[20px] uppercase leading-none tracking-tight ${client.color}`}>
                  {client.name}
                </h3>
                <p className={`text-[9px] md:text-[10px] uppercase font-[700] tracking-[0.1em] mt-1 opacity-70 ${client.color}`}>
                  {client.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
