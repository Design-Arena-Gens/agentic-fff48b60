import Image from 'next/image';

export type Collection = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
};

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-brand-dark/10 bg-white shadow-card transition hover:-translate-y-1">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={collection.thumbnail}
          alt={collection.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 300px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
          {collection.title}
        </h3>
      </div>
      <p className="p-6 text-sm text-brand-dark/80">{collection.description}</p>
    </article>
  );
}
