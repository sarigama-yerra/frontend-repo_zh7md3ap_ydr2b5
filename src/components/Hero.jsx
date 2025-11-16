import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsapp = 'https://wa.me/213540035753?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0e12] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0b0e12]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/20 backdrop-blur">
            Sponsorisily
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Solutions de Publicité & Digital Marketing en Algérie
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Couverture, engagement, conversions
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
            {['Facebook','Instagram','TikTok','Google Ads','LinkedIn'].map((p) => (
              <span key={p} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{p}</span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('packs')}
              className="inline-flex items-center gap-2 rounded-lg bg-[#20b2aa] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-teal-500/20 transition hover:brightness-110"
            >
              Commencer maintenant
              <ArrowRight size={18} />
            </button>
            <a
              href={whatsapp}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              <MessageCircle size={18} /> Demander un devis
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-[#20b2aa] p-4 text-black shadow-lg shadow-teal-500/30"
        aria-label="WhatsApp"
      >
        <MessageCircle />
      </a>
    </section>
  );
};

export default Hero;
