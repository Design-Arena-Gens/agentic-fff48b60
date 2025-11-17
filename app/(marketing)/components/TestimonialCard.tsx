import Image from 'next/image';

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  statement: string;
  image: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex flex-col gap-6 rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-card">
      <blockquote className="text-lg text-brand-dark/80">“{testimonial.statement}”</blockquote>
      <figcaption className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-base font-semibold text-brand-dark">{testimonial.name}</p>
          <p className="text-sm text-brand-dark/60">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
