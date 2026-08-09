import Link from 'next/link';
import { blogPosts } from '@/data/posts';
import { Section } from '@/components/ui/Section';

/** Rejilla de artículos recientes del blog. */
export function BlogTeaser() {
  return (
    <Section>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/articulos/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-card bg-surface-card hover:text-inherit"
          >
            <div className="p-6">
              <p className="font-display text-lg uppercase">Blog post</p>
            </div>
            {/* TODO: imagen de portada del artículo */}
            <div className="aspect-[4/3] bg-surface-card" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
