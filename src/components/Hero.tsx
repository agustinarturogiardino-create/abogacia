import React from 'react';
import { ArrowRight, Search, Shield, Building2, MapPin, Scale, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGES } from '../data/lawFirmData';

interface HeroProps {
  onOpenConsultation: (prefill?: string) => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenAssessment }) => {
  return (
    <section id="inicio" className="relative bg-[#F5F2ED] text-[#1A1A1A] overflow-hidden py-16 md:py-24 border-b border-black/10">
      {/* Background Architectural Accent */}
      <div className="absolute top-12 right-12 w-96 h-96 bg-black/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-8 left-12 w-64 h-64 bg-[#A38A5E]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Brand Pill */}
            <div>
              <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-3">
                Abogados y Escribanos · Especialistas en Inmuebles
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-[#0A0A0A]" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Tenés derechos sobre una propiedad que{' '}
              <span className="italic font-normal text-[#A38A5E]">no podés recuperar?</span>
            </h1>

            {/* Tagline Badge */}
            <div className="inline-block border-l-2 border-[#A38A5E] pl-4 py-1">
              <p className="text-stone-700 font-serif-display text-lg sm:text-xl italic">
                “Recuperamos propiedades. Hacemos valer derechos.”
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Investigamos propiedades, analizamos derechos hereditarios y desarrollamos estrategias jurídicas para recuperar inmuebles y hacer valer derechos patrimoniales.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenConsultation('Creo que tengo derechos hereditarios')}
                className="px-8 py-4 bg-[#0A0A0A] hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Tengo Derechos Hereditarios</span>
                <ArrowRight className="w-4 h-4 text-[#A38A5E]" />
              </button>

              <button
                onClick={() => onOpenConsultation('Quiero recuperar una propiedad')}
                className="px-8 py-4 border border-black/20 text-[#0A0A0A] hover:bg-black/5 font-bold text-xs uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Recuperar mi Propiedad</span>
              </button>
            </div>

            {/* Interactive Quick Assessment Callout */}
            <div className="pt-1">
              <button
                onClick={onOpenAssessment}
                className="text-xs text-stone-600 hover:text-[#A38A5E] underline underline-offset-4 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-[#A38A5E]" />
                <span>¿Inseguro sobre tu situación? Realizá la evaluación rápida de caso en 3 pasos</span>
              </button>
            </div>

            {/* Location & Attendance Footer */}
            <div className="mt-8 flex flex-wrap gap-8 border-t border-black/10 pt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Atención Presencial</p>
                <p className="text-xs font-semibold text-[#0A0A0A] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#A38A5E]" />
                  Sarmiento 343, Bahía Blanca
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Consultas Virtuales</p>
                <p className="text-xs font-semibold text-[#0A0A0A] flex items-center gap-1">
                  <Scale className="w-3.5 h-3.5 text-[#A38A5E]" />
                  Cobertura en todo el país
                </p>
              </div>
            </div>

          </div>

          {/* Right Hero Feature Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#0A0A0A] text-white p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Building2 className="w-24 h-24 text-white" />
              </div>

              <div>
                <span className="text-[10px] text-[#A38A5E] font-bold uppercase tracking-[0.3em] block mb-2">
                  ESTUDIO JURÍDICO Y NOTARIAL
                </span>
                <h3 className="text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>
                  Atención Especializada
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Investigación patrimonial y defensa de la propiedad
                </p>
              </div>

              <div className="space-y-4 pt-2 text-xs border-t border-stone-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#171717] text-[#A38A5E] border border-stone-800 shrink-0">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-200 uppercase tracking-wider">01. Investigación</h4>
                    <p className="text-stone-400 text-[11px] mt-0.5">Búsqueda de antepasados, títulos y antecedentes dominiales.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#171717] text-[#A38A5E] border border-stone-800 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-200 uppercase tracking-wider">02. Derechos Hereditarios</h4>
                    <p className="text-stone-400 text-[11px] mt-0.5">Análisis sucesorio y evaluación de compra de derechos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#171717] text-[#A38A5E] border border-stone-800 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-200 uppercase tracking-wider">03. Reivindicación</h4>
                    <p className="text-stone-400 text-[11px] mt-0.5">Recuperación efectiva de inmuebles en poder de terceros.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 text-center">
                <span className="text-[11px] text-[#A38A5E] font-medium tracking-wider uppercase">
                  Sarmiento 343 · Bahía Blanca
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

