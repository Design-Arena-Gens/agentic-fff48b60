export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container flex flex-col gap-8 border-t border-brand-dark/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <div className="text-xl font-semibold text-brand-dark">Allugi</div>
          <p className="text-sm text-brand-dark/60">
            © {new Date().getFullYear()} Allugi Hospitality. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-brand-dark/70">
          <a href="#">Termos</a>
          <a href="#">Privacidade</a>
          <a href="#">Central de ajuda</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
