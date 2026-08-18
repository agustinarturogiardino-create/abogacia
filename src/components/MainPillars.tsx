import React from 'react';
import { Search, ShieldAlert, Key, CheckCircle2, ArrowRight } from 'lucide-react';

interface MainPillarsProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const MainPillars: React.FC<MainPillarsProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-[#F5F2ED] text-[#1A1A1A] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            <span>ÁREAS DE ESPECIALIZACIÓN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0A0A0A]" style={{ fontFamily: 'Georgia, serif' }}>
            Nuestras Áreas Principales de Especialización
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Aproximadamente el 80% de nuestra práctica profesional está dedicada de forma intensiva a resolver problemas de herencias inmobiliarias no regularizadas y recuperación judicial de propiedades.
          </p>
        </div>

        {/* Two Large Main Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Pillar 01: Compra de Derechos Hereditarios */}
          <div className="bg-white border border-black/10 hover:border-[#A38A5E] p-8 sm:p-10 shadow-sm transition-all duration-300 relative flex flex-col justify-between group">

            <div className="space-y-6 pt-2">
              <div className="w-12 h-12 bg-[#0A0A0A] text-[#A38A5E] flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0A0A0A] group-hover:text-[#A38A5E] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                  COMPRA DE DERECHOS HEREDITARIOS
                </h3>
                <p className="text-base sm:text-lg font-serif-display text-[#A38A5E] mt-2 italic">
                  ¿Podrías tener derechos sobre una propiedad que perteneció a tus antepasados?
                </p>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Existen propiedades que pertenecieron a padres, abuelos, bisabuelos u otros antepasados y cuyos derechos nunca fueron correctamente regularizados o transmitidos. En algunos casos, los potenciales herederos desconocen completamente la existencia de esos bienes.
              </p>

              <div className="bg-[#F5F2ED] p-5 border border-black/10 space-y-3 text-stone-700 text-xs sm:text-sm">
                <p>
                  <strong>Investigamos antecedentes familiares, sucesorios y dominiales</strong> para determinar si existen propiedades vinculadas con tus antepasados y qué derechos podrían corresponderte.
                </p>
                <p>
                  Cuando existen derechos hereditarios, <strong>evaluamos la posibilidad de adquirirlos</strong>, sujeto al análisis jurídico y documental del caso. Esto puede permitir que obtengas una compensación económica sin afrontar personalmente todo el proceso.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-black/10">
              <button
                onClick={() => onOpenConsultation('Creo que tengo derechos hereditarios')}
                className="w-full bg-[#0A0A0A] hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.15em] py-4 px-6 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>QUIERO SABER SI TENGO DERECHOS</span>
                <ArrowRight className="w-4 h-4 text-[#A38A5E]" />
              </button>
            </div>
          </div>

          {/* Pillar 02: Juicios Reivindicatorios */}
          <div className="bg-white border border-black/10 hover:border-[#A38A5E] p-8 sm:p-10 shadow-sm transition-all duration-300 relative flex flex-col justify-between group">

            <div className="space-y-6 pt-2">
              <div className="w-12 h-12 bg-[#0A0A0A] text-[#A38A5E] flex items-center justify-center">
                <ShieldAlert className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0A0A0A] group-hover:text-[#A38A5E] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                  JUICIOS REIVINDICATORIOS
                </h3>
                <p className="text-base sm:text-lg font-serif-display text-[#A38A5E] mt-2 italic">
                  ¿Sos propietario pero otra persona tiene tu inmueble?
                </p>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Analizamos títulos, antecedentes, situación registral y posesoria para determinar qué herramientas jurídicas pueden utilizarse para proteger el derecho de propiedad y procurar recuperar la posesión.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Juicios reivindicatorios',
                  'Recuperación de propiedades',
                  'Defensa del derecho de propiedad',
                  'Acciones posesorias',
                  'Conflictos sobre posesión',
                  'Desalojos cuando corresponda',
                  'Regularización de inmuebles'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-stone-700 bg-[#F5F2ED] p-2.5 border border-black/10">
                    <CheckCircle2 className="w-4 h-4 text-[#A38A5E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-black/10">
              <button
                onClick={() => onOpenConsultation('Tengo una propiedad ocupada')}
                className="w-full bg-[#0A0A0A] hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.15em] py-4 px-6 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>QUIERO RECUPERAR MI PROPIEDAD</span>
                <ArrowRight className="w-4 h-4 text-[#A38A5E]" />
              </button>
            </div>
          </div>

        </div>

        {/* Third Complementary Pillar Banner */}
        <div id="recuperacion-integral" className="bg-[#0A0A0A] text-white p-8 sm:p-10 shadow-xl border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold text-[#A38A5E] uppercase tracking-[0.2em]">
                <Key className="w-4 h-4 text-[#A38A5E]" />
                <span>RECUPERACIÓN DE INMUEBLES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light" style={{ fontFamily: 'Georgia, serif' }}>
                RECUPERACIÓN INTEGRAL DE INMUEBLES
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Abordamos el proceso completo de forma articulada: investigación de antecedentes, sucesiones, acciones reivindicatorias, recuperación de la posesión, desalojos cuando corresponda y regularización dominial final.
              </p>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <button
                onClick={() => onOpenConsultation('Quiero recuperar una propiedad')}
                className="bg-[#A38A5E] hover:bg-[#8C7449] text-white font-bold text-xs uppercase tracking-[0.15em] py-3.5 px-8 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>CONSULTAR RECUPERACIÓN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

