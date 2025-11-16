import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const brandLogos = [
  { name: 'Facebook', url: 'https://cdn.simpleicons.org/facebook/20b2aa' },
  { name: 'Instagram', url: 'https://cdn.simpleicons.org/instagram/ffffff' },
  { name: 'TikTok', url: 'https://cdn.simpleicons.org/tiktok/ffffff' },
  { name: 'Google Ads', url: 'https://cdn.simpleicons.org/google/ffffff' },
  { name: 'YouTube', url: 'https://cdn.simpleicons.org/youtube/ff3131' },
  // Use white variant to avoid color-related fetch/caching issues
  { name: 'LinkedIn', url: 'https://cdn.simpleicons.org/linkedin/ffffff' },
];

function Row({ reverse = false, speed = 40 }) {
  const controls = useAnimation();

  useEffect(() => {
    const distance = 100; // percent
    const animate = async () => {
      controls.set({ x: reverse ? '-0%' : '0%' });
      await controls.start({
        x: reverse ? `${distance}%` : `-${distance}%`,
        transition: { duration: speed, ease: 'linear' },
      });
      animate();
    };
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls, reverse, speed]);

  // duplicate sequence to create seamless loop
  const sequence = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex items-center gap-10 will-change-transform"
        animate={controls}
      >
        {sequence.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5/30 px-4 py-2 backdrop-blur-sm">
            <img
              src={logo.url}
              alt={logo.name}
              width={28}
              height={28}
              className="opacity-90 drop-shadow-[0_0_8px_rgba(32,178,170,0.35)]"
              loading="lazy"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.dataset.fallback !== '1' && logo.name === 'LinkedIn') {
                  target.dataset.fallback = '1';
                  target.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png';
                }
              }}
            />
            <span className="text-sm text-white/80">{logo.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const SmoothLogoMarquee = () => {
  return (
    <section className="relative z-10 w-full bg-gradient-to-b from-transparent via-white/2 to-transparent py-10">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{
        background: 'radial-gradient(600px 200px at 50% 50%, rgba(32,178,170,0.12), transparent 70%)'
      }} />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 text-center text-sm uppercase tracking-wider text-white/50">Nos écosystèmes</div>
        <div className="space-y-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Row reverse={false} speed={40} />
          <Row reverse={true} speed={40} />
        </div>
      </div>
    </section>
  );
};

export default SmoothLogoMarquee;
