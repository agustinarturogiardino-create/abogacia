import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';

interface ImpactBannerProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const ImpactBanner: React.FC<ImpactBannerProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-[#0A0A0A] text-white relative overflow-hidden border-y border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A38A5E]/10 border border-[#A38A5E]/30 text-[#A38A5E]">
          <HelpCircle className="w-4 h-4 text-[#A38A5E]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">PREGUNTA CLAVE PATRIMONIAL</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white max-w-4xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
          ¿Y si tu familia dejó una propiedad que{' '}
          <span className="italic font-normal text-[#A38A5E]">
            nunca supiste que existía?
          </span>
        </h2>

        <p className="text-stone-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
          La investigamos. Analizamos tus derechos. Y te explicamos qué alternativas existen.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onOpenConsultation('Encontré una propiedad de mis antepasados')}
            className="bg-[#A38A5E] hover:bg-[#8C7449] text-white font-bold text-xs uppercase tracking-[0.15em] py-4 px-10 transition-colors inline-flex items-center gap-3 cursor-pointer group"
          >
            <span>CONSULTAR</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

