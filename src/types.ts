export interface Professional {
  id: string;
  name: string;
  title: string;
  specialty: string;
  matriculas: string[];
  bio: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'hereditarios' | 'reivindicacion';
}

export interface ProblemScenario {
  id: string;
  quote: string;
  category: string;
  description: string;
  prefillSituation: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  nombre: string;
  whatsapp: string;
  provincia: string;
  situacion: string;
  mensaje: string;
}
