import { ServiceDetail } from "./types";

export const servicesData: ServiceDetail[] = [
  {
    id: "ceramic-coating",
    title: "Recubrimiento Cerámico",
    description: "Protección avanzada que proporciona un brillo excepcional y una barrera duradera contra los elementos ambientales y contaminantes.",
    features: [
      "Protección de hasta 5 años",
      "Resistencia a rayones superficiales",
      "Repelente al agua y suciedad",
      "Brillo intenso y profundo",
      "Protección UV avanzada"
    ],
    image: "https://images.unsplash.com/photo-1600320844644-0e144d76f5ae",
    category: "protection",
    price: "$350 - $1,200",
    duration: "1-2 días",
    popular: true
  },
  {
    id: "paint-correction",
    title: "Corrección de Pintura",
    description: "Proceso meticuloso para eliminar imperfecciones, rayones, remolinos y oxidación, restaurando el acabado original de la pintura de su vehículo.",
    features: [
      "Eliminación de rayones y remolinos",
      "Corrección de defectos de pintura",
      "Restauración del brillo original",
      "Preparación para recubrimientos protectores",
      "Diferentes niveles de corrección disponibles"
    ],
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968",
    category: "exterior",
    price: "$250 - $800",
    duration: "1-3 días"
  },
  {
    id: "premium-wash",
    title: "Lavado Premium",
    description: "Limpieza completa que incluye lavado a mano, secado con microfibra, limpieza de llantas y tratamiento de neumáticos para un acabado impecable.",
    features: [
      "Lavado a mano con productos premium",
      "Limpieza de llantas y neumáticos",
      "Secado con toallas de microfibra",
      "Limpieza de ventanas y espejos",
      "Aplicación de cera rápida"
    ],
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
    category: "exterior",
    price: "$45 - $75",
    duration: "1-2 horas",
    popular: true
  },
  {
    id: "interior-detailing",
    title: "Detallado Interior",
    description: "Limpieza profunda y restauración del interior de su vehículo, incluyendo aspirado, limpieza de tapicería, tratamiento de cuero y más.",
    features: [
      "Aspirado profundo de asientos y alfombras",
      "Limpieza de todas las superficies interiores",
      "Tratamiento de cuero y vinilo",
      "Limpieza de ventanas interiores",
      "Desinfección y eliminación de olores"
    ],
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753",
    category: "interior",
    price: "$120 - $350",
    duration: "3-6 horas"
  },
  {
    id: "paint-protection-film",
    title: "Película de Protección de Pintura",
    description: "Instalación de una película transparente de uretano que protege la pintura de su vehículo contra piedras, insectos, sal y otros daños de la carretera.",
    features: [
      "Protección invisible contra impactos",
      "Resistencia a rayones y manchas",
      "Autorreparación con calor",
      "Garantía de hasta 10 años",
      "Instalación personalizada"
    ],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e",
    category: "protection",
    price: "$650 - $5,000",
    duration: "1-3 días"
  },
  {
    id: "engine-detailing",
    title: "Detallado de Motor",
    description: "Limpieza profunda y restauración del compartimiento del motor, eliminando grasa, suciedad y restaurando el aspecto original de los componentes.",
    features: [
      "Limpieza segura de componentes",
      "Desengrasado profesional",
      "Acondicionamiento de mangueras y plásticos",
      "Protección contra humedad",
      "Mejora la identificación de problemas mecánicos"
    ],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3",
    category: "exterior",
    price: "$85 - $150",
    duration: "1-2 horas"
  },
  {
    id: "leather-restoration",
    title: "Restauración de Cuero",
    description: "Tratamiento especializado para limpiar, reparar y restaurar superficies de cuero, devolviendo su suavidad, color y protección original.",
    features: [
      "Limpieza profunda del cuero",
      "Reparación de grietas y desgaste",
      "Recoloración y restauración",
      "Hidratación y acondicionamiento",
      "Protección UV y contra manchas"
    ],
    image: "https://images.unsplash.com/photo-1583836631333-f7edccc231ce",
    category: "interior",
    price: "$180 - $450",
    duration: "4-8 horas"
  },
  {
    id: "headlight-restoration",
    title: "Restauración de Faros",
    description: "Proceso de pulido y sellado que elimina la oxidación y amarillamiento de los faros, mejorando la visibilidad y apariencia de su vehículo.",
    features: [
      "Eliminación de amarillamiento y oxidación",
      "Pulido profesional",
      "Sellado protector UV",
      "Mejora de la visibilidad nocturna",
      "Mejora estética del frente del vehículo"
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    category: "exterior",
    price: "$60 - $120",
    duration: "1-2 horas"
  }
];
