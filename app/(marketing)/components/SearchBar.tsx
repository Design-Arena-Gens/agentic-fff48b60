'use client';

import { useState } from 'react';

export function SearchBar() {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState(2);

  return (
    <form className="grid w-full grid-cols-1 gap-4 rounded-3xl border border-white/50 bg-white/80 p-3 shadow-card backdrop-blur-sm md:grid-cols-[2fr_2fr_1fr_auto]">
      <label className="flex flex-col gap-1 text-sm font-semibold text-brand-dark/70">
        Destino
        <input
          type="text"
          placeholder="Para onde vamos?"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          className="rounded-2xl border border-brand-dark/10 px-4 py-3 text-base font-medium text-brand-dark/90 placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold text-brand-dark/70">
        Datas
        <input
          type="text"
          placeholder="15 a 20 de julho"
          value={dates}
          onChange={(event) => setDates(event.target.value)}
          className="rounded-2xl border border-brand-dark/10 px-4 py-3 text-base font-medium text-brand-dark/90 placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold text-brand-dark/70">
        Hóspedes
        <input
          type="number"
          min={1}
          value={guests}
          onChange={(event) => setGuests(Number(event.target.value))}
          className="rounded-2xl border border-brand-dark/10 px-4 py-3 text-base font-medium text-brand-dark/90 placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
        />
      </label>
      <button
        type="submit"
        className="flex items-center justify-center rounded-2xl bg-brand-primary px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-brand-primary/90"
      >
        Buscar stays
      </button>
    </form>
  );
}
