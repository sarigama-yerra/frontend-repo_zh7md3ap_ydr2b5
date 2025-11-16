import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const DEFAULT_PACKS = [
  {
    platform: 'Facebook & Instagram',
    logo: '',
    name: 'PACK STARTER',
    price_DA: '',
    duration: '',
    results: ['vues', 'engagement', 'leads'],
    advantages: [],
    objective: '',
  },
];

const Packs = () => {
  const [packs, setPacks] = useState(DEFAULT_PACKS);

  useEffect(() => {
    const fetchPacks = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/packs`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length) setPacks(data);
        }
      } catch (e) {
        // keep defaults
      }
    };
    fetchPacks();
  }, []);

  const whatsappLink = (pack) => {
    const phone = '+213540035753';
    const msg = `Pack sélectionné: ${pack.name}, Plateforme: ${pack.platform}, Prix: ${pack.price_DA || ''}, Durée: ${pack.duration || ''}, Objectif: ${pack.objective || ''}, Avantages: ${(pack.advantages||[]).join(', ')}`;
    return `https://wa.me/${phone.replace('+','')}/?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="packs" className="relative w-full bg-[#0b0e12] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">Nos Packs</h2>
          <p className="text-white/60 text-sm">Choisissez un pack et commandez en 1 clic</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packs.map((pack, idx) => (
            <motion.div
              key={pack.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xs text-white/60">{pack.platform}</div>
                {pack.logo ? <img src={pack.logo} alt="logo" className="h-6 opacity-80" /> : null}
              </div>
              <h3 className="text-xl font-bold">{pack.name}</h3>
              <div className="mt-2 text-white/70 text-sm">{pack.duration}</div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/80">
                {(pack.results || []).map((r) => (
                  <span key={r} className="rounded-full border border-white/15 bg-white/5 px-2 py-1">{r}</span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-[#20b2aa]">{pack.price_DA || '—'}</div>
                </div>
                <a
                  href={whatsappLink(pack)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#20b2aa] px-4 py-2 text-sm font-semibold text-black shadow hover:brightness-110"
                >
                  <MessageCircle size={16} /> Commander
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packs;
