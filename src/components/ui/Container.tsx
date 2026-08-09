import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Envoltura centrada con ancho máximo y padding lateral consistentes. */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return (
    <Tag
      className={cn('mx-auto w-full max-w-container', className)}
      style={{ paddingInline: 'var(--container-pad)' }}
    >
      {children}
    </Tag>
  );
}
