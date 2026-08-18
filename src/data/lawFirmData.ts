import { Professional, FAQItem, ProblemScenario, StepItem } from '../types';

import agustinImage from '../assets/images/agustin.png';
import julietaImage from '../assets/images/julieta.png';
import estateHeroImg from '../assets/images/estate.jpg';
import titleDeedsImg from '../assets/images/deeds.jpg';

export const HERO_IMAGES = {
  estate: estateHeroImg,
  deeds: titleDeedsImg,
};

export const PROFESSIONALS: Professional[] = [
  {
    id: 'agustin-giardino',
    name: 'Agustín Arturo Giardino',
    title: 'Abogado y Escribano',
    specialty: 'Especialista en Derechos Reales y cuestiones relacionadas con propiedades e inmuebles.',
    matriculas: [
      'Matrícula Provincia de Buenos Aires',
      'Matrícula Federal'
    ],
    bio: 'Con doble formación en Abogacía y Notariado, enfoca su práctica exclusivamente en el análisis de antecedentes dominiales, estructuras de propiedad, acciones reivindicatorias y derecho patrimonial inmobiliario.',
    image: agustinImage
  },
  {
    id: 'julieta-berrojalbiz',
    name: 'Julieta Berrojalbiz',
    title: 'Abogada y Escribana',
    specialty: 'Especialista en Derechos Reales, cuestiones sucesorias y conflictos relacionados con propiedades e inmuebles.',
    matriculas: [
      'Matrícula Provincia de Buenos Aires',
      'Matrícula Federal'
    ],
    bio: 'Especializada en la investigación de antecedentes familiares, sucesiones complejas vinculadas a inmuebles y transmisión de derechos hereditarios, con una visión integral orientada a la seguridad jurídica.',
    image: julietaImage
  }
];

export const INVESTIGATION_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'NOS CONTACTÁS',
    description: 'Nos contás qué sabés sobre tu familia, tus antepasados o una posible propiedad de la que tengas indicios.'
  },
  {
    number: '02',
    title: 'INVESTIGAMOS',
    description: 'Analizamos antecedentes familiares, registros sucesorios y datos dominiales legalmente disponibles.'
  },
  {
    number: '03',
    title: 'IDENTIFICAMOS',
    description: 'Determinamos si existen propiedades y qué relación jurídica y probatoria podrían tener con tus antepasados.'
  },
  {
    number: '04',
    title: 'ANALIZAMOS LOS DERECHOS',
    description: 'Estudiamos sucesiones, vocación hereditaria, títulos, antecedentes registrales y situación actual del inmueble.'
  },
  {
    number: '05',
    title: 'DEFINIMOS LA ESTRATEGIA',
    description: 'Si corresponde, avanzamos con el proceso sucesorio, acción reivindicatoria, regularización u otras medidas correspondientes.'
  },
  {
    number: '06',
    title: 'EVALUAMOS LA ADQUISICIÓN',
    description: 'Si preferís no continuar con todo el proceso judicial, evaluamos la adquisición de los derechos hereditarios que legalmente te correspondan.'
  }
];

export const PROBLEM_SCENARIOS: ProblemScenario[] = [
  {
    id: 'p1',
    quote: '“Mi abuelo tenía una propiedad y nunca se hizo la sucesión.”',
    category: 'Derechos Hereditarios',
    description: 'Investigamos el estado dominial de la propiedad y trazamos la cadena hereditaria para regularizar el bien.',
    prefillSituation: 'Creo que tengo derechos hereditarios'
  },
  {
    id: 'p2',
    quote: '“Encontré documentación de una propiedad de mi familia.”',
    category: 'Investigación Patrimonial',
    description: 'Analizamos escrituras, boletos o planos antiguos para verificar la vigencia de los derechos sobre el inmueble.',
    prefillSituation: 'Encontré una propiedad de mis antepasados'
  },
  {
    id: 'p3',
    quote: '“Me dijeron que mis antepasados tenían tierras.”',
    category: 'Búsqueda de Antecedentes',
    description: 'Iniciamos una investigación registral y genealógica para corroborar si existen bienes a nombre de tus antecesores.',
    prefillSituation: 'Encontré una propiedad de mis antepasados'
  },
  {
    id: 'p4',
    quote: '“Hay una propiedad familiar ocupada por terceros.”',
    category: 'Conflictos Posesorios',
    description: 'Analizamos la legitimación de los poseedores y evaluamos acciones reivindicatorias o de recuperación.',
    prefillSituation: 'Tengo una propiedad ocupada'
  },
  {
    id: 'p5',
    quote: '“Soy heredero pero no puedo recuperar el inmueble.”',
    category: 'Recuperación Sucesoria',
    description: 'Determinamos qué herramientas procesales permiten a los herederos solicitar la entrega de la posesión.',
    prefillSituation: 'Quiero recuperar una propiedad'
  },
  {
    id: 'p6',
    quote: '“Soy propietario y otra persona está ocupando mi propiedad.”',
    category: 'Juicio Reivindicatorio',
    description: 'Iniciamos la defensa del derecho de dominio para procurar restituir la posesión legítima al titular.',
    prefillSituation: 'Tengo una propiedad ocupada'
  },
  {
    id: 'p7',
    quote: '“No sé si tengo derechos sobre una propiedad.”',
    category: 'Asesoramiento Inicial',
    description: 'Evaluamos la documentación existente y realizamos un diagnóstico legal preliminar sobre tu situación.',
    prefillSituation: 'Creo que tengo derechos hereditarios'
  },
  {
    id: 'p8',
    quote: '“Tengo derechos hereditarios pero no quiero iniciar todo el proceso.”',
    category: 'Cesión de Derechos',
    description: 'Analizamos el valor probatorio de tus derechos para evaluar la opción de cesión o adquisición de los mismos.',
    prefillSituation: 'Quiero consultar por la venta de derechos hereditarios'
  },
  {
    id: 'p9',
    quote: '“Quiero evaluar la posibilidad de vender mis derechos hereditarios.”',
    category: 'Adquisición de Derechos',
    description: 'Efectuamos la revisión jurídico-notarial completa para determinar la viabilidad de la compra de tus derechos.',
    prefillSituation: 'Quiero consultar por la venta de derechos hereditarios'
  }
];

export const COMPLEMENTARY_SERVICES = [
  {
    title: 'Sucesiones e Inmuebles',
    desc: 'Procesos sucesorios enfocados específicamente en la transmisión y regularización de bienes inmuebles urbanos y rurales.'
  },
  {
    title: 'Acciones Posesorias',
    desc: 'Protección jurídica de la posesión y mantenimiento de la tenencia frente a turbaciones o despojos.'
  },
  {
    title: 'Desalojos',
    desc: 'Procesos de desalojo contra intrusos, tenedores precarios o locatarios según corresponda en la estrategia.'
  },
  {
    title: 'Usucapión / Prescripción Adquisitiva',
    desc: 'Regularización de dominio por posesión continua, pacífica e ininterrumpida durante los plazos legales.'
  },
  {
    title: 'Condominio y División',
    desc: 'Resolución de conflictos entre copropietarios y procesos judiciales o extrajudiciales de división de condominio.'
  },
  {
    title: 'Regularización de Inmuebles',
    desc: 'Estudio de títulos, cancelación de gravámenes, subsanación de tracto abreviado y regularización dominial.'
  },
  {
    title: 'Herencias Vacantes',
    desc: 'Análisis jurídico e investigación de situaciones sucesorias sin herederos aparentes o bienes no reclamados.'
  }
];

export const FAQS_HEREDITARIOS: FAQItem[] = [
  {
    id: 'fh1',
    category: 'hereditarios',
    question: '¿Cómo puedo saber si mis antepasados tenían propiedades?',
    answer: 'Realizamos una investigación combinando datos filiatorios de tu árbol genealógico con búsquedas en índices dominiales, catastrales y registros de la propiedad inmueble según la jurisdicción correspondiente.'
  },
  {
    id: 'fh2',
    category: 'hereditarios',
    question: '¿Puedo tener derechos sobre una propiedad que pertenecía a mi abuelo o bisabuelo?',
    answer: 'Sí. Los derechos hereditarios se transmiten por el orden de sucesión establecido en el Código Civil y Comercial. Si sos descendiente y no han prescripto o caducado las acciones de reclamo, podrías tener vocación hereditaria sobre ese patrimonio.'
  },
  {
    id: 'fh3',
    category: 'hereditarios',
    question: '¿Qué pasa si nunca se hizo la sucesión de mis antepasados?',
    answer: 'Es una situación muy frecuente. Para transmitir o reclamar la propiedad es necesario iniciar el proceso sucesorio (pudiendo tramitarse sucesiones acumuladas de distintas generaciones) para que el juez declare a los herederos legítimos.'
  },
  {
    id: 'fh4',
    category: 'hereditarios',
    question: '¿Puedo vender mis derechos hereditarios?',
    answer: 'Sí. La ley contempla la cesión o venta de derechos y acciones hereditarias mediante escritura pública. De esta manera, el heredero transfiere la porción que le corresponde sobre la herencia a un tercero a cambio de un precio acordado.'
  },
  {
    id: 'fh5',
    category: 'hereditarios',
    question: '¿Puedo vender mis derechos aunque todavía no esté terminada la sucesión?',
    answer: 'Sí. Los derechos hereditarios existen desde el momento del fallecimiento del causante, no desde la declaratoria de herederos. No obstante, se requiere un análisis preciso del estado del expediente y de los títulos para formalizar legalmente la cesión.'
  },
  {
    id: 'fh6',
    category: 'hereditarios',
    question: '¿Qué documentación necesito para saber si tengo derechos?',
    answer: 'Lo ideal es contar con partidas de nacimiento, matrimonio y defunción que acrediten el vínculo de parentesco, además de cualquier antecedente del inmueble (escrituras viejas, impuestos, boletos de compraventa o datos de ubicación).'
  },
  {
    id: 'fh7',
    category: 'hereditarios',
    question: '¿Qué pasa si hay terceros ocupando la propiedad de mis antepasados?',
    answer: 'Si existen ocupantes sin título legítimo, los herederos (o quien adquiera sus derechos) pueden promover las acciones judiciales correspondientes (como el juicio reivindicatorio) para procurar recuperar la posesión del inmueble.'
  },
  {
    id: 'fh8',
    category: 'hereditarios',
    question: '¿Puedo recuperar una propiedad que pertenecía a mis antepasados?',
    answer: 'Dependerá del tiempo transcurrido, del estado de posesión de los terceros, de la existencia de usucapión promovida y de los títulos del inmueble. Por eso realizamos un estudio minucioso de factibilidad jurídica antes de iniciar cualquier reclamo.'
  },
  {
    id: 'fh9',
    category: 'hereditarios',
    question: '¿Qué diferencia existe entre vender derechos hereditarios y vender una propiedad?',
    answer: 'Al vender la propiedad se transmite el dominio sobre un inmueble determinado y con título perfecto. Al vender derechos hereditarios se cede la posición jurídica que la persona tiene en la sucesión, transfiriendo al comprador tanto el beneficio potencial como la carga de tramitar los procesos correspondientes.'
  }
];

export const FAQS_REIVINDICACION: FAQItem[] = [
  {
    id: 'fr1',
    category: 'reivindicacion',
    question: '¿Qué es un juicio reivindicatorio?',
    answer: 'Es la acción judicial que tiene el propietario que ha perdido la posesión de un inmueble (o no la ha tenido nunca) para exigir legalmente que la persona que actualmente lo ocupa sin derecho legítimo se lo restituya.'
  },
  {
    id: 'fr2',
    category: 'reivindicacion',
    question: '¿Puedo recuperar una propiedad que está ocupada por desconocidos u okupas?',
    answer: 'Sí, siempre que demuestres tener un derecho de propiedad con antecedente preferente al de quien ostenta la posesión actual, mediante la correspondiente demanda reivindicatoria y medidas cautelares según el caso.'
  },
  {
    id: 'fr3',
    category: 'reivindicacion',
    question: '¿Qué documentación necesito para iniciar una reivindicación?',
    answer: 'Principalmente el título de propiedad (escritura pública o declaratoria de herederos e inscripción), el informe de dominio e inhibiciones actualizado y toda prueba que individualice el inmueble y demuestre la ocupación ilegítima.'
  },
  {
    id: 'fr4',
    category: 'reivindicacion',
    question: '¿Qué diferencia hay entre juicio reivindicatorio y desalojo?',
    answer: 'El desalojo exige probar una obligación de restituir preexistente (ej. contrato de alquiler vencido, comodato o intrusión reciente). El juicio reivindicatorio es una acción de Derechos Reales basada en la titularidad del dominio frente a quien posee como dueño o desconoce el título del propietario.'
  },
  {
    id: 'fr5',
    category: 'reivindicacion',
    question: '¿Puedo iniciar una reivindicación si heredé la propiedad pero no tengo la posesión?',
    answer: 'Sí. El Código Civil y Comercial permite a los herederos valerse de los títulos de sus antecesores para promover la acción reivindicatoria contra poseedores sin derecho, aun cuando los herederos nunca hayan tenido la posesión efectiva de forma personal.'
  },
  {
    id: 'fr6',
    category: 'reivindicacion',
    question: '¿Qué ocurre si el inmueble está ubicado en otra provincia?',
    answer: 'Las acciones reales se tramitan ante los tribunales del lugar donde se encuentra radicado el inmueble. En nuestro estudio coordinamos la estrategia y representación judicial correspondiente independientemente de la provincia donde se halle la propiedad.'
  },
  {
    id: 'fr7',
    category: 'reivindicacion',
    question: '¿Qué pasa si la persona que ocupa la propiedad dice ser propietaria o plantea usucapión?',
    answer: 'En el proceso judicial se cotejan los títulos y las fechas de posesión. Para triunfar en una usucapión, el ocupante debe probar 20 años de posesión pública, pacífica e ininterrumpida con prueba categórica. Analizamos minuciosamente la solidez de dichas pretensiones.'
  }
];

export const CONTACT_INFO = {
  address: 'Sarmiento 343 — Bahía Blanca, Provincia de Buenos Aires',
  phones: ['0291 508-8831', '0291 527-6388'],
  rawPhones: ['5492915088831', '5492915276388'],
  email: 'giardinoberrojalbiz@gmail.com',
  whatsappPrimary: '5492915088831',
  whatsappSecondary: '5492915276388',
  officeHours: 'Lunes a Viernes de 9:00 a 18:00 hs'
};
