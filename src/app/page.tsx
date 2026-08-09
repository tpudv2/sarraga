import { Hero } from '@/components/sections/Hero';
import { ValueProps } from '@/components/sections/ValueProps';
import { Steps } from '@/components/sections/Steps';
import { CasesCarousel } from '@/components/sections/CasesCarousel';
import { Faq } from '@/components/sections/Faq';
import { Newsletter } from '@/components/sections/Newsletter';
import { BlogTeaser } from '@/components/sections/BlogTeaser';

/**
 * Home de Sárraga & Asociados.
 * Cada bloque vive en su propio componente de sección y lee su contenido
 * desde src/data, para poder crecer sin tocar la maquetación.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Steps />
      <CasesCarousel />
      <Faq />
      <Newsletter />
      <BlogTeaser />
    </>
  );
}
