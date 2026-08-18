import React from 'react';
import { Target, Search, Layers, GraduationCap, Globe2 } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      icon: Target,
      title: 'ESPECIALIZACIÓN EXCLUSIVA',
      desc: 'Enfoque principal e intensivo en Derechos Reales, propiedades, posesión, dominio y conflictos inmobiliarios sin dispersarnos en otras ramas.'
    },
    {
      icon: Search,
      title: 'INVESTIGACIÓN PATRIMONIAL',
      desc: 'Análisis de antecedentes genealógicos, de registro y dominiales para identificar posibles derechos ocultos vinculados con tus antepasados.'
    },
    {
      icon: Layers,
      title: 'ESTRATEGIA INTEGRAL',
      desc: 'Acompañamiento continuo desde la investigación preliminar hasta la eventual recuperación efectiva y regularización del inmueble.'
    },
    {
      icon: GraduationCap,
      title: 'ABOGADOS Y ESCRIBANOS',
      desc: 'Doble formación técnico-jurídica y notarial, idónea para auditar escrituras, la validez de los títulos y la viabilidad procesal.'
    },
    {
      icon: Globe2,
      title: 'ATENCIÓN NACIONAL',
      desc: 'Consultas virtuales y asesoramiento para situaciones sobre inmuebles ubicados en cualquier provincia de la República Argentina.'
    }
  ];

  return (
    <section className="py-20 bg-[#F5F2ED] text-[#1A1A1A] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            POR QUÉ ELEGIRNOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0A0A0A]" style={{ fontFamily: 'Georgia, serif' }}>
            Diferenciales que Garantizan Tranquilidad y Rigor
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Combinamos investigación estratégica con solidez jurídico-notarial.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-black/10 hover:border-[#A38A5E] p-8 shadow-sm transition-all duration-300 space-y-4 group"
              >
                <div className="w-10 h-10 bg-[#0A0A0A] text-[#A38A5E] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-display font-semibold text-lg text-[#0A0A0A] group-hover:text-[#A38A5E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

