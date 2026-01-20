
import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-rustic-gold selection:text-rustic-wood overflow-x-hidden">
      {/* Fondo animado (Z-index 0) */}
      <Background />
      
      {/* Contenido (Z-index 10) */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          {/* El Hero es el inicio (Accueil) */}
          <Hero />
          
          {/* ID centralizado para la sección About */}
          <section id="about" className="bg-rustic-parchment py-24 md:py-40 relative z-20">
            {/* Gradiente de integración */}
            <div className="absolute top-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-b from-transparent to-rustic-parchment -translate-y-full"></div>
            <About />
          </section>

          {/* ID centralizado para la sección de Pedidos */}
          <section id="order" className="bg-rustic-wood py-24 md:py-40 px-4 relative z-20">
            <OrderSection />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
