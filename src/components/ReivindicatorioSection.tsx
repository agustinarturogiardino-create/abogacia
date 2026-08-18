import React from 'react';
import { Shield, Lock, FileText, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface ReivindicatorioSectionProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const ReivindicatorioSection: React.FC<ReivindicatorioSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="juicios-reivindicatorios" className="py-20 bg-[#F5F2ED] text-[#1A1A1A] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
              DEFENSA DEL DOMINIO Y DE LA POSESIÓN
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0A0A0A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Tu propiedad está en manos de otra persona?
            </h2>

            <div className="p-4 bg-white border-l-2 border-[#A38A5E] space-y-2">
              <p className="text-stone-800 font-serif-display font-medium text-lg italic">
                “Ser titular de un inmueble no siempre significa tener actualmente su posesión.”
              </p>
            </div>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Cuando un propietario o sus sucesores no pueden ejercer la posesión de una propiedad, es fundamental analizar el título, los antecedentes dominiales y la situación de quien actualmente posee el inmueble.
            </p>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              La <strong>acción reivindicatoria</strong> constituye la herramienta principal del Código Civil y Comercial para procurar recuperar la posesión del inmueble cuando se cumplen los requisitos legales correspondientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-black/10 space-y-1">
                <div className="flex items-center gap-2 text-[#0A0A0A] font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-[#A38A5E]" />
                  Análisis de Títulos
                </div>
                <p className="text-xs text-stone-500">Verificamos la validez de escrituras, tracto abreviado y antecedentes dominiales.</p>
              </div>

              <div className="p-4 bg-white border border-black/10 space-y-1">
                <div className="flex items-center gap-2 text-[#0A0A0A] font-bold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4 text-[#A38A5E]" />
                  Situación Posesoria
                </div>
                <p className="text-xs text-stone-500">Evaluamos la calidad de la ocupación del tercero y los plazos legales.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation('Tengo una propiedad ocupada')}
                className="bg-[#0A0A0A] hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.15em] py-4 px-8 transition-colors flex items-center gap-3 cursor-pointer"
              >
                <span>ANALIZAR MI PROPIEDAD</span>
                <ArrowRight className="w-4 h-4 text-[#A38A5E]" />
              </button>
            </div>

          </div>

          {/* Right Column Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0A0A0A] text-white p-8 border border-stone-800 space-y-6 relative">
              <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                <div className="p-2.5 bg-[#171717] text-[#A38A5E] border border-stone-800">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-light text-xl text-white" style={{ fontFamily: 'Georgia, serif' }}>
                    Juicio Reivindicatorio vs Desalojo
                  </h3>
                  <span className="text-[10px] text-[#A38A5E] font-bold uppercase tracking-widest">Diferenciación legal estratégica</span>
                </div>
              </div>

              <div className="space-y-4 text-xs text-stone-300 leading-relaxed">
                <div className="bg-[#141414] p-4 border border-stone-800 space-y-2">
                  <h4 className="font-bold text-[#A38A5E] text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A38A5E]" />
                    Acción Reivindicatoria
                  </h4>
                  <p className="text-stone-400">
                    Se interpone fundada en el <strong>derecho de propiedad (dominio)</strong> contra quien posee la cosa sin derecho o atribuyéndose titularidad.
                  </p>
                </div>

                <div className="bg-[#141414] p-4 border border-stone-800 space-y-2">
                  <h4 className="font-bold text-stone-200 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    Juicio de Desalojo
                  </h4>
                  <p className="text-stone-400">
                    Se interpone basado en la <strong>obligación personal de restituir</strong> (por ej. contratos de locación vencidos o tenencia precaria).
                  </p>
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-stone-400 italic">
                Nuestros abogados y escribanos determinan cuál de las acciones judiciales es la idónea para evitar rechazos o dilaciones procesales.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

