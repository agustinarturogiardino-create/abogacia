import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CONTACT_INFO } from '../data/lawFirmData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialPrefill?: string;
  initialSituation?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPrefill = '', initialSituation = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    whatsapp: '',
    provincia: '',
    situacion: 'Creo que tengo derechos hereditarios',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialSituation) {
      setFormData((prev) => ({ ...prev, situacion: initialSituation }));
    }
    if (initialPrefill) {
      setFormData((prev) => ({
        ...prev,
        mensaje: prev.mensaje ? `${prev.mensaje}\n${initialPrefill}` : initialPrefill,
      }));
    }
  }, [initialPrefill, initialSituation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hola *Derecho en Propiedades*, me contacto desde la web:\n- *Nombre:* ${formData.nombre}\n- *WhatsApp:* ${formData.whatsapp}\n- *Provincia:* ${formData.provincia}\n- *Situación:* ${formData.situacion}\n- *Mensaje:* ${formData.mensaje}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CONTACT_INFO.whatsappPrimary}?text=${encoded}`, '_blank');
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Consulta Web: ${formData.situacion} - ${formData.nombre}`);
    const body = encodeURIComponent(`Nombre: ${formData.nombre}\nWhatsApp: ${formData.whatsapp}\nProvincia: ${formData.provincia}\nSituación: ${formData.situacion}\n\nMensaje:\n${formData.mensaje}`);
    window.open(`mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-[#F5F2ED] text-[#1A1A1A] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#A38A5E]/10 text-[#A38A5E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            CONTACTO DIRECTO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0A0A0A]" style={{ fontFamily: 'Georgia, serif' }}>
            Consultá Tu Caso de Forma Confidencial
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Atención personalizada por Abogados y Escribanos especialistas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A0A0A] text-white p-8 border border-stone-800 space-y-6">
              <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="Derecho en Propiedades" className="h-9 w-auto object-contain shrink-0" />
                <div>
                  <span className="text-[#A38A5E] font-mono text-[10px] uppercase tracking-widest block font-bold">
                    ESTUDIO JURÍDICO Y NOTARIAL
                  </span>
                  <h3 className="text-xl font-light text-white mt-0.5" style={{ fontFamily: 'Georgia, serif' }}>
                    DERECHO EN PROPIEDADES
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#A38A5E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Sarmiento 343</p>
                    <p className="text-xs text-stone-400">Bahía Blanca, Provincia de Buenos Aires</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#A38A5E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">0291 508-8831</p>
                    <p className="font-bold text-white">0291 527-6388</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#A38A5E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="pt-4 border-t border-stone-800 space-y-3">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappPrimary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-[0.15em] py-3.5 px-4 transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WHATSAPP DIRECTO</span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:02915088831"
                    className="bg-[#1E1E1E] hover:bg-stone-800 text-stone-100 font-bold text-xs uppercase py-3 px-3 border border-stone-800 transition-colors text-center flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A38A5E]" />
                    <span>LLAMAR</span>
                  </a>

                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="bg-[#1E1E1E] hover:bg-stone-800 text-stone-100 font-bold text-xs uppercase py-3 px-3 border border-stone-800 transition-colors text-center flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#A38A5E]" />
                    <span>ENVIAR EMAIL</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Attendance note */}
            <div className="bg-white p-6 border border-black/10 text-xs text-stone-600 space-y-2">
              <p className="font-bold text-[#0A0A0A] uppercase tracking-wider">Atención Presencial y Virtual</p>
              <p>
                Atendemos consultas presenciales en Sarmiento 343 (Bahía Blanca) previa coordinación de turno, y consultas virtuales de clientes de todo el país.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white border border-black/10 p-8 sm:p-10 shadow-sm relative">
            
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-[#0A0A0A] text-[#A38A5E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0A0A0A]" style={{ fontFamily: 'Georgia, serif' }}>
                  ¡Consulta Registrada!
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Hemos recibido los datos de tu consulta. Para agilizar la respuesta y el análisis de tu documentación, podés enviarla directamente por WhatsApp.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-[0.15em] py-4 px-8 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>ENVIAR POR WHATSAPP AHORA</span>
                  </button>

                  <button
                    onClick={handleEmailSend}
                    className="w-full sm:w-auto bg-[#0A0A0A] hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.15em] py-4 px-6 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-[#A38A5E]" />
                    <span>ENVIAR POR EMAIL</span>
                  </button>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-stone-500 underline cursor-pointer hover:text-stone-800"
                  >
                    Volver a completar el formulario
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-light text-[#0A0A0A] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Formulario de Evaluación Inicial
                </h3>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre y apellido"
                    className="w-full bg-[#F5F2ED] border border-black/10 p-3 text-xs text-stone-800 focus:outline-none focus:border-[#A38A5E] focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      WhatsApp / Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="Ej: 0291 1234567"
                      className="w-full bg-[#F5F2ED] border border-black/10 p-3 text-xs text-stone-800 focus:outline-none focus:border-[#A38A5E] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Provincia *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.provincia}
                      onChange={(e) => setFormData({ ...formData, provincia: e.target.value })}
                      placeholder="Ej: Buenos Aires, Córdoba, Río Negro..."
                      className="w-full bg-[#F5F2ED] border border-black/10 p-3 text-xs text-stone-800 focus:outline-none focus:border-[#A38A5E] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    ¿Cuál es tu situación? *
                  </label>
                  <select
                    value={formData.situacion}
                    onChange={(e) => setFormData({ ...formData, situacion: e.target.value })}
                    className="w-full bg-[#F5F2ED] border border-black/10 p-3 text-xs text-stone-800 focus:outline-none focus:border-[#A38A5E] focus:bg-white cursor-pointer"
                  >
                    <option value="Tengo una propiedad ocupada">Tengo una propiedad ocupada</option>
                    <option value="Quiero recuperar una propiedad">Quiero recuperar una propiedad</option>
                    <option value="Creo que tengo derechos hereditarios">Creo que tengo derechos hereditarios</option>
                    <option value="Encontré una propiedad de mis antepasados">Encontré una propiedad de mis antepasados</option>
                    <option value="Quiero consultar por la venta de derechos hereditarios">Quiero consultar por la venta de derechos hereditarios</option>
                    <option value="Otro">Otro caso de propiedades o herencias</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Contanos brevemente tu situación
                  </label>
                  <textarea
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Detallá si tenés nombres de antepasados, ubicación aproximada del inmueble o estado de la ocupación..."
                    className="w-full bg-[#F5F2ED] border border-black/10 p-3 text-xs text-stone-800 focus:outline-none focus:border-[#A38A5E] focus:bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0A0A0A] hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.15em] py-4 px-6 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>CONSULTAR MI CASO</span>
                    <Send className="w-4 h-4 text-[#A38A5E]" />
                  </button>
                </div>

                <p className="text-[11px] text-stone-500 leading-relaxed pt-2 border-t border-black/10 italic">
                  <strong>Aclaración legal:</strong> El envío de la consulta no implica por sí mismo la aceptación del caso ni constituye asesoramiento jurídico hasta que exista una relación profesional formalizada.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

