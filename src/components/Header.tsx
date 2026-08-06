import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenPrivacy: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPrivacy }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs" id="header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Textual Umbrella Brand Name */}
          <a
            href="#inicio"
            id="brand-header-link"
            className="flex items-center gap-2 group"
          >
            <span className="w-3 h-7 bg-red-600 rounded-xs transition-transform group-hover:scale-y-110" />
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Drogarias do Povo <span className="text-red-600">RJ</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              id="nav-inicio"
              className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
            >
              Início
            </a>
            <a
              href="#nossas-lojas"
              id="nav-nossas-lojas"
              className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
            >
              Nossas lojas
            </a>
            <button
              type="button"
              id="nav-privacidade"
              onClick={onOpenPrivacy}
              className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors cursor-pointer"
            >
              Privacidade
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-100 flex flex-col gap-2 bg-white">
            <a
              href="#inicio"
              id="mobile-nav-inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-red-600 rounded-md"
            >
              Início
            </a>
            <a
              href="#nossas-lojas"
              id="mobile-nav-nossas-lojas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-red-600 rounded-md"
            >
              Nossas lojas
            </a>
            <button
              type="button"
              id="mobile-nav-privacidade"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrivacy();
              }}
              className="px-3 py-2 text-left text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-red-600 rounded-md cursor-pointer"
            >
              Privacidade
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
