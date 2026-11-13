import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Target, Zap, Shield, Cpu, Code2, Trophy, ArrowUpRight } from 'lucide-react';
import { team } from '../data/team';

/* Animated number that counts up when in view */
function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const target = parseInt(value, 10);
    if (Number.isNaN(target)) return;

    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  const stats = [
    { label: 'Hackathons', value: '05', suffix: '+', icon: Trophy },
    { label: 'Projects Built', value: '10', suffix: '+', icon: Code2 },
    { label: 'Technologies', value: '15', suffix: '+', icon: Cpu },
    { label: 'Team Members', value: '03', suffix: '', icon: Shield },
  ];

  const values = [
    {
      icon: Target,
      title: 'Problem First',
      desc: "We don't build for the sake of building. We identify real-world problems and engineer solutions that matter.",
    },
    {
      icon: Zap,
      title: 'Rapid Execution',
      desc: 'Hackathons taught us to ship fast. We iterate quickly, learn from failures, and deliver functional prototypes under pressure.',
    },
    {
      icon: Cpu,
      title: 'Future-Proof Tech',
      desc: 'We leverage modern stacks, AI tools, and scalable architectures to ensure our projects are built to last.',
    },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'A spark at a hackathon',
      desc: 'Three Computer Engineering students from Mumbai team up for a local hackathon — and click.',
    },
    {
      year: '2024',
      title: 'CogniVerse is born',
      desc: 'The squad formalizes. Hackathons turn into a rhythm; experiments turn into shipped prototypes.',
    },
    {
      year: 'Now',
      title: 'Building for impact',
      desc: 'Aapda Matrix, DevSwipe, Envoy — projects with purpose. The team grows, the mission stays.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-32 relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      {/* ── HERO (asymmetric editorial) ── */}
      <div className="relative z-10 grid md:grid-cols-12 gap-8 items-end mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C0C0C0]">
              Who We Are
            </span>
          </div>

          <h1 className="heading-display text-4xl md:text-6xl mb-4 leading-[1.02] tracking-tight">
            A Hackathon{' '}
            <span className="text-gradient-silver italic font-serif">
              Collective.
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="md:col-span-5 md:pb-2"
        >
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            <strong className="text-white">CogniVerse</strong> is the name of
            our elite engineering squad, not just a single project. Born out of
            late-night coding sessions and high-pressure hackathons, we combine
            our individual strengths in full-stack development, design, and
            backend architecture to build rapid, impactful software together.
          </p>
        </motion.div>
      </div>

      {/* ── STATS BAR (animated counters) ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 relative z-10"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glass-panel p-6 flex flex-col items-center text-center group hover:border-white/30 transition-colors"
          >
            <stat.icon
              size={24}
              className="text-[#8A8A8A] mb-3 group-hover:text-white transition-colors"
            />
            <p className="heading-display text-4xl text-white mb-1">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-[10px] uppercase tracking-widest text-[#8A8A8A]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* ── PHILOSOPHY (numbered cards) ── */}
      <div className="mb-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-10 border-b border-white/10 pb-4 flex items-center justify-between"
        >
          <span>Our Engineering Philosophy</span>
          <span className="text-[#8A8A8A] font-normal tracking-normal normal-case">
            03 principles
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 group hover:bg-white/[0.02] transition-colors relative overflow-hidden"
            >
              {/* Ghost index */}
              <span className="absolute top-4 right-5 heading-display text-5xl text-white/[0.04] select-none pointer-events-none">
                0{i + 1}
              </span>

              <div className="h-12 w-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-white/30 transition-transform">
                <v.icon size={20} className="text-white" />
              </div>
              <h3 className="heading-display text-xl text-white mb-3">
                {v.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── ORIGIN STORY (timeline) ── */}
      <div className="mb-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-10 border-b border-white/10 pb-4"
        >
          The Origin of CogniVerse
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass-panel p-6 relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-[#8A8A8A] border border-white/10 rounded-full px-2.5 py-0.5">
                  {t.year}
                </span>
                {i < timeline.length - 1 && (
                  <span className="flex-1 h-px bg-white/10" />
                )}
              </div>
              <h3 className="heading-display text-lg text-white mb-2">
                {t.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Roster strip — pulls from your data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass-panel p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8A8A8A] mb-2">
              The Squad
            </p>
            <p className="text-white">
              {team.map((m) => m.name.split(' ')[0]).join(' · ')}
            </p>
          </div>
          <a
            href="/team"
            className="inline-flex items-center gap-2 text-sm text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-full px-4 py-2"
          >
            Meet the team <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* ── CLOSING STATEMENT ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 glass-panel p-8 md:p-12 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <h2 className="heading-display text-3xl md:text-4xl text-white mb-6">
            We don't just write code —{' '}
            <span className="text-gradient-silver italic font-serif">
              we solve problems.
            </span>
          </h2>
          <p className="text-[#A1A1AA] leading-relaxed">
            Whether it's disaster management (Aapda Matrix), developer tooling
            (DevSwipe), or AI automation (Envoy), we aim to build things that
            actually make a difference.
          </p>
        </div>
      </motion.div>
    </div>
  );
}