import { steps } from '@/data/steps';
import { Section } from '@/components/ui/Section';

/** "En 3 simples pasos" — titular rojo + lista de pasos. */
export function Steps() {
  return (
    <Section>
      <h2 className="text-[clamp(2.25rem,6vw,4rem)] text-brand-red">En 3 simples pasos</h2>

      <ol className="mt-12 max-w-2xl space-y-8">
        {steps.map((step, i) => (
          <li key={step.title}>
            <h3 className="text-lg font-bold normal-case tracking-normal">
              <span className="sr-only">Paso {i + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-1 max-w-[52ch] text-sm leading-relaxed text-brand-ink/70">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
