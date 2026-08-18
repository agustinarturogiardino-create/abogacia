import React, { useState } from 'react';
import { INVESTIGATION_STEPS } from '../data/lawFirmData';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface InvestigationProcessProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const InvestigationProcess: React.FC<InvestigationProcessProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="como-trabajamos" className="py-20 bg-[#F5F2ED] text-[#1A1A1A] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            METODOLOGÍA EN 6 PASOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0A0A0A]" style={{ fontFamily: 'Georgia, serif' }}>
            Cómo Funciona la Investigación y Adquisición de Derechos
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Un procedimiento riguroso, confidencial y transparente conducido por Abogados y Escribanos especialistas.
          </p>
        </div>

        {/* Interactive Step Switcher & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left step selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {INVESTIGATION_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 transition-all duration-200 border flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#0A0A0A] text-white border-[#A38A5E] shadow-md'
                      : 'bg-white text-stone-700 border-black/10 hover:border-black/30 hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <span
                      className={`text-xs font-bold font-mono px-2.5 py-1 ${
                        isActive ? 'bg-[#A38A5E] text-white' : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="font-serif-display font-medium text-sm sm:text-base">
                      {step.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#A38A5E] translate-x-1' : 'text-stone-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Active Step Display Box */}
          <div className="lg:col-span-7 bg-white border border-black/10 p-8 sm:p-10 shadow-sm relative min-h-[380px] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <span className="text-[#A38A5E] font-mono text-2xl font-extrabold">
                  PASO {INVESTIGATION_STEPS[activeStep].number} / 06
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-[#F5F2ED] border border-black/10 text-stone-600">
                  FASE DE TRABAJO
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0A0A0A] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  {INVESTIGATION_STEPS[activeStep].title}
                </h3>
                <p className="text-stone-600 text-base leading-relaxed">
                  {INVESTIGATION_STEPS[activeStep].description}
                </p>
              </div>

              <div className="bg-[#F5F2ED] p-4 border border-black/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#A38A5E] shrink-0 mt-0.5" />
                <p className="text-xs text-stone-700">
                  Todas las actuaciones de investigación patrimonial están resguardadas por el secreto profesional y el análisis notarial correspondiente.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-500 font-medium">
                Paso seleccionado: {INVESTIGATION_STEPS[activeStep].title}
              </div>
              <button
                onClick={() => onOpenConsultation(`Consulta por Paso ${INVESTIGATION_STEPS[activeStep].number}: ${INVESTIGATION_STEPS[activeStep].title}`)}
                className="w-full sm:w-auto bg-[#0A0A0A] hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.15em] py-3.5 px-6 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>CONSULTAR ESTA FASE</span>
                <ArrowRight className="w-4 h-4 text-[#A38A5E]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="text-center pt-2">
          <p className="text-xs text-stone-500 italic max-w-xl mx-auto">
            Nota: Cada caso es evaluado individualmente. Las alternativas de compra de derechos hereditarios están sujetas al estudio previo de factibilidad documental y legal.
          </p>
        </div>

      </div>
    </section>
  );
};

