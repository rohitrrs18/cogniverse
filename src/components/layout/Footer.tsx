import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 overflow-hidden pt-20">
      {/* Background Silver Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vw] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ── TOP SECTION: Creative Typography & Links ── */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left: Big CTA */}
          <div>
            <h2 className="heading-display text-5xl md:text-7xl text-white mb-6">
              Let's build <br />
              <span className="text-gradient-silver">something great.</span>
            </h2>
            <p className="text-[#A1A1AA] max-w-md mb-8">
              Have an idea, a project, or just want to say hi? We're always open to discussing new opportunities and collaborations.
            </p>
            <a 
              href="mailto:hello@cogniverse.com" 
              className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform"
            >
              Get in Touch <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Right: Navigation & Socials */}
          <div className="grid grid-cols-2 gap-8 lg:pl-16 lg:border-l border-white/10">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'The Team', to: '/team' },
                  { label: 'Projects', to: '/projects' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-[#8A8A8A] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Connect</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-white transition-colors">
                  <Github size={16} /> GitHub
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-white transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="mailto:hello@cogniverse.com" className="flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-white transition-colors">
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── MIDDLE SECTION: Moving Marquee Text ── */}
        <div className="relative w-full overflow-hidden border-t border-white/10 py-10 pointer-events-none">
          
          {/* Duplicated for seamless looping */}
          <motion.div 
            className="flex whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20 // Speed of the scroll
            }}
          >
            {/* First copy */}
            <h1 className="text-[12vw] leading-none font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none pr-8">
              COGNIVERSE •
            </h1>
            {/* Second copy for seamless loop */}
            <h1 className="text-[12vw] leading-none font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none pr-8">
              COGNIVERSE •
            </h1>
            {/* Third copy just in case screen is ultra-wide */}
            <h1 className="text-[12vw] leading-none font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none pr-8">
              COGNIVERSE •
            </h1>
          </motion.div>

        </div>

        {/* ── BOTTOM SECTION: System Status & Copyright ── */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-white/10 gap-4">
          
          <div className="flex items-center gap-6">
            <p className="text-xs text-[#8A8A8A]">
              © {year} CogniVerse. All rights reserved.
            </p>
            
            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C0C0C0]">All Systems Operational</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#8A8A8A]">
            <span>Designed & Built by CogniVerse</span>
            <span className="hidden md:inline">|</span>
            <span>v1.0.0</span>
          </div>

        </div>

      </div>
    </footer>
  );
}