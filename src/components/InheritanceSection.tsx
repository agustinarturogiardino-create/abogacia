import React from 'react';
import { Search, Compass, Gavel, DollarSign, ArrowRight } from 'lucide-react';
import { HERO_IMAGES } from '../data/lawFirmData';

interface InheritanceSectionProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const InheritanceSection: React.FC<InheritanceSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="derechos-hereditarios" className="py-20 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            SECCIÓN CENTRAL · COMPRA DE DERECHOS HEREDITARIOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Quizás tenés un patrimonio que todavía{' '}
            <span className="italic font-normal text-[#A38A5E]">no sabés que existe.</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Una propiedad puede haber pertenecido a tus padres, abuelos, bisabuelos u otros antepasados y, con el paso de los años, haber quedado sin sucesión, sin regularizar o en manos de terceros. En algunos casos, los potenciales herederos desconocen completamente la existencia del inmueble.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Pillar 1 */}
          <div className="bg-[#141414] border border-stone-800 hover:border-[#A38A5E] p-6 transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#0A0A0A] text-[#A38A5E] border border-stone-800 flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif-display font-bold text-white">
                NOSOTROS INVESTIGAMOS.
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Analizamos antecedentes familiares, genealogía, árboles filiatorios, registros sucesorios e índices dominiales.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800 text-[10px] text-[#A38A5E] font-bold uppercase tracking-widest">
              01. Búsqueda filiatoria y documental
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#141414] border border-stone-800 hover:border-[#A38A5E] p-6 transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#0A0A0A] text-[#A38A5E] border border-stone-800 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif-display font-bold text-white">
                NOSOTROS IDENTIFICAMOS.
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Determinamos qué propiedades podrían estar vinculadas con tus antepasados y qué derechos legales te corresponderían.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800 text-[10px] text-[#A38A5E] font-bold uppercase tracking-widest">
              02. Diagnóstico dominial y titularidad
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#141414] border border-stone-800 hover:border-[#A38A5E] p-6 transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#0A0A0A] text-[#A38A5E] border border-stone-800 flex items-center justify-center">
                <Gavel className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif-display font-bold text-white">
                NOS OCUPAMOS DEL PROCESO.
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Cuando corresponde, intervenimos en todas las etapas judiciales y notariales necesarias para regularizar y hacer valer esos derechos.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800 text-[10px] text-[#A38A5E] font-bold uppercase tracking-widest">
              03. Estrategia judicial e inscripción
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-[#1E1E1E] border border-[#A38A5E] p-6 shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#A38A5E] text-white flex items-center justify-center font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif-display font-bold text-white">
                Y EXISTE OTRA ALTERNATIVA.
              </h3>
              <p className="text-stone-300 text-xs leading-relaxed">
                Si sos titular de derechos hereditarios pero <strong>no querés ocuparte de todo el proceso</strong>, evaluamos la posibilidad de <strong>adquirir esos derechos</strong>, sujeto a análisis previo.
              </p>
            </div>
            <div className="pt-4 border-t border-[#A38A5E]/40 text-[10px] text-[#A38A5E] font-bold uppercase tracking-widest">
              04. Adquisición directa de derechos
            </div>
          </div>

        </div>

        {/* Highlight Box & Image Feature */}
        <div className="bg-[#141414] border border-stone-800 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative overflow-hidden border border-stone-800">
            <img
              src={HERO_IMAGES.deeds}
              alt="Análisis de escrituras y títulos dominiales"
              className="w-full h-64 sm:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-stone-300 bg-[#0A0A0A]/90 p-3 border border-stone-800">
              Estudio minuciosamente documentado de escrituras, títulos y registros dominiales.
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Obtené una compensación económica por un patrimonio que quizás no sabías que existía.
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              La adquisición de derechos hereditarios por parte de nuestro estudio o inversores asociados permite al heredero percibir un beneficio concreto sin asumir los costos, dilaciones ni complejidades procesales de un juicio sucesorio o reivindicatorio prolongado.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation('Quiero consultar por la venta de derechos hereditarios')}
                className="bg-[#A38A5E] hover:bg-[#8C7449] text-white font-bold text-xs uppercase tracking-[0.15em] py-4 px-8 transition-colors flex items-center gap-3 cursor-pointer"
              >
                <span>QUIERO ANALIZAR MIS DERECHOS HEREDITARIOS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

