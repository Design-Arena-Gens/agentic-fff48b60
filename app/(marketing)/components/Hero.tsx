import Image from 'next/image';
import { SearchBar } from './SearchBar';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark to-brand-primary/70 pb-24 pt-28 text-white">
      <div className="absolute -right-40 top-0 hidden h-[540px] w-[540px] rounded-full bg-white/10 blur-3xl lg:block" />
      <div className="container relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm shadow-card">
            <span className="h-2 w-2 rounded-full bg-brand-secondary" />
            Lançamento no Brasil — reservas selecionadas e verificadas
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Stays selecionados, concierge local e experiências memoráveis.
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              A Allugi conecta viajantes a imóveis extraordinários em destinos desejados, com curadoria manual, suporte 24/7 e experiências personalizadas para cada hóspede.
            </p>
          </div>
          <SearchBar />
          <dl className="grid grid-cols-2 gap-6 text-left text-white/80 sm:grid-cols-4">
            {[
              { label: 'Casas verificadas', value: '430+' },
              { label: 'Destinos exclusivos', value: '60' },
              { label: 'Avaliação média', value: '4,9/5' },
              { label: 'Experiências', value: '120+' }
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <dt className="text-sm text-white/60">{item.label}</dt>
                <dd className="text-2xl font-semibold text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative hidden h-full min-h-[420px] lg:block">
          <div className="absolute inset-0 -rotate-6 rounded-3xl bg-white/10" />
          <div className="relative h-full overflow-hidden rounded-[32px] border border-white/30 shadow-2xl">
            <Image
              src="/images/ilha-bela-villa.svg"
              alt="Villa Allugi ao pôr do sol"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
