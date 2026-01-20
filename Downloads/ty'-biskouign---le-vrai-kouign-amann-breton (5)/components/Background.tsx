
import React, { useState, useEffect, useMemo } from 'react';

const Background: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  
  // URL del WebP animado con cache busting
  const animatedUrl = useMemo(() => 
    `https://i.ibb.co/rRg6TwcL/Video-Project-ezgif-com-crop.webp?t=${Date.now()}`, 
  []);

  // URL de la imagen estática final
  const STATIC_IMAGE = "https://i.ibb.co/Y4DckC8M/93e36db3cda622d03c01708fe28d3fc5.jpg";

  useEffect(() => {
    // La animación dura exactamente 5 segundos
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* CAPA 0: Imagen Estática de Base */}
      <img
        src={STATIC_IMAGE}
        alt=""
        className="absolute inset-0 w-full h-full object-cover grayscale-[10%] sepia-[20%] scale-110"
        style={{ zIndex: 10 }}
      />

      {/* CAPA 1: WebP Animado */}
      <img
        src={animatedUrl}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out scale-110 ${
          showAnimation ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 20 }}
      />

      {/* CAPA 2: Overlay Gradiente - Tinte Rústico - Ajustado para legibilidad móvil */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-rustic-wood/80 via-black/30 to-rustic-wood/70 md:via-black/10"
        style={{ zIndex: 30 }}
      />
      
      {/* Grain effect texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-[35] bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
    </div>
  );
};

export default Background;
