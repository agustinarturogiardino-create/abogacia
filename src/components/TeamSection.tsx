import React from 'react';
import { PROFESSIONALS } from '../data/lawFirmData';
import { ShieldCheck } from 'lucide-react';

interface TeamSectionProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="nuestro-equipo" className="py-20 bg-[#0A0A0A] text-white relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            NUESTROS PROFESIONALES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Un equipo especializado en proteger y recuperar tu patrimonio.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Abogados y Escribanos integrados en una firma boutique enfocada exclusivamente en Derechos Reales, propiedades e inmuebles.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {PROFESSIONALS.map((prof) => (
            <div
              key={prof.id}
              className="bg-[#141414] border border-stone-800 hover:border-[#A38A5E] shadow-sm transition-all duration-300 flex flex-col group"
            >
              {/* Photo Header */}
              <div className="relative h-80 sm:h-96 overflow-hidden bg-stone-900">
                <img
                  src={prof.image}
                  alt={`${prof.name} - ${prof.title} especializado en Derechos Reales`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="inline-block bg-[#A38A5E] text-white font-bold text-[10px] uppercase tracking-widest px-2.5 py-1">
                    {prof.title}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-white mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                    {prof.name}
                  </h3>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-[#A38A5E] font-serif-display font-medium text-sm sm:text-base italic leading-snug">
                    {prof.specialty}
                  </p>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {prof.bio}
                  </p>
                </div>

                {/* Matriculas Badges */}
                <div className="pt-4 border-t border-stone-800 space-y-2">
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A38A5E]" />
                    <span>Acreditación Profesional</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {prof.matriculas.map((mat, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#1E1E1E] text-stone-200 border border-stone-800 px-3 py-1 font-medium"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Team Banner Summary */}
        <div className="mt-12 text-center max-w-3xl mx-auto bg-[#141414] border border-stone-800 p-6 shadow-sm">
          <p className="text-stone-200 text-sm font-serif-display leading-relaxed">
            <strong>Abogados y Escribanos especializados en propiedades y patrimonio.</strong><br />
            Trabajamos como un equipo unificado para brindarte doble perspectiva jurídico-procesal y técnico-notarial en cada análisis de título e inmueble.
          </p>
        </div>

      </div>
    </section>
  );
};

