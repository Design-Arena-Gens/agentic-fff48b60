import { testimonials } from '@/lib/properties';
import { TestimonialCard } from './TestimonialCard';

export function TestimonialsSection() {
  return (
    <section className="bg-brand-light/80 py-24">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-primary">
            Pessoas reais, estadias incríveis
          </span>
          <h2 className="text-4xl font-semibold text-brand-dark">O que hóspedes Allugi estão dizendo.</h2>
          <p className="text-lg text-brand-dark/70">
            Da celebração de um aniversário a uma escapada romântica, nossa comunidade compartilha como transformar estadias em memórias.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
