# Sárraga & Asociados

Sitio web del bufete de accidentes y daños en Puerto Rico. Next.js 14 (App Router) +
TypeScript + Tailwind CSS + CSS Modules.

## Requisitos

- Node.js ≥ 18.17

## Empezar

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

## Scripts

| Script              | Descripción                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Servidor de desarrollo               |
| `npm run build`     | Build de producción                  |
| `npm run start`     | Sirve el build                       |
| `npm run lint`      | ESLint                               |
| `npm run typecheck` | Comprobación de tipos                |
| `npm run format`    | Formatea con Prettier                |

## Estructura

Ver [`CLAUDE.md`](./CLAUDE.md) para el detalle de arquitectura, convenciones y la lista
de pendientes (`TODO`).

- `src/app` — rutas (App Router).
- `src/components` — `layout/`, `sections/`, `ui/`.
- `src/data` — contenido tipado del sitio (edita aquí los textos).
- `src/styles/tokens.css` — tokens de marca.

## Estado

Home maquetada a partir del diseño. Contenido de prueba reemplazado por placeholders
`TODO`. Pendiente: copy real, assets, rutas internas y conexión del formulario.
"# sarraga" 
