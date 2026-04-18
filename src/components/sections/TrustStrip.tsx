import { motion } from "motion/react";

export function TrustStrip() {
  const logos = [
    { name: "TechCorp", color: "#F37021" },
    { name: "HealthPlus", color: "#00A99D" },
    { name: "EduGlobal", color: "#ED1C24" },
    { name: "Nexus AI", color: "#39B54A" },
    { name: "Growth Matrix", color: "#7B2CBF" },
    { name: "Blue Sphere", color: "#0077B6" },
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-[20px] md:text-[24px] font-[700] tracking-tight text-gray-900">
          Trusted by innovative global companies
        </h2>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-16 md:gap-24 items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-lg"
                style={{ backgroundColor: logo.color }}
              >
                {logo.name[0]}
              </div>
              <span className="font-heading font-bold text-[18px] tracking-tight text-gray-800">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
