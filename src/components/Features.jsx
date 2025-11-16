import { motion } from 'framer-motion';
import { Calendar, FileText, MessageCircle, Quote, Star, Shield, TrendingUp } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
  >
    <div className="mb-3 inline-flex rounded-lg bg-white/10 p-2">
      <Icon size={18} />
    </div>
    <div className="font-semibold">{title}</div>
    <div className="text-sm text-white/70">{desc}</div>
  </motion.div>
);

const Features = () => {
  const items = [
    { icon: Calendar, title: 'Calendrier de réservation', desc: 'Planifiez vos consultations en un clic.' },
    { icon: FileText, title: 'Formulaire de devis', desc: 'Recevez un devis personnalisé rapidement.' },
    { icon: MessageCircle, title: 'WhatsApp direct', desc: 'Discutez instantanément avec notre équipe.' },
    { icon: TrendingUp, title: 'Cas d’études', desc: 'Découvrez des campagnes et résultats.' },
    { icon: Shield, title: 'Mentions légales', desc: 'Transparence et conformité.' },
    { icon: Star, title: 'Intégrations sociales', desc: 'Connecté à Facebook, Instagram, etc.' },
  ];

  return (
    <section className="bg-[#0b0e12] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Fonctionnalités</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Feature key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
