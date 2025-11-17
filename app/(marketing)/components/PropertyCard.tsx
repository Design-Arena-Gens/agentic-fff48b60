import Image from 'next/image';
import clsx from 'clsx';
import type { Property } from '@/lib/properties';

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-brand-dark/10 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 380px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3 text-sm font-medium text-white">
          <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur">
            {property.rating.toFixed(2)} ★
          </span>
          <span className="rounded-full bg-brand-secondary px-3 py-1 text-brand-dark">
            R$ {property.pricePerNight.toLocaleString('pt-BR')}/noite
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-brand-dark">{property.title}</h3>
          <p className="text-sm text-brand-dark/60">{property.location}</p>
        </div>
        <p className="flex-1 text-sm text-brand-dark/80">{property.description}</p>
        <ul className="flex flex-wrap gap-2">
          {property.tags.map((tag) => (
            <li
              key={tag}
              className={clsx(
                'rounded-full border border-brand-dark/10 bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark/80',
                tag.includes('Premium') && 'border-brand-secondary'
              )}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-2 space-y-1 text-sm text-brand-dark/70">
          {property.highlights.map((highlight) => (
            <p key={highlight}>• {highlight}</p>
          ))}
        </div>
        <button className="mt-4 inline-flex items-center justify-center rounded-2xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary/90">
          Ver disponibilidade
        </button>
      </div>
    </article>
  );
}
