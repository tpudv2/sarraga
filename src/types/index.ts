/** Tipos compartidos del contenido del sitio. */

export interface NavItem {
  label: string;
  href: string;
}

export interface ValueProp {
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface CaseType {
  label: string;
}

export interface CaseSlide {
  id: string;
  title: string;
  subtitle: string;
  /** Ruta al asset en /public/images (placeholder por ahora). */
  image?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  /** Respuesta en HTML enriquecido o texto plano. */
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
}
