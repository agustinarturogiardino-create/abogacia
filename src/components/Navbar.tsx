import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CONTACT_INFO } from '../data/lawFirmData';

interface NavbarProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Derechos Hereditarios', href: '#derechos-hereditarios' },
    { label: 'Juicios Reivindicatorios', href: '#juicios-reivindicatorios' },
    { label: 'Recuperación Integral', href: '#recuperacion-integral' },
    { label: 'Cómo Trabajamos', href: '#como-trabajamos' },
    { label: 'Nuestro Equipo', href: '#nuestro-equipo' },
    { label: 'Preguntas Frecuentes', href: '#preguntas-frecuentes' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      {/* Top micro-bar */}
      <div className="bg-[#0A0A0A] text-stone-300 text-[11px] py-2 px-6 border-b border-stone-800 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#A38A5E]" />
              {CONTACT_INFO.address}
            </span>
            <span className="text-stone-700">|</span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Phone className="w-3.5 h-3.5 text-[#A38A5E]" />
              {CONTACT_INFO.phones.join(' · ')}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappPrimary}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#20bd5a] font-semibold flex items-center gap-1.5 uppercase tracking-wider text-[11px] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp Directo: +54 9 291 508-8831</span>
            </a>
            <span className="text-stone-700">|</span>
            <span className="text-[#A38A5E] font-medium flex items-center gap-1 uppercase tracking-wider text-[10px]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A38A5E]" />
              Atención Presencial y Virtual
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg py-3 border-b border-stone-800'
            : 'bg-[#0A0A0A] py-4 border-b border-stone-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="group flex items-center space-x-3">
            <img 
              src="/logo.svg" 
              alt="Derecho en Propiedades" 
              className="h-8 sm:h-9 w-auto object-contain transition-opacity group-hover:opacity-85 shrink-0" 
            />
            <div className="flex flex-col">
              <span className="text-white font-serif-display font-semibold text-lg sm:text-xl tracking-tight leading-none">
                DERECHO EN PROPIEDADES
              </span>
              <span className="text-stone-400 text-[10px] uppercase tracking-[0.2em] font-semibold mt-0.5">
                Abogados y Escribanos · Derechos Reales
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-[11px] font-medium tracking-widest uppercase text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#A38A5E] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappPrimary}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] uppercase tracking-[0.12em] py-2.5 px-4 transition-colors flex items-center gap-2 shadow-sm"
              title="Mensaje directo a WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="bg-[#A38A5E] hover:bg-[#8C7449] text-white font-bold text-[11px] uppercase tracking-[0.15em] py-2.5 px-5 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Consultar Caso</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-stone-200 hover:text-[#A38A5E] p-2 border border-stone-800"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0A0A0A] border-t border-stone-800 px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-fadeIn">
            <div className="py-2.5 px-3 bg-[#171717] border border-stone-800 text-xs text-stone-300 space-y-1">
              <p className="font-semibold text-[#A38A5E]">Sarmiento 343 — Bahía Blanca</p>
              <p className="text-stone-400">Consultas presenciales y virtuales en todo el país</p>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-stone-200 hover:text-[#A38A5E] font-medium text-xs uppercase tracking-wider py-2.5 border-b border-stone-800"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappPrimary}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Escribir por WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#A38A5E] hover:bg-[#8C7449] text-white font-bold text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2"
              >
                <span>Consultar Mi Caso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

