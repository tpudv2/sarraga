import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import styles from './Button.module.css';

type Variant = 'primary' | 'dark' | 'ghost';
type Size = 'md' | 'lg';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant;
  size?: Size;
  /** Muestra la flecha "→" a la derecha (como en el diseño). */
  withArrow?: boolean;
}

/**
 * Botón de marca. Píldora amarilla por defecto, con variantes oscura y fantasma.
 * Para enlaces usar <ButtonLink> (mismo estilo, renderiza <a>).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', withArrow = false, className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      <span>{children}</span>
      {withArrow ? (
        <span aria-hidden className={styles.arrow}>
          →
        </span>
      ) : null}
    </button>
  ),
);
Button.displayName = 'Button';
