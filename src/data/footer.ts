/** Contenido del pie de página. */
export const footer = {
  columns: [
    {
      title: 'Contacto',
      links: [
        { label: 'WhatsApp', href: '#' }, // TODO
        { label: 'Llamar / Texto', href: 'tel:+1' }, // TODO
        { label: 'Correo', href: 'mailto:info@sarragalegal.com' }, // TODO
        { label: 'Área metro · Todo PR', href: '#' },
      ],
    },
    {
      title: 'Antes de firmar',
      links: [
        { label: 'Videos', href: '#' },
        { label: 'Guía del ajustador', href: '#' },
        { label: 'Preguntas frecuentes', href: '#faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Aviso legal', href: '#' },
        { label: 'Privacidad', href: '#' },
        { label: 'Términos', href: '#' },
      ],
    },
  ],
  disclaimer:
    '© 2026 Sárraga Legal · Todo el contenido es información general, no asesoría legal.',
  note: 'Página legible por IA',
} as const;
