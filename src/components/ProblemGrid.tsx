import React from 'react';
import { PROBLEM_SCENARIOS } from '../data/lawFirmData';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';

interface ProblemGridProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const ProblemGrid: React.FC<ProblemGridProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-[#F5F2ED] text-[#1A1A1A] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            SITUACIONES FRECUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0A0A0A]" style={{ fontFamily: 'Georgia, serif' }}>
            ¿Te Identificás con Alguna de Estas Situaciones?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Hacé clic en el caso que mejor describa tu consulta actual para recibir orientación inicial personalizada.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_SCENARIOS.map((scenario) => (
            <div
              key={scenario.id}
              className="bg-white border border-black/10 hover:border-[#A38A5E] p-6 shadow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 bg-[#F5F2ED] border border-black/10 text-[#A38A5E]">
                    {scenario.category}
                  </span>
                  <MessageSquareQuote className="w-5 h-5 text-[#A38A5E]" />
                </div>

                <h3 className="text-lg font-serif-display font-semibold text-[#0A0A0A] group-hover:text-[#A38A5E] transition-colors leading-snug">
                  {scenario.quote}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {scenario.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-black/10">
                <button
                  onClick={() => onOpenConsultation(`Consulta por situación: ${scenario.quote}`)}
                  className="w-full bg-[#0A0A0A] hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.15em] py-3 px-4 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>ANALIZAR MI SITUACIÓN</span>
                  <ArrowRight className="w-4 h-4 text-[#A38A5E]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

