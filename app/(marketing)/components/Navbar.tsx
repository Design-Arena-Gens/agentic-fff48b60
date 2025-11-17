'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const links = [
  { href: '#descobrir', label: 'Descobrir' },
  { href: '#colecoes', label: 'Coleções' },
  { href: '#experiencias', label: 'Experiências' },
  { href: '#contato', label: 'Contato' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="#" className="flex items-center gap-2 text-xl font-semibold text-brand-dark">
          <span className="rounded-lg bg-brand-primary/10 px-3 py-1 text-sm font-bold text-brand-primary">
            Allugi
          </span>
          Reserva inteligente
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-dark/80 lg:flex">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="transition hover:text-brand-primary">
              {label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="rounded-full border border-brand-primary/20 px-4 py-2 text-brand-dark/90 transition hover:border-brand-primary/40"
            >
              Seja Anfitrião
            </a>
            <a
              href="#"
              className="rounded-full bg-brand-primary px-4 py-2 text-white shadow-card transition hover:bg-brand-primary/90"
            >
              Entrar
            </a>
          </div>
        </nav>
        <button
          type="button"
          className="rounded-full border border-brand-dark/10 p-2 text-brand-dark/80 lg:hidden"
          onClick={() => setOpen((state) => !state)}
          aria-label="Abrir menu"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-brand-dark/10 bg-white lg:hidden">
          <div className="container flex flex-col gap-4 py-6 text-brand-dark/80">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-base font-medium transition hover:text-brand-primary"
              >
                {label}
              </a>
            ))}
            <div className="flex flex-col gap-3 border-t border-brand-dark/10 pt-4">
              <a
                href="#"
                className="rounded-full border border-brand-primary/20 px-4 py-2 text-center text-brand-dark/90 transition hover:border-brand-primary/40"
              >
                Seja Anfitrião
              </a>
              <a
                href="#"
                className="rounded-full bg-brand-primary px-4 py-2 text-center text-white shadow-card transition hover:bg-brand-primary/90"
              >
                Entrar
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
