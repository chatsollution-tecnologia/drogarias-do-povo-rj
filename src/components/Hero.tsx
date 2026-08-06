import React from 'react';
import { Store as StoreIcon, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Yellow Accent Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <StoreIcon className="w-4 h-4 text-amber-400" />
          <span>Rede Institucional de Lojas</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Cuidado, economia e confiança perto de você
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto mb-8">
          Três lojas no Rio de Janeiro e em Duque de Caxias para atender você.
        </p>

        {/* Scroll Button */}
        <div>
          <a
            href="#nossas-lojas"
            id="hero-scroll-btn"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-base px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all focus:ring-4 focus:ring-red-500/50"
          >
            <span>Conhecer nossas lojas</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
