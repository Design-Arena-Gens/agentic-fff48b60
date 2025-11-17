import { SparklesIcon, LifebuoyIcon, CalendarDaysIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: 'Curadoria humana',
    description: 'Equipe local visita e certifica cada imóvel, garantindo padrões elevados de hospitalidade e segurança.',
    icon: SparklesIcon
  },
  {
    title: 'Concierge 24/7',
    description: 'Especialistas dedicados antes, durante e depois da estadia para personalizar a experiência Allugi.',
    icon: LifebuoyIcon
  },
  {
    title: 'Reserva instantânea',
    description: 'Calendário sempre atualizado, confirmação imediata e pagamentos seguros em moeda local ou internacional.',
    icon: CalendarDaysIcon
  },
  {
    title: 'Experiências locais',
    description: 'Chef em casa, passeios privados, bem-estar e roteiros culturais desenhados sob medida.',
    icon: GlobeAmericasIcon
  }
];

export function ExperienceGrid() {
  return (
    <section id="experiencias" className="bg-white py-24">
      <div className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-primary">
            Experiência Allugi
          </span>
          <h2 className="text-4xl font-semibold text-brand-dark">Especialistas em estadias que transformam viagens.</h2>
          <p className="text-lg text-brand-dark/70">
            Conte com nossa equipe para criar a jornada perfeita, desde a escolha da casa até experiências memoráveis no destino. Tudo pensado sob medida.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <div key={experience.title} className="flex gap-4 rounded-3xl border border-brand-dark/10 bg-brand-light/60 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-card">
                <experience.icon className="h-7 w-7 text-brand-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-brand-dark">{experience.title}</h3>
                <p className="text-sm text-brand-dark/70">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
