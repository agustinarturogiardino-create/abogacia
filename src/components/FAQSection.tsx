import React, { useState } from 'react';
import { FAQS_HEREDITARIOS, FAQS_REIVINDICACION } from '../data/lawFirmData';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'hereditarios' | 'reivindicacion'>('hereditarios');
  const [openFaqId, setOpenFaqId] = useState<string | null>('fh1');
  const [searchTerm, setSearchTerm] = useState('');

  const currentFaqs = activeTab === 'hereditarios' ? FAQS_HEREDITARIOS : FAQS_REIVINDICACION;

  const filteredFaqs = currentFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="preguntas-frecuentes" className="py-20 bg-[#F5F2ED] text-[#1A1A1A] relative border-b border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            RESPUESTAS CLARAS Y PRUDENTES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0A0A0A]" style={{ fontFamily: 'Georgia, serif' }}>
            Preguntas Frecuentes
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto">
            Resolvemos las dudas habituales sobre derechos hereditarios, la compra de los mismos y los juicios de reivindicación.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => {
              setActiveTab('hereditarios');
              setOpenFaqId('fh1');
            }}
            className={`w-full sm:w-auto px-6 py-3.5 font-bold text-xs uppercase tracking-[0.15em] transition-all cursor-pointer border ${
              activeTab === 'hereditarios'
                ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                : 'bg-white text-stone-700 border-black/10 hover:border-black/30'
            }`}
          >
            01 · DERECHOS HEREDITARIOS ({FAQS_HEREDITARIOS.length})
          </button>

          <button
            onClick={() => {
              setActiveTab('reivindicacion');
              setOpenFaqId('fr1');
            }}
            className={`w-full sm:w-auto px-6 py-3.5 font-bold text-xs uppercase tracking-[0.15em] transition-all cursor-pointer border ${
              activeTab === 'reivindicacion'
                ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                : 'bg-white text-stone-700 border-black/10 hover:border-black/30'
            }`}
          >
            02 · REIVINDICACIÓN Y POSESIÓN ({FAQS_REIVINDICACION.length})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-8 max-w-md mx-auto">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar pregunta o palabra clave..."
            className="w-full bg-white border border-black/10 py-3 pl-11 pr-4 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#A38A5E] transition-colors"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-stone-500 text-sm">
              No se encontraron preguntas para la búsqueda "{searchTerm}".
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#A38A5E] bg-white shadow-sm'
                      : 'border-black/10 bg-white hover:border-black/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif-display font-semibold text-base sm:text-lg text-[#0A0A0A]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 flex items-center justify-center shrink-0 transition-all ${
                        isOpen ? 'bg-[#0A0A0A] text-[#A38A5E] rotate-180' : 'bg-stone-100 text-stone-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-black/10 pt-4 animate-fadeIn">
                      <p className="mb-4">{faq.answer}</p>

                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => onOpenConsultation(`Consulta sobre: ${faq.question}`)}
                          className="text-xs font-bold text-[#0A0A0A] hover:text-[#A38A5E] inline-flex items-center gap-1 transition-colors cursor-pointer uppercase tracking-wider"
                        >
                          <span>CONSULTAR SOBRE ESTO</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-12 text-center bg-[#0A0A0A] text-white p-6 sm:p-8 border border-stone-800 space-y-4">
          <h3 className="font-light text-xl sm:text-2xl text-white" style={{ fontFamily: 'Georgia, serif' }}>
            ¿Tenés una duda específica no expresada aquí?
          </h3>
          <p className="text-stone-300 text-sm max-w-xl mx-auto">
            Analizamos tu inquietud y la documentación que poseas de manera directa y confidencial.
          </p>
          <div>
            <button
              onClick={() => onOpenConsultation()}
              className="bg-[#A38A5E] hover:bg-[#8C7449] text-white font-bold text-xs uppercase tracking-[0.15em] py-3.5 px-8 transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>HACER UNA CONSULTA ESPECÍFICA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

