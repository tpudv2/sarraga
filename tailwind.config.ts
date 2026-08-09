import type { Config } from 'tailwindcss';

/**
 * Tokens de marca de Sárraga & Asociados.
 * Los valores viven como variables CSS en src/styles/tokens.css y se
 * exponen aquí para poder usarlos como clases utilitarias de Tailwind.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: 'var(--color-violet)',
          yellow: 'var(--color-yellow)',
          red: 'var(--color-red)',
          ink: 'var(--color-ink)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          muted: 'var(--color-surface-muted)',
          card: 'var(--color-surface-card)',
          dark: 'var(--color-surface-dark)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
};

export default config;
