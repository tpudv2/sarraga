import type { CaseSlide, CaseType } from '@/types';

/** Tarjetas del carrusel de casos. La central lleva imagen. */
export const caseSlides: CaseSlide[] = [
  { id: 'c1', title: '', subtitle: '' },
  { id: 'c2', title: '', subtitle: '' },
  {
    id: 'c3',
    title: 'San Juan',
    subtitle: 'La respuesta',
    image: '/images/cases/san-juan.jpg', // TODO: asset real
  },
  { id: 'c4', title: '', subtitle: '' },
  { id: 'c5', title: '', subtitle: '' },
  { id: 'c6', title: '', subtitle: '' },
];

/** Lista de tipos de caso junto al carrusel. */
export const caseTypes: CaseType[] = [
  { label: 'Responsabilidad Hotelera' },
  { label: 'Caídas y accidentes en centros comerciales' },
  { label: 'Negligencia médica (Impericia)' },
  { label: 'Accidentes de tránsito' },
  { label: 'Conflicto entre herederos' },
];
