import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Sparkles, Clock } from 'lucide-react';

type HomeProps = {
  ready?: boolean;
};

type HeadlineWord = {
  text: string;
  className: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const marqueeWords = [
  'React',
  'Node.js',
  'TypeScript',
  'Python',
  'Figma',
  'AI Tools',
  'Tailwind',
  'Framer Motion',
];

const proof = [
  { value: '05+', label: 'Hackathons' },
  { value: '10+', label: 'Projects' },
  { value: '03', label: 'Builders' },
];

const rotatingPhrases = [
  'building the future',
  'shipping prototypes',
  'solving real problems',
  'breaking boundaries',
];

const headlineWords: HeadlineWord[] = [
  { text: 'We', className: 'text-white' },
  { text: 'Build', className: 'text-white' },
  { text: 'The', className: 'text-gradient-silver italic font-serif' },
  { text: 'Future.', className: 'text-gradient-silver italic font-serif' },
];

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function LiveClock() {
  const [time, setTime] = useState<Date>(() => new Date());
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const tick = setInterval(() => setTime(new Date()), 1000);
    const blinkTimer = setInterval(() => setBlink((b) => !b), 1000);
    return () => {
      clearInterval(tick);
      clearInterval(blinkTimer);
    };
  }, []);

  const formatted = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(time);

  const [hh, mm, ss] = formatted.split(':');

  return (
    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8A]">
      <Clock size={11} className="opacity-70" />
      <span className="tabular-nums">
        {hh}
        <span className={blink ? 'opacity-100' : 'opacity-30'}>:</span>
        {mm}
        <span className={blink ? 'opacity-100' : 'opacity-30'}>:</span>
        {ss}
      </span>
      <span className="text-[#5A5A5A]">IST</span>
    </div>
  );
}

export default function Home({ ready = true }: HomeProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % rotatingPhrases.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] max-w-[600px] max-h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <section className="relative z-10 min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage:
              'radial-gradient(ellipse at center, black 25%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 25%, transparent 70%)',
          }}
        />

        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          {[
            { top: '18%', left: '12%', delay: 0 },
            { top: '28%', left: '85%', delay: 1.2 },
            { top: '72%', left: '18%', delay: 0.6 },
            { top: '78%', left: '82%', delay: 1.8 },
          ].map((d, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-white/40"
              style={{ top: d.top, left: d.left }}
              animate={{ y: [0, -14, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 4 + i * 0.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: d.delay,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ delay: ready ? 1 : 0 }}
          className="hidden lg:block absolute top-4 right-2"
        >
          <LiveClock />
        </motion.div>

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-end w-full">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1.5 mb-6 sm:mb-8 max-w-full"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C0C0C0] shrink-0">
                Student Innovators
              </span>
              <span className="hidden sm:inline-block h-3 w-px bg-white/20" />
              <div className="relative h-3 overflow-hidden hidden sm:block min-w-[110px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 text-[10px] uppercase tracking-[0.25em] text-[#8A8A8A] whitespace-nowrap"
                  >
                    {rotatingPhrases[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <h1 className="heading-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate={ready ? 'show' : 'hidden'}
                  className={`inline-block ${word.className} mr-2 sm:mr-3 md:mr-4`}
                >
                  {word.text}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: ready ? 1 : 0 }}
              transition={{ delay: ready ? 0.9 : 0 }}
              className="mt-6 flex items-center gap-3 text-xs text-[#8A8A8A]"
            >
              <span className="h-px w-8 sm:w-10 bg-white/20" />
              <span className="uppercase tracking-[0.3em]">CogniVerse · 2024</span>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: ready ? 0.6 : 0, duration: 0.6 }}
              className="text-base md:text-lg text-[#A1A1AA] leading-relaxed mb-8"
            >
              A collective of passionate computer engineering students building
              innovative digital solutions — driven by design, code, and curiosity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: ready ? 0.7 : 0, duration: 0.6 }}
              className="flex flex-col sm:flex-row lg:flex-col gap-3"
            >
              <Link
                to="/projects"
                className="group relative flex items-center justify-between gap-2 rounded-full bg-white text-black px-6 py-3.5 font-bold text-sm hover:scale-[1.02] transition-transform w-full overflow-hidden"
              >
                <span className="flex items-center gap-2 relative z-10">
                  <Code size={16} />
                  View Our Work
                </span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform group-hover:translate-x-1"
                />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              </Link>

              <Link
                to="/team"
                className="group flex items-center justify-between gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white px-6 py-3.5 font-bold text-sm hover:bg-white/10 transition-colors w-full"
              >
                <span className="flex items-center gap-2">
                  <Users size={16} />
                  Meet The Team
                </span>
                <ArrowRight
                  size={16}
                  className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: ready ? 1 : 0 }}
              transition={{ delay: ready ? 0.9 : 0 }}
              className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]"
            >
              <Sparkles size={11} />
              Hackathon-tested · Student-built
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ delay: ready ? 1 : 0 }}
          className="lg:hidden absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <LiveClock />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ delay: ready ? 1.2 : 0 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8A]"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </section>

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16"
      >
        <div className="grid grid-cols-3 gap-2 sm:gap-4 border-y border-white/10 py-6 sm:py-8">
          {proof.map((p, i) => (
            <motion.div key={i} variants={item} className="text-center">
              <div className="heading-display text-2xl sm:text-3xl md:text-4xl text-white">
                {p.value}
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#8A8A8A] mt-1">
                {p.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="relative z-10 w-full border-y border-white/10 py-4 sm:py-5 overflow-hidden mb-16 sm:mb-24">
        <motion.div
          className="flex gap-6 sm:gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        >
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map(
            (word, i) => (
              <span
                key={i}
                className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#A1A1AA]"
              >
                {word}
                <span className="h-1 w-1 rounded-full bg-white/30" />
              </span>
            )
          )}
        </motion.div>
      </section>
    </div>
  );
}