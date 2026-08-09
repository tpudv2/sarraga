import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  /** false para secciones a sangre completa (full-bleed). */
  contained?: boolean;
  children: ReactNode;
}

/** Sección con espaciado vertical estándar y contenedor opcional. */
export function Section({
  id,
  className,
  containerClassName,
  contained = true,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      {contained ? <Container className={containerClassName}>{children}</Container> : children}
    </section>
  );
}
