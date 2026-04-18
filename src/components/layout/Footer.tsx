export function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-[12px] mb-8">
              {/* Logo Icon based on uploaded image */}
              <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0 relative">
                 <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                   <path d="M25 80 V35 L40 50 V80 Z" fill="#F37021" />
                   <path d="M25 35 L40 20 V35 Z" fill="#F37021" />
                   <path d="M35 55 L75 20 V35 L35 70 Z" fill="#00A99D" />
                   <path d="M25 65 L65 30 V45 L25 80 Z" fill="#ED1C24" />
                   <path d="M75 20 V65 L60 50 V20 Z" fill="#39B54A" />
                   <path d="M75 65 L60 80 V65 Z" fill="#39B54A" />
                 </svg>
              </div>
              <span className="font-heading font-bold text-[24px] tracking-widest text-white uppercase">
                Virinchi Ads
              </span>
            </div>
            <p className="text-gray-400 text-[16px] leading-[1.8]">
              Elevating brands through premium digital marketing, stunning visuals, and targeted performance campaigns.
            </p>
          </div>
          
          <div className="flex gap-20">
            <div>
              <h4 className="font-heading font-[800] text-white tracking-widest uppercase text-[13px] mb-6">Company</h4>
              <ul className="space-y-4">
                {["About Us", "Our Work", "Careers", "Contact"].map(link => (
                  <li key={link}>
                    <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white text-[15px] font-medium transition-colors">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 -ml-3 transition-all"></span> 
                       {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-[800] text-white tracking-widest uppercase text-[13px] mb-6">Services</h4>
              <ul className="space-y-4">
                {["Social Media", "Web Development", "SEO Optimization", "PPC Ads"].map(link => (
                  <li key={link}>
                    <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white text-[15px] font-medium transition-colors">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-teal opacity-0 -ml-3 transition-all"></span> 
                       {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-gray-600 text-[13px] font-[500] uppercase tracking-wider">
          <div>&copy; {new Date().getFullYear()} Virinchi Ads. All rights reserved.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
