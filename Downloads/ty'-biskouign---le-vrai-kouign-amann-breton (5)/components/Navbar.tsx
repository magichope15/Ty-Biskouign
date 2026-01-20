
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Home, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goldFilter = "invert(68%) sepia(59%) saturate(415%) hue-rotate(5deg) brightness(91%) contrast(87%)";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-rustic-parchment/98 py-2 shadow-lg border-b border-rustic-wood/10' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo Lado Izquierdo */}
        <a href="#" className="flex items-center gap-3 md:gap-4 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-lg p-1 group-hover:bg-rustic-wood/5 transition-colors border border-white/10">
            <img 
              src="https://i.ibb.co/m0fXmR1/logo-breton.png" 
              alt="Ty' Biskouign Logo" 
              className="w-full h-full object-contain"
              style={{ filter: scrolled ? 'none' : goldFilter }}
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors ${scrolled ? 'text-rustic-wood' : 'text-white'}`}>Ty' Biskouign</span>
            <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-sans font-bold ${scrolled ? 'text-rustic-gold' : 'text-rustic-gold'}`}>Artisanat Rural</span>
          </div>
        </a>

        {/* Links Escritorio */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className={`font-sans font-semibold text-xs tracking-widest uppercase transition-colors ${scrolled ? 'text-rustic-wood/60 hover:text-rustic-gold' : 'text-white/80 hover:text-rustic-gold'}`}>Accueil</a>
          <a href="#about" className={`font-sans font-semibold text-xs tracking-widest uppercase transition-colors ${scrolled ? 'text-rustic-wood/60 hover:text-rustic-gold' : 'text-white/80 hover:text-rustic-gold'}`}>L'Histoire</a>
          <a 
            href="#order" 
            className={`px-8 py-3 rounded-none font-bold transition-all flex items-center gap-2 transform active:scale-95 border-2 ${scrolled ? 'bg-rustic-wood text-white border-rustic-wood hover:bg-rustic-gold hover:border-rustic-gold' : 'bg-rustic-gold text-rustic-wood border-rustic-gold hover:bg-white hover:text-rustic-wood hover:border-white'}`}
          >
            <ShoppingCart size={16} />
            <span className="font-sans text-xs tracking-widest uppercase">Commander</span>
          </a>
        </div>

        {/* Botón Menú Móvil */}
        <button 
          className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'bg-rustic-wood/5 text-rustic-wood' : 'bg-white/10 text-white'}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Móvil Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 bg-rustic-parchment z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
               <span className="font-serif text-2xl text-rustic-wood font-bold italic">Ty' Biskouign</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-rustic-wood">
                <X size={32} />
               </button>
            </div>
            
            <div className="flex flex-col gap-6">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-6 bg-white shadow-sm border border-rustic-wood/5 rounded-2xl text-rustic-wood font-serif text-2xl active:bg-rustic-gold/10">
                <Home className="text-rustic-gold" /> Accueil
              </a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-6 bg-white shadow-sm border border-rustic-wood/5 rounded-2xl text-rustic-wood font-serif text-2xl active:bg-rustic-gold/10">
                <Info className="text-rustic-gold" /> L'Histoire
              </a>
              <a href="#order" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-6 bg-rustic-wood text-white rounded-2xl font-serif text-2xl shadow-xl active:scale-95 transition-transform">
                <ShoppingCart className="text-rustic-gold" /> Commander
              </a>
            </div>

            <div className="mt-auto text-center pb-8">
              <p className="text-rustic-gold font-serif italic mb-2 text-lg">Artisanat Breton en Suisse</p>
              <p className="text-[10px] uppercase tracking-widest text-rustic-wood/40">Clarens • Vevey • Riviera</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
