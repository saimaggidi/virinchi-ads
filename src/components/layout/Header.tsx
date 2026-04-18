import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? "py-4 bg-[#050505]/95 backdrop-blur-md shadow-lg border-b border-white/5" : "py-6 bg-transparent"
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-[12px]">
            {/* Logo Icon based on uploaded image */}
            <div className="w-[36px] h-[36px] flex items-center justify-center shrink-0 relative">
               <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                 {/* Orange Segment */}
                 <path d="M25 80 V35 L40 50 V80 Z" fill="#F37021" />
                 <path d="M25 35 L40 20 V35 Z" fill="#F37021" />
                 {/* Teal Segment */}
                 <path d="M35 55 L75 20 V35 L35 70 Z" fill="#00A99D" />
                 {/* Red Segment */}
                 <path d="M25 65 L65 30 V45 L25 80 Z" fill="#ED1C24" />
                 {/* Green Segment */}
                 <path d="M75 20 V65 L60 50 V20 Z" fill="#39B54A" />
                 <path d="M75 65 L60 80 V65 Z" fill="#39B54A" />
               </svg>
            </div>
            <span className="font-heading font-bold text-[24px] tracking-widest text-white uppercase">
              Virinchi Ads
            </span>
          </Link>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "About", path: "/about" }
            ].map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`text-[13px] font-[500] uppercase tracking-[0.1em] transition-colors ${
                  location.pathname === item.path ? "text-brand-orange" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link 
              to="/contact"
              className="px-[28px] py-[14px] bg-white text-black font-[700] rounded-full text-[13px] uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop to close when clicking outside */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-virinchi-dark/40 backdrop-blur-sm z-[55]"
            />
            
            <motion.div 
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed top-0 left-0 right-0 z-[60] pt-24 pb-12 px-8 bg-virinchi-dark/95 backdrop-blur-2xl border-b border-white/10 flex flex-col items-center text-center shadow-2xl"
            >
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                <span className="font-heading font-black text-2xl text-white tracking-tighter">Virinchi Ads</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex flex-col gap-8 items-center mt-12">
                {[
                    { name: "Home", path: "/" },
                    { name: "Services", path: "/services" },
                    { name: "About", path: "/about" },
                    { name: "Contact Us", path: "/contact" }
                ].map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-3xl font-[800] transition-all tracking-tighter ${location.pathname === item.path ? "text-brand-orange scale-110" : "text-white/80 hover:text-white"}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
