import React from 'react';
import { COMPLEMENTARY_SERVICES } from '../data/lawFirmData';
import { ArrowRight } from 'lucide-react';

interface ComplementaryServicesProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const ComplementaryServices: React.FC<ComplementaryServicesProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-[#F5F2ED] text-[#1A1A1A] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            SOPORTE Y COMPLEMENTO
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#0A0A0A]" style={{ fontFamily: 'Georgia, serif' }}>
            Servicios Jurídicos y Notariales Complementarios
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Herramientas e intervenciones especializadas que dan soporte integral a los procesos de herencia y recuperación inmobiliaria.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COMPLEMENTARY_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/10 hover:border-[#A38A5E] p-6 transition-all duration-200 shadow-sm flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-xs font-mono">
                  0{idx + 1}
                </div>
                <h3 className="font-serif-display font-semibold text-base text-[#0A0A0A] group-hover:text-[#A38A5E] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-black/10">
                <button
                  onClick={() => onOpenConsultation(`Consulta por servicio: ${srv.title}`)}
                  className="text-xs font-bold text-[#0A0A0A] hover:text-[#A38A5E] flex items-center gap-1 transition-colors cursor-pointer tracking-wider uppercase"
                >
                  <span>CONSULTAR ESTE SERVICIO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

