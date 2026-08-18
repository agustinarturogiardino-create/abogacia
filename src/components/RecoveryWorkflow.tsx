import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

interface RecoveryWorkflowProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const RecoveryWorkflow: React.FC<RecoveryWorkflowProps> = ({ onOpenConsultation }) => {
  const steps = [
    { title: 'INVESTIGACIÓN', desc: 'Búsqueda genealógica y dominial de antecedentes' },
    { title: 'SUCESIÓN', desc: 'Iniciación y tramitación del proceso sucesorio' },
    { title: 'DETERMINACIÓN DE HEREDEROS', desc: 'Declaratoria judicial de herederos y legitimación' },
    { title: 'ANÁLISIS DE TÍTULOS', desc: 'Estudio de títulos por Abogados y Escribanos' },
    { title: 'REIVINDICACIÓN', desc: 'Demanda de acción real reivindicatoria si aplica' },
    { title: 'RECUPERACIÓN DEL INMUEBLE', desc: 'Obtención judicial de la posesión efectiva' },
    { title: 'DESALOJO (SI CORRESPONDE)', desc: 'Ejecución de la restitución del bien' },
    { title: 'REGULARIZACIÓN', desc: 'Inscripción dominial y saneamiento legal completo' },
  ];

  return (
    <section className="py-20 bg-[#0A0A0A] text-white relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            ESTRATEGIA 360°
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Nos ocupamos de todo el proceso.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Desde la primera sospecha sobre la existencia de una propiedad hasta la entrega efectiva de la posesión y su correspondiente inscripción escrituraria.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-[#141414] border border-stone-800 hover:border-[#A38A5E] p-5 text-center transition-all duration-300 h-full flex flex-col justify-between shadow-sm">
                  <div className="space-y-2">
                    <span className="inline-block text-[9px] font-mono font-bold bg-[#1E1E1E] text-[#A38A5E] px-2 py-0.5 uppercase tracking-widest">
                      ETAPA 0{idx + 1}
                    </span>
                    <h3 className="font-serif-display font-bold text-xs text-stone-200 tracking-wider uppercase">
                      {step.title}
                    </h3>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow connector for flow */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#A38A5E] opacity-60">
                    <span className="text-xs font-bold font-mono">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Clarification Callout Box */}
          <div className="mt-12 bg-[#141414] border border-stone-800 p-6 flex items-start gap-4 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#A38A5E] shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h4 className="font-light text-base text-white" style={{ fontFamily: 'Georgia, serif' }}>
                Análisis Individualizado de Cada Situación
              </h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                <strong>Aclaración importante:</strong> No todos los casos requieren todas estas etapas. Analizamos cada situación particular para determinar qué procedimientos específicos corresponden en función de los títulos existentes, las pruebas disponibles y la situación de los ocupantes.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenConsultation('Quiero recuperar una propiedad')}
              className="bg-[#A38A5E] hover:bg-[#8C7449] text-white font-bold text-xs uppercase tracking-[0.15em] py-4 px-8 transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>EVALUAR MI CASO DE RECUPERACIÓN</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

