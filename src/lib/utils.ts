/**
 * Une clases condicionalmente sin dependencias externas.
 * Sustituible por `clsx` + `tailwind-merge` si el proyecto crece.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
