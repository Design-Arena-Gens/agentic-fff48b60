import { curatedCollections } from '@/lib/properties';
import { CollectionCard } from './CollectionCard';

export function CollectionsSection() {
  return (
    <section id="colecoes" className="bg-white py-24">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-primary">
            Coleções Allugi
          </span>
          <h2 className="text-4xl font-semibold text-brand-dark">Escolha a vibe que combina com sua viagem.</h2>
          <p className="text-lg text-brand-dark/70">
            Navegue por coleções temáticas criadas para diferentes estilos, ocasiões e grupos de viajantes. Todas com reservas flexíveis e concierge dedicado.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {curatedCollections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}
