import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col w-full rounded-2xl bg-[#111111] border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(192,192,192,0.1)]"
    >
      {/* Project Image/Artwork Area */}
      <div className="relative h-48 w-full bg-[#050505] overflow-hidden border-b border-white/5">
        {/* Fallback pattern if no image */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C0C0C0 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        {/* Placeholder for real image */}
        {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /> */}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <Code2 size={40} className="text-white/20 group-hover:text-white/40 transition-colors duration-500" />
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#C0C0C0]">
          {project.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h3 className="heading-display text-xl text-white group-hover:text-[#E8E8E8] transition-colors">{project.title}</h3>
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-white text-white group-hover:text-black transition-all duration-300">
            <ArrowUpRight size={16} />
          </div>
        </div>
        
        <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A8A] border border-white/10 rounded px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}