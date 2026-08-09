/** Configuración global del sitio: metadatos, contacto y CTA principal. */
export const site = {
  name: 'Sárraga & Asociados',
  legalName: 'Sárraga Legal LLC',
  tagline: 'Evaluamos tu caso en 24 horas',
  description:
    'Accidentes y daños en Puerto Rico y para la diáspora en Estados Unidos. Te atiende un abogado, no un centro de llamadas.',
  url: 'https://www.sarragalegal.com', // TODO: dominio real
  areaServed: 'Puerto Rico',
  primaryCta: {
    label: 'Verifica tu caso',
    href: '/verifica-tu-caso', // TODO: ruta o enlace real
  },
  announcement: {
    tag: 'NEW',
    title: '2026 Workshop | Protege tu familia y tu persona',
    text: 'Regístrate para recibir su lanzamiento',
    href: '#workshop', // TODO
  },
} as const;

export type Site = typeof site;
