import { site } from '@/data/site';

/** Barra violeta superior con el anuncio del workshop. */
export function AnnouncementBar() {
  const { announcement } = site;
  return (
    <div className="bg-brand-violet text-white">
      <a
        href={announcement.href}
        className="mx-auto flex max-w-container items-center justify-center gap-3 px-4 py-2 text-center text-[13px] hover:text-white"
      >
        <span className="rounded-full bg-black px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide">
          {announcement.tag}
        </span>
        <span className="font-semibold">{announcement.title}:</span>
        <span className="opacity-80">{announcement.text}</span>
      </a>
    </div>
  );
}
