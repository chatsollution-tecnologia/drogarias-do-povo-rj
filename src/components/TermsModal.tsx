import React, { useEffect } from 'react';
import { X, FileText } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
      aria-labelledby="terms-modal-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-red-600" />
            <h3 id="terms-modal-title" className="text-lg font-bold text-slate-900">
              Termos de Uso
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            id="close-terms-modal"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            O conteúdo disponibilizado neste site possui caráter meramente <strong>institucional e informativo</strong>.
          </p>

          <p>
            <strong>Confirmação de Informações:</strong> Produtos, preços, disponibilidade de estoque, condições de entrega e atendimento devem ser confirmados diretamente com cada uma das lojas indicadas.
          </p>

          <p>
            <strong>Atualização de Conteúdo:</strong> As informações apresentadas nesta página podem ser alteradas ou atualizadas a qualquer momento, sem prévio aviso.
          </p>

          <p>
            <strong>Links Externos:</strong> Os links para serviços externos (como WhatsApp e Google Maps) seguem as regras, políticas e termos de uso de seus respectivos fornecedores.
          </p>

          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs font-medium">
            <strong>Aviso Legal Importante:</strong> Este site não oferece aconselhamento médico, diagnóstico ou prescrição de tratamentos. Para orientações de saúde, consulte sempre um profissional qualificado.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            id="btn-close-terms-modal-bottom"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
