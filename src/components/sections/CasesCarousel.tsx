import { caseSlides, caseTypes } from '@/data/cases';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/utils';

/**
 * Carrusel de casos con tarjetas ligeramente inclinadas.
 * TODO: convertir en carrusel interactivo (p. ej. embla-carousel) al pulir.
 */
export function CasesCarousel() {
  return (
    <Section contained={false} className="overflow-hidden">
      <div className="flex items-stretch justify-center gap-4 px-4">
        {caseSlides.map((slide, i) => {
          const featured = Boolean(slide.image);
          const offset = i - (caseSlides.length - 1) / 2;
          return (
            <article
              key={slide.id}
              className={cn(
                'relative aspect-[3/5] w-40 flex-none overflow-hidden rounded-card bg-surface-card md:w-52',
                featured && 'ring-2 ring-brand-ink/10',
              )}
              style={{ transform: `rotate(${offset * 1.5}deg)` }}
            >
              {featured ? (
                <div className="absolute inset-0 grid place-items-center bg-surface-card">
                  {/* TODO: next/image con slide.image */}
                  <div className="text-center">
                    <p className="font-display text-2xl text-white drop-shadow">{slide.title}</p>
                    <p className="text-xs font-semibold text-white/80">{slide.subtitle}</p>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-10 flex max-w-container flex-col gap-6 px-[var(--container-pad)] sm:flex-row sm:items-start">
        <ButtonLink href="/casos" withArrow className="flex-none">
          Ver todos los casos
        </ButtonLink>
        <ul className="space-y-1 font-bold text-brand-ink">
          {caseTypes.map((type) => (
            <li key={type.label}>{type.label}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
