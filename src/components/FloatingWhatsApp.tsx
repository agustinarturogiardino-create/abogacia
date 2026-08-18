import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CONTACT_INFO } from '../data/lawFirmData';

export const FloatingWhatsApp: React.FC = () => {
  const [open, setOpen] = useState(false);

  const options = [
    { label: 'Tengo una propiedad ocupada / Reivindicación', msg: 'Hola, tengo una propiedad ocupada y quiero consultar por un juicio reivindicatorio.' },
    { label: 'Creo que tengo derechos hereditarios', msg: 'Hola, creo que puedo tener derechos hereditarios sobre una propiedad de mis antepasados.' },
    { label: 'Quiero consultar por venta de derechos', msg: 'Hola, quiero consultar sobre la posibilidad de vender o ceder mis derechos hereditarios.' },
    { label: 'Agendar consulta presencial en Bahía Blanca', msg: 'Hola, quiero agendar una consulta presencial en Sarmiento 343, Bahía Blanca.' },
  ];

  const handleSend = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${CONTACT_INFO.whatsappPrimary}?text=${encoded}`, '_blank');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Options */}
      {open && (
        <div className="mb-3 w-80 bg-[#0A0A0A] border border-[#A38A5E] p-4 shadow-2xl text-white space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-stone-800 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="font-light text-xs text-[#A38A5E] uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                Derecho en Propiedades
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-stone-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-stone-300">
            Seleccioná el motivo de tu consulta para iniciar la conversación por WhatsApp:
          </p>

          <div className="space-y-2">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(opt.msg)}
                className="w-full text-left p-2.5 bg-[#141414] hover:bg-stone-800 border border-stone-800 text-xs font-medium text-stone-200 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>{opt.label}</span>
                <Send className="w-3.5 h-3.5 text-[#A38A5E] group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>
            ))}
          </div>

          <p className="text-[10px] text-stone-400 text-center italic pt-1">
            Bahía Blanca y Todo el País
          </p>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 cursor-pointer relative"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-[#0A0A0A]" />
        <WhatsAppIcon className="w-7 h-7" />
      </button>
    </div>
  );
};

