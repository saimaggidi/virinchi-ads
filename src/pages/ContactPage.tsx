import { motion } from "motion/react";
import { Contact } from "../components/sections/Contact";

export function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-virinchi-gray">
      {/* Page Header */}
      <div className="bg-[#050505] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-[800] mb-6 tracking-tight">Let's Talk</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Ready to elevate your brand? Reach out to us for a free consultation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Embedded Contact Component */}
      <div className="transform -translate-y-12">
        <Contact />
      </div>
    </div>
  );
}
