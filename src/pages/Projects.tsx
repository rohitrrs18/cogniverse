import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/team';

// Derive filters from your actual data — statuses + tech tags
const statuses = ['All', ...new Set(projects.map((p) => p.status))];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.status === active);

  return (
    <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-white/5 blur-[120px]" />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#A1A1AA] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Portfolio · {projects.length} projects
        </div>

        <h1 className="heading-display text-4xl md:text-6xl mb-4 tracking-tight">
          Our Digital{' '}
          <span className="text-gradient-silver">Workspace.</span>
        </h1>
        <p className="text-[#A1A1AA] max-w-xl text-base md:text-lg leading-relaxed">
          Exploring the intersection of design, code, and problem-solving.
        </p>
      </motion.div>

      {/* Filters (driven by real statuses) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap items-center gap-2 mb-10"
      >
        {statuses.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
              active === f ? 'text-black' : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            {active === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-white"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        key={active}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-24 text-[#A1A1AA]">
          No projects in this category yet.
        </div>
      )}
    </div>
  );
}