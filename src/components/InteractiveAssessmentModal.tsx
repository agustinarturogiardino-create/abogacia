import React, { useState } from 'react';
import { X, CheckCircle2, ChevronRight, ArrowLeft, ShieldCheck } from 'lucide-react';

interface InteractiveAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (summary: string, situation: string) => void;
}

export const InteractiveAssessmentModal: React.FC<InteractiveAssessmentModalProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  const [step, setStep] = useState<number>(1);
  const [q1, setQ1] = useState<string>('');
  const [q2, setQ2] = useState<string>('');
  const [q3, setQ3] = useState<string>('');

  if (!isOpen) return null;

  const handleFinish = () => {
    let suggestedSituation = 'Creo que tengo derechos hereditarios';
    if (q1.includes('ocupada') || q2.includes('Ocupada') || q3.includes('Recuperar')) {
      suggestedSituation = 'Tengo una propiedad ocupada';
    } else if (q3.includes('venta') || q3.includes('adquisición')) {
      suggestedSituation = 'Quiero consultar por la venta de derechos hereditarios';
    } else if (q2.includes('documentación')) {
      suggestedSituation = 'Encontré una propiedad de mis antepasados';
    }

    const summaryText = `[EVALUACIÓN DE CASO] 1. Vínculo: ${q1} | 2. Estado: ${q2} | 3. Objetivo: ${q3}`;
    onComplete(summaryText, suggestedSituation);
  };

  const reset = () => {
    setStep(1);
    setQ1('');
    setQ2('');
    setQ3('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-black/10 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 text-[#1A1A1A]">
        
        {/* Close Button */}
        <button
          onClick={() => {
            reset();
            onClose();
          }}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-800 p-2 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-black/10 pb-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A38A5E]" />
            EVALUADOR RÁPIDO DE CASO
          </div>
          <h3 className="text-2xl font-light text-[#0A0A0A]" style={{ fontFamily: 'Georgia, serif' }}>
            Diagnóstico de Situación Patrimonial
          </h3>
          <p className="text-xs text-stone-500">
            Paso {step} de 3 — Respondé para recibir orientación personalizada de nuestro equipo.
          </p>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="font-serif-display font-semibold text-base text-[#0A0A0A]">
              1. ¿Cuál es tu vínculo con la propiedad o patrimonio?
            </h4>
            <div className="space-y-2">
              {[
                'Tengo un antepasado o familiar que tenía una propiedad',
                'Soy propietario registrado pero el inmueble está ocupado',
                'Heredé un inmueble pero no puedo ejercer la posesión',
                'No sé con certeza qué derechos me corresponden'
              ].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setQ1(opt);
                    setStep(2);
                  }}
                  className={`w-full text-left p-3.5 border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    q1 === opt
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-[#F5F2ED] text-stone-700 border-black/10 hover:border-[#A38A5E]'
                  }`}
                >
                  <span>{opt}</span>
                  <ChevronRight className="w-4 h-4 text-[#A38A5E]" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="font-serif-display font-semibold text-base text-[#0A0A0A]">
              2. ¿En qué estado se encuentra la propiedad o los antecedentes?
            </h4>
            <div className="space-y-2">
              {[
                'Ocupada por terceros, ocupantes ilegítimos o desconociendo titularidad',
                'Sucesión nunca iniciada o inconclusa desde hace años',
                'Poseo escrituras, boletos o planos antiguos de mi familia',
                'Tengo referencias familiares pero no dispongo de documentación exacta'
              ].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setQ2(opt);
                    setStep(3);
                  }}
                  className={`w-full text-left p-3.5 border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    q2 === opt
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-[#F5F2ED] text-stone-700 border-black/10 hover:border-[#A38A5E]'
                  }`}
                >
                  <span>{opt}</span>
                  <ChevronRight className="w-4 h-4 text-[#A38A5E]" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="font-serif-display font-semibold text-base text-[#0A0A0A]">
              3. ¿Cuál es tu objetivo prioritario?
            </h4>
            <div className="space-y-2">
              {[
                'Recuperar la posesión efectiva del inmueble mediante acción legal',
                'Evaluar la venta / adquisición de mis derechos hereditarios',
                'Iniciar la investigación de antecedentes para saber si existen bienes',
                'Regularizar los títulos y el trámite sucesorio del inmueble'
              ].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setQ3(opt);
                    handleFinish();
                  }}
                  className={`w-full text-left p-3.5 border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    q3 === opt
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-[#F5F2ED] text-stone-700 border-black/10 hover:border-[#A38A5E]'
                  }`}
                >
                  <span>{opt}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#A38A5E]" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="pt-4 border-t border-black/10 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="text-xs font-bold text-stone-600 hover:text-[#0A0A0A] flex items-center gap-1 cursor-pointer uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>
          ) : <div />}

          <span className="text-[11px] text-stone-400">
            Derecho en Propiedades · Confidencial
          </span>
        </div>

      </div>
    </div>
  );
};

