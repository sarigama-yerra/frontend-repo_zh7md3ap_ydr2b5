const Footer = () => {
  return (
    <footer className="bg-[#0b0e12] border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="text-lg font-bold">Sponsorisily</div>
          <div className="text-sm text-white/60">9h-18h tous les jours · © {new Date().getFullYear()} Sponsorisily</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
