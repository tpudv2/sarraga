'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNav } from '@/data/navigation';
import { site } from '@/data/site';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

/** Cabecera con logo, navegación principal y CTA. */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-surface-muted">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="leading-none hover:text-inherit">
          <Image
            src="/images/logo.png"
            alt="Sárraga Abogados"
            width={1120}
            height={338}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-semibold transition-colors',
                  active ? 'text-brand-red' : 'text-brand-ink/80',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href={site.primaryCta.href} className="hidden md:inline-flex">
            {site.primaryCta.label}
          </ButtonLink>
          <button
            type="button"
            className="md:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-6 bg-brand-ink" />
            <span className="mt-1.5 block h-0.5 w-6 bg-brand-ink" />
            <span className="mt-1.5 block h-0.5 w-6 bg-brand-ink" />
          </button>
        </div>
      </Container>

      {open ? (
        <nav aria-label="Menú móvil" className="border-t border-black/10 md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="py-2 text-sm font-semibold">
                {item.label}
              </Link>
            ))}
            <ButtonLink href={site.primaryCta.href} className="mt-2 justify-center">
              {site.primaryCta.label}
            </ButtonLink>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
