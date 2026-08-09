import Link from 'next/link';
import { footer } from '@/data/footer';
import { site } from '@/data/site';
import { Container } from '@/components/ui/Container';

/** Pie de página oscuro con columnas de enlaces y disclaimer legal. */
export function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <p className="font-display text-lg">
              {site.legalName.replace(' LLC', '')}
              <span className="ml-1 align-super text-[9px] text-white/40">LLC</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/50">{site.description}</p>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-yellow">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
          <p>{footer.disclaimer}</p>
          <p>{footer.note}</p>
        </div>
      </Container>
    </footer>
  );
}
