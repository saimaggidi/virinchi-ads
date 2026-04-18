import { motion } from "motion/react";
import { MessageSquare, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-virinchi-dark overflow-hidden text-white">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 blur-[150px] mix-blend-screen animate-float" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-brand-teal/10 blur-[150px] mix-blend-screen animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-20">
          <div className="w-full lg:w-[45%]">
            <span className="text-brand-orange font-[700] tracking-[0.2em] text-[12px] uppercase mb-4 block">Let's Connect</span>
            <h2 className="text-[32px] md:text-[64px] font-[800] leading-tight tracking-tight mb-6">
              Ready to <span className="text-gradient-red">Elevate</span> Your Brand?
            </h2>
            <p className="text-gray-400 text-[16px] md:text-[18px] mb-8 md:mb-12 max-w-md leading-relaxed">
              Partner with Virinchi Ads to create campaigns that connect, convert, and scale. Let's discuss your next big thing.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] font-[700] text-gray-500 mb-1">Email Us</h4>
                  <a href="mailto:hello@virinchiads.com" className="text-[16px] md:text-[20px] font-bold hover:text-brand-orange transition-colors">hello@virinchiads.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-teal" />
                </div>
                <div>
                  <h4 className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] font-[700] text-gray-500 mb-1">Call Us</h4>
                  <a href="tel:+918000000000" className="text-[16px] md:text-[20px] font-bold hover:text-brand-teal transition-colors">+91 8000 000 000</a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[55%] pt-8 lg:pt-0">
            <h3 className="text-[24px] font-bold mb-6">Send a Message</h3>
            
            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-[600] uppercase tracking-wider text-gray-400 pl-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-all text-white placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-[600] uppercase tracking-wider text-gray-400 pl-1">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-all text-white placeholder:text-gray-600"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-[600] uppercase tracking-wider text-gray-400 pl-1">How can we help?</label>
                <textarea 
                  rows={3} 
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-all resize-none text-white placeholder:text-gray-600"
                ></textarea>
              </div>
              
              <div className="flex flex-col gap-3 pt-2">
                <button className="w-full bg-brand-orange text-white py-3 rounded-xl font-[700] text-[15px] hover:shadow-[0_0_20px_rgba(243,112,33,0.4)] transition-all flex justify-center items-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </button>
                <button className="w-full bg-[#25D366] text-white py-3 rounded-xl font-[700] text-[15px] hover:bg-[#20b858] transition-all flex justify-center items-center gap-2">
                  WhatsApp <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
