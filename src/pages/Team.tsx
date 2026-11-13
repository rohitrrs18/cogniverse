import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { team } from '../data/team';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32, rotate: -1 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const marqueeWords = [
  'Engineers',
  'Designers',
  'Strategists',
  'Dreamers',
  'Builders',
  'Tinkerers',
];

export default function Team() {
  // Use isLeader flag instead of array order
  const founder = team.find((m) => m.isLeader) ?? team[0];
  const rest = team.filter((m) => m.id !== founder?.id);
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-white/5 blur-[120px]" />

      {/* ===== Editorial Hero ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative grid md:grid-cols-12 gap-8 items-end mb-20"
      >
        <div className="md:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#A1A1AA] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            The Team · {team.length} members
          </div>

          <h1 className="heading-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            The{' '}
            <span className="text-gradient-silver italic font-serif">
              Minds
            </span>{' '}
            Behind
            <br />
            CogniVerse.
          </h1>
        </div>

        <div className="md:col-span-4 md:pb-3">
          <p className="text-[#A1A1AA] text-base leading-relaxed">
            A small team with a massive vision. We combine engineering, design,
            and strategy to build powerful software.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#A1A1AA]">
            <span className="h-px w-8 bg-white/20" />
            Est. with curiosity
          </div>
        </div>
      </motion.div>

      {/* ===== Marquee ===== */}
      <div className="relative mb-20 -mx-6 border-y border-white/10 py-4 overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
        >
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map(
            (word, i) => (
              <span
                key={i}
                className="flex items-center gap-8 text-sm uppercase tracking-[0.3em] text-[#A1A1AA]"
              >
                {word}
                <span className="h-1 w-1 rounded-full bg-white/30" />
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* ===== Founder Spotlight ===== */}
      {founder && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-20 grid md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] aspect-[4/5] group">
              <img
                src={founder.image}
                alt={founder.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-white/70">
                  Featured
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
              Founder Spotlight
            </span>
            <h2 className="heading-display text-3xl md:text-5xl mt-3 mb-4">
              {founder.name}
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed max-w-lg">
              {founder.bio ??
                'Leading the vision at CogniVerse — where design meets engineering.'}
            </p>
            {founder.role && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                {founder.role}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* ===== Crew Grid (full-photo cards) ===== */}
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[#A1A1AA]">
          The rest of the crew
        </h2>
        <span className="text-xs text-[#A1A1AA]">{rest.length} more</span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {rest.map((member) => (
          <motion.button
            key={member.id}
            variants={item}
            onClick={() => setSelected(member)}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/5" />

            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="heading-display text-xl text-white">
                {member.name}
              </h3>
              {member.role && (
                <p className="text-sm text-white/70 mt-0.5">{member.role}</p>
              )}
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                View profile
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </div>

            <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/10" />
          </motion.button>
        ))}
      </motion.div>

      {/* ===== Bento CTA ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 grid md:grid-cols-3 gap-4"
      >
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <h2 className="heading-display text-2xl md:text-4xl mb-3 leading-tight">
            Want to <span className="text-gradient-silver italic font-serif">join</span> the
            crew?
          </h2>
          <p className="text-[#A1A1AA] max-w-md mb-6">
            We're always looking for curious builders who love crafting great
            software. Send us a note — we'd love to talk.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            Get in touch <span aria-hidden>→</span>
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col justify-between backdrop-blur-sm">
          <div className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
            Currently
          </div>
          <div className="mt-6">
            <div className="text-4xl heading-display text-gradient-silver">
              {team.length}
            </div>
            <div className="text-sm text-[#A1A1AA] mt-1">
              minds, one mission
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Member Modal ===== */}
      <AnimatePresence>
        {selected && (
          <MemberModal member={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Modal — tuned to your data shape ---------- */

function MemberModal({ member, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-modal-title"
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0F] shadow-2xl"
      >
        <div className="grid md:grid-cols-5">
          {/* Photo */}
          <div className="relative md:col-span-2 aspect-[4/5] md:aspect-auto bg-white/[0.03]">
            <img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="md:col-span-3 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                  {member.role || 'Team member'}
                </span>
                <h2
                  id="member-modal-title"
                  className="heading-display text-2xl sm:text-3xl mt-2"
                >
                  {member.name}
                </h2>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 grid place-items-center h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                ✕
              </button>
            </div>

            <p className="text-[#A1A1AA] leading-relaxed mt-4">
              {member.bio ??
                'Part of the CogniVerse crew — building thoughtful software at the intersection of design and engineering.'}
            </p>

            {/* Skills */}
            {member.skills?.length > 0 && (
              <div className="mt-6">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-2">
                  Skills
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Socials */}
            {member.socials && (
              <div className="mt-6">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-2">
                  Connect
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(member.socials).map(([key, href]) => (
                    <a
                      key={key}
                      href={
                        key === 'email' ? `mailto:${href}` : href
                      }
                      target={key === 'email' ? undefined : '_blank'}
                      rel={key === 'email' ? undefined : 'noreferrer'}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10 transition-colors capitalize"
                    >
                      {key}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}