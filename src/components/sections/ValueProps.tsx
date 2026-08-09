import { valueProps } from '@/data/valueProps';
import { Container } from '@/components/ui/Container';

/** Barra negra con los tres diferenciadores. */
export function ValueProps() {
  return (
    <div className="bg-surface-dark text-white">
      <Container className="grid gap-8 py-8 sm:grid-cols-3">
        {valueProps.map((prop) => (
          <div key={prop.title}>
            <p className="font-display text-xl uppercase text-brand-yellow">{prop.title}</p>
            <p className="mt-1 max-w-[26ch] text-sm text-white/70">{prop.description}</p>
          </div>
        ))}
      </Container>
    </div>
  );
}
