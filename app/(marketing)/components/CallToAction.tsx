export function CallToAction() {
  return (
    <section id="contato" className="relative overflow-hidden bg-brand-dark py-24 text-white">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/30 blur-3xl" />
      <div className="container relative z-10 grid gap-12 lg:grid-cols-[2fr,1fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-brand-secondary" />
            Seja um anfitrião Allugi
          </span>
          <h2 className="text-4xl font-semibold">Monetize seu imóvel com hospitalidade premium.</h2>
          <p className="text-lg text-white/80">
            Conte com análise de rentabilidade, fotografia profissional e equipe de operações no local. Cuidamos da gestão completa enquanto você acompanha tudo em tempo real.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-brand-secondary px-6 py-3 text-base font-semibold text-brand-dark transition hover:bg-brand-secondary/90"
            >
              Quero anunciar meu imóvel
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white/50"
            >
              Falar com especialista
            </a>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
          <h3 className="text-xl font-semibold">Por que ser anfitrião Allugi?</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li>• Equipe operacional 7 dias por semana</li>
            <li>• Curadoria de hóspedes e proteção Allugi</li>
            <li>• Precificação dinâmica com tecnologia</li>
            <li>• Relatórios transparentes e pagamentos ágeis</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
