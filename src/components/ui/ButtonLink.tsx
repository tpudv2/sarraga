import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import styles from './Button.module.css';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'dark' | 'ghost';
  size?: 'md' | 'lg';
  withArrow?: boolean;
}

/** Versión enlace del botón de marca (usa el mismo CSS Module). */
export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      <span>{children}</span>
      {withArrow ? (
        <span aria-hidden className={styles.arrow}>
          →
        </span>
      ) : null}
    </Link>
  );
}
