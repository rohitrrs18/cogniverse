import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Crown } from 'lucide-react';

export default function TeamCard({ member }: { member: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative w-full rounded-3xl bg-[#111111] border border-white/10 p-1 overflow-hidden"
    >
      {/* Hover Silver Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Inner Card */}
      <div className="relative z-10 h-full rounded-2xl bg-[#050505] p-6 flex flex-col items-center text-center overflow-hidden">
        
        {/* Leader Badge */}
        {member.isLeader && (
          <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            <Crown size={12} className="text-[#E8E8E8]" /> Team Leader
          </div>
        )}

        {/* Avatar */}
        <div className="relative mt-4 mb-5 h-28 w-28 rounded-full p-[2px] bg-gradient-to-b from-white/40 to-transparent">
          <div className="h-full w-full rounded-full bg-[#111111] overflow-hidden border-2 border-[#050505] flex items-center justify-center">
            {/* Fallback initial if no image */}
            <span className="text-4xl font-display font-bold text-white/40">
              {member.name.charAt(0)}
            </span>
            {/* Uncomment when you have images */}
            {/* <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> */}
          </div>
        </div>

        <h3 className="heading-display text-2xl text-white mb-1">{member.name}</h3>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C0C0C0] mb-4 text-center">
          {member.role}
        </p>
        
        <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 flex-grow">
          {member.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {member.skills.map((skill: string) => (
            <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-[#E8E8E8]">
              {skill}
            </span>
          ))}
        </div>

        {/* Socials */}
        <div className="mt-auto flex w-full gap-2 pt-4 border-t border-white/10 justify-center">
          <a href={member.socials.github} className="p-2.5 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white"><Github size={16} /></a>
          <a href={member.socials.linkedin} className="p-2.5 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white"><Linkedin size={16} /></a>
          <a href={`mailto:${member.socials.email}`} className="p-2.5 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white"><Mail size={16} /></a>
        </div>
      </div>
    </motion.div>
  );
}