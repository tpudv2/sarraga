import Image from 'next/image';
import { site } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

/** Hero principal: titular grande, CTA y retrato del equipo. */
export function Hero() {
  return (
    <section className="flex min-h-[60vh] items-center bg-hero-pattern">
      <Container className="grid items-center gap-8 py-10 md:grid-cols-2 md:py-0">
        <div className="py-6 md:py-16">
          <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] text-brand-ink">
            Evaluamos
            <br />
            tu caso
            <br />
            en 24 horas
          </h1>
          <div className="mt-8">
            {/* TODO: enlazar a formulario / WhatsApp real */}
            <Button size="lg" withArrow>
              Envíanos tu caso
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-md self-end md:max-w-2xl">
            <Image
              src="/images/equipo-hero.png"
              alt="Equipo legal de Sárraga & Asociados"
              width={765}
              height={685}
              priority
              sizes="(min-width: 768px) 42rem, 90vw"
              className="h-auto w-full"
            />
            <span className="absolute left-2 top-1/3 rounded-md bg-brand-violet px-2 py-1 text-[10px] font-semibold text-white">
              @sarragalegal
            </span>
            <span className="absolute right-2 top-1/4 rounded-md bg-brand-violet px-2 py-1 text-[10px] font-semibold text-white">
              @abogadaenvestimenta
            </span>
          </div>
        </div>
      </Container>
      <p className="sr-only">{site.tagline}</p>
    </section>
  );
}
