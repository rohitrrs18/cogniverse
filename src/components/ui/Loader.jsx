import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete, duration = 1600 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(tick);
        setTimeout(onComplete, 350);
      }
    }, 30);
    return () => clearInterval(tick);
  }, [onComplete, duration]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#08080A]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-white/5 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="heading-display text-3xl md:text-4xl text-white tracking-tight">
          Cogni<span className="text-gradient-silver italic font-serif">Verse</span>
        </div>
        <div className="mt-2 text-[10px] uppercase tracking-[0.4em] text-[#8A8A8A]">
          Loading the workspace
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 mt-10 h-px w-56 bg-white/10 overflow-hidden"
      >
        <motion.div
          className="h-full bg-white"
          style={{ width: `${progress}%` }}
        />
      </motion.div>

      <div className="relative z-10 mt-4 text-[10px] tabular-nums tracking-[0.3em] text-[#8A8A8A]">
        {String(Math.round(progress)).padStart(3, '0')}
      </div>
    </motion.div>
  );
}