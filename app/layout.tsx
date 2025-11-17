import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Allugi — Encontre o imóvel perfeito para sua temporada',
  description:
    'Aluguel de imóveis por temporada com seleção curada, reservas rápidas e suporte personalizado em todo o Brasil.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
