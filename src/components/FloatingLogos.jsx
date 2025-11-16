import { motion } from 'framer-motion';

const logos = [
  { name: 'Facebook', url: 'https://cdn.simpleicons.org/facebook/20b2aa', size: 44, x: '10%', y: '12%', delay: 0 },
  { name: 'Instagram', url: 'https://cdn.simpleicons.org/instagram/ffffff', size: 42, x: '25%', y: '70%', delay: 0.2 },
  { name: 'TikTok', url: 'https://cdn.simpleicons.org/tiktok/ffffff', size: 40, x: '75%', y: '22%', delay: 0.4 },
  { name: 'Google', url: 'https://cdn.simpleicons.org/google/ffffff', size: 46, x: '60%', y: '68%', delay: 0.1 },
  { name: 'YouTube', url: 'https://cdn.simpleicons.org/youtube/ff3131', size: 48, x: '82%', y: '60%', delay: 0.3 },
  { name: 'LinkedIn', url: 'https://cdn.simpleicons.org/linkedin/0A66C2', size: 42, x: '38%', y: '28%', delay: 0.25 },
];

const floatTransition = {
  y: {
    duration: 3.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
  rotate: {
    duration: 6,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
  x: {
    duration: 8,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
};

const FloatingLogos = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {logos.map((logo, idx) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 0.75, y: [0, -12, 0], x: [0, 8, -8, 0], rotate: [-2, 2, -2] }}
          transition={{ ...floatTransition, delay: logo.delay }}
          className="absolute"
          style={{ left: logo.x, top: logo.y }}
        >
          <div className="grid place-items-center rounded-2xl bg-white/3 p-3 backdrop-blur-sm shadow-lg shadow-black/30 border border-white/10">
            <img
              src={logo.url}
              alt={logo.name}
              width={logo.size}
              height={logo.size}
              className="drop-shadow-[0_0_8px_rgba(32,178,170,0.35)] opacity-90"
              loading="lazy"
            />
          </div>
        </motion.div>
      ))}

      {/* Soft radial gradient glow to make logos blend nicely */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(1200px 600px at 50% 10%, rgba(32,178,170,0.08), transparent 60%)'
      }} />
    </div>
  );
};

export default FloatingLogos;
