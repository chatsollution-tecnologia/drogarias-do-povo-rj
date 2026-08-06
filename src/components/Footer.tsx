import React from 'react';
import { STORES } from '../data/stores';
import { Building2, MapPin, MessageCircle, FileText } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header inside Footer */}
        <div className="mb-8 pb-8 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Drogarias do Povo <span className="text-red-500">RJ</span>
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Informações institucionais das nossas unidades.
            </p>
          </div>

          {/* Legal Links Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              id="footer-privacy-btn"
              onClick={onOpenPrivacy}
              className="text-sm font-semibold text-slate-300 hover:text-white underline underline-offset-4 decoration-red-500/50 hover:decoration-red-500 transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span className="text-slate-600">•</span>
            <button
              type="button"
              id="footer-terms-btn"
              onClick={onOpenTerms}
              className="text-sm font-semibold text-slate-300 hover:text-white underline underline-offset-4 decoration-red-500/50 hover:decoration-red-500 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>

        {/* Corporate Grid - 3 Stores details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {STORES.map((store) => (
            <div
              key={store.id}
              id={`footer-store-${store.id}`}
              className="p-5 bg-slate-800/50 rounded-lg border border-slate-750/80 space-y-3"
            >
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                {store.name}
              </h4>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Razão Social: <strong className="text-slate-200">{store.razaoSocial}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>CNPJ: <strong className="text-slate-200">{store.cnpj}</strong></span>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </div>

                <div className="flex items-center gap-2 pt-1 text-emerald-400 font-medium">
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <a
                    href={store.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp: {store.whatsApp}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright notice */}
        <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Drogarias do Povo RJ. Todos os direitos reservados. Site estático institucional.</p>
        </div>
      </div>
    </footer>
  );
};
