'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

/** Bloque de captura de correo "Déjanos una pregunta". */
export function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: conectar a servicio real (API route, Resend, Mailchimp...).
    setSent(true);
  }

  return (
    <Section>
      <div className="rounded-card bg-surface-card px-6 py-14 md:px-14">
        <h2 className="text-[clamp(2rem,5vw,3.25rem)] text-brand-ink">
          Déjanos
          <br />
          una pregunta
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 flex max-w-lg flex-col gap-3">
          <Button type="submit" withArrow className="self-start">
            Suscríbete
          </Button>
          <label className="sr-only" htmlFor="newsletter-email">
            Correo electrónico
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-violet"
          />
          {sent ? (
            <p role="status" className="text-sm font-semibold text-brand-violet">
              ¡Gracias! Te contactaremos pronto.
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
