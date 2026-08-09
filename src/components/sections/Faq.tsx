import { faqItems } from '@/data/faq';
import { Accordion } from '@/components/ui/Accordion';
import { Section } from '@/components/ui/Section';

/** Preguntas frecuentes en acordeón. */
export function Faq() {
  return (
    <Section id="faq">
      <Accordion items={faqItems} defaultOpenId={faqItems[0]?.id} />
    </Section>
  );
}
