import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/lawFirmData';

interface FooterSectionProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#0A0A0A] text-white relative border-t-2 border-[#A38A5E]">
      
      {/* Big Closing Brand Statement Section */}
      <div className="py-16 bg-[#0A0A0A] border-b border-stone-800 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-stone-100 italic" style={{ fontFamily: 'Georgia, serif' }}>
            “Hay propiedades que se pierden. Hay derechos que se olvidan.{' '}
            <span className="text-[#A38A5E] not-italic">
              Nosotros los investigamos y los hacemos valer.
            </span>”
          </h2>

          <div className="space-y-3">
            <div className="flex justify-center">
              <img src="/logo.svg" alt="Derecho en Propiedades" className="h-10 sm:h-12 w-auto object-contain" />
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-white tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
              DERECHO EN PROPIEDADES
            </h3>
            <p className="text-xs sm:text-sm text-[#A38A5E] font-medium tracking-widest uppercase">
              Agustín Arturo Giardino — Abogado y Escribano
            </p>
            <p className="text-xs sm:text-sm text-[#A38A5E] font-medium tracking-widest uppercase">
              Julieta Berrojalbiz — Abogada y Escribana
            </p>
            <p className="text-xs text-stone-300 pt-1">
              Derechos Reales · Derechos Hereditarios · Propiedades
            </p>
            <p className="text-xs text-stone-400">
              Matrícula Provincia de Buenos Aires · Matrícula Federal
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-300 pt-2">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#A38A5E]" />
              Sarmiento 343 — Bahía Blanca, Buenos Aires
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#A38A5E]" />
              {CONTACT_INFO.phones.join(' · ')}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#A38A5E]" />
              {CONTACT_INFO.email}
            </span>
          </div>

          <p className="text-xs text-[#A38A5E] font-semibold tracking-wider uppercase">
            Consultas presenciales y virtuales · Atención en todo el país
          </p>

          <div className="pt-4">
            <button
              onClick={() => onOpenConsultation()}
              className="bg-[#A38A5E] hover:bg-[#8C7449] text-white font-bold text-xs uppercase tracking-[0.15em] py-4 px-10 transition-colors inline-flex items-center gap-3 cursor-pointer"
            >
              <span>CONSULTAR MI CASO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Footer Navigation & Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-xs text-stone-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} <strong>Derecho en Propiedades</strong>. Todos los derechos reservados.
        </div>
        <div className="flex flex-wrap gap-4 text-stone-300 font-medium">
          <a href="#inicio" className="hover:text-[#A38A5E]">Inicio</a>
          <a href="#derechos-hereditarios" className="hover:text-[#A38A5E]">Derechos Hereditarios</a>
          <a href="#juicios-reivindicatorios" className="hover:text-[#A38A5E]">Reivindicación</a>
          <a href="#nuestro-equipo" className="hover:text-[#A38A5E]">Equipo</a>
          <a href="#contacto" className="hover:text-[#A38A5E]">Contacto</a>
        </div>
      </div>

    </footer>
  );
};

