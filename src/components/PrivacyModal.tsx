import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-red-600" />
            <h3 id="privacy-modal-title" className="text-lg font-bold text-slate-900">
              Política de Privacidade
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            id="close-privacy-modal"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            Este site tem caráter estritamente <strong>institucional</strong>. Não possuímos cadastro, login ou formulários de coleta direta de dados pessoais em nossa plataforma.
          </p>

          <p>
            <strong>Serviços de Terceiros:</strong> Os botões para contato via WhatsApp e de localização no Google Maps direcionam o usuário para plataformas externas e de terceiros. A utilização desses serviços está sujeita às políticas de privacidade e termos de uso dos respectivos provedores.
          </p>

          <p>
            <strong>Atendimento via WhatsApp:</strong> Quaisquer informações compartilhadas voluntariamente pelo usuário ao iniciar uma conversa no WhatsApp serão utilizadas exclusivamente para responder ao atendimento solicitado.
          </p>

          <p>
            <strong>Lei Geral de Proteção de Dados (LGPD):</strong> Atuamos em conformidade com a LGPD (Lei nº 13.709/2018), respeitando a privacidade e a segurança dos usuários em todas as interações e serviços prestados.
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            id="btn-close-privacy-modal-bottom"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
