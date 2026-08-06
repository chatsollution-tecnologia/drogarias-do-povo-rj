import React from 'react';
import { Store } from '../types';
import { MessageCircle, MapPin, Building2, FileText } from 'lucide-react';

interface StoreCardProps {
  store: Store;
}

export const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  const isMeta = store.banner === 'Drogaria Meta';

  return (
    <div
      id={`store-card-${store.id}`}
      className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full overflow-hidden"
    >
      {/* Flag Logo Container - White background, object-fit: contain */}
      <div className="bg-white p-6 border-b border-slate-100 flex items-center justify-center h-36 relative">
        <img
          src={store.bannerLogo}
          alt={`Logo ${store.banner} - ${store.name}`}
          className="max-h-24 max-w-full object-contain"
          loading="lazy"
        />
        {/* Flag Badge Tag */}
        <span
          className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full border ${
            isMeta
              ? 'bg-amber-100 text-amber-900 border-amber-300'
              : 'bg-red-50 text-red-800 border-red-200'
          }`}
        >
          Bandeira {store.banner}
        </span>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Unit Display Name */}
          <h3 className="text-xl font-bold text-slate-900 leading-snug">
            {store.name}
          </h3>

          {/* Full Address */}
          <div className="flex items-start gap-2.5 text-slate-700 text-sm leading-relaxed">
            <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <span>{store.address}</span>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
            {/* Razão Social */}
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="font-medium text-slate-800">{store.razaoSocial}</span>
            </div>

            {/* CNPJ */}
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-400 shrink-0" />
              <span>CNPJ: <strong className="text-slate-800 font-semibold">{store.cnpj}</strong></span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          {/* WhatsApp Button */}
          <a
            href={store.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`btn-whatsapp-${store.id}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 py-3 rounded-lg shadow-xs hover:shadow-sm transition-colors focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp ({store.whatsApp})</span>
          </a>

          {/* Google Maps Button */}
          <a
            href={store.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`btn-maps-${store.id}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-4 py-2.5 rounded-lg border border-slate-300 transition-colors focus:ring-2 focus:ring-slate-400 focus:outline-hidden"
          >
            <MapPin className="w-4 h-4 text-red-600" />
            <span>Como chegar</span>
          </a>
        </div>
      </div>
    </div>
  );
};
