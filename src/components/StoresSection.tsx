import React from 'react';
import { STORES } from '../data/stores';
import { StoreCard } from './StoreCard';

export const StoresSection: React.FC = () => {
  return (
    <section id="nossas-lojas" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Nossas Lojas
          </h2>
          <p className="text-base text-slate-600">
            Conheça nossas três unidades preparadas para atender você com dedicação e comodidade.
          </p>
        </div>

        {/* Grid of 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {STORES.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </section>
  );
};
