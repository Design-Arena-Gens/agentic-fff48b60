import { featuredProperties } from '@/lib/properties';
import { PropertyCard } from './PropertyCard';

export function DiscoverSection() {
  return (
    <section id="descobrir" className="bg-brand-light/60 py-24">
      <div className="container space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-4">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-primary">
              Descobrir
            </span>
            <h2 className="text-4xl font-semibold text-brand-dark">Imóveis selecionados para sua próxima temporada.</h2>
            <p className="text-lg text-brand-dark/70">
              Cada propriedade passa por mais de 150 pontos de verificação, garantindo hospitalidade excepcional, design inspirador e localização privilegiada.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-brand-primary/20 px-6 py-3 text-sm font-semibold text-brand-primary transition hover:border-brand-primary/40"
          >
            Ver portfólio completo
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
