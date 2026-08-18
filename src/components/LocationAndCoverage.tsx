import React from 'react';
import { MapPin, Monitor, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/lawFirmData';

interface LocationAndCoverageProps {
  onOpenConsultation: (prefill?: string) => void;
}

export const LocationAndCoverage: React.FC<LocationAndCoverageProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-[#0A0A0A] text-white relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            ATENCIÓN PRESENCIAL Y VIRTUAL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Estamos en Bahía Blanca. Atendemos en todo el país.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Modalidad adaptable a las necesidades del cliente y a la radicación del inmueble.
          </p>
        </div>

        {/* Dual Attendance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Presencial */}
          <div className="bg-[#141414] border border-stone-800 p-8 hover:border-[#A38A5E] transition-all space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#1E1E1E] text-[#A38A5E] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-[#A38A5E] uppercase tracking-widest block">
                MODALIDAD PRESENCIAL
              </span>
              <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
                Consultas Presenciales
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Realizamos reuniones en las oficinas de nuestro estudio jurídico y notarial en el centro de Bahía Blanca.
              </p>

              <div className="bg-[#1E1E1E] p-4 border border-stone-800 space-y-1.5 text-xs">
                <p className="text-[#A38A5E] font-bold text-xs uppercase tracking-wider">
                  Sarmiento 343 — Bahía Blanca
                </p>
                <p className="text-stone-400">Provincia de Buenos Aires, Argentina</p>
                <p className="text-stone-400 flex items-center gap-1.5 pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#A38A5E]" />
                  {CONTACT_INFO.officeHours}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800">
              <button
                onClick={() => onOpenConsultation('Quiero agendar una consulta presencial en Bahía Blanca')}
                className="w-full bg-[#A38A5E] hover:bg-[#8C7449] text-white font-bold text-xs uppercase tracking-[0.15em] py-3.5 px-6 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>AGENDAR CONSULTA PRESENCIAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Virtual */}
          <div className="bg-[#141414] border border-stone-800 p-8 hover:border-[#A38A5E] transition-all space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#1E1E1E] text-[#A38A5E] flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-[#A38A5E] uppercase tracking-widest block">
                MODALIDAD VIRTUAL
              </span>
              <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
                Consultas Virtuales
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Realizamos asesoramiento remoto a través de videollamada, correo electrónico y canales digitales seguros para clientes radicados en cualquier provincia.
              </p>

              <div className="bg-[#1E1E1E] p-4 border border-stone-800 space-y-1.5 text-xs">
                <p className="text-[#A38A5E] font-bold text-xs uppercase tracking-wider">
                  Atención Nacional Rápida
                </p>
                <p className="text-stone-400">Análisis a distancia de documentación y títulos digitalizados</p>
                <p className="text-stone-400 flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A38A5E]" />
                  Confidencialidad garantizada
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800">
              <button
                onClick={() => onOpenConsultation('Quiero realizar una consulta virtual desde mi provincia')}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white border border-stone-700 font-bold text-xs uppercase tracking-[0.15em] py-3.5 px-6 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>CONSULTAR DE MANERA VIRTUAL</span>
                <ArrowRight className="w-4 h-4 text-[#A38A5E]" />
              </button>
            </div>
          </div>

        </div>

        {/* Coverage Box with Argentina Map Visual */}
        <div className="bg-[#141414] border border-stone-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#A38A5E]">
                COBERTURA FEDERAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
                Tu propiedad puede estar en cualquier lugar del país.
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Brindamos asesoramiento en Derechos Reales, Derechos Hereditarios, Propiedades, Juicios Reivindicatorios y Recuperación de Inmuebles. La modalidad de intervención y representación se determinará según las características del caso y la jurisdicción correspondiente.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                {[
                  'Buenos Aires',
                  'CABA',
                  'Santa Fe',
                  'Mendoza',
                  'Córdoba',
                  'Río Negro',
                  'Neuquén',
                  'Chubut',
                  'Tucumán',
                  'Entre Ríos',
                  'Salta',
                  'Resto del País'
                ].map((prov, i) => (
                  <span key={i} className="px-2.5 py-1 bg-[#1E1E1E] text-stone-300 border border-stone-800">
                    {prov}
                  </span>
                ))}
              </div>
            </div>

            {/* Graphic Map Badge */}
            <div className="lg:col-span-5 bg-[#1E1E1E] p-6 border border-stone-800 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-[#141414] text-[#A38A5E] flex items-center justify-center border border-stone-800">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-serif-display font-bold text-base text-white">
                Sede Central Bahía Blanca
              </h4>
              <p className="text-xs text-stone-400">
                Sarmiento 343 · Provincia de Buenos Aires
              </p>
              <div className="text-[11px] font-medium text-[#A38A5E] bg-[#141414] py-2 px-3 border border-stone-800">
                Matrícula Prov. de Buenos Aires · Matrícula Federal
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

