# CLAUDE.md — Sárraga & Asociados

Contexto para Claude Code. Léelo antes de tocar el proyecto.

## Qué es

Sitio web de **Sárraga & Asociados**, bufete de accidentes y daños en Puerto Rico.
Landing de captación: el usuario evalúa su caso y contacta al bufete.
Idioma del contenido: **español (es-PR)**.

## Stack

- **Next.js 14** (App Router) + **TypeScript** (estricto).
- **Tailwind CSS** para layout/utilidades + **CSS Modules** para componentes con
  estilo propio (`Button`, `Accordion`).
- Fuentes vía `next/font/google`: **Anton** (display) + **Manrope** (texto).
- ESLint (`next/core-web-vitals`) + Prettier (con `prettier-plugin-tailwindcss`).
- Sin librería de estado ni de componentes: mantener así salvo necesidad real.

## Comandos

```bash
npm install
npm run dev        # desarrollo en http://localhost:3000
npm run build      # build de producción
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm run format     # prettier --write
```

## Estructura

```
src/
├── app/                 # App Router: layout, page (home), globals.css
├── components/
│   ├── layout/          # AnnouncementBar, Header, Footer
│   ├── sections/        # Bloques de la home (Hero, Steps, Faq, ...)
│   └── ui/              # Reutilizables: Button, Section, Container, Accordion
├── data/                # Contenido tipado (nav, casos, faq, posts, footer, site)
├── lib/                 # Utilidades (cn)
├── styles/              # tokens.css (variables de marca)
└── types/               # Tipos compartidos
```

## Convenciones

- **El contenido vive en `src/data/*`**, no incrustado en el JSX. Para editar textos,
  casos o FAQ, tocar los archivos de datos.
- **Tokens de marca** en `src/styles/tokens.css` y expuestos en `tailwind.config.ts`
  como `brand.violet | yellow | red | ink` y `surface.*`. No hardcodear hex.
- Componentes de servidor por defecto; `'use client'` solo donde hay estado/interacción
  (`Header`, `Accordion`, `Newsletter`).
- Alias de import: `@/` → `src/`.
- Botones: `<Button>` (acción) y `<ButtonLink>` (navegación), mismo estilo.

## Pendientes marcados con `TODO`

Busca `TODO` en el repo. Los principales:

1. **Copy real**: los `lorem`/textos de prueba del diseño se dejaron como placeholders
   limpios. Rellenar `steps.ts`, `faq.ts`, `posts.ts`.
2. **Assets**: fotos del equipo (Hero), imagen de casos, portadas de blog → `/public/images`,
   integrar con `next/image`.
3. **Enlaces/CTA reales**: WhatsApp, teléfono, correo, formulario "Envíanos tu caso",
   ruta de "Verifica tu caso" (`src/data/site.ts`, `Footer`).
4. **Newsletter**: conectar el form a un servicio real (API route + Resend/Mailchimp).
5. **Rutas**: hoy solo existe la home. Crear páginas para nav (workshops, artículos,
   nosotros, casos) y detalle de artículo `/articulos/[slug]`.
6. **Carrusel de casos**: hoy es estático; hacerlo interactivo (p. ej. embla-carousel).
7. **SEO**: metadatos por página, `sitemap.ts`, `robots.ts`, JSON-LD de LegalService.

## Al terminar un cambio

Ejecuta `npm run lint && npm run typecheck` antes de dar por hecho el trabajo.
